import React from "react";

const List = (props) => {

  

  return (
    <>
      <main>
        <div className="container">
          <h3>List Birthdays</h3>
          {!props.data ? (
            <p style={{ textAlign: "center" }}>Empty List</p>
          ) : (
            props.data.map((item) => {
              return (
                <div key={item.name} className="person" onClick={props.onEdit}>
                  <img src={item.image} alt={item.name} id={item.id}/>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.age} years</p>
                  </div>
                </div>
              );
            })
          )}
          <button onClick={props.onClear}>Clear All</button>
          <button onClick={props.onAdd}>Add New Birthday</button>
        </div>
      </main>
    </>
  );
};

export default List;
