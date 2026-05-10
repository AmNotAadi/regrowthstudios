import { useEffect, useState } from "react";

export default function TypewriterWord({ word, speed = 95, startDelay = 0 }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text === word) return undefined;

    const timer = window.setTimeout(() => {
      setText(word.slice(0, text.length + 1));
    }, text.length === 0 ? startDelay : speed);

    return () => window.clearTimeout(timer);
  }, [speed, startDelay, text, word]);

  return (
    <span className={`typewriter-word ${text === word ? "is-complete" : ""}`}>
      {text || "\u00a0"}
    </span>
  );
}
