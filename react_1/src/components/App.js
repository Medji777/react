import React from 'react';
import List from './List';
import './App.css'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {data: [], isFetching: true}
    }

    componentDidMount() {
          fetch('./data.json')
            .then(result => result.json())
            .then(result => this.setState({data: result, isFetching: false}))
            .catch(error => console.log(error.message));
    }

    render(){
        const {isFetching} = this.state;
        if (isFetching) return <div>...Loading</div>;
        return (
            <>
                <div className={'App_root'}>{this.props.title}
                    <List data={this.state.data} defaultOpen={true}/>
                </div>
            </>
        )
    }
}

export default App