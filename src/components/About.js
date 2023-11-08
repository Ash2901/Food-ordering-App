import User from './user';
import UserClass from './userClass';
import React from 'react';

class About extends React.Component{
    constructor() {
        super();
       // console.log("Parent Constructor");
    }
    componentDidMount() {
        //console.log("I'm Parent componentDidMount");
    }
    render() {
        //console.log("Parent Render");
        return (
            <div>
                <h1>About us</h1>
                <h2>Welcome to Foodieeeee!!! </h2>
                <UserClass />
            </div>
        );
    }
}

export default About;