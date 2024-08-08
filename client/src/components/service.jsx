import { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredService, setFilteredService] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/service/service")
      .then((res) => {
        setService(res.data.data);
        setFilteredService(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = service.filter((item) =>
        item.username.toLowerCase().includes(query)
      );
      setFilteredService(results);
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, [searchQuery, service]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
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
        <div id="sub-twos" className="flex items-center justify-center gap-4">
          <input
            id="service-search"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Search By Name"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : filteredService.length > 0 ? (
        filteredService.map((item) => (
          <div
            key={item._id}
            className="text-white flex items-center justify-center gap-10 text-xl h-12 rounded-lg m-4 p-4 bg-zinc-700 capitalize"
          >
            <p>
              User name:{" "}
              <span className="text-red-500 font-medium">{item.username}</span>
            </p>
            <p>
              Car name:{" "}
              <span className="text-red-500 font-medium">{item.carname}</span>
            </p>
            <p>
              Car number:{" "}
              <span className="text-red-500 font-medium">{item.carnumber}</span>
            </p>
            <p>
              Complaint:{" "}
              <span className="text-red-500 font-medium">{item.complaint}</span>
            </p>
            <p>
              Status:{" "}
              <span className="text-red-500 font-medium">{item.status}</span>
            </p>
          </div>
        ))
      ) : (
        <p className="text-white">No services found</p>
      )}
    </main>
  );
};

export default Service;
