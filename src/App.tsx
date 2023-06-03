import ListGroup from "./components/ListGroup";

function App() {
  let items = ["NY", "Malang", "Jakarta", "Surabaya", "Bandung", "Bali"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
