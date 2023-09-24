import React from "react";

const List = (props) => {
  return (
    <>
      <main>
        <div className="container">
          {props.loading && <h4 style={{textAlign:"center"}}>Loading...</h4>}
          {!props.loading && (
            <>
              <h3>{props.data.length} - Birthdays Today</h3>
              {!props.data ? (
                <p style={{ textAlign: "center" }}>Empty List</p>
              ) : (
                props.data.map((item, idx) => {
                  return (
                    <div key={idx} className="person" onClick={props.onEdit}>
                      <img src={item.image} alt={item.name} id={item.id} />
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
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default List;
