import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  <h1>List Group</h1>;
  let items = [
    "Rangpur",
    "Dhaka",
    "Khulna",
    "Chittagong",
    "Barishal",
    "Mymenshing",
    "Shylet",
  ];
  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* condition rendering */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
