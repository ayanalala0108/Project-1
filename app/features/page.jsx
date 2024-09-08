"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./styles.css";
import React, { useRef } from "react";

export default function Home() {
  const router = useRouter();

  //Refs for each section
  const sectionsRef = {
    features: useRef(null),
    productUpload: useRef(null),
    buyerAddition: useRef(null),
    placingOrder: useRef(null),
    sellerOrders: useRef(null),
    processOrder: useRef(null),
    manageOrders: useRef(null),
    thirdPartyLogistics: useRef(null),
    ownLogistics: useRef(null),
    chat: useRef(null),
    crm: useRef(null),
    analytics: useRef(null),
  };

  const handleButtonClick = (sectionName) => {
    if (sectionName === "Features") {
      router.push("/features");
    } else if (sectionsRef[sectionName]) {
      sectionsRef[sectionName].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      //alert(`${buttonName} button clicked!`);
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
                  src={`/images/image${i}.png`} // Replace with your image paths
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
                    <p
                      className="text-xl"
                      onClick={() => handleButtonClick("productUpload")}
                    >
                      Onboard
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("productUpload")}
                    >
                      Product Upload
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("buyerAddition")}
                    >
                      Buyer Addition
                    </p>
                  </>
                )}
                {i === 2 && (
                  <>
                    <p
                      className="text-xl"
                      onClick={() => handleButtonClick("placingOrder")}
                    >
                      Buyer
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("placingOrder")}
                    >
                      Placing an Order
                    </p>
                    <p
                      className="text-xl"
                      onClick={() => handleButtonClick("sellerOrders")}
                    >
                      Seller
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("sellerOrders")}
                    >
                      Your sales staff can take orders from customers
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("processOrder")}
                    >
                      Process Order
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("manageOrders")}
                    >
                      Manage orders in your whole supply chain
                    </p>
                  </>
                )}
                {i === 3 && (
                  <>
                    <p
                      className="text-xl"
                      onClick={() => handleButtonClick("thirdPartyLogistics")}
                    >
                      Using third party logistics
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("thirdPartyLogistics")}
                    >
                      Choose the courier & ship
                    </p>
                    <p
                      className="text-xl"
                      onClick={() => handleButtonClick("ownLogistics")}
                    >
                      Using own Logistics
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("ownLogistics")}
                    >
                      Route,optimize,assign & ship
                    </p>
                  </>
                )}
                {i === 4 && (
                  <>
                    <p
                      className="text-xl"
                      onClick={() => handleButtonClick("analytics")}
                    >
                      Analytics
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("chat")}
                    >
                      Chat
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("crm")}
                    >
                      CRM
                    </p>
                    <p
                      className="text-l text-purple-500"
                      onClick={() => handleButtonClick("analytics")}
                    >
                      Analytics & Reporting
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Centered heading section */}
      <div className="flex justify-center items-center py-8">
        <h1 className="text-3xl font-semibold text-center">Onboard</h1>
      </div>
      {/* New Section with subheading, content, and image */}
      <div
        ref={sectionsRef.productUpload}
        className="flex flex-col lg:flex-row items-center justify-center px-4 py-8"
      >
        {/* Subheading */}
        <div className="flex-1 text-left mb-4 lg:mb-0 lg:text-center">
          <h3 className="text-xl font-semibold">Product Upload</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Upload your inventory either on at a time or in bulk, Doing it on
            mobile is as simple as making a facebook post.
          </p>
          {/* Button */}
          <button
            onClick={() => alert("Button Clicked!")}
            className="mt-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-800"
          >
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/productupload.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* New Section with subheading, content, and image */}
      <div
        ref={sectionsRef.buyerAddition}
        className="flex flex-col lg:flex-row items-center justify-center px-4 py-8"
      >
        {/* Subheading */}
        <div className="flex-1 text-left mb-4 lg:mb-0 lg:text-center">
          <h3 className="text-xl font-semibold">Buyer Addition</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Add all your customers in one go. Shifting all your customers to a
            new business platform can’t get easier than this
          </p>
          {/* {Button} */}
          <button
            onClick={() => alert("Button Clicked!")}
            className="mt-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-800"
          >
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/buyeraddition.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* Centered heading section */}
      <div className="flex justify-center items-center py-8">
        <h1 className="text-3xl font-semibold text-center">Manage Orders</h1>
      </div>
      <div className="flex justify-center items-left">
        <h1 className="text-2xl font-semibold text-left">Buyer</h1>
      </div>
      {/* New Section with subheading, content, and image */}
      <div
        ref={sectionsRef.placingOrder}
        className="flex flex-col lg:flex-row items-center justify-center px-4 py-8"
      >
        {/* Subheading */}
        <div className="flex-1 text-left mb-4 lg:mb-0 lg:text-center">
          <h3 className="text-xl font-semibold">Placing an Order</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            No more of those mundane B2B sourcing processes. Placing an order is
            as simple as placing an order in Amazon. All this, while the complex
            b2b pricing and supply chain logics are taken care of in the
            backend.
          </p>
          {/* Button */}
          <button
            onClick={() => alert("Button Clicked!")}
            className="mt-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-800"
          >
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/placinganorder.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>

      {/* New Section with subheading, content, and image */}
      <div className="flex justify-center items-center py-8">
        <h1 className="text-2xl font-semibold text-left">Seller</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.sellerOrders}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">
            Your sales staff can take orders from customers
          </h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Logged in as a sales staff, they can take orders from your customers
            in the app
          </p>
          <button
            onClick={() => alert("Button Clicked!")}
            className="mt-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-800"
          >
            Learn More
          </button>
        </div>
        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image src="" alt="" layout="responsive" className="image" />
          </div>
        </div>
      </div>

      {/* New Section with subheading, content, and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.processOrder}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">Process Order</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Confirm, reject, edit, allot it to different warehouses, all of it
            can happen with a couple of clicks. Easier if done from the mobile
            app.
          </p>
          {/* Button */}
          <button
            onClick={() => alert("Button Clicked!")}
            className="mt-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-800"
          >
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/processorder.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* New Section with subheading, content, and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.manageOrders}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">
            Manage orders in your whole supply chain
          </h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Do you want to manually allot orders to different sellers in your
            supply chain? Should your sellers be able to control the product
            prices? Take complete control of the order flow in your supply chain
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/manageorders.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* Centered heading section */}
      <div className="flex justify-center items-center py-8">
        <h1 className="text-3xl font-semibold text-center">Deliver Goods</h1>
      </div>
      <div className="flex justify-center items-left">
        <h1 className="text-2xl font-semibold text-left">
          Using third party logistics
        </h1>
      </div>
      {/* New Section with subheading, content, and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.thirdPartyLogistics}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">Choose the courier & ship</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Create shipments of your orders, review the estimated cost and ETA
            of all major logistics providers and ship using your preferred
            provider. In mobile app, all these can be done with 6 clicks.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/thirdparty.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-left">
        <h1 className="text-2xl font-semibold text-left">
          Using own logistics
        </h1>
      </div>
      {/* New Section with subheading, content, and image */}
      <div
        ref={sectionsRef.ownLogistics}
        className="flex flex-col lg:flex-row items-center justify-center px-4 py-8"
      >
        {/* Subheading */}
        <div className="flex-1 text-left mb-4 lg:mb-0 lg:text-center">
          <h3 className="text-xl font-semibold">
            Route optimize, assign & ship
          </h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Create shipments of your orders, we tell you the most optimal routes
            to deliver these shipments. Assign each route to one of your
            delivery staff. They can login to their app and see the assigned
            route, navigate to customer locations, deliver the goods and collect
            proof of delivery if needed.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/own.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* Centered heading section */}
      <div className="flex justify-center items-center py-8">
        <h1 className="text-3xl font-semibold text-center">Analysis & CRM</h1>
      </div>
      {/* New Section with subheading, content, and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.chat}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">Chat</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Chat with all your customers. Share products and offers with them in
            chat, answer their queries. All your business chat in one place.
          </p>
          {/* Button */}
          <button
            onClick={() => alert("Button Clicked!")}
            className="mt-4 text-blue-600 border-b-2 border-blue-600 hover:border-blue-800"
          >
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/chat.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* New Section with subheading, content, and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.crm}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">CRM</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            All your customer relationship metrics in one place. High value
            customers, churned customers, Most frequent buyers etc. With the
            inbuilt chat, you can reach out to them too.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/crm.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
      {/* New Section with subheading, content, and image */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 py-8">
        {/* Subheading */}
        <div
          ref={sectionsRef.analytics}
          className="flex-1 text-left mb-4 lg:mb-0 lg:text-center"
        >
          <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
        </div>
        {/* Content Paragraph */}
        <div className="flex-1 text-center lg:text-center px-4">
          <p className="text-lg text-gray-600">
            Detailed analytics of your business metrics. Slice and dice all your
            business data to any granularity according to your needs. Built
            using Druid and Superset.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 text-right">
          <div className="relative w-full max-w-xs">
            <Image
              src="/images/crm.png"
              alt="Description of image"
              layout="responsive"
              width={500}
              height={300}
              className="image"
            />
          </div>
        </div>
      </div>
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
