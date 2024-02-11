//import {Navigate, useNavigate,Link,useParams,Routes,Route} from 'react-router-dom'
import {Navigate, useNavigate,Link,useParams,Routes,Route} from 'react-router-dom'
import Card from "./shared/Card"

function ContactUs() {
  // const params = useParams()
  const status = 200
 // const navigate = useNavigate()

  if(status === 404)
  {
    return <Navigate to='/notfound'/>
  }

  
  
  // function onClick(){
  //   console.log("Hello")
  //   navigate('/about')

  // }

  return (
    <Card>
    <div className="about">
    {/* <h1>Contact Us {params.ids}</h1> */}
    <h1>Contact Us</h1>
        <p>Suite 198 840 Estela Forks, Lake Jaimebury, VA 78935-8725</p>
        <p>Contact Number : 3456 98030</p>
        {/* <button onClick={onClick}>Click</button> */}
       <Link to='/'> Back to home </Link>

       {/* Nested routes it only displays if we use contact/show in app.js */}
        <Routes>
        <Route path='/show' element={<h1>Hello World</h1>}/>
       </Routes> 
    </div>
    </Card>
  )
}

export default ContactUs
