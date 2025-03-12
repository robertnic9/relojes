'use client';
import { useState } from "react";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 bg-white shadow-[0_4px_8px_2px_rgba(0,0,0,0.2)] `}
    >
      <nav className="relative">
        <ul className={`content-space text-lg items-center font-cmu text-black md:flex`}>
          {/* Desktop Links - Left Side */}
          <li className="m-10 my-auto hidden md:block">
            <a
              href="/watches"
              className="hover:text-gray-500 transition-colors"
            >
              Relojes
            </a>
          </li>
          <li className="m-10 my-auto hidden md:block">
            <a href="/ourstory" className="hover:text-gray-500 transition-colors">
              Nuestra historia
            </a>
          </li>

          {/* Logo - Center */}
          <li className="flex-1">
            <a href="/">
              <img
                src="/media/logotransparente.png"
                className="h-[100px] md:mx-auto"
                alt="Logo"
              />
            </a>
          </li>

          {/* Mobile Menu Button */}
          <li className="md:hidden absolute right-4 top-8">
            <button
              onClick={toggleMenu}
              className="text-3xl hover:text-gray-500 transition-colors"
            >
              &#9776;
            </button>
          </li>

          {/* Desktop Links - Right Side */}
          <li className="m-10 my-auto hidden md:block">
            <a href="/contact" className="hover:text-gray-500 transition-colors">
              Contáctanos
            </a>
          </li>
          <li className="m-10 my-auto hidden md:block">
            <a
              href="/boutiques"
              className="hover:text-gray-500 transition-colors"
            >
              Boutiques
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white text-black shadow-md">
            <ul className="py-4">
              <li className="py-3 px-6">
                <a href="/watches" className="block">
                  Relojes
                </a>
              </li>
              <li className="py-3 px-6">
                <a href="/ourstory" className="block">
                  Nuestra historia
                </a>
              </li>
              <li className="py-3 px-6">
                <a href="/contact" className="block">
                  Contáctanos
                </a>
              </li>
              <li className="py-3 px-6">
                <a href="/boutiques" className="block">
                  Boutiques
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
