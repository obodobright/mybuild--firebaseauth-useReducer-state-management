import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { disabledAction } from "../redux/actions/Actions";
import { useSelector, useDispatch } from "react-redux";
export const Settings = () => {
  const editBalance = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(editBalance);
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
              <Label>Allow Registration</Label>
              <Input type="checkbox" />
            </InputHolder>
            <InputHolder>
              <Label>Disable balance on add</Label>
              <Input
                type="checkbox"
                value={editBalance}
                onChange={() => dispatch(disabledAction())}
              />
            </InputHolder>
            <InputHolder>
              <Label>Disable balance on Edit</Label>
              <Input type="checkbox" />
            </InputHolder>
          </SettingDetail>
        </Card>
      </Wrapper>
    </Container>
  );
};

const Input = styled.input`
  margin-left: 4px;
`;
const Label = styled.label`
  font-size: 15px;
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
