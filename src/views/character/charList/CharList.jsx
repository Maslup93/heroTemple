import React from "react";
import {Table} from 'react-bootstrap';

import './charList.css'

const CharList = (props) => {
  return (
    <div className="listContainer">
      <Table  className="list">
        <thead >
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody >
        {props.listName}
        </tbody>
      </Table>
    </div>
  );
};

export default CharList;
