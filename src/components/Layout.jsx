import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const hideFooter = pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="nav-shell" aria-label="Primary navigation">
          <Link className="brand" to="/" aria-label="Regrowth home">
            <img className="brand-logo" src={logo} alt="" />
            <small>Reviving Ideas. Rebuilding Growth.</small>
          </Link>
          <div className="nav-links">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link className="nav-cta" to="/contact">
            Book a Call
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      {!hideFooter && (
        <footer className="footer section-dark">
          <div className="container footer-grid">
            <div>
              <Link className="brand brand-footer" to="/">
                <img className="brand-logo" src={logo} alt="" />
                <small>Reviving Ideas. Rebuilding Growth.</small>
              </Link>
              <p>Short-form systems for brands that need consistency, clarity, and compounding attention.</p>
            </div>
            <div className="footer-links">
              {links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="footer-contact">
              <span>Available for select monthly retainers</span>
              <span>Start with a scheduled content call</span>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
