import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="password-reset">
      <i
        onClick={() => navigate(-1)}
        className="fa fa-arrow-left"
        aria-hidden="true"
      ></i>
      <h1>Reset Password</h1>

      <div className="password-2">
        {!data && (
          <div className="pass-card">
            <label style={{ fontSize: "20px" }} htmlFor="ff">
              Email
            </label>
            <input
              placeholder="Enter Your Email"
              className=""
              type="text"
              id="mail"
            />
            <button className="pass-button" onClick={() => setData(!data)}>
              Verify
            </button>
          </div>
        )}

        {data && (
          <div className="pass-card">
            <label style={{ fontSize: "20px" }} htmlFor="#new">
              New Password
            </label>
            <input placeholder="Enter New Password" type="text" id="new" />
            <button className="pass-button">Change Password</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
