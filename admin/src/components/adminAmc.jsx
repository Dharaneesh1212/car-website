const AdminAmc = () => {
  return (
    <main
      id="amc"
      className="bg-black w-screen h-screen flex items-center flex-col justify-start pt-28 gap-4"
    >
      <div
        id="main-amc"
        className="flex items-center justify-start flex-col gap-10 w-full bg-black"
      >
        <form className="flex items-center justify-center flex-col gap-4">
          <div id="sub-onea" className="flex items-center justify-center gap-4">
            <input
              id="amc-name"
              name="personname"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Person Name"
            />
            <input
              id="amc-number"
              name="carnumber"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Car Number"
            />
            <input
              id="amc-car"
              name="carname"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Car Name"
            />
            <input
              id="amc-comp"
              name="complaint"
              className="animate__animated animate__zoomIn rounded-md p-2 text-xl outline-none text-white bg-zinc-700"
              type="text"
              placeholder="Complaint"
            />
            <input
              id="amc-status"
              name="status"
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
        </form>
      </div>
    </main>
  );
};

export default AdminAmc;
