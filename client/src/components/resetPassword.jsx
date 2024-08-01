const ResetPassword = () => {
  return (
    <main className="flex items-center justify-center h-fit bg-black m-6">
      <div className="flex items-center justify-evenly flex-row bg-black h-[25rem] w-[25rem] rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
        <div id="reset-password" className="flex items-center justify-center">
          <form
            className="flex items-center justify-center flex-col gap-8 w-[25rem]"
          >
            <h1 className="text-2xl font-semibold font-mono">Reset Password</h1>
            <input
              type="password"
              placeholder="New Password"
              className="h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
            />
            <button className="flex items-center justify-center h-10 w-[10rem] bg-blue-600 rounded-md font-sans font-medium text-lg">
              Reset
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
