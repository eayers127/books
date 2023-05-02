import { Form } from 'react-bootstrap';

function BookCategory({ category, onChange }) {
  return (
    <Form>
      <Form.Group controlId="bookCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" value={category} onChange={onChange}>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Non-fiction</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default BookCategory;
