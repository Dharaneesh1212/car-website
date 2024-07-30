const Service = () => {
  return (
    <main
      id="service"
      className="bg-black w-screen h-screen flex items-center flex-col justify-center gap-4"
    >
      <div className="flex items-center justify-start flex-col gap-10 h-[20rem]">
        <div className="flex items-center justify-center gap-4">
          <input
            id="service-name"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Person Name"
          />
          <input
            id="service-number"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Number"
          />
          <input
            id="service-car"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Name"
          />
          <input
            id="service-comp"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
          <input
            id="service-status"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
        </div>
        <button
          id="service-reg"
          className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
        >
          Register
        </button>
        <div className="flex items-center justify-center gap-4">
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
