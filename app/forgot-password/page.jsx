"use client";
export default function Home() {
  return (
    <div className="h-screen bg-[#000a3e] flex flex-col items-center">
      <header className="w-full flex items-center justify-center fixed top-0 left-0 bg-[#000a3e] p-5">
        <div className="flex items-center px-4 py-2 space-x-40">
          {/* First image on the left*/}
          <img src="/icon2.png" alt="Icon 1" className=" h-78px pr-20 mr-20" />
          <div className="flex items-center space-x-2 pl-20">
            {/* Second image and text */}
            <img src="/icon3.png" alt="Icon 2" className="w-7 h-6" />
            <span className="text-white text-sm">New to Mela?</span>
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
              className="absolute left-10 top-10 w-[300px]"
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
              className="w-full h-full absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://admin.namaste.business/ed6d9b38180a22be9386.png')",
                backgroundSize: "50% 120%",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            {/* Login box */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2"
              style={{
                marginTop: "0",
                marginBottom: "-60px",
                transform: "translate(0%, -50%)",
              }}
            >
              <div className="w-[344px] h-[556px] bg-white shadow-lg rounded-xl">
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

                    <button
                      type="submit"
                      className="bg-[#C1036D] text-white px-4 py-3 rounded-3xl"
                    >
                      Continue
                    </button>
                    <p className="text-xs text-[#000000de] pt-8">
                      {" "}
                      Has your email address or mobile phone number changed?
                    </p>
                    <p className="text-xs pt-3 text-[#000000de]">
                      If you no longer have access to the email address or the
                      phone number associated with your account, please contact
                      our Customer Service for restoring your account.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
