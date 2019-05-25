import React, { Component } from 'react';

import {
  FormGroup, Label, Input, Button
} from 'reactstrap';

class Search extends Component {
  render() {
    return (
      <FormGroup className="form-search">
        <Label for="searchword" hidden>Tìm kiếm</Label>
        <Input type="text" name="searchword" id="searchword" placeholder="" />
        <Button color="primary">Tìm</Button>
      </FormGroup>
    );
  }
}

export default Search;