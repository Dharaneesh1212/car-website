import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "./context";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const { url } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/api/user/resetpassword/` + token, {
        password,
      })
      .then((response) => {
        if (response.data.status) {
          alert("The password has been changed");
          navigate("/register");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <div
        id="reset-password"
        className="flex items-center justify-evenly flex-row bg-zinc-900 h-[25rem] w-[25rem] rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
      >
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center flex-col gap-8 w-[25rem]"
          >
            <h1 className="text-2xl font-semibold font-mono text-white">
              Reset Password
            </h1>
            <input
              type="password"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              className="h-8 w-72 bg-zinc-600 text-white p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center h-10 w-[10rem] bg-blue-600 rounded-md font-sans font-medium text-lg"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
