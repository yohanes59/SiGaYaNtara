import React, { useState } from 'react';
import { deleteCulturalHeritage } from '../../../utils/culturalHeritageHandler';
import Loading from '../Loading';
import './action.css';

const Action = (props) => {
    const { ...rest } = props;
    let [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);
        deleteCulturalHeritage(props);
    }
    if (loading === true) {
        return (
            <Loading />
        )
    }
    return (
        <div className="card-action">
            <ul className="action-menu">
                <li className="edit-card">
                    <a href={`/edit/${props._id}`} {...rest} className="edit">Edit</a>
                </li>
                <li> | </li>
                <li className="delete-card">
                    {/* <a onClick={() => deleteCulturalHeritage(props)}{...rest} className="delete">Hapus</a> */}
                    <a onClick={onSubmit}{...rest} className="delete">Hapus</a>
                </li>
            </ul>
        </div>
    )
}

export default Action