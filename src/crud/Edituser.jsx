
import { useNavigate, useParams } from "react-router-dom"
import style from "./crud.module.css"
import { useEffect, useState } from "react"
import axios from "axios"


const Edituser=()=>
    {
        let obj=useParams()

        let [name,setName]=useState("")
        let [salary,setSalary]=useState("") 
        let [company,setCompany]=useState("")

        let navigate=useNavigate()

        useEffect(()=>
        {
            axios.get(`http://localhost:5000/employee/${obj.abc}`)
            .then((resp)=>{
                setName(resp.data.empName)
                setSalary(resp.data.empSalary)
                setCompany(resp.data.empCompany)

            })
            .catch(()=>{
                console.log("error");
            })
        },[])

        

        let formHandle=(e)=>
            {   e.preventDefault()
                let payload={
                    empName:name,
                    empSalary:salary,
                    empCompany:company
                }
                axios.put(`http://localhost:5000/employee/${obj.abc}`,payload)
                .then(()=>{
                    console.log("successufully updated the data");
                    navigate("/user")
                })
                .catch(()=>
                {
                    console.log("erooorrr");
                })
            }
        return(
            <div id={style.formpage}>
                <form action="">
                          <h1>EDIT USER</h1>
                         <label htmlFor="">Name:</label>
                        <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/>

                        <label htmlFor="">Salary:</label>
                        <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>

                        <label htmlFor="">Company:</label>
                        <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>

                        <button onClick={formHandle} >Submit</button>
                        </form>

            </div>
        )
    }
    export default Edituser