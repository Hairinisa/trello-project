import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { AiFillDatabase } from "react-icons/ai";
import { GiTigerHead } from "react-icons/gi";
import { BsBank2, BsBellSlashFill } from "react-icons/bs";
import { ImCog } from "react-icons/im";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <Title> <AiFillDatabase /> Trello</Title>
      <Nav>
        <NavItem>Рабочее пространство</NavItem>
        <NavItem>Недавние</NavItem>
        <NavItem>В избранном</NavItem>
        <NavItem>Шаблоны</NavItem>
        <NavItem>Создать</NavItem>
      </Nav>
      <BsBank2 /><ImCog />
      <BsBellSlashFill />
      <SearchInput placeholder="Поиск..."  />
      <Icon onClick={handleLogout}> <GiTigerHead /></Icon>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #42403e;
  padding: 10px 20px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-right: 40px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.span`
  margin-right: 30px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #9a9b9b;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SearchInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: none;
`;

const Icon = styled.div`
  background-color: white;
  color: #0c0d0e;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
