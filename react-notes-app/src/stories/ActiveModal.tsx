import React from "react";

interface IModalProps {
    todoTitle: string;
    todoDescription: string;
    todoCategory: string;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDescription: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onClick: React.MouseEventHandler<HTMLElement>;
}

const ActiveModal: React.FC<IModalProps> = (props: IModalProps) => {
    return  <form className="modal fade show" id="form" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" role="dialog" style={{display: "block", position: "static"}}>
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Task Name</p>
                <input type="text" className="form-control" name="" id="textInput" value={props.todoTitle}
                onChange={props.onChangeTitle}/>
                <br />
                <p>Content</p>
                <textarea name="" className="form-control" id="textarea" cols={30} rows={5} value={props.todoDescription}
                onChange={props.onChangeDescription}>   
                </textarea>
                <br />
                <p>Category</p>
                <select name="category" className="form-control" id="category" value={props.todoCategory}
                onChange={props.onChangeCategory}>
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                  </select>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary text-gray-700" data-bs-dismiss="modal">Close</button>
                <button type="button" id="add" className="btn btn-primary text-blue-500" data-bs-dismiss="modal" onClick={props.onClick}>Add</button>
            </div>
        </div>
    </div>
  </form>
}

export default ActiveModal;