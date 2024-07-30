const Amc = () => {
  return (
    <main
      id="amc"
      className="bg-black w-screen h-screen flex items-center flex-col justify-center gap-4"
    >
      <div
        id="main-amc"
        className="flex items-center justify-start flex-col gap-10 h-[20rem]"
      >
        <div id="sub-onea" className="flex items-center justify-center gap-4">
          <input
            id="amc-name"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Person Name"
          />
          <input
            id="amc-number"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Number"
          />
          <input
            id="amc-car"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Car Name"
          />
          <input
            id="amc-comp"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
          <input
            id="amc-status"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Complaint"
          />
        </div>
        <button
          id="amc-reg"
          className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
        >
          Register
        </button>
        <div id="sub-twoa" className="flex items-center justify-center gap-4">
          <input
            id="amc-search"
            className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
            type="text"
            placeholder="Search By Name "
          />
          <button
            id="amc-btn"
            className="animate__animated animate__zoomIn bg-red-700 text-xl text-white outline-none p-2 rounded-md h-[3rem] w-[10rem]"
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default Amc;
