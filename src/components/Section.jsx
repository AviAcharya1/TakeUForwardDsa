import { useState } from "react"; 
import SubSection from "./SubSection.jsx"; 
  
export default function Section({ section, index, updateList, isOpen, toggleOpen }) {
    return (
      <div className="bg-gray-200 p-4 w-64 text-violet-800 rounded shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
        <div className="flex flex-col w-full items-center cursor-pointer" onClick={toggleOpen}>
          <h3 className="font-bold text-xl text-center mb-2">
            {section.title}
          </h3>
          <div className="flex gap-2 items-center mb-2">
            <p className="font-bold text-slate-800">{section.progress}%</p>
            <button
              className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600 text-sm transition-colors duration-200"
            >
              {isOpen ? "Close" : "Open"}
            </button>
          </div>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col w-full mt-4 gap-2">
            {section.subsections.map((sub, i) => (
              <SubSection
                key={i}
                index={i}
                sectionIndex={index}
                updateList={updateList}
                subtitle={sub.subtitle}
                completed={sub.completed}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }