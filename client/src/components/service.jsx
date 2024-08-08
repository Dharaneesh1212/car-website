import { useState, useEffect } from "react";
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
      className="bg-black w-screen min-h-screen flex flex-col items-center justify-start pt-28 gap-4"
    >
      <div
        id="main-service"
        className="flex flex-col items-center justify-center gap-10 w-full px-4"
      >
        <div id="sub-twos" className="flex items-center justify-center gap-4 w-full max-w-md">
          <input
            id="service-search"
            className="animate__animated animate__zoomIn rounded-md p-2 text-lg sm:text-xl outline-none text-white bg-zinc-700 w-full"
            type="text"
            placeholder="Search By Name"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex-1 w-full flex flex-col items-center px-4 sm:px-0">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : filteredService.length > 0 ? (
          filteredService.map((item) => (
            <div
              key={item._id}
              className="text-white flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-4 sm:gap-10 text-lg sm:text-xl rounded-lg m-4 p-4 bg-zinc-700 capitalize w-full max-w-md sm:max-w-4xl"
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
      </div>
    </main>
  );
};

export default Service;
