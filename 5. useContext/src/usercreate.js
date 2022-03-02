import { useContext, useState } from 'react';
import UserContext from "./usercontext"
export default function Usercreate() {

  let userData = useContext(UserContext)
  let [firstName,setFirstName] = useState("");
  let [lastName,setlastName] = useState("");
  let [eMail,seteMail] = useState("");
  let [passWord,setpassWord] = useState("");

  let userSubmit = (e) => {
    e.preventDefault()
    console.log({
      firstName,
      lastName,
      eMail,
      passWord
    })
    userData.setUserList([...userData.userList, {
      firstName,
      lastName,
      eMail,
      passWord
    }])
  }
  return <>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>User Form</h3>
        </div>
      </div>
      <form onSubmit={userSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Username</label>
            <input className="form-control" value = {firstName} onChange={(e)=> setFirstName(e.target.value)}/>
          </div>
          <div className="col-lg-6">
            <label>Lastname</label>
            <input className="form-control" value = {lastName} onChange={(e)=> setlastName(e.target.value)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label>E-mail</label>
            <input className="form-control" value = {eMail} onChange={(e)=> seteMail(e.target.value)} />
          </div>
          <div className="col-lg-6">
            <label>Password</label>
            <input className="form-control" value = {passWord} onChange={(e)=> setpassWord(e.target.value)}/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <input className="btn btn-primary" type="submit" value="submit" />
          </div>
        </div>
      </form>
    </div>

  </>

}    
