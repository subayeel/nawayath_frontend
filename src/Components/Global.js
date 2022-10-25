import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    background: #fff;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
    margin: 0;
    box-sizing: border-box;
}
`;

export const CenterFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  min-height: 80vh;
`;

export const MainWrapper = styled(CenterFlexContainer)``;

export const Table = styled.table`
  width: 75%;
  border-collapse: collapse;
  margin: 14px 0;
`;
export const TableRow = styled.tr`
  &:hover {
    background-color: #ccc;
  }
`;
export const TableDivision = styled.td`
  border-bottom: 1px solid #000;
  font-weight: 600;
  font-size: 18px;
  padding: 5px 0;
  text-align: start;
`;
export const TableHeader = styled.th`
  text-align: start;
  font-size: 18px;
  font-weight: 700;
  color: #ba8823;
  margin: 0 14px;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export default GlobalStyle;
