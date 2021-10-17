import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
function Users() 
{
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data)
            })
        })
    },[])
    return(
        <div>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> Salary</th>
                        <th>Age</th>
                    </tr>
                    {
                        user.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>

                        </tr>
                        )
                    }
                </thead>
                <tbody>
                   
                    
                </tbody>
            </Table>











            {/* {
                user.map((item, i )=>
                    <div key={i}> {item.name} , {item.age} , {item.address} </div>
                )
            }

            {
                user.length == 5 ? 
                <div>Yes, correct Users {user.length} </div> : <div>No, its wrong Users {user.length}</div>
            } */}

        </div>
    )

}

export default Users