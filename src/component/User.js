import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Modal from './Modal'


class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { firstname: 'Ashish', lastname: 'Jain',email:'ashish@email.com', phone: 789954898 ,action:""},
            { firstname: 'Ashika', lastname: 'Jain',email:'ashika@email.com', phone: 997755788},
            { firstname: 'Mayuri', lastname: 'Karande',email:'mayuri@email.com', phone:876596546 },
            { firstname: 'Rewa', lastname: 'Rajurkar',email:'rewa@email.com', phone: 9876564654 },
            { firstname: 'Dinanath', lastname: 'Patil',email:'dinanath@email.com', phone: 89076675654 },
            { firstname: 'Akshaya', lastname: 'Kulkarni',email:'akshaya@email.com', phone: 789954898 },
            { firstname: 'Sumit', lastname: 'Singh',email:'sumit@email.com', phone: 989798787 },
            { firstname: 'Krishana', lastname: 'Sharma',email:'krishana@email.com', phone: 9897876323},
            { firstname: 'Sumit', lastname: 'Ahir',email:'sumit@email.com', phone: 87867576533},
         ]
      }
   }
 OnView(){
    return(
      alert("Data received")
        //<Modal/>
    )
 }

   renderTableData() {
    return this.state.students.map((student, index) => {
       const {id,firstname,lastname,email,phone} = student 
       return (
          <tr key={id}>
             <td>{firstname}</td>
             <td>{lastname}</td>
             <td>{email}</td>
             <td>{phone}</td>
             
             <td><button className="view" onClick={() => this.OnView()}>View</button></td>
            </tr>
            
       )
    })
 }


 renderTableHeader(){
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
   render() { 
      return (
         <div>
             <Sidebar/>
             <h1 id="title">User Detail</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr> 
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}
 



 
 
 






export default Table
