export default function SignupPage() {
  function SignupNavbar() {
  return (
    <div className="flex h-[58px] items-center justify-between bg-[#f3f3f3] px-6">
      <h1 className="font-serif text-[28px] font-semibold text-[#A51C30]">
        Harvard
      </h1>

      <button
        type="button"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center bg-[#A51C30]"
      >
        <div className="space-y-1">
          <div className="h-[3px] w-6 bg-white" />
          <div className="h-[3px] w-6 bg-white" />
          <div className="h-[3px] w-6 bg-white" />
        </div>
      </button>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#A51C30]">
      <SignupNavbar />

      <div className="flex justify-center pt-[86px]">
        <div className="w-[74%] max-w-[1020px] rounded-[40px] bg-[#f3f3f3] px-[84px] py-[68px] shadow-[0_4px_10px_rgba(0,0,0,0.28)]">
          <h1 className="mb-[52px] text-center text-[60px] font-bold leading-none text-black">
            Sign-In Page
          </h1>

          <div className="mx-auto max-w-[850px]">
            <div className="mb-[56px]">
              <label
                htmlFor="username"
                className="mb-3 block text-[28px] font-bold text-black"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="h-[82px] w-full rounded-[14px] bg-[#e7dede] px-5 text-[24px] text-black outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-3 block text-[28px] font-bold text-black"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="h-[82px] w-full rounded-[14px] bg-[#e7dede] px-5 text-[24px] text-black outline-none"
              />

              <a
                href="#"
                className="mt-2 inline-block text-[18px] font-bold text-black underline"
              >
                Forget Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}