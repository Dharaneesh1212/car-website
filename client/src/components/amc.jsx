const Amc = () => {
  return (
    <main id="amc" className="bg-black w-screen h-screen flex items-center flex-col justify-center gap-4">
      <div className="flex items-center justify-start flex-col gap-10 h-[20rem]">
        <div className="flex items-center justify-center gap-4">
          <input
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Person Name"
          />
          <input
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Number"
          />
          <input
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Name"
          />
          <input
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
          <input
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
        </div>
        <button className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]">
          Register
        </button>
        <div className="flex items-center justify-center gap-4">
          <input
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Search By Name "
          />
          <button className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]">
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default Amc;
