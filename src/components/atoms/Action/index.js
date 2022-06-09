import React from 'react'
import { DeleteIcon, EditIcon } from '../../../assets'
import './action.css'

const Action = (props) => {
    const { ...rest } = props;
    return (
        <div className="card-action">
            <ul className="action-menu">
                <li className="edit-card">
                    <img src={EditIcon} alt="Edit Icon" className="icon-card" />
                    <a href={`/edit/${props._id}`} {...rest} className="edit">Edit</a>
                </li>
                <li className="delete-card">
                    <img src={DeleteIcon} alt="Delete Icon" className="icon-card" />
                    <a href="/" {...rest} className="delete">Hapus</a>
                </li>
            </ul>
        </div>
    )
}

export default Action