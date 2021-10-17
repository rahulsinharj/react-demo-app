import React,{useEffect,useState} from 'react'
function Contact(props) 
{
    const [emp, setEmp]=useState("rahul01")
    const [age, setAge]=useState("22")

    useEffect(()=>{
        // console.log("hello from hooks" , emp);
        console.log("Check props" , props);
        console.log("Check props" , props.name);        
    }) 
    useEffect(()=>{
        
        console.log("Check props 2 for Update" , props.name);        
    },[props.name] ) 

    let data = "mycontact"
    return(
        <div>
            <h1>FUNCTIONAL COMPONENT {data} </h1>
           
            <h2>{props.name}</h2>
           
           
            {/* <h2>EMP : {emp}</h2>
            <h2>Age : {age}</h2>
            
            <button onClick={()=>setName("sinha002")} >Update Name</button>
            <button onClick={()=>setAge("23")} >Update Age</button> */}
        </div>
    )
}

export default Contact;