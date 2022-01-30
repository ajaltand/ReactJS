import { Component } from 'react';

export default class Ticket extends Component {
    render() {
        return <h1>This ticket title is {this.props.title}</h1>
    }
}