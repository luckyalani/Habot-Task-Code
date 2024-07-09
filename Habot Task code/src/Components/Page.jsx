import React from "react";
import bgimg from "../Components/Images/backimg.png";
import iconimg from "../Components/Images/suitcase 1.png";
import locationimg from "../Components/Images/location image.png";
import ytimage from "../Components/Images/ytimage.png";
import correcticon from "../Components/Images/checked (2) 1.png";
import avatarimg from "../Components/Images/avatar 1.png";
import calenderimg from "../Components/Images/calender image.png";
import searchclipboardimg from "../Components/Images/search clipboard image.png";
import pencileditimg from "../Components/Images/pencil edit.png";
import editavatar from "../Components/Images/edit avatar.png";
import handshakeimg from "../Components/Images/handshake.png"
import habotlogo from "../Components/Images/Hobot logo.png";
import linkedinimg from "../Components/Images/Linkedin image.png";
import twitterimg from "../Components/Images/twitter.png";
import facebookimg from "../Components/Images/facebook.png";
import instaimg from "../Components/Images/insta.png";
import Header from "../Components/Header";



const Page = () => {
  return (
    <>
      {/* header starts */}
      <Header  />
      {/* bgimage and search divs----- */}
      <div className=" bgimg bg-cover bg-center h-screen flex flex-col justify-center items-center text-center pt-20">
        <section className="flex flex-col w-full px-3 sm:px-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Are You a Supplier?
          </h1>
          <h1 className="text-xl md:text-5xl mb-6 text-white">
            Explore Matching Opportunities.
          </h1>
          <div className="flex flex-col md:flex-row items-center w-full justify-center   space-y-4 md:space-y-0 md:space-x-4 mb-6">
            <div className="input1 sm:w-[60%] w-11/12 md:w-3/12 relative ">
              <input
                type="text"
                placeholder="Search your required service here"
                className=" p-4 w-full rounded-lg border text-black border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 pl-14 text-ellipsis "
              />
              <img
                src={iconimg}
                alt=""
                className="absolute top-[18.5px] left-4"
              />
            </div>
            <div className="input1 sm:w-[60%] w-11/12 md:w-3/12 relative ">
              <input
                type="text"
                placeholder="Search your required service here"
                className=" p-4 w-full rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-orange-500 pl-14 text-ellipsis"
              />
              <img
                src={locationimg}
                alt=""
                className="absolute top-[18.5px] left-4"
              />
            </div>
            <button className="h-[54px] px-8 md:w-[117.94px]  bg-green-500 text-white  rounded-md">
              Search
            </button>
          </div>
          <div className="paradiv flex  gap-8 justify-center">
            <p className="text-sm md:text-[18px] flex gap-2 font-[700] flex-col md:flex-row text-white">
              Are you a buyer?
              <a href="#" className="text-white underline font-normal px-5 sm:px-0">
                Click here if you are looking to post a requirements
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* sign up today part */}
      <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row md:justify-between items-start md:items-center px-10 py-24 space-y-6 md:space-y-0 md:space-x-6 gap-10 items-center ">
        <div className=" max-w-md">
          <h2 className=" text-[20px]  md:text-[35.34px]  font-bold mb-4 whitespace-nowrap">
            Ready to dive into <span className="text-purple-700">HABOT?</span>
          </h2>
          <p className="text-zinc-700 mb-6 text-[15px] md:text-[17.16px]">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-green-600 text-white  rounded-md flex items-center justify-center space-x-2 md:w-[19.8125rem] w-[14rem] h-[54px]">
            <div className="innerbtnspan flex items-center justify-between w-full px-5">
              <div></div>
              <span className="font-bold">Sign up Today !</span>
              <div className="text-3xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5 px-5  ">
          <button className="border border-[#E7760D] text-black w-[180px] md:w-[260px] h-[65px] rounded-md">
            Abu Dhabi
          </button>
          <button className="border border-[#E7760D] text-black  w-[180px] md:w-[260px] h-[65px] rounded-md">
            Dubai
          </button>
          <button className="border border-[#E7760D] text-black  w-[180px] md:w-[260px] h-[65px] rounded-md">
            Sharjah &amp; Ajman
          </button>
          <button className="border border-[#E7760D] text-black  w-[180px] md:w-[260px] h-[65px] rounded-md">
            Fujairah
          </button>
          <button className="border border-[#E7760D] text-black  w-[180px] md:w-[260px] h-[65px] rounded-md">
            Ras Al Khaimah
          </button>
          <button className="border border-[#E7760D] text-black  w-[180px] md:w-[260px] h-[65px] rounded-md">
            Umm Al Quwain
          </button>
        </div>
      </div>

      {/* youtube banner post */}

      <section className="ytbanner md:px-12 px-4 pb-20">
        <div className="bg-blue-900 px-10 py-24 rounded-lg flex flex-col lg:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 ">
          <div className="w-full md:w-1/2">
            <img src={ytimage} alt="Video Thumbnail" className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 text-white h-[400px] flex flex-col items-center gap-8 ">
            <div className="flex justify-between items-center mb-4  w-full  ">
              <div></div>
              <div className="heading w-40 flex  flex-col items-center gap-3">
                <h2 className="text-2xl font-semibold text-orange-500 font-poppins ">
                  Buyer
                </h2>
                <div className="borderdiv border border-orange-500 w-full"></div>
              </div>
              <h2 className="text-2xl font-bold font-poppins">Supplier</h2>
              <div></div>
            </div>
            <ul className="px-10 py-5 flex flex-col gap-4 whitespace-nowrap">
              <li className="flex items-center flex-col md:flex-row md:text-lg  gap-2 sm:text-sm text-xs">
                <img src={correcticon} alt="check" className="mr-2" />
                <span>Post your requirements.</span>
              </li>
              <li className="flex items-center md:text-lg flex-col md:flex-row  gap-2 sm:text-sm text-xs">
                <img src={correcticon} alt="check" className="mr-2" />
                <span>Sit back for multiple suppliers to contact you.</span>
              </li>
              <li className="flex items-center md:text-lg  flex-col md:flex-row sm:text-sm text-xs gap-2">
                <img src={correcticon} alt="check" className="mr-2" />
                <span className="text-center md:text-start text-wrap md:text-nowrap">
                  Choose among the suppliers based on the ratings and <br/> reviews.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* suppliers div */}
      <div className="flex flex-col gap-5 md:flex-row justify-around items-center bg-[#E8FBFF] border-blue-300 py-16 mb-14 mt-8  rounded-lg">
  <div className="">
    <h2 className="md:text-3xl font-bold text-black text-2xl">Let Suppliers <span className=" border-2  border-b-[#EB7150] border-r-0 border-l-0 border-t-0">Find You</span></h2>
  </div>
  <div></div>
  <button className="bg-[#EB7150] text-white w-[13.5rem] h-[54px] rounded-md font-bold">
    Get Verified
  </button>
