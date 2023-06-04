import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <Button color="info" onClick={() => console.log("clicked")}>
        button but from app tsx
      </Button>
    </div>
  );
}

export default App;
