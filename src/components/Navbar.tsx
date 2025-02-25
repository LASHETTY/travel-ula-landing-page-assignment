
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="font-display text-2xl text-safari-900">
              Travel Unbounded
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#itinerary">Itinerary</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <button className="px-4 py-2 rounded-full bg-safari-500 text-white hover:bg-safari-600 transition-colors">
              Reserve Your Spot
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            <MobileNavLink href="#overview">Overview</MobileNavLink>
            <MobileNavLink href="#itinerary">Itinerary</MobileNavLink>
            <MobileNavLink href="#gallery">Gallery</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <div className="px-4 py-2">
              <button className="w-full px-4 py-2 rounded-full bg-safari-500 text-white hover:bg-safari-600 transition-colors">
                Reserve Your Spot
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-gray-600 hover:text-safari-500 transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-safari-500 transition-colors"
  >
    {children}
  </a>
);
