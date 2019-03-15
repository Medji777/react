import React from 'react';

function RenderList(props) {
    return (
        <li className={`list_${props.id}`}>{props.title}</li>
    )
}

export default RenderList