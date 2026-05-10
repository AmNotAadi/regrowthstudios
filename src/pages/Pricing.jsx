import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import MagneticCard from "../components/MagneticCard.jsx";
import { plans } from "../data.js";

const faqs = [
  ["How does recording work?", "Most clients record simple raw footage from prompts we provide. We turn that footage into platform-ready short-form assets."],
  ["Do I need professional cameras?", "No. A modern phone, clear audio, and good light are enough for most founder-led or brand-led content systems."],
  ["What are turnaround times?", "Typical delivery windows are 3-5 business days per batch, depending on volume, revisions, and production complexity."],
  ["What platforms are supported?", "TikTok, Instagram Reels, YouTube Shorts, and other short-form placements using the same core asset system."],
  ["What is the revision policy?", "Launch includes 1-2 revisions. Momentum and Dominate include a more collaborative review workflow for active retainers."],
];

export default function Pricing() {
  return (
    <>
      <section className="page-hero section-dark">
        <div className="grain" />
        <div className="container narrow-page-hero">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h1>Retainers built around output, not noise.</h1>
            <p>
              Clear monthly systems for businesses that want reliable short-form execution without building an internal
              content team.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light pricing-page">
        <div className="container pricing-layout">
          <Reveal className="pricing-note">
            <p className="eyebrow dark">Choose your pace</p>
            <h2>Every plan includes a system for turning raw ideas into consistent content.</h2>
            <p>
              Pricing is designed to be believable, simple, and focused on production value. Start where your current
              content volume actually needs to be.
            </p>
          </Reveal>
          <div className="pricing-table">
            {plans.map((plan) => (
              <Reveal key={plan.name}>
                <MagneticCard
                  className={`pricing-row ${plan.featured ? "featured" : ""}`}
                  intensity={4}
                >
                  <div className="pricing-row-head">
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <strong className="pricing-row-price">
                    {plan.price}
                    <small>{plan.period}</small>
                  </strong>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link className={`pricing-card-cta ${plan.featured ? "featured" : ""}`} to="/contact">
                    Start with {plan.name}
                  </Link>
                </MagneticCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark faq-section">
        <div className="container faq-grid">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2>Practical answers before the first call.</h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <Reveal className="faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light final-cta">
        <Reveal className="container">
          <MagneticCard className="final-cta-card" intensity={3} light>
            <h2>Ready to choose a content pace?</h2>
            <p>Start with a short call and we will map the right monthly system.</p>
            <Link className="button glow-button" to="/contact">
              Book a Call
            </Link>
          </MagneticCard>
        </Reveal>
      </section>
    </>
  );
}
