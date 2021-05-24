import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import './search.css'

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    getQuery(text);
  };

  return (
    <div  >
      <InputGroup >
        <FormControl
          placeholder="Character's Name"
          value={text}
          onChange={onChangeHandler}
        />
        <InputGroup.Append>
          <Button onClick={onSubmitHandler} variant="outline-secondary">
            Button
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
