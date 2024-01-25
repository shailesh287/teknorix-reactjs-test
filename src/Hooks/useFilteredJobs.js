import { useState, useEffect } from "react";

const useFilteredJobs = () => {
  const [data, setData] = useState([]);
  const [groupedJobs, setGroupedJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://teknorix.jobsoid.com/api/v1/jobs");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const groupJobs = () => {
      const groupedJobs = {};
      data.forEach((job) => {
        const department = job.department?.title.trim();
        if (!groupedJobs[department]) {
          groupedJobs[department] = [];
        }
        groupedJobs[department].push(job);
      });

      const resultArray = Object.keys(groupedJobs).map((department) => ({
        department,
        jobs: groupedJobs[department],
      }));

      setGroupedJobs(resultArray);
    };

    groupJobs();
  }, [data]);

  return groupedJobs;
};

export default useFilteredJobs;
