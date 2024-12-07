import React from "react";
// import UpperContent from "./primary-content/UpperContent";
import UpperContent from "./HeaderContent";
import MiddleContent from "./primary-content/MiddleContent";
import DownContent from "./primary-content/DownContent";

const Content = () => {
  return (
    <div className="mt-8">
      <UpperContent />
      <MiddleContent />
      <DownContent />
    </div>
  );
};

export default Content;
