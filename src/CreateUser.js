import React,{useState} from 'react'

function CreateUser() 
{
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    
    function makeuser()
    {
        let data = {username, age , address}   // username,age,address ke separated instances ko ek single obj me store kara rahe hai, CLUSTRING 
        console.log("makeuser called" , data);
        
    }

    return(
        <div>
            <h2>Make a new user </h2>

            {/* <button onClick={makeuser}>MyBtn</button> */}
            
       Username: <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" value={username} /> <br/><br/>
       Age : <input type="text" onChange={(e)=>setAge(e.target.value)} name="age" value={age} /> <br/><br/>
       Address : <input type="text" onChange={(e)=>setAddress(e.target.value)} name="address" value={address} /> <br/><br/>

            <button onClick={makeuser}>Create User</button>

        </div>
    )

}

export default CreateUser