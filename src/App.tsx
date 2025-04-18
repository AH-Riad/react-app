import ListGroup from "./components/ListGroup";
function App() {
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
    <div>
      <ListGroup items={items} heading="Divisions" />
    </div>
  );
}
export default App;
