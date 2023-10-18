import React, { useState } from 'react';

interface TodoProps {
    text: string;
    onDelete: () => void;
    onEdit: () => void;
    id: number;

}

const Todo = ({ text, onDelete, onEdit, id }: TodoProps) => {
    const checkboxId = `list-el-${id}`;

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const changeCheckbox = (): void => {
        setIsChecked(!isChecked);
    };

    const listElementStyle = {
        opacity: isChecked ? 0.5 : 1,
    };

    return (
        <div className="list__element" style={listElementStyle}>
            <label htmlFor={checkboxId} className="lable">
                <input
                    type="checkbox"
                    id={checkboxId}
                    name={checkboxId}
                    className="input"
                    onChange={changeCheckbox} />

                <span className="list-span"></span>
                <p className="task-output">{text}</p>
            </label>

            <div className="buttons__container">
                <abbr title="edit">
                    <button className="edit-btn" onClick={onEdit}>
                        <i className="btn-icon fa-solid fa-pen-to-square"></i>
                    </button>
                </abbr>

                <abbr title="delete">
                    <button className="delete-btn" onClick={onDelete}>
                        <i className="btn-icon fa-solid fa-trash-can"></i>
                    </button>
                </abbr>
            </div>
        </div>
    )

}

export default Todo;