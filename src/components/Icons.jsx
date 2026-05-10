export function PlatformIcon({ name }) {
  const label = name.toLowerCase();

  if (label.includes("youtube")) {
    return (
      <span className="platform-icon youtube" aria-label="YouTube">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9 2 12 2 12s0 3 .4 4.8a3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
        </svg>
      </span>
    );
  }

  if (label.includes("tiktok")) {
    return (
      <span className="platform-icon tiktok" aria-label="TikTok">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M15.3 3c.4 2.7 1.9 4.3 4.7 4.5v3.2a8 8 0 0 1-4.6-1.4v6.5c0 3.3-2.3 5.2-5.4 5.2-3 0-5.2-2-5.2-4.8 0-3.1 2.3-5 5.8-5 .4 0 .7 0 1 .1v3.4c-.3-.1-.6-.2-1-.2-1.4 0-2.3.7-2.3 1.8 0 1 .8 1.7 1.9 1.7 1.2 0 2-.7 2-2.1V3h3.1Z" />
        </svg>
      </span>
    );
  }

  if (label.includes("instagram")) {
    return (
      <span className="platform-icon instagram" aria-label="Instagram">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2.8A2.2 2.2 0 0 0 5.8 8v8A2.2 2.2 0 0 0 8 18.2h8a2.2 2.2 0 0 0 2.2-2.2V8A2.2 2.2 0 0 0 16 5.8H8Zm4 3a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm0 2.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4.5-3.4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" />
        </svg>
      </span>
    );
  }

  return <span className="platform-icon generic">{name.slice(0, 1)}</span>;
}

export function MiniIcon({ children }) {
  return <span className="mini-icon" aria-hidden="true">{children}</span>;
}
