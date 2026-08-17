import React, { useState } from "react";
import { FaPlay, FaSearch } from "react-icons/fa";

const MyCourses = () => {

  const [search, setSearch] = useState("");

  const tests = [
    {
      id: 2,
      title: "Bihar STET Paper 1 pyq 20+ sets",
      button: "Start",
      link: "/Bstet"
    },
    {
      id: 1,
      title: "Daily Current Affairs",
      button: "Start",
      link: "/daily-current-affairs"
    },
    {
      id: 4,
      title: "Current Affairs 2026",
      button: "Start",
      link: "/current-affairs-2026"
    },
    {
      id: 5,
      title: "RRB Group D 10 year + PYQ",
      button: "Start",
      link: "/group-d"
    },
    {
      id: 6,
      title: "SSC GD 10 year + PYQ Hindi",
      button: "Start",
      link: "/ssc-gd-hindi"
    },
    {
      id: 6,
      title: "SSC GD 10 year + PYQ English",
      button: "Start",
      link: "/ssc-gd"
    },
    {
      id: 3,
      title: "Pre Bihar Daroga pyq 10 year +",
      button: "Start",
      link: "/bihar-daroga"
    },
    {
      id: 7,
      title: "BSEB 10th Hindi objective questions",
      button: "Start",
      link: "/class-10-hindi"
    },
    {
      id: 8,
      title: "BSEB 10th Social Science objective questions",
      button: "Start",
      link: "/class-10-social-science"
    },
    {
      id: 9,
      title: "BSEB 10th Science objective questions",
      button: "Start",
      link: "/class-10-science"
    },
    {
      id: 10,
      title: "BSEB 10th English objective questions",
      button: "Start",
      link: "/class-10-english"
    },
    {
      id: 11,
      title: "BSEB 10th Math objective questions",
      button: "Start",
      link: "/class-10-math"
    },
    {
      id: 12,
      title: "BSEB 10th Sanskrit objective questions",
      button: "Start",
      link: "/class-10-sanskrit"
    }
  ];

  const filteredTests = tests.filter((test) =>
    test.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          My Mock Tests
        </h1>

        {/* Search Bar */}
        <div className="relative mb-6 md:mb-8 max-w-md lg:max-w-lg">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm md:text-base" />
          <input
            type="text"
            placeholder="Search mock test..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 md:py-3 text-sm md:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          />
        </div>

        {/* Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-[1.02] transform p-4 md:p-5"
            >
              <h2 className="text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-3 md:mb-4 line-clamp-2 min-h-[40px] md:min-h-[48px] lg:min-h-[56px]">
                {test.title}
              </h2>

              <button
                onClick={() => window.location.href = test.link}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 md:py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <FaPlay className="text-xs md:text-sm" />
                {test.button}
              </button>
            </div>
          ))}
        </div>

        {/* No Result */}
        {filteredTests.length === 0 && (
          <div className="text-center py-12 md:py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-base md:text-lg">
              No mock test found.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;