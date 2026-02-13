import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route) => {
    if (route === "/") {
      return path === "/" || path === "/signup";
    }
    return path === route;
  };
  return (
    <header className="header">
      <Link to="/" className="logo">
        OurOffice
      </Link>
      <nav className="nav">
        <Link to="/" className={isActive("/") ? "active" : ""}>
          Home
        </Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""}>
          About us
        </Link>
        <Link to="/blog" className={isActive("/blog") ? "active" : ""}>
          Blog
        </Link>
        <Link to="/pricing" className={isActive("/pricing") ? "active" : ""}>
          Pricing
        </Link>
      </nav>
    </header>
  );
}
