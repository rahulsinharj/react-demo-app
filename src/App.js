import React,{useState} from 'react'
import './App.css';
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Users from './Users'
import MyBootstrap from './MyBootstrap'
import CreateUser from './CreateUser'
import Home from './Home'
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  // const [name,setName] =  useState("rahul")
  return (
    <div className="App">
        
     <Router>

       <Navbar bg="dark" variant="dark">
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link> </Nav.Link>
            <Nav.Link ><Link to="/contact">Contact</Link> </Nav.Link>
            <Nav.Link ><Link to="/products">Products</Link> </Nav.Link>
            <Nav.Link ><Link to="/list">User List</Link> </Nav.Link> 
            <Nav.Link ><Link to="/create">Create User</Link> </Nav.Link>
          </Nav>
        </Navbar>

         <Switch>
          <Route path="/about"> <About /> </Route>
          <Route path="/list"> <Users /> </Route>
          <Route path="/contact"> <Contact /> </Route>
          <Route path="/products"> <Products /> </Route>
          <Route path="/create"> <CreateUser /> </Route>
          <Route path="/"> <Home /> </Route>
        </Switch> 

      </Router>

     {/* <About name={name}/> */}
    
     {/* <Contact name={name} />
    
     <button onClick={()=>{setName("rahulsinha")}} >Update PROP</button> */}
    
    {/* <Products /> */}

     {/* <Users /> */}

     {/* <MyBootstrap /> */}

     {/* <CreateUser /> */}


    </div>
  );
}

export default App;
