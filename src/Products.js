import React,{useState} from 'react'
function Products () 
{
    const [val,setVal] = useState("")
    
    const test=(e)=>
    {
        console.log("test function", e.target.value);
        setVal(e.target.value);
    }
    let data = "myproducts"
    return(
        <div>
          <h1>FUNCTIONAL COMPONENT {data} </h1>
             
            {/* <button onClick={()=>{console.log("hello from CLICK")}}> Click Me </button> */}

            <input type= "text" onChange={test} />
            <button onClick={()=>{alert(val)}} > Click met </button>
            <br/><br/>
            <input type="text" onChange={(e)=> { setVal(e.target.value); console.log(e.target.value); } } />
           
        </div>
    )
}

export default Products;