
import React, { useState } from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export function NavbarComponent() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink 
          as={Link} 
          to="/" 
          active={activeLink === '/'} 
          onClick={() => handleClick('/')}
        >
          Home
        </NavbarLink>
        <NavbarLink 
          as={Link} 
          to="Jobs" 
          active={activeLink === '/Jobs'} 
          onClick={() => handleClick('/Jobs')}
        >
          Jobs
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
