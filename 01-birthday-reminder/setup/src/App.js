import React, { useState } from "react";
import data from "./data";
import List from "./List";
import AddBirthday from "./Componets/addBirthday";

function App() {
  const [dataYears, setDataYears] = useState(data);

  const handlerClearData = () => {
    setDataYears([]);
  };

  const handlerNewBirthDay = async (newBirthday) => {
    const newDataBirthDays = [...dataYears, newBirthday];
    setDataYears(newDataBirthDays);
  };

  return (
    <>
      <List data={dataYears} onClear={handlerClearData} />
      <AddBirthday newBirthday={handlerNewBirthDay} />
    </>
  );
}

export default App;

