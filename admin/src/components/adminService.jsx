import Service from "./service";
import { useState } from "react";
import axios from "axios";

const AdminService = () => {
  const [username, setUsername] = useState("");
  const [carnumber, setCarnumber] = useState("");
  const [carname, setCarname] = useState("");
  const [complaint, setComplaint] = useState("");
  const [status, setStatus] = useState("pending");
  const [amc, setAmc] = useState(false);

  const [loading, setLoading] = useState(true);

  const handleRegister = async () => {
    const data = {
      username,
      carnumber,
      carname,
      complaint,
      status,
      amc,
    };
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/api/service", data);
      setLoading(false);
      alert("Service registered successfully");
      setUsername("");
      setCarnumber("");
      setCarname("");
      setComplaint("");
      setStatus("pending");
      setAmc(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response?.data || error.message);
      alert("An error occurred, please check the console for details");
    }
  };

  return (
    <main
      id="service"
      className="bg-black w-screen min-h-screen flex items-center flex-col justify-start pt-28 gap-4"
    >
      <div
        id="main-service"
        className="flex items-center justify-center flex-col gap-10 w-full bg-black px-4"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <div
            id="sub-ones"
            className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto bg-black"
          >
            <input
              name="username"
              id="service-name"
              className="animate__animated animate__zoomIn rounded-md p-2 text-lg md:text-xl outline-none text-white bg-zinc-700 w-full md:w-[15rem]"
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              name="carnumber"
              id="service-number"
              className="animate__animated animate__zoomIn rounded-md p-2 text-lg md:text-xl outline-none text-white bg-zinc-700 w-full md:w-[15rem]"
              type="text"
              placeholder="Car Number"
              value={carnumber}
              onChange={(e) => setCarnumber(e.target.value)}
            />
            <input
              name="carname"
              id="service-car"
              className="animate__animated animate__zoomIn rounded-md p-2 text-lg md:text-xl outline-none text-white bg-zinc-700 w-full md:w-[15rem]"
              type="text"
              placeholder="Car Name"
              value={carname}
              onChange={(e) => setCarname(e.target.value)}
            />
            <input
              name="complaint"
              id="service-comp"
              className="animate__animated animate__zoomIn rounded-md p-2 text-lg md:text-xl outline-none text-white bg-zinc-700 w-full md:w-[15rem]"
              type="text"
              placeholder="Complaint"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
            />
            <select
              name="status"
              id="service-status"
              className="animate__animated animate__zoomIn rounded-md p-2 text-lg md:text-xl outline-none text-white bg-zinc-700 w-full md:w-[15rem]"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="On-Process">On-Process</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              name="amc"
              id="service-amc"
              className="animate__animated animate__zoomIn rounded-md p-2 text-lg md:text-xl outline-none text-white bg-zinc-700 w-full md:w-[15rem]"
              value={amc.toString()}
              onChange={(e) => setAmc(e.target.value === "true")}
            >
              <option value="false">No-AMC</option>
              <option value="true">AMC</option>
            </select>
          </div>
          <button
            id="service-reg"
            className="animate__animated animate__zoomIn bg-red-700 text-lg md:text-xl text-white outline-none p-2 rounded-md h-[3rem] w-full md:w-[10rem]"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
      <Service />
    </main>
  );
};

export default AdminService;
