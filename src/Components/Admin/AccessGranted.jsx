import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config";
import { useEffect, useState } from "react";

//stylings
import { HighlitedText, Column ,SubRow} from "./Admin.elements";
import {
  MainContainer,
  MainWrapper,
  Table,
  TableRow,
  TableDivision,
  TableHeader,
  TableBody,
} from "../Global";

const AccessGranted = () => {
  const [grantedList, setGrantedList] = useState([]);
  async function getGrantedList() {
    const q = query(
      collection(db, "accessGranted"),
      where("entry", "==", "granted")
    );
    let arr = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr = [...arr, doc.data()];
      setGrantedList(arr);
    });
  }

  function printRow(props) {
    return (
      <>
        <TableRow>
          <TableDivision rowSpan="5">{props.ownerName}</TableDivision>

          
        </TableRow>
        <TableRow>
          <TableDivision>{props.guest1}</TableDivision>
          <TableDivision>{props.entry}</TableDivision>
        </TableRow>
        <TableRow>
          <TableDivision>{props.guest2}</TableDivision>
          <TableDivision>{props.entry}</TableDivision>
        </TableRow>
        <TableRow>
          <TableDivision>{props.teamAnalyst}</TableDivision>
          <TableDivision>{props.entry}</TableDivision>
        </TableRow>
        <TableRow>
          <TableDivision>{props.technicalHead}</TableDivision>
          <TableDivision>{props.entry}</TableDivision>
        </TableRow>
      </>
    );
  }
  useEffect(() => {
    getGrantedList();
  }, []);

  return (
    <MainContainer>
      <MainWrapper>
        <Column>
          <HighlitedText>Permission granted List</HighlitedText>
          <Table>
            <TableBody>
              <TableHeader>Owner Name</TableHeader>
              <TableHeader>Owner's Guest</TableHeader>
              <TableHeader>Permission Status</TableHeader>

              {grantedList.map(printRow)}
            </TableBody>
          </Table>
        </Column>
      </MainWrapper>
    </MainContainer>
  );
};

export default AccessGranted;
