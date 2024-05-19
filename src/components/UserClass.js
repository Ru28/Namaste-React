import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            },
        };
        console.log(this.props.name+"Child Constructor");
    }

    async componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("namaste react op");
        },1000);

        console.log(this.props.name+"Child Component Did Mount");

        // // API call
        // const data = await fetch("https://api.github.com/users/ru28");
        // const json = await data.json();
        // this.setState({
        //     userInfo: json
        // })

        // console.log(json);

    }

    componentDidUpdate(prevProps,prevState) {
        if(this.state.count != prevState.count ||
           this.state.count != prevState.count
        )

        if(this.state.count != prevState.count){
            // code
        }
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component will Unmount")
    }

    render(){
        const { name, location, twitter_username, avatar_url } = this.state.userInfo;

        console.log(this.props.name+"Child render");

        return (
        <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @{twitter_username}</h4>
        </div>
       );
    }


}

export default UserClass;

/*
 ----- Mounting -----
    Constructor (dummy)
    Render (dummy)
       <HTML Dummy>

    component Did Mount
      <API Call>
      <this.setState> -> State variable is updated

 ----- UPDATE -----
    render(API data)    
    <HTML (new API Data)> 
    ComponentDid Update
*/