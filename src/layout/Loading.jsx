import React from 'react';
import './loading.css'
import {Spinner} from 'react-bootstrap'

const Loading = () => {
    return (
        <div >
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        </div>
    )
}

export default Loading
