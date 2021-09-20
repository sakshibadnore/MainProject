import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
 
function Password() {
  const [userNewPass , setUserNewPass]= useState("");
  const [userConfirmPass , setUserConfirmPass]= useState("");
  const handleNewPass=(e)=>{
    setUserNewPass(e.target.value)
     console.log(e.target.value)
   }
 
   const handleConfirmPass=(e)=>{
     setUserConfirmPass(e.target.value)
      console.log(e.target.value)
    }
  const handleSave=()=>{
          
alert("saved successfully")
  }
    return (
        <div>
            <div className="passwordContainer col-md-5">
        <h2 className="tail">Change Password</h2>
      <div className="form">
        <div className="mb-3">
          <label  className="form-label">New Password</label>
          <input placeholder ="Enter your new password"
           className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input  className="form-control"
            placeholder="Enter your confirm Password"></input>
        </div>
        <div className="mb-3">
          <button  className="btn" onClick={()=>handleSave()}>
            Save
          </button>
          <div className="float-end">
          <a href="/login">Login</a>
          </div>
        </div>
      </div>
     </div>
    </div>
 
    )
}
export default Password;
//ReactDOM.render(password(), document.getElementById("root"));