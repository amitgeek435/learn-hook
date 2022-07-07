// import logo from './logo.svg';
import "./App.css";
// import ListGroup from "react-bootstrap/ListGroup";
// import ShortCircuitEval from "./components/ShortCircuitEval";
// import LoginForm from "./components/LoginForm";
// import Multipleinputs from "./components/forms/Multipleinputs";
// import LearnClassCompo from "./components/LearnClassCompo";
// import LearnuseEffect from "./components/useEffect/LearnuseEffect";
// import UseEffectApi from "./components/useEffect/useEffectApi";
import Uncontrolled from "./components/forms/Uncontrolled";

function App() {
  console.log(`env access key :- ${process.env.REACT_APP_SECRET_KEY}`);
  return (
    <>
      <div className="container-fluid">
        {/* <h1 className="text-center text-capitalize text-danger my-4">
          Hello Hooks!...
        </h1> */}
        {/* <ListGroup>
          <ListGroup.Item variant="primary">useState</ListGroup.Item>
          <ListGroup.Item variant="secondary">useEffect</ListGroup.Item>
          <ListGroup.Item variant="success">ShortCircuitEval</ListGroup.Item>
          <ListGroup.Item variant="danger">Danger</ListGroup.Item>
          <ListGroup.Item variant="warning">Warning</ListGroup.Item>
          <ListGroup.Item variant="info">Info</ListGroup.Item>
          <ListGroup.Item variant="dark">Dark</ListGroup.Item>
        </ListGroup> */}
        {/* <ShortCircuitEval /> */}
        {/* <LoginForm /> */}
        {/* <Multipleinputs /> */}
        {/* <LearnClassCompo /> */}
        {/* <LearnuseEffect /> */}
        {/* <UseEffectApi /> */}
        <Uncontrolled />
      </div>
    </>
  );
}

export default App;
