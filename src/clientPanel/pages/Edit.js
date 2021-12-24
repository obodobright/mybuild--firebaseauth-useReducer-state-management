import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAddClient } from "../hooks/usePost";
import { Loadings } from "../layout/loader";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const EditClient = ({
  onSubmit,
  closeEdit,
  id,
  nameFirst,
  nameLast,
  emailProp,
  balanceProp,
  phoneProp,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [balance, setBalance] = useState("");
  const { loading, err } = useAddClient();
  const history = useHistory();
  const editBalance = useSelector((state) => state.disabled);

  const disabled =
    balance.length > 0 &&
    phone.length > 0 &&
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.length > 0;

  const handleEdit = () => {
    onSubmit(firstName, lastName, email, phone, balance);
    history.push(`/clientdetail/${id}`);
    closeEdit(false);
  };

  return (
    <div className="container">
      <Container>
        <Wrapper>
          <Link to="/">Back to Dashboard</Link>
          {/* <button onClick={closeEdit(false)}>close</button> */}
          <Card>
            <TopText>Edit Client</TopText>
            <CardInput>
              <InputHolder>
                <Label>First Name</Label>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={nameFirst}
                />
              </InputHolder>
              <InputHolder>
                <Label>Last Name</Label>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={nameLast}
                />
              </InputHolder>
              <InputHolder>
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailProp}
                />
              </InputHolder>
              <InputHolder>
                <Label>Phone</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={phoneProp}
                />
              </InputHolder>
              <InputHolder>
                <Label>Balance</Label>
                <Input
                  disabled={editBalance}
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  placeholder={balanceProp}
                />
              </InputHolder>
              {loading && (
                <Button>
                  <Loadings color="white" width={20} height={20} />
                </Button>
              )}
              {!loading && (
                <Button disabled={!disabled} onClick={handleEdit}>
                  Edit Client
                </Button>
              )}
              {!disabled && <span>Please enter all inputs</span>}
              {err && <div>{err}</div>}
            </CardInput>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

const Button = styled.button`
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
  outline: none;
  border: 0;
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
