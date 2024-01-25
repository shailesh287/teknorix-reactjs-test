import React, { useEffect, useState } from "react";
import useFilteredJobs from "../Hooks/useFilteredJobs";
import JobListDetails from "./JobListDetails";

const JobList = () => {
  const jobsList = useFilteredJobs();

  return (
    <>
      <div>
        {jobsList &&
          jobsList?.map((job, i) => <JobListDetails jobList={job} key={i} />)}
        <div></div>
      </div>
    </>
  );
};

export default JobList;
