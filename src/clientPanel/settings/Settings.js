import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
export const Settings = () => {
  const { balance, dispatch, disabledAdd, enableReg } = useContext(AuthContext);

  console.log("enable reg", enableReg);
  const disableBalanceEdit = () => {
    dispatch({
      type: "DISABLED_BALANCE_EDIT",
    });
  };
  const disableBalanceAdd = () => {
    dispatch({
      type: "DISABLED_BALANCE_ADD",
    });
  };
  const enableRegistration = () => {
    dispatch({
      type: "ENABLE_REGISTRATION",
    });
  };

  // console.log(balance);
  // console.log(disabledAdd);

  return (
    <Container>
      <Wrapper>
        <TopDiv>
          <GoBack to="/">Back to Dashboard</GoBack>
        </TopDiv>
        <Card>
          <CardTitle>Edit Settings</CardTitle>
          <SettingDetail>
            <InputHolder>
              <Label htmlFor="check3">
                Allow Registration
                <small
                  style={
                    enableReg
                      ? { color: "green", cursor: "pointer" }
                      : { color: "red", cursor: "pointer" }
                  }
                >
                  {enableReg ? "true" : "false"}
                </small>
              </Label>
              <Input type="checkbox" id="check3" value={enableReg} onChange={enableRegistration} />
            </InputHolder>
            <InputHolder>
              <Label htmlFor="check2">
                Disable balance on add{" "}
                <small
                  style={
                    disabledAdd
                      ? { color: "green", cursor: "pointer" }
                      : { color: "red", cursor: "pointer" }
                  }
                >
                  {disabledAdd ? "true" : "false"}
                </small>
              </Label>
              <Input type="checkbox" value={disabledAdd} onChange={disableBalanceAdd} id="check2" />
            </InputHolder>
            <InputHolder>
              <Label htmlFor="check">
                Disable balance on Edit{" "}
                <small
                  style={
                    balance
                      ? { color: "green", cursor: "pointer" }
                      : { color: "red", cursor: "pointer" }
                  }
                >
                  {balance ? "true" : "false"}
                </small>
              </Label>
              <Input type="checkbox" value={balance} onChange={disableBalanceEdit} id="check" />
            </InputHolder>
          </SettingDetail>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Input = styled.input`
  margin-left: 4px;
  display: none;
`;
const Label = styled.label`
  font-size: 15px;
  small {
    margin-left: 3px;
  }
`;
const InputHolder = styled.div``;
const SettingDetail = styled.div`
  padding: 10px 20px;
`;

const CardTitle = styled.div`
  background: whitesmoke;
  font-size: 17px;
  font-weight: 400;
  text-transform: capitalize;
  padding: 10px 20px;
  border-bottom: 1px solid lightgray;
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
const GoBack = styled(Link)`
  text-decoration: none;
  color: blue;
  cursor: pointer;
  font-size: 14px;
`;
const TopDiv = styled.div``;
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
