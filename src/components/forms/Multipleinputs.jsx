import React, { useState } from "react";

const Multipleinputs = () => {
  const [userregister, setuserRegister] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [urecords, setuRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegister({ ...userregister, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(userregister);
    const userData = { ...userregister, id: new Date().getTime().toString() };
    // console.log(userData);
    setuRecords([...urecords, userData]);
    setuserRegister({
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <>
      <div className="mainlogindiv" onSubmit={formSubmit}>
        <h1 className="text-center text-dark pt-5 pb-2">Login Form</h1>
        <form action="">
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              value={userregister.username}
              id="username"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={userregister.email}
              id="email"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              value={userregister.password}
              id="password"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="phone"
              value={userregister.phone}
              id="phone"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>
          <button name="register" type="register">
            Register
          </button>
        </form>
        <div>
          {urecords.map((celm, i) => {
            const { id, username, email, password, phone } = celm;
            return (
              <div
                key={id}
                className="bg-info d-flex justify-content-around border-bottom border-success"
              >
                <div>{i + 1}</div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{password}</div>
                <div>{phone}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Multipleinputs;
