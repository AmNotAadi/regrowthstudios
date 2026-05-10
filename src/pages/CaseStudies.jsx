import { Link } from "react-router-dom";
import { PlatformIcon } from "../components/Icons.jsx";
import Reveal from "../components/Reveal.jsx";
import MagneticCard from "../components/MagneticCard.jsx";
import { caseStudies } from "../data.js";
import buch1 from "../../assets/buch1.jpg";
import buch2 from "../../assets/buch2.jpg";
import buch3 from "../../assets/buch3.jpg";
import pov1 from "../../assets/pov1.jpg";

const buchImages = [buch1, buch2, buch3];

function SocialPreview({ study }) {
  return (
    <div className={`social-preview ${study.slug}`}>
      <div className="preview-header">
        <span>{study.client}</span>
        <div>
          {study.platforms.map((platform) => (
            <PlatformIcon key={platform} name={platform} />
          ))}
        </div>
      </div>
      {study.slug === "buch-media" ? (
        <div className="preview-carousel" aria-label="Buch Media content previews">
          {buchImages.map((image, index) => (
            <img
              className="preview-carousel-image"
              src={image}
              alt={`Buch Media Productions content preview ${index + 1}`}
              key={image}
            />
          ))}
        </div>
      ) : study.slug === "povofaadi" ? (
        <div className="preview-carousel static-preview" aria-label="POVOfAadi content preview">
          <img className="preview-carousel-image" src={pov1} alt="POVOfAadi Instagram Reel preview" />
        </div>
      ) : (
        <div className="preview-grid">
          <div className="preview-tile tall">
            <span>Hook</span>
          </div>
          <div className="preview-tile">
            <span>Cut</span>
          </div>
          <div className="preview-tile">
            <span>Caption</span>
          </div>
        </div>
      )}
      <div className="preview-analytics">
        {study.metrics.map((metric) => (
          <span key={metric}>{metric}</span>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <>
      <section className="page-hero section-dark">
        <div className="grain" />
        <div className="container narrow-page-hero">
          <Reveal>
            <p className="eyebrow">Case studies</p>
            <h1>Proof that consistent content systems compound.</h1>
            <p>
              A closer look at short-form campaigns, production workflows, and organic page builds across brand and
              creator environments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-light">
        <div className="container case-study-stack">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug}>
              <MagneticCard className="case-study-panel" intensity={3}>
                <div id={study.slug} className="anchor-target" aria-hidden="true" />
                <div className="case-study-hero">
                  <div>
                    <p className="eyebrow dark">{String(index + 1).padStart(2, "0")} / Selected work</p>
                    <h2>{study.client}</h2>
                    <p>{study.result}</p>
                    <div className="platform-row">
                      {study.platforms.map((platform) => (
                        <PlatformIcon key={platform} name={platform} />
                      ))}
                    </div>
                  </div>
                  <SocialPreview study={study} />
                </div>
                <div className="case-detail-grid">
                  <article>
                    <span>Challenge</span>
                    <p>{study.challenge}</p>
                  </article>
                  <article>
                    <span>Strategy</span>
                    <p>{study.strategy}</p>
                  </article>
                  <article>
                    <span>Execution</span>
                    <p>{study.execution}</p>
                  </article>
                  <article>
                    <span>Results</span>
                    <p>{study.results}</p>
                  </article>
                </div>
              </MagneticCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="case-cta section-dark">
        <Reveal className="container">
          <MagneticCard className="final-cta-card dark-card" intensity={3}>
            <p className="eyebrow">Ready to get started?</p>
            <h2>Find the content system that fits your stage of growth.</h2>
            <Link className="button primary" to="/pricing">
              Explore Pricing
            </Link>
          </MagneticCard>
        </Reveal>
      </section>
    </>
  );
}
