"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (buttonName) => {
    if (buttonName === "Features") {
      router.push("/features");
    } else {
      // Handle other button clicks here
      alert(`${buttonName} button clicked!`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Container for top of the screen elements */}
      <div className="flex items-center justify-between p-4 mb-0">
        {/* Icon and Features button */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <Image
              src="/icon.png"
              alt="Small Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <button
            onClick={() => handleButtonClick("Features")}
            className="px-4 py-2 border-2 border-purple-600 rounded-full text-blue-600"
          >
            Features
          </button>
        </div>

        {/* Login and SignUp buttons */}
        <div className="flex space-x-2">
          <button className="px-4 py-2 border-2 border-purple-600 rounded-full text-blue-600">
            Login
          </button>
          <button
            onClick={() => handleButtonClick("Button 2")}
            className="px-4 py-2 border-2 border-purple-600 rounded-full text-gray-600"
          >
            SignUp
          </button>
        </div>
      </div>

      {/* Centered paragraph section */}
      <div className="flex flex-1 justify-center items-start mt-0 px-4 paragraph-section">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-3xl text-center font-bold mb-2">
            Powerful B2B Features
          </h1>
          <p className="text-l text-left text-gray-500">
            Shopping is increasingly becoming mobile. In growing economies like
            China and India, mobile is the primary device to access the
            internet. By 2021, about 73% of global ecommerce sales are expected
            to happen on mobile. Prokure is built from a mobile-first market in
            India. All the major features can be used from the mobile app. Why
            use a PC when you can run your whole business conveniently from the
            phone?
          </p>
        </div>
      </div>

      <div className="flex justify-center items-start px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="image-container mx-auto mb-2">
              <div
                className="relative"
                style={{ height: "auto", width: "100%" }}
              >
                <Image
                  src={`/images/image${i}.png`} 
                  alt={`Image ${i}`}
                  layout="responsive"
                  width={640} 
                  height={480} 
                  className="image"
                />
              </div>
              <div className="text-container">
                {i === 1 && (
                  <>
                    <p className="text-xl">Onboard</p>
                    <p className="text-l text-purple-500">Product Upload</p>
                    <p className="text-l text-purple-500">Buyer Addition</p>
                  </>
                )}
                {i === 2 && (
                  <>
                    <p className="text-xl">Buyer</p>
                    <p className="text-l text-purple-500">Placing an Order</p>
                    <p className="text-xl">Seller</p>
                    <p className="text-l text-purple-500">
                      Your sales staff can take orders from customers
                    </p>
                    <p className="text-l text-purple-500">Process Order</p>
                    <p className="text-l text-purple-500">
                      Manage orders in your whole supply chain
                    </p>
                  </>
                )}
                {i === 3 && (
                  <>
                    <p className="text-xl">Using third party logistics</p>
                    <p className="text-l text-purple-500">
                      Choose the courier & ship
                    </p>
                    <p className="text-xl">Using own Logistics</p>
                    <p className="text-l text-purple-500">
                      Route,optimize,assign & ship
                    </p>
                  </>
                )}
                {i === 4 && (
                  <>
                    <p className="text-xl">Analytics</p>
                    <p className="text-l text-purple-500">Chat</p>
                    <p className="text-l text-purple-500">CRM</p>
                    <p className="text-l text-purple-500">
                      Analytics & Reporting
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
