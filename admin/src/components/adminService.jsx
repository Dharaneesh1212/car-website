import Service from "./service";

const AdminService = () => {
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
          <div id="sub-ones" className="flex items-center justify-center gap-4">
            <input
              name="username"
              id="service-name"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="User Name"
            />
            <input
              name="carnumber"
              id="service-number"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Car Number"
            />
            <input
              name="carname"
              id="service-car"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Car Name"
            />
            <input
              name="complaint"
              id="service-comp"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Complaint"
            />
            <input
              name="status"
              id="service-status"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Status"
            />
          </div>
          <button
            id="service-reg"
            className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
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
