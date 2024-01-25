import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

const JobListDetails = ({ jobList }) => {
  const { department, jobs } = jobList;
  console.log(jobs);
  return (
    <>
      <div className="w-4/5  pt-5 m-auto">
        <div className="relative my-5">
          <span className="relative inline-block text-[32px] py-4 font-bold text-[#2B2D38]">
            {department}
            <span
              className="absolute bottom-0 left-0 w-20 h-2 bg-blue-500 inline-block"
              style={{ content: " ", width: "70px" }}
            />
          </span>
        </div>
        <ul>
          {jobs &&
            jobs.map((item) => (
              <li
                key={item.id}
                className="inline-block items-center justify-between hover:bg-gray-100 my-5 p-5 md:flex"
              >
                <div className="">
                  <div className="text-2xl font-bold text-[#2B2D38] my-4">
                    {item?.title}
                  </div>
                  <div className="flex  text-[20px] ">
                    <span className="flex mr-4 ">
                      <HiOutlineBuildingOffice className="text-[#656C8A] w-5 h-5 mt-[5px]" />
                      {item?.department?.title}
                    </span>
                    <span className="flex mr-4">
                      <ImLocation className=" text-[#656C8A] w-5 h-5 mt-[5px]" />{" "}
                      {item?.location?.title}
                    </span>
                    <label className="px-3 text-sm h-6 pt-[2px] mt-[3px] rounded-sm font-bold text-[#555C6A]  bg-gray-300">
                      {(item?.type).toUpperCase()}
                    </label>
                  </div>
                </div>
                <div className="font-semibold mt-3 p-2">
                  <Link
                    to={"#"}
                    className=" border border-[#4b96e6] text-[#4b96e6]  text-center px-9 py-2 rounded-3xl mr-5 hover:bg-[#4b96e6] hover:text-white"
                  >
                    Apply
                  </Link>
                  <Link className=" border  bg-gray-300 text-center px-5 py-2 rounded-3xl">
                    View
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default JobListDetails;
