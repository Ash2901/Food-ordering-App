import React from 'react';

class UserClass extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            userInfo : {
                name: "dummy",
                location: "default",
            }
        };
      // console.log("Child Constructor");
    }

    async componentDidMount() {
        // this.timer = setInterval(() => {
        //     console.log("Hello Ashish");
        // },1000);
      // console.log("I'm Child componentDidMount")
       const data = await fetch("https://api.github.com/users/Ash2901");
       const json = await data.json();
       //console.log(json);
       this.setState({
        userInfo: json,
       })
    };

    componentWillUnmount(){
        //console.log("Component will unmount called");
        //clearInterval(this.timer); to check importance of cleanup
    };
    render() {
        //console.log("Child Render");
        const {name, location} = this.state.userInfo;
        return (
            <div className="user-name">
                <h2>Name: {name}</h2>
                <h2>Address: {location}</h2>
                <h3>Contact: ashishashu2901@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass;