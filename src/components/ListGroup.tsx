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
  return (
    <>
      <h1>List</h1>
      {/* condition rendering */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
