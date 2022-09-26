
import { useState , useEffect  } from "react"

const Student = (props) => {
   const [data ,setData] = useState("") 
   const [email ,setEmail ] = useState("abc@gmail.com")
      
   const submitData = (e) => {
       e.preventDefault() 
       console.log(email)
       fetch("http://localhost:8080/somedata", {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json" ,
                "Accept" : "application/json" 
            } ,
            body : JSON.stringify({email: email})
       })
       .then((resp) => resp.json() )
       .then((data) => console.log(data) )
   }
 
     return (
        <div style  = { {...props.style , padding: "30px" }}>


            <form onSubmit={ submitData } action="" method="GET">
                <input name="email" value={email} onChange={ (e) => setEmail(e.target.value) }  />
                <button type="submit">Submit</button>
            </form>


        </div>
     )
}

export default Student 