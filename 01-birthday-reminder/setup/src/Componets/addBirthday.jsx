import "./addBirthday.css";
import { useState } from "react";

const AddBirthday = (props) => {
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    age: "",
    id: Date.now()
  });

  const addHandler = (evt) => {
    const { name, value } = evt.target;
    const updateItem = { ...newItem, [name]: value };
    setNewItem(updateItem);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.newBirthday(newItem)
    setNewItem({
      name: '',
      image: '',
      age: '',
    })
  };

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={submitHandler}>
          <h3>New Birthday</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={addHandler}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            value={newItem.image}
            onChange={addHandler}
          />
          <label htmlFor="years">Years</label>
          <input
            type="number"
            name="age"
            value={newItem.age}
            onChange={addHandler}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddBirthday;
