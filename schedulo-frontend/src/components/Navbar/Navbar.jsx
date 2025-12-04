import { useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import SecondaryButton from "./../Buttons/SecondaryButton/SecondaryButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-surface shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-on-background" />
            </div>
            <Link to="/">
              {" "}
              <span className="font-bold text-lg text-base-strong">
                Schedulo
              </span>
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/Login">
              {" "}
              <SecondaryButton text="Login" />
            </Link>

            <Link to="/register">
              {" "}
              <PrimaryButton
                text="Get Started"
                extraStyles="bg-primary text-on-background hover:bg-primary-dark  btn-primary !px-6 !py-2"
              />
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-surface">
            <a
              className="block py-2 text-base hover:text-primary"
              href="#features"
            >
              Features
            </a>
            <a
              className="block py-2 text-base hover:text-primary"
              href="#benefits"
            >
              Benefits
            </a>
            <a
              className="block py-2 text-base hover:text-primary"
              href="#pricing"
            >
              Pricing
            </a>

            <button className="w-full mt-4 px-4 py-2 bg-primary text-on-background rounded-lg hover:bg-primary-dark transition font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
