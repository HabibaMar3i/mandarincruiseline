import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const MainLogo = () => {
  return (
    <img src="/Logo-24-cropped (1).svg" alt="Mandarin Cruise Line" className="h-12 w-12" />
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
    { name: "Grand Mandarin", path: "/grand-mandarin" }
  ];

  const galleryItems = [
    { name: "Royal Princess Gallery", path: "/royal-princess-gallery" },
    { name: "Grand Mandarin Gallery", path: "/grand-mandarin-gallery" }
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-[#5A5248] py-2 px-6" maxWidth="full">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-[#F2ECE7]"
        />
        <NavbarBrand className="mr-8">
          <MainLogo />
          <p className="font-bold font-georgia ml-3 text-xl text-[#F2ECE7]">Mandarin Cruise Line</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-8 font-georgia flex-1" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link as={RouterLink} to={item.path} className="hover:opacity-70 text-lg font-medium text-[#F2ECE7]">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" className="hover:opacity-70 text-lg font-medium text-[#F2ECE7] font-georgia">
                Gallery <i className="fas fa-chevron-down ml-1"></i>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Gallery options">
              {galleryItems.map((item) => (
                <DropdownItem key={item.name}>
                  <Link as={RouterLink} to={item.path} className="text-[#5A5248] font-georgia">
                    {item.name}
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent className="hidden lg:flex" justify="end">
        <NavbarItem>
          <Button as={RouterLink} to="/contact-us" className="bg-[#eb5515] text-white px-8 py-3 rounded-full font-semibold font-georgia hover:opacity-90 transition-all duration-300" variant="flat">
            Book Now
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-[#5A5248] pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={RouterLink}
              to={item.path}
              className="w-full font-georgia text-lg py-2 text-[#F2ECE7]"
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {galleryItems.map((item, index) => (
          <NavbarMenuItem key={`gallery-${item.name}-${index}`}>
            <Link
              as={RouterLink}
              to={item.path}
              className="w-full font-georgia text-lg py-2 text-[#F2ECE7]"
              size="lg"
              onClick={handleMenuItemClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button as={RouterLink} to="/contact-us" className="bg-[#eb5515] text-white px-8 py-3 rounded-full font-semibold font-georgia hover:opacity-90 transition-all duration-300 w-full mt-4" variant="flat" onClick={handleMenuItemClick}>
            Book Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

