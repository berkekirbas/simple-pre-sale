import React from "react";

const PageContent = () => {
  return (
    <div className="container mx-auto px-6">
      {/* Remove class [ h-64 ] when adding a card block */}
      {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
      <div className="w-full h-64 rounded border-dashed borderz-2 border-gray-300">
        {/* Place your content here */}
      </div>
    </div>
  );
};

export default PageContent;
