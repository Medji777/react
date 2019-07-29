import React from 'react';

const RenderList = ({id,title}) => <li className={`list_${id}`}>{title}</li>;

export default RenderList;