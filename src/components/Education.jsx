import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="bg-tertiary rounded-2xl p-8 min-h-[200px]">
        <p className="text-secondary text-[18px] uppercase tracking-wider text-center mb-2">Where I studied</p>
        <h2 className="text-white font-black text-[30px] text-center mb-8">Education</h2>
        <div className="flex flex-col gap-6 items-center">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-primary rounded-xl p-6 shadow w-full max-w-xl flex flex-col items-center">
              <h3 className="text-white text-xl font-bold mb-1">{edu.degree}</h3>
              <div className="flex items-center gap-2 mb-1">
                {edu.image && (
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className={`object-contain ${edu.school.includes("ENSIT") ? "w-24 h-24" : "w-16 h-16"}`}
                  />
                )}
                <p className="text-secondary text-md">{edu.school}</p>
              </div>
              <p className="text-secondary text-sm">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education; 