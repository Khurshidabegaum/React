import { useState } from "react"
import style from "./crud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Createuser=()=>
    {
       
        let [name,setName]=useState("")
         let [company,setCompany]=useState("")
         let [salary,setSalary]=useState("")
         let navigate=useNavigate()
    // let getName=(e)=>
    //     {
    //         setName(e.target.value)
    //     }
    //     let getcompany=(e)=>
    //         {
    //             setCompany(e.target.value)
    //         }

    //         let getsalary=(e)=>
    //             {
    //                 setSalary(e.target.value)
    //             }
     let formHandle=(e)=>
        {
            e.preventDefault()
            if(name==""|| salary==""||company=="")
                {
                    alert("please fill the emplty fields")
                }
                else{           
                 let payload={
                 empName:name,
                empSalary:salary,
                empCompany:company
            }


            
            axios.post("http://localhost:5000/employee",payload)
            .then(()=>{console.log("Data has been successfully stored");
                navigate("/user")
            })
            .catch(()=>{alert("Something went wrong");})
            }
    }
        return(
            <div id={style.formpage}>
                
                <form action="">
                    <h1>CREATE USER</h1>
                    
                        <label htmlFor="">Name:</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                        <label htmlFor="">Salary:</label>
                        <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)}/>

                        <label htmlFor="">Company:</label>
                        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)}/>

                        <button onClick={formHandle}>Submit</button>

                </form>
                              
            </div>
        )
    }
    export default Createuser