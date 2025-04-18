import { useState } from "react";

// import { MouseEvent } from "react";
//{items:[], heading: string}
interface Props {
  items: string[];
  heading: string;
  onselectItem: (item: string) => void;
}

function ListGroup({ items, heading, onselectItem }: Props) {
  <h1>List Group</h1>;

  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index);
              onselectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
