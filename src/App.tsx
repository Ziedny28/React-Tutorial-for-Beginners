import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [AlertVisible, SetAlertVisibility] = useState(false);

  return (
    <div>
      {AlertVisible && (
        <Alert onClose={() => SetAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="info" onClick={() => SetAlertVisibility(true)}>
        button but from app tsx
      </Button>
    </div>
  );
}

export default App;
