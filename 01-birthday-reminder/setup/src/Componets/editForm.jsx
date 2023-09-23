import { useEffect, useState } from "react";
import "./form.css";

const Form = (props) => {
  const editBirthday = props.idClick;

  const [edit, setEdit] = useState({
    name: "",
    image: "",
    age: "",
  });

  useEffect(() => {
    setEdit(editBirthday);
  }, [editBirthday]);

  const addHandler = (evt) => {
    const { name, value } = evt.target;
    setEdit({ ...edit, [name]: value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    props.onClose();
  };

  return (
    <>
      <div className="form-overlay">
        <div className="form-container">
          <form className="form">
            <h3>Edit Birthday</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={edit.name}
              onChange={addHandler}
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              value={edit.image}
              onChange={addHandler}
            />
            <label htmlFor="years">Years</label>
            <input
              type="number"
              name="age"
              value={edit.age}
              onChange={addHandler}
            />
            <div className="buttons">
              <button className="submit" type="submit" onClick={submitHandler}>
                Edit
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

export default Form;
