import React from "react";

const NotFoundPage = ({ history }) => {
  return (
    <div className="container">
      <div className="row my-5 alert alert-light">
        <div className="col">
          <h1 className="text-center p-5">Page not found</h1>
        </div>
      </div>
      <div className="row">
        <button
          onClick={() => history.push("/")}
          className="p-2 btn btn-light btn-block"
        >
          Go to main Site
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
