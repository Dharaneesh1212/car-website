import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminService = () => {
  const { id } = useParams();
  const initialValues = {
    personname: "",
    carnumber: "",
    carname: "",
    complaint: "",
    status: "",
  };

  const [service, setService] = useState(initialValues);
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = id ? "put" : "post";
      const url = id
        ? `http://localhost:8000/api/v1/create/${id}`
        : `http://localhost:8000/api/v1/create/service`;
      const datas = await axios[method](url, service, {
        withCredentials: true,
      });
      console.log(datas.data);
      setService(initialValues);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/create/servicebyname/`
        );
        console.log(response.data);
        setService(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("error on creating data ", error);
        setData([]);
      }
    };
    fetchService();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/v1/create/allService"
        );
        console.log(result.data);
        setData(Array.isArray(result.data) ? result.data : []);
      } catch (error) {
        console.log("error on displaying data ", error);
        setData([]);
      }
    };
    fetchData();
  }, []);

  const deleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/create/${id}`);
      setData((prevData) => prevData.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const editService = async (id) => {};

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
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
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-4"
        >
          <div id="sub-ones" className="flex items-center justify-center gap-4">
            <input
              name="personname"
              id="service-name"
              value={service.personname}
              onChange={handleChange}
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Person Name"
            />
            <input
              name="carnumber"
              id="service-number"
              value={service.carnumber}
              onChange={handleChange}
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Car Number"
            />
            <input
              name="carname"
              id="service-car"
              value={service.carname}
              onChange={handleChange}
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Car Name"
            />
            <input
              name="complaint"
              id="service-comp"
              value={service.complaint}
              onChange={handleChange}
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Complaint"
            />
            <input
              name="status"
              id="service-status"
              value={service.status}
              onChange={handleChange}
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Status"
            />
          </div>
          <button
            type="submit"
            id="service-reg"
            className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default AdminService;
