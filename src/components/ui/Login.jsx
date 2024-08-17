import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { email, password };
    dispatch(login(user));
    navigate("/home");
  };

  return (
    <StyledForm>
      <LoginContainer>
        <h2>Вход в Trello</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Войти</Button>
      </LoginContainer>
    </StyledForm>
  );
};

export default Login;

const StyledForm = styled.div`
  color: #f0f2f4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  height: 450px;
  border: 1px solid gray;

  box-shadow: 10px 10px 134px -17px rgba(40, 39, 39, 0.75);
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #0079bf;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
