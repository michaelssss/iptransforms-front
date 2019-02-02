import React from 'react';
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom';
import  transform from './reducers'
import {createStore ,applyMiddleware } from 'redux'
import * as fetch from './action'

export const store = createStore(transform,applyMiddleware(
    thunkMiddleware
))
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            addr:"172.168.1.5",
            result:""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return <div>
            <h1>IP transform</h1>
            <input type="text" id="ip" defaultValue={this.state.addr} onChange={this.handleChange}></input>
            <h2>{this.state.result}</h2>
            <button onClick={this.handleClick}>转换</button>
            </div>
    }
    handleChange(event) {
        this.setState({addr: event.target.value});
    }
    handleClick() {
        store.dispatch(fetch.fetchPosts(this.state.addr,this))
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));