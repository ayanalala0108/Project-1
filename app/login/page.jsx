"use client";
export default function Home() {
  return (
    <div className="h-screen bg-[#000a3e] flex flex-col items-center">
      <header className="w-full flex items-center justify-center fixed top-0 left-0 bg-[#000a3e] p-5">
        <div className="flex items-center px-4 py-2 space-x-40">
          {/* First image on the left*/}
          <img
            src="/icon2.png"
            alt="Icon 1"
            className="w-auto h-48px pr-20 mr-20"
          />
          <div className="flex items-center space-x-2 pl-20">
            {/* Second image and text */}
            <img src="/icon3.png" alt="Icon 2" className="w-7 h-6" />
            <span className="text-white text-sm">New to Namaste Business?</span>
            <button className="bg-[#C1036D] text-white px-4 py-2 rounded-3xl">
              Create Account
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center relative">
        <div className="relative">
          {/* Pink box with background image */}
          <div className="w-[850px] h-[500px] bg-[#C1036D] relative flex items-center justify-start rounded-xl">
            {/* Heading text */}
            <div
              className="absolute left-10 top-10 w-[300px] opacity-0 animate-moveLeft"
              style={{ animationDelay: "1s" }}
            >
              <p className="text-white text-lg font-medium ">
                Why choose <b>Namaste Business</b>?
              </p>
              <p className="text-[#ffffffaa] mt-2 text-lg">
                The hard work is done. Simply add your content and publish. Too
                easy!
              </p>
            </div>
            <div
              className="w-full h-full absolute inset-0 bg-cover bg-center opacity-0 animate-moveLeft"
              style={{
                backgroundImage:
                  "url('https://admin.namaste.business/ed6d9b38180a22be9386.png')",
                backgroundSize: "50% 120%",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                animationDelay: "1s",
              }}
            ></div>
            {/* Login box */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2"
              style={{
                marginTop: "0",
                marginBottom: "-60px",
                transform: "translate(-50%, -45%)",
              }}
            >
              <div
                className="w-[344px] h-[700px] bg-white shadow-lg transition-transform duration-1000 ease-in-out rounded-lg"
                style={{ animation: "moveRight 1s forwards" }}
              >
                <div className="p-4 h-full pl-10 pr-10">
                  <h2 className="text-2xl font-medium mb-4 pt-7 pb-2">Login</h2>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-small text-[#8288A4]"
                      >
                        Email/Mobile Number
                      </label>
                      <input
                        id="username"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 rounded-md bg-[#F3F5FD]"
                      />
                    </div>
                    <div className="mb-1 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-small text-[#8288A4]"
                      >
                        Password
                      </label>
                      <a
                        href="#forgot-password"
                        className="text-[#8288A4] text-sm"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="mt-0 block w-full px-3 py-2 rounded-md shadow-sm bg-[#F3F5FD] mb-6"
                    />
                    <button
                      type="submit"
                      className="bg-[#C1036D] text-white px-4 py-3 rounded-3xl"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes moveRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(calc(50% + 0px));
          }
        }
        @keyframes moveLeft {
          0% {
            opacity: 0;
            transform: translateX(50%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-moveLeft {
          animation: moveLeft 1s forwards;
        }
      `}</style>
    </div>
  );
}
