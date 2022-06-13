import React from 'react';
import './loading.css';

import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Spinner className='loading' animation="border" />
    )
}

export default Loading