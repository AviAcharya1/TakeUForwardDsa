import { useState, useEffect } from "react";
import { findSectionProgress, findOverallProgress } from "../utils/calculateProgress.js";
import dsaTrackerList from "../utils/dsaTrackerList.js";
import Section from "./Section.jsx";

export default function Card() {
  const [dsaList, setDsaList] = useState(dsaTrackerList);
  const [overallProgress, setOverallProgress] = useState(0);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("dsalist"));
    if (localList) {
      setDsaList(localList);
    }
  }, []);

  useEffect(() => {
    setOverallProgress(findOverallProgress(dsaList));
    localStorage.setItem("dsalist", JSON.stringify(dsaList));
  }, [dsaList]);

  const toggleSection = (index) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const updateList = (index, indexOfSub) => {
    const newDSAList = [...dsaList];
    newDSAList[index].subsections[indexOfSub].completed = 
      !newDSAList[index].subsections[indexOfSub].completed;
    newDSAList[index].progress = findSectionProgress(newDSAList[index].subsections);
    setDsaList(newDSAList);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-40">
      <p className="bg-clip-text text-transparent bg-gray-50 text-xl font-bold mb-4">
        Progress: {overallProgress}%
      </p>
      <div className="mb-6 rounded bg-gradient-to-r from-purple-500 to-pink-500 transition-all h-2" style={{ width: `${overallProgress}%` }}></div>
      <div className="flex flex-wrap gap-6 justify-center">
        {dsaList.map((section, index) => (
          <Section
            key={index}
            index={index}
            updateList={updateList}
            section={section}
            isOpen={openSections[index] || false}
            toggleOpen={() => toggleSection(index)}
          />
        ))}
      </div>
    </div>
  );
}