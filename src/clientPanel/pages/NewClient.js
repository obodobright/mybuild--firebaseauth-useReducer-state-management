import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAddClient } from "../hooks/usePost";
import { Loadings } from "../layout/loader";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export const NewClient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [balances, setBalances] = useState("");
  const { loading, err, addClient } = useAddClient();
  const { disabledAdd } = useContext(AuthContext);

  const handleNewClient = () => {
    addClient(firstName, lastName, email, phone, balances);
  };

  return (
    <div className="container">
      <Container>
        <Wrapper>
          <Link to="/">Back to Dashboard</Link>
          <Card>
            <TopText>Add Client</TopText>
            <CardInput>
              <InputHolder>
                <Label>First Name</Label>
                <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </InputHolder>
              <InputHolder>
                <Label>Last Name</Label>
                <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </InputHolder>
              <InputHolder>
                <Label>Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
              </InputHolder>
              <InputHolder>
                <Label>Phone</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
              </InputHolder>
              <InputHolder>
                <Label>Balance</Label>
                <Input
                  value={balances}
                  onChange={(e) => setBalances(e.target.value)}
                  disabled={disabledAdd}
                />
              </InputHolder>
              {loading && (
                <Button>
                  <Loadings color="white" width={20} height={20} />
                </Button>
              )}
              {!loading && <Button onClick={handleNewClient}>Add Client</Button>}
              {err && <div>{err}</div>}
            </CardInput>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
`;
const TopText = styled.div`
  padding: 7px 10px;
  background: lightgray;
  width: 100%;
  border: 1px solid lightgray;
`;
const Label = styled.div``;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid lightgray;
  outline: 0;
  border-radius: 4px;
  padding-left: 10px;
`;
const InputHolder = styled.div`
  margin: 10px 0;
`;
const CardInput = styled.div`
  padding: 20px 20px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  border: 1px solid lightgray;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
