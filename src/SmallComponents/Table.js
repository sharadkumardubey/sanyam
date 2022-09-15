import React from "react";
import { getIcon } from "../Utils/Util";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";

import { deleteDoc, doc, db } from "../firebase";

function LocalTable(props) {
    const {
        header=[],rows=[], dataName
    } = props;

    function toLowerKeys(obj) {
        return Object.keys(obj).reduce((accumulator, key) => {
          accumulator[key.toLowerCase()] = obj[key];
          return accumulator;
        }, {});
    }
    
    const deleteDocRow = async(docId) => {
        console.log('-->', docId, dataName);
        await deleteDoc(doc(db, dataName, docId));
    };

  return (
    <TableContainer>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                header.map((headerItem, index)=>{
                    return (
                        <TableCell key={index}>
                            <h3>{headerItem}</h3>
                        </TableCell>
                    )
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => {
            row = toLowerKeys(row);
            return (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                {
                header.map((headerItem, index)=>{
                    return (
                        <TableCell component="th" scope="row">
                            {row[headerItem.toLowerCase().split(' ').join('')]}
                        </TableCell>
                    )
                })
            }
              <TableCell align="left">
                {console.log('->', row.docId, row, dataName)}
                <button onClick={()=>deleteDocRow(row.docid)}>{getIcon("cut")}</button>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LocalTable;
