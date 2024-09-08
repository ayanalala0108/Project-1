"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = (buttonName) => {
    if (buttonName === "Features") {
      router.push("/features");
    } else {
      // what happens when each button is clicked
      alert(`${buttonName} button clicked!`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Container for top of the screen elements */}
      <div className="flex justify-between items-start p-4">
        {/* Top-left corner content */}
        <div className="flex items-center space-x-4">
          {/* Icon and text */}
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

        {/* Top-right corner content */}
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

      {/* Main Content Area */}
      <main className="flex flex-col p-4 md:p-8">
        <section className="flex flex-col md:flex-row items-center md:items-start mb-8">
          {/* Text */}
          <div className="flex flex-col md:w-1/2 md:mr-4 p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Grow with powerful mobile first B2B e-commerce platform.
            </h1>
            <p className="text-sm md:text-base text-gray-500">
              B2B e-commerce is at an inflection point. By 2020, the size of U.S
              B2B eCommerce market is expected to be twice that of B2C
              eCommerce. Businesses are fast shifting to B2B eCommerce but
              customer expectations are also higher than ever. Namaste is a SaaS
              platform for running a B2B Business.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/para1.png"
              alt="Main Content Image"
              width={600}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start mb-8">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/para2.png"
              alt="New Section Image"
              width={600}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col md:w-1/2 md:ml-4 p-4">
            <h1 className="text-xl md:text-3xl font-bold mb-2">Mobile First</h1>
            <p className="text-sm md:text-base mb-4 text-gray-500">
              Business buyers are also consumers who have experienced B2C
              ecommerce and they expect the same convenient shopping experience
              in their B2B ecommerce platform. Mobile first and an amazon like
              shopping experience. In Namaste, you can use ALL the features from
              your mobile app. Built for a mobile first world.
            </p>
            <button
              onClick={() => handleButtonClick("Learn More")}
              className="w-32 px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Another Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start mb-8">
          {/* Text content */}
          <div className="flex flex-col md:w-1/2 md:mr-4 p-8">
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              All the complicated B2B use cases
            </h1>
            <p className="text-sm md:text-base mb-4 text-gray-500">
              B2B ecommerce is a lot more complicated than B2C
              ecommerce.Multi-tier distribution selling, geo-fencing, advanced
              pricing rules, fully customizable order and payment flows across
              all layers of supply chain, on the ground logistics and sales
              management etc.With Namaste you can manage all the complex B2B
              business requirements effortlessly.
            </p>
            <button
              onClick={() => handleButtonClick("Learn More")}
              className="w-32 px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Learn More
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/para3.png"
              alt="Additional Section Image"
              width={600}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start mb-8">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/para2.png"
              alt="Additional Section Image"
              width={600}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col md:w-1/2 md:ml-4 p-4">
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              Developer First
            </h1>
            <p className="text-sm md:text-base mb-4 text-gray-500">
              Commerce is essentailly movement of goods from A to B and movement
              of payment in the opposite direction. But between A and B, it can
              take varied forms (marketplace, own inventory, drop shipping etc.
              In Namaste, you can use ALL the features from your mobile app.
              Built for a mobile first world.
            </p>
            <button
              onClick={() => handleButtonClick("Learn More")}
              className="w-32 px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              Learn More
            </button>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#1E3A8A] text-white py-4">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="flex flex-col mb-4">
            <div className="flex items-center justify-between mb-2">
              {/* Footer Image */}
              <div className="relative w-8 h-8">
                <Image
                  src="/icon.png"
                  alt="Footer Icon"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Footer Text */}
              <p className="text-sm text-center flex-1 mx-2">
                Start growing your business today
              </p>
            </div>
            {/* Horizontal Line */}
            <hr className="w-full border-gray-300 mb-4" />
          </div>
          {/* Additional Content */}
          <div className="flex flex-col items-start">
            <p className="text-sm mb-2">
              © 2020 - 2021 Mahamela Technologies Pvt Ltd
            </p>
            <div className="relative w-32 h-10">
              <Image
                src="/images/google-play-icon.png"
                alt="Google Play"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
