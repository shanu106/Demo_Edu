import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Drawer from "../Components/Drawer";

import Footer from "../Components/Footer";
import Event from "../Components/Event";
import Achivement from "../Components/Achivement";
import QuickLinks from "../Components/QuickLinks";
import Signup from "./Signup";

const latestAnnouncement = [
  {
    id: 1,
    title: "Event One",
    date: "2025-09-01",
    location: "New York",
    image: "/achievments-1.png",
  },
  {
    id: 2,
    title: "Event Two",
    date: "2025-09-05",
    location: "London",
    image: "/achievements-3.png",
  },
  {
    id: 3,
    title: "Event Three",
    date: "2025-09-10",
    location: "Paris",
    image: "/acheivements-2.png",
  },
  {
    id: 4,
    title: "Event Four",
    date: "2025-09-15",
    location: "Tokyo",
    image: "/achievments-1.png",
  },
  {
    id: 5,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/achievements-3.png",
  },
  {
    id: 6,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/achievments-1.png",
  },
  {
    id: 7,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/achievments-1.png",
  },
  {
    id: 8,
    title: "Event Three",
    date: "2025-09-10",
    location: "Paris",
    image: "/acheivements-2.png",
  },
];

const events = [
  {
    id: 1,
    title: "Event One",
    date: "2025-09-01",
    location: "New York",
    image: "/latest-announcement.png",
  },
  {
    id: 2,
    title: "Event Two",
    date: "2025-09-05",
    location: "London",
    image: "/latest-announcement.png",
  },
  {
    id: 3,
    title: "Event Three",
    date: "2025-09-10",
    location: "Paris",
    image: "/latest-announcement.png",
  },
  {
    id: 4,
    title: "Event Four",
    date: "2025-09-15",
    location: "Tokyo",
    image: "/latest-announcement.png",
  },
  {
    id: 5,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/latest-announcement.png",
  },
  {
    id: 6,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/latest-announcement.png",
  },
  {
    id: 7,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/latest-announcement.png",
  },
  {
    id: 8,
    title: "Event Five",
    date: "2025-09-20",
    location: "Sydney",
    image: "/latest-announcement.png",
  },
];

const Home = ({ isDrawerOpen, setDrawerOpen }) => {
  const [isFormOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isDrawerOpen ? "hidden" : "auto";
  }, [isFormOpen]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className=" w-full mt-0  bg-red-300 ">
        <Navbar
          isFormOpen={isFormOpen}
          setFormOpen={setFormOpen}
          isDrawerOpen={isDrawerOpen}
          pageName={"Home"}
          toggleDrawer={toggleDrawer}
        />
      </div>

      <div className="bg-red-400 w-full h-screen  absolute">
        <Drawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />

        {/* home design  */}

        {/* school mission */}
        <div className="w-full bg-[#f8f9fa] text-[#780000] h-auto flex flex-col p-5">
          <h1 className="text-4xl font-bold font-serif w-full text-center">
            Welcome To The Little Kingdom
          </h1>

          <h2 className="text-3xl font-bold text-[#212529] font-serif mt-20 w-full text-center">
            Our Mission
          </h2>

          <div className=" flex flex-col md:flex-row items-center ">
            <img
              className=" md:h-1/3 md:w-1/3 rounded-2xl object-cover"
              src="public/banner.jpg"
              alt=""
            />
            <p className="p-8 text-xl leading-loose xl:flex text-justify  font-serif   text-[#6c757d]">
              The Group, powered by education and industry professionals as
              faculty and a balanced curriculum, aims to provide talents in
              various streams like business, industrial, educational, medical
              within and outside the nation and prepare graduates with the never
              ending desire to learn the principles of integrity and
              professionalism Group envisions itself to be the most preferred
              Higher Education Institution bridging academia and industry. Its
              programs are built on the concepts and applications in Management,
              IT, Medical, Education, Industrial training, Technical and other
              courses guided by the core values of Integrity, Ethics and
              Innovation.
            </p>
          </div>
        </div>

        {/* latest announcements  */}
        <div className="w-full bg-[#dee2e6] h-auto md:h-auto py-10">
          <h1 className="text-[#212529] text-3xl font-bold font-serif w-full text-center">
            Latest Announcements
          </h1>

          <div className="lg:max-w-4xl md:max-w-[44rem] sm:max-w-[24rem] mx-auto overflow-x-auto place-items-center md:pl-32 grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 py-14 items-center flex-col justify-around ">
            {latestAnnouncement.map((event) => (
              <Event
                key={event.id}
                // title={event.title}
                // date={event.date}
                // location={event.location}
                image={event.image}
              />
            ))}
          </div>
        </div>

        {/* achivements  */}

        <div className="w-full h-auto md:h-auto p-4 bg-[#ced4da] py-10">
          <h1 className="text-[#212529] text-3xl font-bold font-serif w-full text-center">
            Achivements
          </h1>
          {/* <div className='flex md:flex-row flex-col items-center gap-3 justify-around mt-3'> */}
          <div className="lg:max-w-4xl md:max-w-[44rem] sm:max-w-[24rem] mx-auto overflow-x-auto place-items-center md:pl-32 grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 py-10 items-center flex-col justify-around mt-10">
            {events.map((event) => (
              <Achivement key={event.id} image={event.image} />
            ))}
          </div>
        </div>

        <div className="w-full h-full xl:h-[40%] relative md:h-[60%] p-5  bg-[#adb5bd]">
          <QuickLinks />
        </div>

        {/* home page end  */}
      </div>

      <div className="w-full h-1/3">
        <Footer />
      </div>
    </>
  );
};

export default Home;
