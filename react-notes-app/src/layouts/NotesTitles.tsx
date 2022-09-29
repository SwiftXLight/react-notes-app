import React from "react";

const NotesTitles: React.FC = () => {
    return  <div className="radial-gradient grid grid-cols-6 justify-items-center items-center w-vw75 p-4 mb-1 rounded-lg bg-silver relative">
                <span>Name</span>
                <span>Created</span>
                <span>Category</span>
                <span>Content</span>
                <span>Dates</span>
                <span>
                    <span className="flex align-items-center gap-2">
                        <i className="fa-solid fa-box-archive"></i>
                        <i className="fas fa-trash-alt"></i>
                    </span>
                </span>
            </div>;
}

export default NotesTitles;