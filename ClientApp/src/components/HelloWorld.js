import React, { Component } from 'react';

export class HelloWorld extends Component {
    static displayName = HelloWorld.name;

    constructor(props) {
        super(props);
        console.log(props);
        this.SayHello = "";
    }

    componentDidMount() {
        alert(this.props.SayHello);
    }


    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.props.alertUser}>Say Hello</button>
                <button onClick={this.alertUser}>Say Hello2</button>
            </div>
            
        );
    }

    alertUser() {
        alert("Hello User");
    }
}