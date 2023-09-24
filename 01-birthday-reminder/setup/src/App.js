import React, { useEffect, useState } from "react";
import data from "./data";
import List from "./List";
import AddBirthday from "./Componets/addBirthday";
import Form from "./Componets/editForm";

function App() {
  const [dataYears, setDataYears] = useState([]);
  const [idClick, setIdClick] = useState(null);
  const [add, setAdd] = useState(false);
  const [loading, setLoading] = useState(true);

  const URL =
    "https://react-http-7cf50-default-rtdb.firebaseio.com/birthday.json";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Error to fetch Data");
      }

      const data = await response.json();
      if (!data) {
        setLoading(false);
      } else {
        const dataArray = Object.values(data);
        setDataYears(dataArray);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteData = () => {
    fetch(URL, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Delete Success");
          setDataYears([])
        } else {
          console.log("error deleting All");
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addData = (newBirthday) => {
    console.log(newBirthday);
    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBirthday),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data Added Success");
          getData();
        } else {
          console.log("Error Adding Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
    setAdd(false);
  };

  const handleDelete = () => {
    const deleteItem = data.filter((item) => item.id !== idClick.id);
    setDataYears(deleteItem);
  };

  return (
    <>
      <List
        data={dataYears}
        onClear={deleteData}
        onEdit={handleEdit}
        onAdd={addHandler}
        loading={loading}
      />

      {add !== false && (
        <AddBirthday newBirthday={addData} onClose={handleClose} />
      )}

      {idClick !== null && (
        <Form idClick={idClick} onClose={handleClose} onDelete={handleDelete} />
      )}
    </>
  );
}

export default App;
