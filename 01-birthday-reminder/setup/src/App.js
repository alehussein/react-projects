import React, { useState } from "react";
import data from "./data";
import List from "./List";
import AddBirthday from "./Componets/addBirthday";
import Form from "./Componets/editForm";

function App() {
  const [dataYears, setDataYears] = useState(data);
  const [idClick, setIdClick] = useState(null);
  const [add, setAdd] = useState(null);

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
    setAdd(!add);
  };

  const handleClose = () => {
    setIdClick(null);
  };

  console.log(idClick);

  return (
    <>
      <List
        data={dataYears}
        onClear={handlerClearData}
        onEdit={handleEdit}
        onAdd={addHandler}
      />
      {add !== null && (
        <AddBirthday newBirthday={handlerNewBirthDay} onClose={handleClose} />
      )}

      {idClick !== null && <Form idClick={idClick} onClose={handleClose} />}
    </>
  );
}

export default App;
