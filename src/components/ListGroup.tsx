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
  //event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {/* condition rendering */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
