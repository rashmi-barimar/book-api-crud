import { useState } from "react";
const BookEdit = ({ book, onSubmit }) => {
  const [value, setValue] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={value} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
