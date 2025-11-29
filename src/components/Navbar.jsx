import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const MainLogo = () => {
  return (
    <img src="/main-logo.svg" alt="Mandarin Cruise Line" className="h-12 w-12" />
  );
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Royal Princess", path: "/royal-princess" },
    { name: "Grand Mandarin", path: "/grand-mandarin" },
    { name: "Contact Us", path: "/contact-us" }
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-white py-4 px-6" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-[#a1978a]"
        />
        <NavbarBrand className="mr-8">
          <MainLogo />
          <p className="font-bold font-georgia ml-3 text-xl text-[#a1978a]">Mandarin Cruise Line</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8 font-hero flex-1" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link as={RouterLink} to={item.path} className="hover:opacity-70 text-lg font-medium text-[#a1978a]">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem>
          <Button as={RouterLink} to="/contact-us" className="font-hero font-semibold text-white px-6 py-2 text-lg bg-[#a1978a]" variant="flat">
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-white pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={RouterLink}
              to={item.path}
              className="w-full font-hero text-lg py-2 text-[#a1978a]"
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button as={RouterLink} to="/contact-us" className="font-hero font-semibold text-white w-full mt-4 py-3 text-lg bg-[#a1978a]" variant="flat" onClick={handleMenuItemClick}>
            Book Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

