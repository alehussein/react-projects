import React, { useState } from "react";
import data from "./data";
import List from "./List";
import AddBirthday from "./Componets/addBirthday";
import Form from "./Componets/editForm";

function App() {
  const [dataYears, setDataYears] = useState(data);
  const [idClick, setIdClick] = useState(null);
  const [add, setAdd] = useState(false);

  const handlerClearData = () => {
    setDataYears([]);
  };

  const handlerNewBirthDay = async (newBirthday) => {
    const newDataBirthDays = [...dataYears, newBirthday];
    setDataYears(newDataBirthDays);
  };

  const handleEdit = (evt) => {
    const foundItem = data.find((item) => item.id === +evt.target.id);
    if (foundItem) {
      setIdClick(foundItem);
    }
  };

  const addHandler = () => {
    setAdd(true);
  };

  const handleClose = () => {
    setIdClick(null);
    setAdd(false)
  };

  const handleDelete = () =>{
    console.log(idClick.id)
    const deleteItem = data.filter((item) => item.id !== idClick.id)
    setDataYears(deleteItem)
  }

  return (
    <>
      <List
        data={dataYears}
        onClear={handlerClearData}
        onEdit={handleEdit}
        onAdd={addHandler}
      />
      {add !== false && (
        <AddBirthday newBirthday={handlerNewBirthDay} onClose={handleClose} />
      )}

      {idClick !== null && <Form idClick={idClick} onClose={handleClose} onDelete={handleDelete}/>}
    </>
  );
}

export default App;
