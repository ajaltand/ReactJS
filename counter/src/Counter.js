import { Component } from "react";

const counterStyle = {
    fontSize : '80px',
}

const inputStyle={
    height:'20px',
    width: '15px'
}

export default class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            message:"",
            value:1
        }
    }

    handleChange = (event) => {
        this.setState({value: Number(event.target.value)});
    }
    
    increaseCount = () => {
        this.setState((prevState) => {
            return{
                count:prevState.count+prevState.value,
                message:"Counter added by "+ prevState.value
            }
        }
    )}

    decreaseCount = () => {
        this.setState((prevState) => {
            if (prevState.count-prevState.value >=0){
                return{
                    count:prevState.count-prevState.value,
                    message:"Counter deducted by " + prevState.value
                }
            }
            else if (prevState.count-prevState.value <=-1){
                return {
                    message:"Sorry the counter can't be less than 0"
                }
            }  
        }
    )}

    render() {
        return (
            <div>
                <div style={counterStyle}>{this.state.count}</div>
                <button onClick={this.increaseCount}>+</button>
                <button onClick={this.decreaseCount}>-</button>
                <div>{this.state.message}</div>
                <input type="text" value={Number(this.state.value)} onChange={this.handleChange} style={inputStyle}/>
            </div>
        )
    }
}