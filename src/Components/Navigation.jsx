import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RNV } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [navLinks] = useState([
    { label: 'Carte', link: '/Carte' },
    { label: 'Ressource', link: '/Ressource' },
    { label: 'Population', link: '/Population' },
  ]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Futur Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navLinks.map((item) => {
              return (
                <NavItem>
                  <NavLink
                    className="text-dark font-weight-bold"
                    tag={RNV}
                    to={item.link}
                    style={{ fontSize: 20 }}
                  >
                    {item.label}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
