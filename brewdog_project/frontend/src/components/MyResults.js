import React, { Component } from 'react';

export default class MyResults extends Component {
    constructor(props) {
        super(props);
    }
    style = theme => ({
        toolbar: theme.mixins.toolbar,
    });
    
    render() {
        return (
        <div>
            <h1>My Results</h1>
        </div>
        );
    }
}
