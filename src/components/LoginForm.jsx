import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitform = (e) => {
    e.preventDefault();
    const newEntry = { email: email, pass: pass };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {allEntry.map((curElm, ind) => {
                  return (
                    <>
                      <td key={ind + 1}>{ind}</td>
                      <td key={ind + 2}>{curElm.email}</td>
                      <td key={ind + 3}>{curElm.pass}</td>
                    </>
                  );
                })}
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
