import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../services/baseURL";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const [data, setData] = useState(false);
  // const[mail,setMail]=useState({emai:""})
  const [collect, setcollect] = useState({ email: "" });
  const [otp, setOTP] = useState({ otp: "" });
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const SendMail = (e) => {
    setcollect({ ...collect, [e.target.name]: e.target.value });
  };

  const SendOTP = (e) => {
    setOTP({ ...otp, [e.target.name]: e.target.value });
  };

  // verify mail that registered to generate otp
  const SubmitMail = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/otp-generate/${collect.email}`
      );

      if (response.success) return toast.success("email registered");
      else if (response.failed) return toast.error("email not registered");
      else return toast.error("something went wrong");
    } catch (e) {
      toast.error(e.error);
    }
  };

  // verify otp
  const SubmitOTP = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/otp-generate/${otp.otp}/${collect.email}`
      );

      if (response.success) {
        setData(true);
        return toast.success("otp verified");
      } else if (response.failed) {
        return toast.error("otp not valid");
      } else return toast.error("something went wrong");
    } catch (e) {
      toast.error(e.error);
    }
  };

  // update password

  const NewPassword = (e) => {
    setPass(e.target.value);
  };
  const UpdatePassword = async () => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/updatepass/${collect.email}`,
        {
          password: pass,
        }
      );

      if (response.success) {
        return toast.success("password changed successfully");
      } else return toast.error("something went wrong");
    } catch (e) {
      return toast.error(e.error);
    }
  };

  useEffect(() => {}, [collect, pass, otp]);

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
              name="email"
              onChange={SendMail}
              type="email"
              placeholder="Enter Your Email"
              className=""
              id="mail"
              required
            />

            <label style={{ fontSize: "20px" }} htmlFor="ff">
              OTP
            </label>
            <input
              name="otp"
              onChange={SendOTP}
              placeholder="Enter OTP"
              className=""
              type="text"
              id="mail"
            />
            <button
              type="submit"
              className="pass-button"
              onClick={() => SubmitOTP()}
            >
              Get OTP
            </button>
            <button className="pass-button" onClick={SubmitMail}>
              Verify
            </button>
          </form>
        )}

        {data && (
          <div className="pass-card">
            <label style={{ fontSize: "20px" }} htmlFor="#new">
              New Password
            </label>
            <input
              onChange={NewPassword}
              placeholder="Enter New Password"
              type="text"
              id="new"
            />
            <button onClick={UpdatePassword()} className="pass-button">
              Change Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
