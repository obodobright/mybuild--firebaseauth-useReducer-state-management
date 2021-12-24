import React from "react";
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { dbstore } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { selectedClient } from "../redux/actions/Actions";
import { useSelector } from "react-redux";
import { updateDoc } from "firebase/firestore";
import { EditClient } from "../pages/Edit";
import { SvgLoading } from "../layout/SvgLoading";
import { Settings } from "../settings/Settings";

export const ClientDetails = () => {
  const [balance, setBalance] = useState("");
  const [openForm, setOPenForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const client = useSelector((state) => state.user.selectedClient);
  const editBalance = useSelector((state) => state.disabled);
  const history = useHistory();

  console.log("disabled:", editBalance);

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const clientUpdate = {
    balance: balance,
  };
  const handleUpdateBalance = async () => {
    const clientRef = doc(dbstore, "client", id);

    updateDoc(clientRef, clientUpdate);
    setOPenForm(false);
    setBalance("");
  };

  const handleOpenForm = () => {
    setOPenForm(!openForm);
  };

  const handleEditSubmit = async (firstName, lastName, email, phone, balance) => {
    const Ref = doc(dbstore, "client", id);
    const payload = { firstName, lastName, email, phone, balance };
    await updateDoc(Ref, payload);
  };

  const getClient = async () => {
    setLoading(true);
    try {
      const docRef = doc(dbstore, "client", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("document data", docSnap.data());
        dispatch(selectedClient(docSnap.data()));
      } else {
        console.log("no such doc");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const handleDelete = async () => {
    await deleteDoc(doc(dbstore, "client", id));
    history.push("/");
  };

  useEffect(() => {
    getClient();
  }, [id, openForm, showEdit]);

  return (
    <Container>
      <Wrapper>
        {!showEdit ? (
          <>
            <TopDiv>
              <GoBack onClick={history.goBack}>Back to Dashboard</GoBack>
              <ButtonHolder>
                <Button bg="black" onClick={handleShowEdit}>
                  Edit
                </Button>
                <Button bg="red" onClick={handleDelete}>
                  Delete
                </Button>
              </ButtonHolder>
            </TopDiv>
            {loading ? (
              <SvgLoading />
            ) : (
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
                          Balance:{" "}
                          <Span style={client?.balance > 0 ? { color: "red" } : { color: "green" }}>
                            ${parseFloat(client?.balance).toFixed(2)}
                          </Span>{" "}
                        </Div>
                        <Icon onClick={handleOpenForm}>
                          <BiPencil />
                        </Icon>
                      </BalInfo>
                      {openForm && (
                        <InputHolder>
                          <Input
                            type="text"
                            placeholder="0"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                          />
                          <UpdateBtn onClick={handleUpdateBalance}>Update</UpdateBtn>
                        </InputHolder>
                      )}
                    </Balance>
                  </Divs>
                  <hr style={{ marginBottom: "-10px" }} />
                </Detail>

                <DownDiv>
                  <Contact bb>Contact Email: {client?.email}</Contact>
                  <Contact>Contact Phone: {client?.phone}</Contact>
                </DownDiv>
              </Card>
            )}
          </>
        ) : (
          <EditClient
            onSubmit={handleEditSubmit}
            closeEdit={setShowEdit}
            id={id}
            nameFirst={client?.firstName}
            nameLast={client?.lastName}
            emailProp={client?.email}
            balanceProp={client?.balance}
            phoneProp={client?.phone}
          />
        )}
      </Wrapper>
    </Container>
  );
};

const Span = styled.span`
  color: ${({ cl }) => cl};
  background: ${({ bg }) => bg};
`;
const Div = styled.div`
  font-size: 17px;
  font-weight: 500;
`;
const Icon = styled.div`
  margin-left: 4px;
  cursor: pointer;
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
const GoBack = styled.div`
  text-decoration: none;
  color: blue;
  cursor: pointer;
  font-size: 14px;
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
