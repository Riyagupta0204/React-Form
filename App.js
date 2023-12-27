import "./App.css";
//import Navbar from "./Components/Navbar"
// import Home from "./pages/Home"
// import Login from "./pages/Login"
// import Signup from "./pages/Signup"
// import Dashboard from "./pages/Dashboard"
// import {Route,Routes} from "react-router-dom";
 import {useState} from "react";

function App() {
  const[formdata,setFormdata]=useState({
    firstname:"",lastname:"",email:"" ,country:"" ,state:"",city:"",streetaddress:"",postal:"",comments:false,candidates:false,offers:false
    ,pushnotifications:""

  })
  function Handler(event){
    const{name,value,checked,type}=event.target;
    setFormdata((prev)=>({...prev,[name]:type==="checkbox"? checked:value}));
   }
   function submitHandler(event){
      event.preventDefault();
      console.log("Finally");
      console.log(formdata);
   }
  return( <div className="justify-content items-center">
    <form onSubmit={submitHandler}>
   <label htmlFor="firstname">FirstName</label>
   <br/>
   <input type="text" 
   name="firstname"
   onChange={Handler}
   value={formdata.firstname}
   id="firstname"
   placeholder="firstname"
   className="outline"
   />
   <br/>
   <label htmlFor="lastname">LastName</label>
   <br/>
   <input type="text"
   name="lastname" 
   onChange={Handler}
   value={formdata.lastname}
   placeholder="lastname"
   className="outline"
   />
   <br/>
      <label htmlFor="email">Email</label>
   <br/>
   <input type="text"
   name="email" 
   onChange={Handler}
   value={formdata.email}
   placeholder="email"
   className="outline"
   />
   <br/>
   <label htmlFor="country" >Country</label>
   <br/>
   <select name="country"
     value={formdata.country}
     onChange={Handler}
      className="outline">
        <option >India</option>
        <option >Canada</option>
        <option >Australia</option>

   </select>
   <br/>
   <label htmlFor="state">State</label>
   <br/>
   <input type="text" 
   name="state"
   onChange={Handler}
   value={formdata.state}
   placeholder="state"
   id="state"
   className="outline"
   />
   <br/>
   <label htmlFor="city">City</label>
   <br/>
   <input type="text" 
   name="city"
   onChange={Handler}
   value={formdata.firstname}
  
   placeholder="city"
   id="city"
   className="outline"
   />
   <br/>
   <label htmlFor="Streetaddress">Street Address</label>
   <br/>
   <input type="text" 
   name="streetaddress"
   onChange={Handler}
   value={formdata.streetaddress}
  
   placeholder="G-Block"
   id="streetaddress"
   className="outline"
   />
   <br/>
   <label htmlFor="Postal">Postal</label>
   <br/>
   <input type="text" 
   name="postal"
   onChange={Handler}
   value={formdata.postal}
   placeholder="postal"
   id="postal"
   className="outline"
   />
   <br/>
   <fieldset>
    <legend>By Email</legend>
    < div className="flex">
    <input  id="comments" name="comments" type="checkbox" checked={formdata.comments} onChange={Handler}/>
    <div>
      <label htmlFor="comments">Comments</label>

    </div>
    </div>
    < div className="flex">
    <input  id="candidates" name="candidates" type="checkbox" checked={formdata.candidates} onChange={Handler}/>
    <div>
      <label htmlFor="candidates">Candidates</label>

    </div>
    </div>
    < div className="flex">
    <input  id="offers" name="offers" type="checkbox" checked={formdata.offers} onChange={Handler}/>
    <div>
      <label htmlFor="offers">Offers</label>

    </div>
    </div>
   </fieldset>
   <fieldset>
    <legend>Push Notifications</legend>
    <input type="radio" id="pushEverything" name="pushnotifications" value="Everything" onChange={Handler}/>
    <label htmlFor="every">Everything</label>
   </fieldset>
   <button>Save</button>
   </form>
 

{/* <Navbar islog={islog} setIslog={setIslog}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes> */}
  </div>);
}

export default App;
