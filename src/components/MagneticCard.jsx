import { useRef, useCallback } from "react";

export default function MagneticCard({
  children,
  className = "",
  intensity = 6,
  light = false,
  tag: Tag = "div",
}) {
  const ref = useRef(null);
  const raf = useRef(null);

  const onMove = useCallback(
    (e) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rx = ((y - height / 2) / (height / 2)) * -intensity;
        const ry = ((x - width / 2) / (width / 2)) * intensity;
        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
        el.style.setProperty("--mx", `${(x / width) * 100}%`);
        el.style.setProperty("--my", `${(y / height) * 100}%`);
        el.dataset.active = "";
      });
    },
    [intensity]
  );

  const onLeave = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.active;
  }, []);

  return (
    <Tag
      ref={ref}
      className={`mc ${light ? "mc-light" : ""} ${className}`}
      style={{ "--rx": "0deg", "--ry": "0deg", "--mx": "50%", "--my": "50%" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="mc-glare" aria-hidden="true" />
      {children}
    </Tag>
  );
}
