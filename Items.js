import Item from "./Item";

function Items({ items, setItems }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map(function (item) {
        var {name, key} = item;
        return <Item key={key} name={name} index={key} setItems={setItems} />;
      })}
    </ul>
  );
}

export default Items;