import { useState } from "react";
import Form from "../../../../../../Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../../../../userDashboard/redux/feature/auth/authSlice";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(registerUser({ username: username, password: password }));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <Form
        username={username}
        password={password}
        handleSubmit={handleSubmit}
        setPassword={setPassword}
        setUserName={setUserName}
      />
    </div>
  );
};

export default Register;
