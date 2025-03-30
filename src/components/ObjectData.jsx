import React from 'react';

const ObjectData = ({ text, type }) => {
  return (
    <div className="cursor-pointer p-2 border rounded-lg">
      <span>{text}</span> 
      {/* type প্রপস চেক করুন */}
      {type && Array.isArray(type) && (type.includes("minusIcon") ? " ➖" : type.includes("plusIcon") ? " ➕" : "")}
    </div>
  );
};

export default ObjectData;
