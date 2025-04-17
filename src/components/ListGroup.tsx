function ListGroup() {
  <h1>List Group</h1>;
  const items = [
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
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
