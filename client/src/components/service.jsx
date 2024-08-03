import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Service = () => {
  const { id } = useParams();
  const initialValues = {
    personname: "",
    carnumber: "",
    carname: "",
    complaint: "",
    status: "",
  };

  const [service, setService] = useState(initialValues);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/create/service`
        );
        setService(response.data);
      } catch (error) {
        console.log("error on creating data ", error);
      }
      fetchService();
    };
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8000/api/v1/create/allService"
        );
        setData(result.data);
      } catch (error) {
        console.log("error on displaying data ", error);
      }
      fetchData();
    };
  }, []);

  return (
    <main
      id="service"
      className="bg-black w-screen h-screen flex items-center flex-col justify-start pt-28 gap-4"
    >
      <div
        id="main-service"
        className="flex items-center justify-center flex-col gap-10 w-full bg-black"
      >
        <div id="sub-ones" className="flex items-center justify-center gap-4">
          <input
            name="personname"
            id="service-name"
            value={service.personname}
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Person Name"
          />
          <input
            name="carnumber"
            id="service-number"
            value={service.carnumber}
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Number"
          />
          <input
            name="carname"
            id="service-car"
            value={service.carname}
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Name"
          />
          <input
            name="complaint"
            id="service-comp"
            value={service.complaint}
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
          <input
            name="status"
            id="service-status"
            value={service.status}
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="status"
          />
        </div>
        <button
          id="service-reg"
          className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
        >
          Register
        </button>
        <div id="sub-twos" className="flex items-center justify-center gap-4">
          <input
            id="service-search"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Search By Name "
          />
          <button
            id="service-btn"
            className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default Service;
