import React from 'react';
import RendList from '../RendList';
import styled from '../App.module.css';

const List = ({isOpened,data}) => {
        return (
                <ul className={styled.menu}>
                    {
                        isOpened && data.map(n => <RendList key={n.id} id={n.id} title={n.title}/>)
                    }
                </ul>
        )
};

export default List;