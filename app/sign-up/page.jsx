"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a timeout to match the duration of the login box animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Matches the duration of the login box animation

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="h-screen bg-[#000a3e] flex flex-col items-center">
      <header className="w-full flex items-center justify-center fixed top-0 left-0 bg-[#000a3e] p-5">
        <div className="flex items-center px-4 py-2 space-x-40">
          {/* First image on the left */}
          <img
            src="/icon2.png"
            alt="Icon 1"
            className="w-auto h-[48px] pr-20 mr-20"
          />
          <div className="flex items-center space-x-2 pl-20">
            {/* Second image and text */}
            <img src="/icon3.png" alt="Icon 2" className="w-7 h-6" />
            <span className="text-white text-sm">Already have an account?</span>
            <button className="bg-[#C1036D] text-white px-4 py-2 rounded-3xl">
              Login
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center relative">
        <div className="relative">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Pink box */}
            <div className="w-[850px] h-[500px] bg-[#C1036D] relative justify-start flex items-center rounded-xl">
              {/* Text and Background Image */}
              <div
                className={`absolute top-0 right-0 h-full flex flex-col items-start p-10 transition-transform duration-1000 ${
                  showContent ? "opacity-100 visible" : "opacity-0 invisible"
                } animate-moveRight`}
                style={{
                  animationDelay: "1s",
                }}
              >
                {/* Heading text */}
                <div className="w-[350px]">
                  <p className="text-white text-lg font-medium">
                    Why choose <b>Namaste Business</b>?
                  </p>
                  <p className="text-[#ffffffaa] text-lg">
                    The hard work is done. Simply add your content and publish.
                    Too easy!
                  </p>
                </div>
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://admin.namaste.business/ed6d9b38180a22be9386.png')",
                    backgroundSize: "120% 120%",
                    backgroundPosition: "right",
                    backgroundRepeat: "no-repeat",
                    animationDelay: "1s",
                  }}
                ></div>
              </div>
              {/* Login box */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2"
                style={{
                  marginTop: "0",
                  marginBottom: "-60px",
                  transform: "translate(-50%, -45%)",
                }}
              >
                <div className="w-[344px] h-[700px] bg-white shadow-lg transition-transform duration-1000 ease-in-out rounded-lg animate-moveLeft">
                  <div className="p-4 h-full pl-10 pr-10">
                    <h2 className="text-2xl font-medium mb-4 pt-7 pb-2">
                      Create Account
                    </h2>
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-small text-[#8288A4]"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="mt-1 block w-full px-3 py-2 rounded-md bg-[#F3F5FD]"
                        />
                      </div>
                      <div className="mb-1 flex items-center justify-between">
                        <label
                          htmlFor="businessname"
                          className="block text-sm font-small text-[#8288A4]"
                        >
                          Business Name
                        </label>
                      </div>
                      <input
                        id="businessname"
                        type="text"
                        className="mt-0 block w-full px-3 py-2 rounded-md shadow-sm bg-[#F3F5FD] mb-6"
                      />
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-small text-[#8288A4]"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="text"
                          className="mt-1 block w-full px-3 py-2 rounded-md bg-[#F3F5FD]"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="mobilenumber"
                          className="block text-sm font-small text-[#8288A4]"
                        >
                          MobileNumber
                        </label>
                        <input
                          id="mobilenumber"
                          type="text"
                          className="mt-1 block w-full px-3 py-2 rounded-md bg-[#F3F5FD]"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block text-sm font-small text-[#8288A4]"
                        >
                          Password
                        </label>
                        <input
                          id="password"
                          type="password"
                          className="mt-1 block w-full px-3 py-2 rounded-md bg-[#F3F5FD]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#C1036D] text-white px-4 py-3 rounded-3xl"
                      >
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% + 160px));
          }
        }
        @keyframes moveRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-moveLeft {
          animation: moveLeft 1s forwards;
        }
        .animate-moveRight {
          animation: moveRight 1s forwards;
        }
      `}</style>
    </div>
  );
}
