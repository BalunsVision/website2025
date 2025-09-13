import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const jobCategories = [
    { name: "All positions", count: 17, active: true },
    { name: "Engineering", count: 7 },
    { name: "Product", count: 3 },
    { name: "Design", count: 1 },
    { name: "Operation", count: 4 },
    { name: "Marketing", count: 2 },
  ];

  const reviews = [
    {
      rating: 5,
      title: "Best on the market",
      text: "I love this product because the support is great. Please...",
      author: "WorldTraveler",
      daysAgo: 2,
    },
    {
      rating: 5,
      title: "Best on the market",
      text: "I love this product because the support is great. Please...",
      author: "WorldTraveler",
      daysAgo: 2,
    },
    {
      rating: 5,
      title: "Best on the market",
      text: "I love this product because the support is great. Please...",
      author: "WorldTraveler",
      daysAgo: 2,
    },
    {
      rating: 5,
      title: "Best on the market",
      text: "I love this product because the support is great. Please...",
      author: "WorldTraveler",
      daysAgo: 7,
    },
  ];

  return (
    <div className="min-h-screen mt-[4.25rem]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Careers
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
              About Work EMNI
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              Baluns is an employee-centred company that looks after every
              employee, gives autonomy to make choices, supports self-development
              and career growth. Our development team is always in search of
              talented individuals to join our employee-centred culture.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8">
              Navigate below to see our current open positions!
            </p>
            <Button className="bg-orange-primary hover:bg-orange-secondary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md">
              Open positions ↓
            </Button>
          </div>

          {/* Right Graphic */}
          <div className="relative flex justify-center">
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="bg-white rounded-full w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                </div>
              </div>
              {/* Floating avatars */}
              <div className="absolute top-8 right-6 w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full"></div>
              <div className="absolute top-20 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full"></div>
              <div className="absolute bottom-20 right-8 w-8 h-8 sm:w-10 sm:h-10 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-10 left-6 w-8 h-8 sm:w-10 sm:h-10 bg-red-400 rounded-full"></div>
              <div className="absolute top-16 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full"></div>
              <div className="absolute right-16 top-6 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-gray-600 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Job Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 sm:p-6">
              {jobCategories.map((category, index) => (
                <div
                  key={index}
                  className={`p-2 sm:p-3 rounded-md mb-2 cursor-pointer ${
                    category.active
                      ? "bg-orange-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name} ({category.count})
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-white">
              <p className="mb-4 text-sm sm:text-base">
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch.
              </p>
              <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-gray-600">
                Share your LinkedIn profile
              </Button>
            </div>
          </div>

          {/* File Upload */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                File Upload
              </h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 sm:p-12 text-center">
                <div className="mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Click or drag file to this area to upload
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Formats accepted are .doc and .pdf
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
                <Button variant="outline" className="w-full sm:w-auto">
                  Cancel
                </Button>
                <Button className="w-full sm:w-auto bg-orange-primary hover:bg-orange-secondary">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Feedback */}
      <section className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Employee Feedback
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 text-left"
              >
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  {review.daysAgo} days ago
                </p>
                <h4 className="font-semibold mb-1 sm:mb-2">{review.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {review.text}
                </p>
                <p className="text-xs sm:text-sm font-medium">{review.author}</p>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="text-gray-600 border-gray-400 w-full sm:w-auto"
          >
            Write a review
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
