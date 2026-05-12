import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "../components/Reveal.jsx";

const calendlyScript = "https://assets.calendly.com/assets/external/widget.js";

const CALENDLY_ORIGIN = "https://calendly.com";

/** Calendly iframe `load` fires before the scheduler UI finishes painting; we follow postMessage signals instead. */
function parsePageHeightPx(data) {
  const raw = data?.payload?.height ?? data?.payload;
  if (typeof raw === "string") return parseInt(raw.replace(/px/gi, "").trim(), 10);
  if (typeof raw === "number") return raw;
  return NaN;
}

export default function Contact() {
  const placeholderRef = useRef(null);
  const [widgetReady, setWidgetReady] = useState(false);

  const calendlyUrl = useMemo(() => {
    const u = new URL("https://calendly.com/aadi0912/30min");
    u.searchParams.set("hide_gdpr_banner", "1");
    u.searchParams.set("primary_color", "640ff5");
    u.searchParams.set("embed_type", "Inline");
    if (typeof window !== "undefined") {
      u.searchParams.set("embed_domain", window.location.hostname || "localhost");
    }
    return u.toString();
  }, []);

  useEffect(() => {
    const root = placeholderRef.current;
    if (!root) return;

    const widget = root.querySelector(".calendly-inline-widget");
    if (!widget) return;

    let cancelled = false;
    let backupAfterLoadId = null;
    let heightStableId = null;
    let paintDelayId = null;
    let fallbackId = null;

    const clear = (id) => {
      if (id != null) window.clearTimeout(id);
      return null;
    };

    const markReady = () => {
      if (cancelled) return;
      backupAfterLoadId = clear(backupAfterLoadId);
      heightStableId = clear(heightStableId);
      paintDelayId = clear(paintDelayId);
      fallbackId = clear(fallbackId);
      setWidgetReady(true);
    };

    const schedulePaintThenReady = () => {
      paintDelayId = clear(paintDelayId);
      paintDelayId = window.setTimeout(markReady, 520);
    };

    /** Fires after Calendly stops resizing the iframe (main scheduler UI pass). */
    const scheduleAfterStableHeight = () => {
      heightStableId = clear(heightStableId);
      heightStableId = window.setTimeout(schedulePaintThenReady, 980);
    };

    const onMessage = (e) => {
      if (cancelled || e.origin !== CALENDLY_ORIGIN) return;

      const eventName = e.data?.event;
      if (typeof eventName !== "string" || !eventName.startsWith("calendly.")) return;

      if (eventName === "calendly.profile_page_viewed" || eventName === "calendly.event_type_viewed") {
        backupAfterLoadId = clear(backupAfterLoadId);
        heightStableId = clear(heightStableId);
        paintDelayId = clear(paintDelayId);
        paintDelayId = window.setTimeout(markReady, 960);
        return;
      }

      if (eventName === "calendly.page_height") {
        const h = parsePageHeightPx(e.data);
        if (!Number.isFinite(h) || h < 420) return;

        backupAfterLoadId = clear(backupAfterLoadId);
        paintDelayId = clear(paintDelayId);
        scheduleAfterStableHeight();
      }
    };

    window.addEventListener("message", onMessage);

    const bindIframe = (iframe) => {
      if (iframe.dataset.rsCalendlyReadyBound === "1") return;
      iframe.dataset.rsCalendlyReadyBound = "1";
      iframe.addEventListener(
        "load",
        () => {
          backupAfterLoadId = window.setTimeout(markReady, 6200);
        },
        { once: true }
      );
    };

    const scan = () => {
      const iframe = widget.querySelector('iframe[src*="calendly"]');
      if (iframe) bindIframe(iframe);
    };

    scan();
    const observer = new MutationObserver(scan);
    observer.observe(widget, { childList: true, subtree: true });

    fallbackId = window.setTimeout(markReady, 24000);

    /** Inline embeds are only auto-discovered when widget.js first loads; SPA visits need an explicit init. */
    const initInlineWidget = () => {
      if (cancelled || typeof window.Calendly?.initInlineWidget !== "function") return;
      widget.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widget,
      });
    };

    const bootCalendly = () => {
      if (cancelled) return;
      const existingScript = document.querySelector(`script[src="${calendlyScript}"]`);

      if (window.Calendly?.initInlineWidget) {
        initInlineWidget();
        return;
      }

      if (existingScript) {
        existingScript.addEventListener("load", initInlineWidget, { once: true });
        queueMicrotask(() => {
          if (window.Calendly?.initInlineWidget) initInlineWidget();
        });
        return;
      }

      const script = document.createElement("script");
      script.src = calendlyScript;
      script.async = true;
      script.onload = initInlineWidget;
      document.body.appendChild(script);
    };

    bootCalendly();

    return () => {
      cancelled = true;
      window.removeEventListener("message", onMessage);
      observer.disconnect();
      clear(backupAfterLoadId);
      clear(heightStableId);
      clear(paintDelayId);
      clear(fallbackId);
      widget.innerHTML = "";
    };
  }, [calendlyUrl]);

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
            <div
              ref={placeholderRef}
              className="calendly-placeholder"
              aria-busy={!widgetReady}
              aria-label="Booking calendar"
            >
              <div
                className={`calendly-loading-overlay${widgetReady ? " calendly-loading-overlay--done" : ""}`}
                aria-hidden={widgetReady}
              >
                <div className="calendly-load-orbit" aria-hidden="true">
                  <div className="calendly-load-blob calendly-load-blob--a" />
                  <div className="calendly-load-blob calendly-load-blob--b" />
                  <div className="calendly-load-blob calendly-load-blob--c" />
                </div>
                <div className="calendly-load-grid" aria-hidden="true" />
                <div className="calendly-load-center">
                  <div className="calendly-load-spinner" aria-hidden="true">
                    <div className="calendly-load-spinner__track" />
                    <div className="calendly-load-spinner__arc" />
                  </div>
                  <p className="calendly-load-title">Opening your calendar</p>
                  <p className="calendly-load-sub">
                    Syncing live availability
                    <span className="calendly-load-ellipsis" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                  </p>
                </div>
              </div>
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
