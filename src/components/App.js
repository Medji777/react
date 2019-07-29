import React from 'react';
import List from './List';
import styled from './App.module.css';

class App extends React.Component {

  state = {data: [], isFetching: true, isOpened: true};

  componentDidMount() {
    fetch('./data/data.json')
        .then(result => result.json())
        .then(result => this.setState({data: result, isFetching: false}))
        .catch(error => console.log(error.message));
  }

  HClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  };

  render() {
    const {isFetching, data} = this.state;
    return (
        isFetching ? <div>...Loading</div> : <div className={styled.App_root}>
          <div className={styled.App_root__header}>
            <p>{this.props.title}</p>
            <button onClick={this.HClick}>{(this.state.isOpened) ? 'close' : 'open'}</button>
          </div>
          <List data={data} isOpened={this.state.isOpened}/>
        </div>
    )
  }
}

export default App;