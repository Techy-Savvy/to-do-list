import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Frontend: { backgroundColor: "#FFDD95" },
    Backend: { backgroundColor: "#C5EBAA" },
    Linux: { backgroundColor: "#80C4E9" },
    Devops: { backgroundColor: "#EECAD5" },
    Python: { backgroundColor: "#D1E9F6" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
