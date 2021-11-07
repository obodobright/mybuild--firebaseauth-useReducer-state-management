import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Welcome>
          <Image />
          <UserName>Hello user</UserName>
        </Welcome>
        <Navigation>
          <Nav to="/">Dashboard</Nav>
          <Nav to="/create">Create</Nav>
          <Nav to="/project">Projects</Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
const Nav = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: white;
  margin: 10px 0;
`;
const UserName = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 600;
`;
const Image = styled.div`
width:40px;
height:40px;
border-radius:50%;
object-fit-cover;
background:white
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: inherit;
  height: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: invert(25%);
  position: fixed;
  top: 0;
  left: 0;
  background: black;
`;
const Container = styled.div`
  width: 300px;
  min-width: 300px;
  position: relative;
  height: 100%;
`;
