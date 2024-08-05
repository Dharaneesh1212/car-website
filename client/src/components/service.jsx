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
  const [data, setData] = useState([]);

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

  return (
    <main
      id="service"
      className="bg-black w-screen h-screen flex items-center flex-col justify-start pt-28 gap-4"
    >
      <div
        id="main-service"
        className="flex items-center justify-center flex-col gap-10 w-full bg-black"
      >
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
      {Array.isArray(data) &&
        data.map((car) => (
          <div
            className="flex items-center justify-center bg-zinc-900 text-xl"
            key={car._id}
          >
            <div className="flex items-center justify-center flex-col gap-4">
              <h1>{car.personname}</h1>
              <h1>{car.carnumber}</h1>
              <h1>{car.carname}</h1>
              <h1>{car.complaint}</h1>
              <h1>{car.status}</h1>
            </div>
            <div className="flex items-center justify-center flex-col">
              <button className="bg-green-500 text-xl px-4 py-1 rounded-md hover:bg-green-600">
                Edit
              </button>
              <button className="bg-red-500 text-xl px-4 py-1 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
    </main>
  );
};

export default Service;
