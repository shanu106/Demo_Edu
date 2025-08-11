import React from "react";
import Footer from "../Components/Footer";
import QuickLinks from "../Components/QuickLinks";
import Navbar from "../Components/Navbar";
import Drawer from "../Components/Drawer";

const courses = [
  {
    id: 1,
    title: "Mathematics Basics",
    instructor: "Mrs. Anita Sharma",
    progress: 75,
    image: "https://via.placeholder.com/300x200?text=Mathematics",
  },
  {
    id: 2,
    title: "Introduction to Science",
    instructor: "Mr. Raj Patel",
    progress: 50,
    image: "https://via.placeholder.com/300x200?text=Science",
  },
  {
    id: 3,
    title: "English Literature",
    instructor: "Ms. Priya Singh",
    progress: 90,
    image: "https://via.placeholder.com/300x200?text=English",
  },
  {
    id: 4,
    title: "History and Culture",
    instructor: "Dr. Anil Verma",
    progress: 40,
    image: "https://via.placeholder.com/300x200?text=History",
  },
];

const LMS = ({ isDrawerOpen, setDrawerOpen }) => {
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar pageName={"E-LMS"} toggleDrawer={toggleDrawer} />
      </div>

      {/* Main Content Wrapper */}
      <div className="min-h-screen bg-gray-100 pt-4 pb-10">
        {/* Drawer Sidebar */}
        <Drawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />

        {/* Dashboard Header */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Learning Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Track your school courses and continue your learning journey
          </p>
        </header>

        {/* Courses Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2>
                <p className="text-gray-600 mt-1">Instructor: {course.instructor}</p>

                <div className="mt-auto">
                  <div className="w-full bg-gray-300 rounded-full h-4 mt-4">
                    <div
                      className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-700 mt-1">Progress: {course.progress}%</p>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* QuickLinks Section */}
       
      </div>

      {/* Footer */}
     
      <div className="w-full h-full xl:h-[40%] relative md:h-[60%] p-5  bg-[#adb5bd]">
          <QuickLinks />
        </div>

      <div className="w-full h-1/3">
        <Footer />
      </div>
    </>
  );
};

export default LMS;
