import { useParams } from "react-router-dom";

const Amc = () => {
  const { id } = useParams();
  const initialValues = {
    personname: "",
    carnumber: "",
    carname: "",
    complaint: "",
    status: "",
  };
  return (
    <main
      id="amc"
      className="bg-black w-screen h-screen flex items-center flex-col justify-start pt-28 gap-4"
    >
      <div
        id="main-amc"
        className="flex items-center justify-start flex-col gap-10 w-full bg-black"
      >
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
