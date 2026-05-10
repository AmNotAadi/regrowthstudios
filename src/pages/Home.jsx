import { Link } from "react-router-dom";
import { PlatformIcon } from "../components/Icons.jsx";
import MagneticCard from "../components/MagneticCard.jsx";
import Reveal from "../components/Reveal.jsx";
import logo from "../../assets/logo.png";

export default function Home() {
  return (
    <>
      <section className="hero section-dark">
        <div className="grain" />
        <div className="container hero-simple">
          <Reveal className="hero-copy">
            <img className="hero-logo" src={logo} alt="Regrowth" />
            <p className="eyebrow">Reviving Ideas. Rebuilding Growth.</p>
            <h1 className="hero-title">Content that grows with intent.</h1>
            <p className="hero-subtitle">
              Short-form strategy, editing, and publishing systems for brands that need consistency.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <MagneticCard className="hero-loop-card" intensity={5}>
              <span className="panel-label">Single Reel Breakout</span>
              <div className="loop-metric">
                <strong>1.8M+</strong>
                <p>views on one Instagram Reel in roughly two weeks, from a new account.</p>
              </div>
              <Link className="case-study-link" to="/case-studies#povofaadi">
                View Case Study
              </Link>
            </MagneticCard>
          </Reveal>
        </div>
      </section>

      <section className="home-brief section-light">
        <div className="container trust-inner">
          <span>For brands and creators that need a consistent short-form engine, not random one-off edits.</span>
          <div className="trust-logos">
            <PlatformIcon name="YouTube" />
            <PlatformIcon name="TikTok" />
            <PlatformIcon name="Instagram" />
          </div>
        </div>
        <div className="container home-brief-grid">
          <Reveal>
            <MagneticCard className="process-card process-card-dark" intensity={4}>
              <div className="process-card-head">
                <span>7+ years of content experience</span>
                <strong>7+ years</strong>
              </div>
              <h2>What we do</h2>
              <ul className="done-list">
                <li>Build the strategy, content angles, hooks, scripts, and prompts.</li>
                <li>Give you clear recording instructions so filming stays simple.</li>
                <li>Edit every video with retention, pacing, captions, and platform-native structure.</li>
                <li>Handle posting, optimization, performance review, and community touchpoints.</li>
              </ul>
            </MagneticCard>
          </Reveal>
          <Reveal delay={100}>
            <MagneticCard className="process-card process-card-light" intensity={4} light>
              <div className="process-card-head">
                <span>Your side</span>
                <strong>Simple</strong>
              </div>
              <h2>What you do</h2>
              <ul className="client-list">
                <li>Follow the script, record videos, send over footage, that's it.</li>
              </ul>
            </MagneticCard>
          </Reveal>
        </div>
      </section>

      <section className="final-cta section-light">
        <Reveal className="container">
          <MagneticCard className="final-cta-card" intensity={3} light>
            <p className="eyebrow dark">Choose your pace</p>
            <h2>Explore the Right Content System.</h2>
            <p>Compare monthly retainers built for consistent short-form growth.</p>
            <Link className="button glow-button" to="/pricing">
              View Pricing
            </Link>
          </MagneticCard>
        </Reveal>
      </section>
    </>
  );
}
