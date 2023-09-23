import "./form.css";
import { useState } from "react";


const AddBirthday = (props) => {
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    age: "",
    id: Date.now(),
  });

  const addHandler = (evt) => {
    const { name, value } = evt.target;
    const updateItem = { ...newItem, [name]: value };
    setNewItem(updateItem);
  };

  const submitHandler = (evt) => {
    props.newBirthday(newItem);
    setNewItem({
      name: "",
      image: "",
      age: "",
    });
    evt.preventDefault();
  };

  const handleClose = () => {
    console.log("Close button clicked");
    props.onClose();
  };
  

  return (
    <>
      <div className="form-overlay">
        <div className="form-container">
          <form className="form">
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
            <div className="buttons">
              <button className="submit" type="submit" onClick={submitHandler}>
                Add
              </button>
              <button  type="button" className="close" onClick={props.onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBirthday;
