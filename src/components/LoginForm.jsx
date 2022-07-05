import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const LoginForm = () => {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (email && pass) {
      const newEntry = { id: new Date().getTime().toString(), email, pass };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPass("");
    } else {
      alert("Insert Email And Password");
    }
  };

  return (
    <>
      <div className="loginform">
        <h1 className="text-center text-dark pt-5 pb-2">Login Form</h1>
        <div className="formdiv">
          <div className="forminr w-50">
            <Form onSubmit={submitform}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
        <div className="alldatarecord w-75 px-5">
          {allEntry.map((curElm, ind) => {
            const { id, email, pass } = curElm;
            return (
              <>
                <div
                  key={id}
                  className="bg-info d-flex justify-content-around border-bottom border-success"
                >
                  <div>{ind + 1}</div>
                  <div>{email}</div>
                  <div>{pass}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
