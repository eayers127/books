import React from 'react';
import { Form } from 'react-bootstrap';

const SortBy = ({ sortBy, onChange }) => {
  return (
    <Form>
    <Form.Group controlId="sortBy">
      <Form.Label>Sort By Amount of Pages</Form.Label>
      <Form.Control as="select" value={sortBy} onChange={onChange}>
        <option value="smallest">Smallest to Largest</option>
        <option value="largest">Largest to Smallest</option>
      </Form.Control>
    </Form.Group>
  </Form>
  );
};

export default SortBy;
