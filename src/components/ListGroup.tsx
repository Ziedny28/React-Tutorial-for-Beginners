function ListGroup() {
  //city list
  let items = ["NY", "Malang", "Jakarta", "Surabaya", "Bandung", "Bali"];
  items = [];

  // in a variable
  // const message = items.length === 0 ? <p>There is no item</p> : null;

  // in a function
  // const getMessage = () => {
  //   return items.length === 0 ? <p>There is no item</p> : null;
  // };
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>There is no item</p> : null} */}
      {items.length === 0 && <p>There is no item</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
