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
          <form className="pass-card">
            <label style={{ fontSize: "20px" }} htmlFor="ff">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className=""
              id="mail"
              required
            />

            <label style={{ fontSize: "20px" }} htmlFor="ff">
              OTP
            </label>
            <input placeholder="Enter OTP" className="" type="text" id="mail" />
            <button
              type="submit"
              className="pass-button"
              onClick={() => setData(!data)}
            >
              Get OTP
            </button>
            <button className="pass-button" onClick={() => setData(!data)}>
              Verify
            </button>
          </form>
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
