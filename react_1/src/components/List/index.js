import React from 'react';
import RendList from '../RendList';

class List extends React.Component{

    constructor(props){
        super(props);
        this.data = props.data;
        this.defaultOpen = props.defaultOpen;
        this.state = {isOpened: this.defaultOpen};
        this.HClick = HClick.bind(this)
    }

    render(){
        return (
            <>
                <button onClick={this.HClick}>{(this.state.isOpened) ? 'close' : 'open'}</button>
                <ul className={'menu'}>
                    {
                        (this.state.isOpened) ? this.data.map(n => <RendList key={n.id} id={n.id} title={n.title}/>) : ''
                    }
                </ul>
            </>
        )
    }
}

function HClick() {
    this.setState({
        isOpened: !this.state.isOpened
    })
}

export default List