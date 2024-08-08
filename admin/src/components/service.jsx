import { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Service = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/service/all")
      .then((res) => {
        setService(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      axios.delete(`http://localhost:8000/api/service/${id}`);
      window.confirm("Do you want to delete the service")
      setService(service.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-black h-fit w-screen p-4">
      {service.length > 0 ? (
        service.map((item) => (
          <div
            key={item._id}
            className="text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 text-base md:text-lg rounded-lg p-4 mb-4 bg-zinc-700 capitalize"
          >
            <p>
              User name:{" "}
              <span className="text-sky-400 font-medium">{item.username}</span>
            </p>
            <p>
              Car number:{" "}
              <span className="text-sky-400 font-medium">{item.carnumber}</span>
            </p>
            <p>
              Car name:{" "}
              <span className="text-sky-400 font-medium">{item.carname}</span>
            </p>
            <p>
              Complaint:{" "}
              <span className="text-sky-400 font-medium">{item.complaint}</span>
            </p>
            <p>
              Status:{" "}
              <span className="text-sky-400 font-medium">{item.status}</span>
            </p>
            <p>
              AMC:{" "}
              <span className="text-sky-400 font-medium">
                {item.amc ? "AMC" : "No-AMC"}
              </span>
            </p>
            <div className="flex gap-2">
              <Link to={`/editservice/${item._id}`}>
                <button className="text-green-500 flex items-center justify-center">
                  <FaEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-red-500 flex items-center justify-center"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-center">No services found</p>
      )}
    </main>
  );
};

export default Service;
