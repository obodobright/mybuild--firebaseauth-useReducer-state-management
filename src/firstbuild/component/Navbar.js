import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hook/useLogout";
const Navbar = () => {
  const { logout } = useLogout();
  const signOut = () => {
    logout();
    console.log("clicked");
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Icon />
          <span>Obods</span>
        </Logo>
        <Space />
        <Register>
          <Nav to="/login">Login</Nav>
          <Nav to="signup">Sign Up</Nav>
          <NavBtn onClick={signOut}>Log out</NavBtn>
        </Register>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
const Space = styled.div`
  flex: 1;
`;
const NavBtn = styled.div`
  border: 1px solid black;
  padding: 5px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 5px;
  transition: all 350ms;
  :hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

const Register = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  margin-right: 10px;
  filter: invert(25%);
`;
const Nav = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  color: black;
  padding: 10px 20px;
  transition: all 350ms;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  span {
    color: black;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: transparent;
`;
