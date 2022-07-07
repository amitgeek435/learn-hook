import React, { useEffect, useState } from "react";
import GetUser from "./users/GetUser";
import Loading from "./users/Loading";

const UseEffectApi = () => {
  const apiUrl = "https://api.github.com/users";
  //   console.log(apiUrl);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    try {
      const res = await fetch(apiUrl);
      const result = await res.json();
      setUsers(result);
      setLoading(false);
    } catch (error) {
      //   console.log(error);
      setLoading(true);
    }
  };
  useEffect(() => {
    return () => {
      getUsers();
    };
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center mt-5 h1 text-success h2-title">
          List Of Users
        </h2>
        <div className="row text-center">
          {users.map((user, index) => (
            <GetUser key={index} data={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
