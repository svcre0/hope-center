import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-hope-orange" />
              <span className="font-heading font-bold text-xl">
                🇭‌🇴‌🇵‌🇪‌
              </span>
            </div>
            <p className="font-body text-background/80 mb-6 max-w-md">
              Every child deserves a chance to thrive. We provide shelter, education, 
              nutrition, and emotional care to give orphaned children hope for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/60 hover:text-hope-orange transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-hope-orange transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-hope-orange transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  to="/about"
                  className="text-background/80 hover:text-hope-orange transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-background/80 hover:text-hope-orange transition-smooth"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/get-involved"
                  className="text-background/80 hover:text-hope-orange transition-smooth"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-background/80 hover:text-hope-orange transition-smooth"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/80 hover:text-hope-orange transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 font-body">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-hope-orange" />
                <span className="text-background/80 text-sm">
                  123 lyndhurst Street, linksfield City, C 1245
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-hope-orange" />
                <span className="text-background/80 text-sm">
                  +27 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-hope-orange" />
                <span className="text-background/80 text-sm">
                  hello@hopehavenfoundation.org
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="font-body text-background/60 text-sm">
            © 2024 Hope  Foundation. All rights reserved. A registered 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
