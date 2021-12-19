import React, { useState } from "react";
import styled from "styled-components";
import { MdLogin } from "react-icons/md";
import { useLogin } from "../hooks/useLogin";
import { Loadings } from "../layout/loader";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, err, isLoggedIn } = useLogin();

  const handleLogin = () => {
    isLoggedIn(email, password);
  };
  return (
    <Container>
      <Wrapper>
        <Card>
          {err && <ErrorMessage>{err}</ErrorMessage>}
          <Text>
            <IconHolder>
              <MdLogin />
            </IconHolder>
            <span>Login</span>
          </Text>
          <InputHolder>
            <Label>Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputHolder>
          <InputHolder>
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputHolder>
          {!loading && <Button onClick={handleLogin}>Login</Button>}
          {loading && (
            <Button>
              <Loadings />
            </Button>
          )}
        </Card>
      </Wrapper>
    </Container>
  );
};

const ErrorMessage = styled.div`
  width: 100%;
  padding: 10px 5px;
  background: red;
  color: black;
`;

const IconHolder = styled.div`
  font-size: 27px;
`;
const Text = styled.div`
  font-size: 30px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-top: -4px;
  }
`;
const Label = styled.div``;

const Input = styled.input`
  width: 350px;
  height: 35px;
  border: 1px solid lightgray;
  border-radius: 4px;
  outline: blue;
  padding-left: 10px;
`;
const InputHolder = styled.div`
  margin: 7px 0;
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
  background: black;
  color: white;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;
const Card = styled.div`
  width: 400px;
  height: 100%;
  min-height: 250px;
  padding: 20px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
