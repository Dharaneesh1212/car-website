const Home = () => {
  return (
    <main
      id="chvy"
      className="bg-black h-screen flex items-center justify-center relative w-full  "
    >
      <div className="flex items-start justify-center flex-col font-semibold text-5xl text-white absolute top-[14rem] left-[4rem] gap-8">
        <div className="animate__animated animate__zoomIn flex items-start justify-center flex-col gap-4">
          <h1>
            Your <span className="text-red-600">Trusted</span> Auto
          </h1>
          <h1>Repair Service</h1>
          <h1>Provider</h1>
        </div>
        <div className="animate__animated animate__zoomIn flex items-start justify-center flex-col font-normal text-xl gap-1">
          <p>We offer reliable and efficient services to ensure your</p>
          <p>vehicle is always in top condition. Let us take care of </p>
          <p>your car, So you can focus on what matters most.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
