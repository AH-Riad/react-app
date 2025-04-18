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
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Divisions"
        onselectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
