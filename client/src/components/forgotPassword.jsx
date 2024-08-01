const ForgotPassword = () => {
    return ( 
        <main className="flex items-center justify-center h-screen bg-black">
        <div className="flex items-center justify-evenly flex-row bg-zinc-900 h-[25rem] w-[25rem] rounded-3xl shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-center">
            <form
              className="flex items-center justify-center flex-col gap-8 w-[25rem]"
            >
              <h1 className="text-2xl font-semibold font-mono text-white">
                Forgot Password
              </h1>
              <input
                type="email"
                placeholder="Email"
                className="h-8 w-72 bg-slate-100 p-1 rounded-md font-sans font-medium text-lg outline-none"
              />
              <button className="flex items-center justify-center h-10 w-[10rem] bg-red-600 rounded-md font-sans font-medium text-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
     );
}
 
export default ForgotPassword;