import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export const Column = styled(Row)`
  flex-direction: column;
`;