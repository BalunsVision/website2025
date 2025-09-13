import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Solution", path: "/solutions" },
    { name: "Shop", path: "/shop" },
    { name: "Careers", path: "/careers" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (location.pathname === "/solutions") {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setHidden(true);
          setIsMenuOpen(false); // Close mobile menu on scroll down
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header
      className={`top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 transition-all duration-300
        ${location.pathname === "/solutions" && !isMenuOpen ? "" : "fixed"}
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${isMenuOpen && location.pathname === "/solutions" ? "z-[99999]" : "z-50"}`}
      style={{ height: scrolled ? "4rem" : "5rem" }}
    >

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 flex justify-between items-center h-full transition-all duration-300">
        {/* Logo */}
        <Link to="/baluns" className="flex items-center">
          <img
            src="/_logo.png"
            alt="Baluns Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-10 sm:h-12" : "h-12 sm:h-16"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-all duration-300 ${
                scrolled ? "text-sm py-1 px-2" : "text-lg py-2 px-3"
              } ${
                isActivePath(item.path)
                  ? "text-orange-primary border-b-2 border-orange-primary"
                  : "text-gray-700 hover:text-orange-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-[99999]">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)} // close after click
                className={`block font-medium transition-all duration-300 py-2 px-3 rounded-md ${
                  isActivePath(item.path)
                    ? "text-orange-primary bg-orange-50"
                    : "text-gray-700 hover:text-orange-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
