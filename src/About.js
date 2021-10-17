import React from 'react'
class About extends React.Component{
    constructor()
    {
        super();
        // this.state={
        //     name : 'rahulr',
        //     age : 26
        // }
        console.log("constructor is called");
    }
    componentDidMount()
    {
        // console.log("Component Did Mount");
        console.log("props in update", this.props)
    }
    componentDidUpdate()
    {
        // console.log("Component Did Update");
        // console.log("props in update", this.state.name)
        console.log("props in update", this.props.name)
       // alert("name is updated");
    }
    render() 
    {
        console.log("render")
        let data = "myAbout"
        return(
            <div>  
                <h1>CLASS COMPONENT {data}</h1>
                
                <h2>{this.props.name}</h2>


                {/* <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>
                <button onClick={()=>{this.setState({name:"rahul sinha rs"})}} >UpdateName</button> */}

            </div>
        )
    }
}

export default About;

/*
    constructor()
    {
    
    }
    componentDidMount()
    {
    
    }
    componentDidUpdate()
    {
    
    }
    componentWillUnmount()
    {
    
    }

*/    