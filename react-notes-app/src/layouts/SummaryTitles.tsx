import React from "react";

const SummaryTitles: React.FC = () => {
    return  <div className="radial-gradient grid grid-cols-3 justify-items-center items-center w-vw75 p-4 mb-1 rounded-lg bg-silver relative">
                <span>Note Category</span>
                <span>Active</span>
                <span>Archived</span>
            </div>;
}

export default SummaryTitles;