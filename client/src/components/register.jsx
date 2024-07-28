import { useState } from "react";

const Register = () => {
  const [activeTab, setActiveTab] = useState("sign-up");

  const handleTabToggle = () => {
    setActiveTab(activeTab === "sign-up" ? "sign-in" : "sign-up");
  };
  return (
    <main className="flex items-center justify-center h-screen bg-black w-full">
      <div className="flex items-center justify-evenly flex-row bg-zinc-900 text-white h-[30rem] w-[50rem] rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)] mt-10">
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-up" ? "" : "hidden"
          }`}
        >
          <form className="flex items-center justify-center flex-col gap-8 w-[25rem]">
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-red-500 rounded-md font-sans font-medium text-lg">
              Sign Up
            </button>
          </form>
        </div>
        <div
          className={`flex items-center justify-center ${
            activeTab === "sign-in" ? "" : "hidden"
          }`}
        >
          <form className="flex items-center justify-center flex-col gap-10 w-[25rem]">
            <h1 className="animate__animated animate__zoomIn text-2xl font-semibold font-mono">Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="animate__animated animate__zoomIn h-8 w-72 bg-zinc-600 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="animate__animated animate__zoomIn flex items-center justify-center h-10 w-[10rem] bg-blue-500 rounded-md font-sans font-medium text-lg">
              Sign In
            </button>
          </form>
        </div>
        <div>
          <div className="flex items-center justify-center flex-row">
            <div
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
