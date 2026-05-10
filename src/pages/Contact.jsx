import { useEffect } from "react";
import Reveal from "../components/Reveal.jsx";

const calendlyUrl = "https://calendly.com/aadi0912/30min?hide_gdpr_banner=1&primary_color=640ff5";
const calendlyScript = "https://assets.calendly.com/assets/external/widget.js";

export default function Contact() {
  useEffect(() => {
    if (document.querySelector(`script[src="${calendlyScript}"]`)) return;

    const script = document.createElement("script");
    script.src = calendlyScript;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <section className="page-hero contact-hero section-dark">
        <div className="grain" />
        <div className="container contact-grid">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1>Start with a focused content call.</h1>
            <p>
              Pick a time that works for you and we will map the right content system for your current stage.
            </p>
          </Reveal>

          <Reveal className="contact-card" delay={120}>
            <div className="calendly-placeholder">
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
