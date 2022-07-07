import React from "react";

const GetUser = (props) => {
  return (
    <div className="col-10 col-md-4 mt-5 mb-3">
      <div className="card p-2">
        <div className="d-flex align-items-center">
          <div className="image">
            <img
              src={props.data.avatar_url}
              className="rounded"
              width="155"
              alt="200"
            />
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0 textLeft">{props.data.login}</h4>
            <div className="p-2 mt-2 mx-3 bg-info d-flex justify-content-between rounded text-white stats">
              <div className="d-flex flex-column">
                <span className="articles">Articles</span>
                <span className="number1">
                  {Math.floor(Math.random() * (99 - 30)) + 30}
                </span>
              </div>
              <div className="d-flex flex-column">
                <span className="followers">Followers</span>
                <span className="number2">
                  {Math.floor(Math.random() * (999 - 111)) + 111}
                </span>
              </div>
              <div className="d-flex flex-column">
                <span className="rating">Rating</span>
                <span className="number3">
                  {(Math.random() * (10 - 3)).toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUser;
