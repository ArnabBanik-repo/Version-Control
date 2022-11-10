import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = styled(Box)({
  position: "fixed",
  height: "3rem",
  padding: "1.5rem 5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "90%",
});
const NavbarBrand = styled(NavLink)({
  textDecoration: "none",
});
const NavbarItems = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "5rem",
  fontSize: "1.5rem",
});
const NavbarLink = styled(HashLink)({
  textDecoration: "none",
  color: "white",
  fontWeight: "500",
});
const itmGen = (user) => {
  return !user ? (
    <>
      <NavbarLink smooth to={"/#about"}>
        About
      </NavbarLink>
      <NavbarLink
        as="a"
        href={"https://www.instagram.com/arnabbanik5/"}
        target="_blank"
      >
        Contact
      </NavbarLink>
      <NavbarLink to={"/login"}>Login</NavbarLink>
    </>
  ) : (
    <>
      <NavbarLink to={"/dashboard"}>Dashboard</NavbarLink>
      <NavbarLink to={"/dashboard"}>See uploads</NavbarLink>
      <NavbarLink to={"/logout"}>Logout</NavbarLink>
    </>
  );
};
const Navbar = ({ user }) => {
  return (
    <Nav>
      <NavbarBrand to={"/"}>
        <Typography
          sx={{ fontSize: "30px", fontWeight: "500", color: "#d9677b" }}
        >
          Version Control
        </Typography>
      </NavbarBrand>
      <NavbarItems>{itmGen(user)}</NavbarItems>
    </Nav>
  );
};

export default Navbar;
