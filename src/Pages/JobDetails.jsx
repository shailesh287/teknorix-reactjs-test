import { useParams } from "react-router";
import useJobDetails from "../Hooks/useJobDetails";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { ImLocation } from "react-icons/im";
import parse from "html-react-parser";
import OtherJobs from "../Components/OtherJobs";
import useRandomJobs from "../Hooks/useRandomJobs";
import { FaAngleLeft } from "react-icons/fa6";

const JobDetails = () => {
  const { id } = useParams();
  const { jobDetail, isLoading, description } = useJobDetails(id);

  const randomJobs = useRandomJobs();

  const styleOptions = {
    replace: (domNode) => {
      const renderChildren = (children) => {
        return children.map((child, index) => {
          if (child.type === "tag") {
            const Tag = child.name;
            return (
              <Tag key={index}>
                {child.children && renderChildren(child.children)}
              </Tag>
            );
          } else if (child.type === "text") {
            return child.data;
          }
          return null;
        });
      };
      switch (domNode.name) {
        case "h2":
          return (
            <h2 className="text-[2rem] font-semibold mb-1">
              {domNode.children[0]?.data}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-[1.75rem] font-semibold mb-2">
              {domNode.children[0]?.data}
            </h3>
          );
        case "h4":
          return (
            <h3 className="text-[1.5rem] font-semibold mb-2">
              {domNode.children[0]?.data}
            </h3>
          );
        case "p":
          return <p className="text-xl mb-2">{domNode.children[0]?.data}</p>;
        case "ul":
          return (
            <ul className="text-xl mb-5 pl-10">
              {renderChildren(domNode.children)}
            </ul>
          );
        default:
          return undefined;
      }
    },
  };
  return (
    <>
      <div className="w-11/12 m-auto mt-5">
        <div>
          <Link
            to={"/"}
            className="py-2 px-5 w-24 border flex  font-semibold rounded-3xl hover:bg-gray-200"
          >
            <FaAngleLeft className="w-[14px] h-[14px] mt-[5px] mr-1" /> Back
          </Link>
          <p className="text-2xl mt-16 mb-2">
            {jobDetail?.department?.title} Department at Teknorix
          </p>
          <h1 className="text-4xl font-bold">{jobDetail?.title}</h1>
          <div className="flex  text-[20px] mt-1 ">
            <span className="flex mr-4 ">
              <HiOutlineBuildingOffice className="text-[#656C8A] w-5 h-5 mt-[5px]" />
              {jobDetail?.department?.title}
            </span>
            <span className="flex mr-4">
              <ImLocation className=" text-[#656C8A] w-5 h-5 mt-[5px]" />{" "}
              {jobDetail?.location?.title}
            </span>
            <span className="px-3 text-sm  pt-[2px] mt-[3px] rounded-sm font-bold text-[#555C6A]  bg-gray-300">
              {jobDetail?.type?.toUpperCase()}
            </span>
          </div>
          <div className="mt-6">
            <Link
              to={jobDetail?.applyUrl}
              target="_blank"
              className=" border border-[#4b96e6]  text-center px-9 py-2 rounded-3xl mr-5 bg-[#4b96e6] hover:bg- text-white"
            >
              Apply
            </Link>
          </div>
        </div>
        <br />
        <hr />
        <br />
        {!isLoading && description && (
          <>
            <div className="md:flex">
              <div className="md:w-[70%] mr-3 description">
                {parse(description, styleOptions)}
              </div>
              <div className="md:w-[30%]">
                <OtherJobs
                  otherJobs={randomJobs}
                  hostedURL={jobDetail?.hostedUrl}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default JobDetails;
