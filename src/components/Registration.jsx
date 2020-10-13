import React from 'react';

const Registration = () => {
  return (
    <>
      <div className="col-sm-4">
        <h2>Registration</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fName"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-lg btn-warning">
            Cancel
          </button>
          <button type="submit" className="btn btn-lg btn-primary float-right">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