</div>

{/* how it works div */}

<div className="max-w-7xl mx-auto  py-12 md:px-28 px-14 mb-16">
  <div className="hitworks flex flex-col justify-center w-full items-center">
    <h2 className="text-3xl font-bold  mb-4">How it works?</h2>
    <p className=" text-zinc-600 mb-12 text-center">
      Buyers post their needs and review top suppliers, while suppliers complete
      profiles, connect with <br/> potential buyers, and build successful business
      relationships, sharing valuable feedback.
    </p>
  </div>
  <div className="lg:grid  lg:grid-cols-2 xl:grid-cols-3 flex flex-col   gap-8 md:px-28">
    <div className=" bg-[#E8FBFF] rounded-lg flex flex-col items-center justify-center px-8 py-10  w-full">
      <img
        src={avatarimg}
        alt="Select Your Role and Sign Up"
        className="mx-auto mb-4"
      />
      <p className="font-semibold text-center text-sm xl:text-[15px]">Select Your Role and Sign Up</p>
    </div>
    <div className="  rounded-lg flex flex-col items-center justify-center">
      <img
        src={calenderimg}
        alt="Buyers Post Your Requirements"
        className="mx-auto mb-4"
      />
      <p className="font-semibold text-center text-sm xl:text-[15px]">Buyers Post Your Requirements</p>
    </div>
    <div className=" bg-[#E8FBFF]   rounded-lg flex flex-col items-center justify-center px-5 py-10">
      <img
        src={searchclipboardimg}
        alt="Review, Select, and Contact the Best Suppliers"
        className="mx-auto mb-4"
      />
      <p className="font-semibold text-center px-5 text-sm xl:text-[15px]">
        Review, Select, and Contact the Best Suppliers
      </p>
    </div>
    <div className="  rounded-lg flex flex-col items-center justify-center  px-8 py-10 ">
      <img
        src={editavatar}
        alt="Suppliers Complete your profile and get notified for opportunities"
        className="mx-auto mb-4"
      />
      <p className="font-semibold text-center text-sm xl:text-[15px]">
        Suppliers Complete your profile and get notified for opportunities
      </p>
    </div>
    <div className=" bg-[#E8FBFF] rounded-lg flex flex-col items-center justify-center px-5 py-10 ">
      <img
        src={pencileditimg}
        alt="Contact to Buyers and Share your Quote for the service"
        className="mx-auto mb-4"
      />
      <p className="font-semibold  text-center px-5 text-sm xl:text-[15px]">
        Contact to Buyers and Share your Quote for the service
      </p>
    </div>
    <div className="  rounded-lg flex flex-col items-center justify-center ">
      <img
        src={handshakeimg}
        alt="Both the Parties can Connect and Make Business Leave a Feedback"
        className="mx-auto mb-4"
      />
      <p className="font-semibold   text-center  px-5 text-sm xl:text-[15px]">
        Both the Parties can Connect and Make Business Leave a Feedback
      </p>
    </div>
  </div>
</div>

{/* footer starts */}
<footer>
<div className="bg-[#123557] text-white py-8 px-4 ">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 border border-t-gray-600 border-r-0 border-l-0 border-b-gray-600 py-10 gap-10 lg:gap-0">
    <div className="flex flex-col sm:flex-row items-center md:items-start gap-20">
      <div className="logoandp">
        <img src={habotlogo} alt="Logo" className="mb-4" />
        <p>© R Singhania</p>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 gap-10">
      <div className="text-center md:text-left">
        <h3 className="font-semibold">Company</h3>
        <ul className="">
          <li className="">
            <a href="#" className="hover:underline text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-400">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold">Terms</h3>
        <ul>
          <li>
            <a href="#" className="hover:underline text-gray-400">
              Data privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-400">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-400">
              Accessibility
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-semibold">Related</h3>
        <ul>
          <li>
            <a href="#" className="hover:underline text-gray-400">
              Find Buyer
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-gray-400">
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
{/* icons links */}
    <div className="flex space-x-4">
      <a href="#" className="hover:text-zinc-400">
        <img src={linkedinimg} alt="LinkedIn"  />
      </a>
      <a href="#" className="hover:text-zinc-400">
        <img src={twitterimg} alt="Twitter" />
      </a>
      <a href="#" className="hover:text-zinc-400">
        <img src={facebookimg} alt="Facebook" />
      </a>
      <a href="#" className="hover:text-zinc-400">
        <img src={instaimg} alt="Instagram" />
      </a>
    </div>
  </div>
</div>

</footer>

    </>
  );
};

export default Page;
