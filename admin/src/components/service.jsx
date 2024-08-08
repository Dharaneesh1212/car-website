import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Service = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/service/all")
      .then((res) => {
        setService(res.data.data);
        setLoading(false);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      axios.delete(`http://localhost:8000/api/service/${id}`);
      setService(service.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {service.length > 0 ? (
        service.map((item) => (
          <div
            key={item._id}
            className="text-white flex items-center justify-center gap-10 text-lg h-12 rounded-lg m-4 p-4 bg-zinc-700 capitalize"
          >
            <p>
              User name:{" "}
              <span className="text-sky-400 font-medium">{item.username}</span>
            </p>
            <p>
              Car name:{" "}
              <span className="text-sky-400 font-medium">{item.carname}</span>
            </p>
            <p>
              Car number:{" "}
              <span className="text-sky-400 font-medium">{item.carnumber}</span>
            </p>
            <p>
              complaint:{" "}
              <span className="text-sky-400 font-medium">{item.complaint}</span>
            </p>
            <p>
              status:{" "}
              <span className="text-sky-400 font-medium">{item.status}</span>
            </p>
            <p>
              AMC:{" "}
              <span className="text-sky-400 font-medium">
                {item.amc ? "True" : "False"}
              </span>
            </p>
            <button className="text-green-500 flex items-center justify-center">
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-500 flex items-center justify-center"
            >
              <MdDelete />
            </button>
          </div>
        ))
      ) : (
        <p>No services found</p>
      )}
    </main>
  );
};

export default Service;
