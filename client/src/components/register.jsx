import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./context";

const Register = () => {
  const [activeTab, setActiveTab] = useState("sign-up");
  const { url } = useContext(StoreContext);


  const handleTabToggle = () => {
    setActiveTab(activeTab === "sign-up" ? "sign-in" : "sign-up");
  };

  const navigate = useNavigate();

  // Signup functionalities
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${url}/api/user/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          alert("user created successfully , Now please Signin");
          setUsername("");
          setEmail("");
          setPassword("");
          handleTabToggle();
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.message === "User already exists"
        ) {
          alert(
            "User already exists. Please sign in or use another email to register."
          );
        } else {
          console.log(error);
        }
      });
  };

  // Signin functionalities
  const [loginemail, setLoginemail] = useState("");
  const [loginpassword, setLoginpassword] = useState("");

  axios.defaults.withCredentials = true;
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${url}/api/user/login`,
        {
          email: loginemail,
          password: loginpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.status) {
          alert("Logged in successfully");
          localStorage.setItem("token", response.data.token);
          navigate("/service");
          setLoginemail("");
          setLoginpassword("");
        }
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.message;

          // Customize the alerts based on the error message
          switch (errorMessage) {
            case "User not registered":
              alert("User not registered. Please sign up first.");
              break;
            case "Password is incorrect":
              alert("Password is incorrect. Please try again.");
              break;
            default:
              alert("An error occurred. Please try again.");
              break;
          }

          console.error("Error Response Data:", error.response.data);
          console.error("Error Response Status:", error.response.status);
          console.error("Error Response Headers:", error.response.headers);
        } else if (error.request) {
          console.error("Error Request:", error.request);
        } else {
          console.error("Error Message:", error.message);
        }
        console.error("Error Config:", error.config);
      });
  };

  return (
    <main
      id="register"
      className="flex items-center justify-center h-screen bg-black w-screen"
    >
      <div className="flex items-center justify-evenly flex-row bg-zinc-900 text-white h-[30rem] w-[50rem] rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)] mt-10">
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-up" ? "" : "hidden"
          }`}
        >
          <form
            id="signupform"
            className="flex items-center justify-center flex-col gap-8 w-[25rem]"
            onSubmit={handleSubmit}
          >
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">
              Create Account
            </h1>
            <input
              id="inputone"
              type="text"
              placeholder="Name"
              onChange={(e) => setUsername(e.target.value)}
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              id="inputtwo"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              id="inputthree"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-red-600 rounded-md font-sans font-medium text-lg">
              Sign Up
            </button>
          </form>
        </div>
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-in" ? "" : "hidden"
          }`}
        >
          <form
            id="signinform"
            className="flex items-center justify-center flex-col gap-10 w-[25rem]"
            onSubmit={handleLoginSubmit}
          >
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">
              Sign In
            </h1>
            <input
              id="inputfour"
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginemail(e.target.value)}
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              id="inputfive"
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginpassword(e.target.value)}
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-blue-600 rounded-md font-sans font-medium text-lg">
              Sign In
            </button>
            <Link
              to="/forgotPassword"
              className="animate__animated animate__zoomIn text-xl font-small font-mono underline"
            >
              Forgot password?
            </Link>
          </form>
        </div>
        <div>
          <div className="flex items-center justify-center flex-row">
            <div
              id="signin"
              className={`bg-red-500 h-[30rem] w-[25rem] rounded-3xl flex justify-center items-center flex-col p-2 gap-4 ${
                activeTab === "sign-in" ? "" : "hidden"
              }`}
            >
              <h1 className="animate__animated animate__zoomIn text-3xl font-semibold font-mono">
                Welcome Back !
              </h1>
              <p className="animate__animated animate__zoomIn text-xl font-small font-mono">
                Enter your personal details to use all site features
              </p>
              <button
                className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[8rem] bg-transparent rounded-md font-sans font-medium text-lg text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                onClick={handleTabToggle}
              >
                Sign Up
              </button>
            </div>
            <div
              id="signup"
              className={`bg-blue-500 h-[30rem] w-[25rem] rounded-3xl flex justify-center items-center flex-col p-2 gap-4 ${
                activeTab === "sign-up" ? "" : "hidden"
              }`}
            >
              <h1 className="animate__animated animate__zoomIn text-3xl font-semibold font-mono">
                Welcome Friend !
              </h1>
              <p className="animate__animated animate__zoomIn text-xl font-small font-mono">
                Enter your personal details to use all site features
              </p>
              <button
                className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[8rem] bg-transparent rounded-md font-sans font-medium text-lg text-white shadow-[0_5px_15px_rgba(0,0,0,0.35)]"
                onClick={handleTabToggle}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
