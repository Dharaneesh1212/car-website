import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [carnumber, setCarnumber] = useState("");
  const [carname, setCarname] = useState("");
  const [complaint, setComplaint] = useState("");
  const [status, setStatus] = useState("");
  const [amc, setAmc] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/service/servicebyid/${id}`)
      .then((res) => {
        const data = res.data.data;
        setUsername(data.username);
        setCarnumber(data.carnumber);
        setCarname(data.carname);
        setComplaint(data.complaint);
        setStatus(data.status);
        setAmc(data.amc);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleEdit = async () => {
    try {
      const updatedService = {
        username,
        carnumber,
        carname,
        complaint,
        status,
        amc,
      };

      await axios.put(
        `http://localhost:8000/api/service/${id}`,
        updatedService
      );
      window.alert("Service updated successfully");
      navigate("/adminService");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main
      id="service"
      className="bg-black w-screen h-screen flex items-center flex-col justify-start pt-28 gap-4"
    >
      <div
        id="main-service"
        className="flex items-center justify-center flex-col gap-10 w-full bg-black"
      >
        <div className="flex items-center justify-center flex-col gap-4">
          <div
            id="sub-ones"
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <div className="flex flex-col">
              <label htmlFor="service-name" className="text-white text-lg">
                User Name
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                id="service-name"
                className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
                type="text"
                placeholder="User Name"
                value={username}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="service-number" className="text-white text-lg">
                Car Number
              </label>
              <input
                onChange={(e) => setCarnumber(e.target.value)}
                name="carnumber"
                id="service-number"
                className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
                type="text"
                placeholder="Car Number"
                value={carnumber}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="service-car" className="text-white text-lg">
                Car Name
              </label>
              <input
                onChange={(e) => setCarname(e.target.value)}
                name="carname"
                id="service-car"
                className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
                type="text"
                placeholder="Car Name"
                value={carname}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="service-comp" className="text-white text-lg">
                Complaint
              </label>
              <input
                onChange={(e) => setComplaint(e.target.value)}
                name="complaint"
                id="service-comp"
                className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
                type="text"
                placeholder="Complaint"
                value={complaint}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="service-status" className="text-white text-lg">
                Status
              </label>
              <select
                name="status"
                id="service-status"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              >
                <option value="Pending">Pending</option>
                <option value="On-Process">On-Process</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="service-amc" className="text-white text-lg">
                AMC
              </label>
              <select
                name="amc"
                id="service-amc"
                onChange={(e) => setAmc(e.target.value === "true")}
                value={amc.toString()}
                className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              >
                <option value="false">No-AMC</option>
                <option value="true">AMC</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleEdit}
            id="service-reg"
            className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
          >
            Update
          </button>
        </div>
      </div>
    </main>
  );
};

export default EditService;
