"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const developerfirst = () => {
  const router = useRouter();
  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Container for top of the screen elements */}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 mb-0">
          {/* Icon and Features button */}
          <div className="flex items-center space-x-4 pl-5">
            <div className="relative w-14 h-14">
              <Image
                src="/icon.png"
                alt="Small Image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <button
              onClick={() => handleButtonClick("/features")}
              className="px-5 py-2 border-2 border-purple-600 rounded-full text-[#2196f3] w-full md:w-auto"
            >
              Features
            </button>
          </div>

          {/* Login and SignUp buttons */}
          <div className="flex space-x-8">
            <button
              onClick={() => handleButtonClick("/login")}
              className="px-8 py-2 border-2 border-purple-600 rounded-full text-[#2196f3] w-full md:w-auto"
            >
              Login
            </button>
            <button
              onClick={() => handleButtonClick("sign-up")}
              className="px-8 py-2 border-2 border-purple-600 rounded-full text-[#7d7d7e] w-full md:w-auto"
            >
              SignUp
            </button>
          </div>
        </div>
        {/* Centered paragraph section */}
        <div className="flex flex-col justify-center items-center mt-0 px-4 paragraph-section">
          <div className="text-center md:max-w-2xl w-full">
            <h1 className="text-4xl text-center font-bold  p-5">
              Developer First
            </h1>
            <p className="text-sm text-left text-[#8288A4] p-2 font-medium">
              To be to eCommerce, what Stripe is to online payments
            </p>
            <p className="text-sm text-left text-[#8288A4] p-2 font-medium mb-10">
              Commerce is movement of goods from point A to B. But between A and
              B, it can take various forms of varying complexity. Own inventory
              vs marketplace, centralized vs decentralized, movement of payment
              is bottom-up vs. top-down, Prices controlled vs. free market
              pricing etc.{" "}
              <span className="text-[#d63384]">
                Now startups and businesses of all sizes don’t have to spend
                months of development effort in developing their ecommerce
                system. Using Namaste, they can link their databases to Namaste,
                and within couple of hours can create their ecommerce system of
                any sophistication that their business model demands.
              </span>{" "}
              Frontend is fully customizable if they need to customize the user
              experience.
            </p>
          </div>
        </div>
        {/* YouTube video and paragraph section */}
        <div className="flex flex-col md:flex-row items-start p-8 space-y-4 md:space-y-0 md:space-x-4">
          {/* YouTube video */}
          <div className="md:w-1/2 mb-4 md:mb-20 md:pr-4">
            <div className="relative w-full h-50 md:h-70 pr-15">
              <iframe
                height={360}
                width={640}
                src="https://www.youtube.com/embed/IlIaIHQpl2M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Paragraph with heading */}
          <div className="md:w-1/2 pl-20">
            <h2 className="text-3xl font-semibold mb-4 pl-20 pr-20">
              Access Type and Order Flow
            </h2>
            <p className="text-sm text-[#8288A4] pl-20 pr-20">
              Who sees whose product in your ecommerce system, Whose order will
              go where. From which warehouse should a particular user’s order be
              fulfilled? Is it hierarchical, geographical or a pre-defined
              mapping? Using Namaste you can take care of all the cases. While
              we have only created a UI for a case one of users asked for, in
              the backend it’s completely customizable.
            </p>
          </div>
        </div>
        {/* New Section: Paragraph on Left, YouTube Video on Right */}
        <div className="flex flex-col md:flex-row items-start p-8 space-y-4 md:space-y-0 md:space-x-4">
          {/* Paragraph with heading */}
          <div className="md:w-1/2 pr-20">
            <h2 className="text-3xl font-semibold mb-4  pr-20">
              Custom Keywords & Aggregation
            </h2>
            <p className="text-sm text-[#8288A4]  pr-20">
              Create any number of custom keywords, add values to it and
              aggregate the products according to it (for e.g keyword can be
              “Color” and values can be “red” “blue” and “green” and you can
              aggregate the products by color in your homepage). Filters across
              the app will update with the keywords you add. You can add custom
              icons to these keywords and you can merge keywords together too.
              With this, you can make discovery of products fully tailored to
              your business. Some businesses have thousands of SKUs while some
              others have only a handful. Smart use of keywords can reduce
              product discovery problems much lesser.
            </p>
          </div>

          {/* YouTube video */}
          <div className="md:w-1/2 mb-4 md:mb-20 md:pr-4">
            <div className="relative w-full h-50 md:h-70">
              <iframe
                height={360}
                width={640}
                src="https://www.youtube.com/embed/z2cI5_99vTA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Last YouTube video and paragraph section */}
        <div className="flex flex-col md:flex-row items-start p-8 space-y-4 md:space-y-0 md:space-x-4">
          {/* YouTube video */}
          <div className="md:w-1/2 mb-4 md:mb-20 md:pr-4">
            <div className="relative w-full h-50 md:h-70 pr-10">
              <iframe
                height={360}
                width={640}
                src="https://www.youtube.com/embed/IlIaIHQpl2M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Paragraph with heading */}
          <div className="md:w-1/2 pl-20">
            <h2 className="text-2xl font-semibold mb-4">Layout Engine</h2>
            <p className="text-sm text-[#8288A4]">
              With layout engine you can customize all the layouts in your app
              real-time with very minimal development overhead. We developed
              this feature for internal use when we were an eCommerce business.
              It was a giant waste of time to make developers change layouts.
              With the layout engine, even our non-tech business staff could
              update the layouts according to their needs.
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="w-full bg-[#0d6efd] text-white py-20">
        <div className="px-0">
          {/* Main Footer Content */}
          <div className="flex flex-col mb-4">
            <div className="flex items-center justify-between mb-2">
              {/* Footer Image */}
              <div className="relative w-8 h-8 ml-5">
                <Image
                  src="/icon.png"
                  alt="Footer Icon"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Footer Text */}
              <p className="text-lg text-center flex-1 mx-2">
                Start growing your business today
              </p>
            </div>
            {/* Horizontal Line */}
            <hr className="w-full border-[#82c4f8] mb-4" />
          </div>
          {/* Additional Content */}
          <div className="flex flex-col items-start">
            <p className="text-sm mb-2 ml-5">
              © 2020 - 2021 Mahamela Technologies Pvt Ltd
            </p>
            <div className="relative w-32 h-10 ml-5">
              <Image
                src="/images/google-play-icon.png"
                alt="Google Play"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default developerfirst;
