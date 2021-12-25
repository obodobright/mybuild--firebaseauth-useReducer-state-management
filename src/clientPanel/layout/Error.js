import styled from "styled-components";
import { MdWifiTetheringErrorRounded } from "react-icons/md";
export const Error = () => {
  return (
    <Container>
      <Wrapper>
        <IconHolder>
          <MdWifiTetheringErrorRounded />
        </IconHolder>
        <ErrorMessage>
          <h1>Ooops!</h1>
          <p>Check your internet connectivty</p>
        </ErrorMessage>
      </Wrapper>
    </Container>
  );
};

const IconHolder = styled.div`
  font-size: 100px;
  color: #1777f2;
`;
const ErrorMessage = styled.div`
  text-align: center;
  color: #1777f2;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
