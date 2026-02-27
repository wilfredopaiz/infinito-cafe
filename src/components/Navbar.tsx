import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isSection: true, sectionId: "#home" },
    { name: "Carta", href: "/carta", isSection: false },
    { name: "Galería", href: "/", isSection: true, sectionId: "#galeria" },
    { name: "Contacto", href: "/", isSection: true, sectionId: "#contacto" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    setIsOpen(false);

    if (link.isSection && location.pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(link.sectionId!);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link.isSection) {
      // If we are not on home, let the default Link behavior happen (navigate to /)
      // and we might need an effect on the Home page to scroll to the hash.
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-infinito-black/95 backdrop-blur-sm shadow-lg" : "bg-infinito-black"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                const element = document.querySelector("#home");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="flex items-center space-x-2 text-infinito-white font-bold text-xl md:text-2xl tracking-tight hover:text-infinito-red transition-colors"
          >
            <img src={logo} alt="Infinito Café" className="h-8 md:h-10" />
            <span className="sr-only">Infinito Café</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavLinkClick(e, link)}
                className={`text-infinito-white hover:text-infinito-red transition-colors font-medium ${(location.pathname === link.href) ? "text-infinito-red" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-infinito-red text-infinito-red hover:bg-infinito-red hover:text-infinito-white">
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-infinito-white hover:text-infinito-red transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`text-infinito-white hover:text-infinito-red transition-colors font-medium py-2 ${(location.pathname === link.href) ? "text-infinito-red" : ""
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full border-infinito-red text-infinito-red hover:bg-infinito-red hover:text-infinito-white">
                  <LogIn className="mr-2 h-4 w-4" />
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
