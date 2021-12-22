import React from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { dbstore } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { selectedClient } from "../redux/actions/Actions";
import { useSelector } from "react-redux";
export const ClientDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const client = useSelector((state) => state.user.client);
  console.log(id);
  console.log(client);
  const history = useHistory();

  const getClient = async () => {
    const docRef = doc(dbstore, "client", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("document data", docSnap.data());
      dispatch(selectedClient(docSnap.data()));
    } else {
      console.log("no such doc");
    }
  };

  useEffect(() => {
    getClient();
  }, [id]);

  const [balance, setBalance] = useState("");
  return (
    <Container>
      <Wrapper>
        <TopDiv>
          <GoBack onClick={history.goBack}>Back to Dashboard</GoBack>
          <ButtonHolder>
            <Button bg="black">Edit</Button>
            <Button bg="red">Delete</Button>
          </ButtonHolder>
        </TopDiv>
        <Card>
          <Name>
            {client?.firstName} {client?.lastName}{" "}
          </Name>
          <Detail>
            <Divs>
              <ClientId>
                Client ID: <span>{id}</span>{" "}
              </ClientId>
              <Balance>
                <BalInfo>
                  <Div>
                    Balance: <span cl>${parseFloat(client?.balance).toFixed(2)}</span>{" "}
                  </Div>
                  <Icon>
                    <BiPencil />
                  </Icon>
                </BalInfo>
                <InputHolder>
                  <Input
                    type="number"
                    placeholder="0"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  />
                  <UpdateBtn>Update</UpdateBtn>
                </InputHolder>
              </Balance>
            </Divs>
            <hr style={{ marginBottom: "-10px" }} />
          </Detail>

          <DownDiv>
            <Contact bb>Contact Email: {client?.email}</Contact>
            <Contact>Contact Phone: {client?.phone}</Contact>
          </DownDiv>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Div = styled.div`
  font-size: 17px;
  font-weight: 500;

  span {
    color: ${({ cl }) => (cl ? "red" : "green")};
  }
`;
const Icon = styled.div`
  margin-left: 4px;
  cursor: pointer;
`;
const UpdateBtn = styled.div`
  font-size: 13px;
  width: 70px;
  height: 25px;
  margin-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 2px;
`;
const GoBack = styled.button`
  text-decoration: none;
  color: blue;
`;
const Button = styled.button`
  outline: none;
  border: 0;
  padding: 5px 9px;
  background: ${({ bg }) => bg};
  font-size: 14px;
  color: white;
  cursor: pointer;
`;
const ButtonHolder = styled.div``;
const Name = styled.div`
  background: whitesmoke;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
`;
const ClientId = styled.div`
  font-size: 18px;
  font-weight: 500;

  span {
    opacity: 0.6;
  }
`;
const Balance = styled.div``;
const BalInfo = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 120px;
  height: 25px;
  outline: none;
  border: 1px solid lightgray;
`;
const InputHolder = styled.div`
  display: flex;
  align-items: center;
`;
const Detail = styled.div`
  padding: 10px 20px;
`;
const Divs = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Contact = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 4px 20px;
  border-bottom: ${({ bb }) => (bb ? "1px solid lightgray" : "")};
  width: 100%;
`;
const DownDiv = styled.div`
  padding: 10px 0px;
  border: 1px solid lightgray;

  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 10px;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: 30vh;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 20px 0;
  padding-bottom: 20px;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  //   justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
