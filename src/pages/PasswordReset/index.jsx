import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../services/baseURL";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const [stepVerified, setStepVerified] = useState(false);
  const [collect, setCollect] = useState({ email: "" });
  const [verifyOtp, setOTP] = useState({ otp: "" });
  const [newPass, setNewPass] = useState("");
  const navigate = useNavigate();

  const onChangeMail = (e) => {
    setCollect({ ...collect, [e.target.name]: e.target.value });
  };

  const onChangeOTP = (e) => {
    setOTP({ ...verifyOtp, [e.target.name]: e.target.value });
  };

  const onChangePassword = (e) => {
    setNewPass(e.target.value);
  };

  //------------------------------------------ request OTP
  const submitMail = async () => {
    // toast.done("check your Email");
    try {
      const response = await axios.post(`${BASE_URL}/forgot-password/`, {
        email: collect.email,
      });
      toast.success(response.data.message || "OTP sent successfully");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Something went wrong");
      } else {
        toast.error("Server error, please try again later");
      }
    }
  };

  //--------------------------------------------------- verify otp
  const submitOTP = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/verify-otp/`, {
        otp: verifyOtp.otp,
        email: collect.email,
      });
      toast.success(response.data.message || "OTP verified");
      setStepVerified(true);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Invalid OTP");
      } else {
        toast.error("Server error, please try again later");
      }
    }
  };

  //---------------------------------------------------- update password
  const updatePassword = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/reset-password/`, {
        otp: verifyOtp.otp,
        email: collect.email,
        new_password: newPass,
      });
      toast.success(response.data.message || "Password changed successfully");
      navigate("/login"); // redirect after success
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error || "Something went wrong");
      } else {
        toast.error("Server error, please try again later");
      }
    }
  };

  useEffect(() => {}, [collect, newPass, verifyOtp]);

  return (
    <div className="password-reset">
      <i
        onClick={() => navigate(-1)}
        className="fa fa-arrow-left"
        aria-hidden="true"
      ></i>
      <h1>Reset Password</h1>

      <div className="password-2">
        {!stepVerified && (
          <div className="pass-card">
            <label style={{ fontSize: "20px" }} htmlFor="email">
              Email
            </label>
            <input
              name="email"
              onChange={onChangeMail}
              type="email"
              placeholder="Enter Your Email"
              id="email"
              required
            />

            <label style={{ fontSize: "20px" }} htmlFor="otp">
              OTP
            </label>
            <input
              name="otp"
              onChange={onChangeOTP}
              placeholder="Enter OTP"
              type="text"
              id="otp"
            />
            <button className="pass-button" onClick={submitMail}>
              Get OTP
            </button>
            <button
              style={{ backgroundColor: "red" }}
              className="pass-button"
              onClick={submitOTP}
            >
              Verify
            </button>
          </div>
        )}

        {stepVerified && (
          <div className="pass-card">
            <label style={{ fontSize: "20px" }} htmlFor="new-password">
              New Password
            </label>
            <input
              onChange={onChangePassword}
              placeholder="Enter New Password"
              type="password"
              id="new-password"
            />
            <button onClick={updatePassword} className="pass-button">
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
