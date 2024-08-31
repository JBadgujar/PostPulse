import { SignupInput } from "@jayesh02/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}:{type:"signup"|"signin"}) =>{
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`, postInputs);
            console.log(response);
            const jwt = response.data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        }catch(e){
            console.log(e);
            
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">  
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div> 
                    <div className="text-slate-500">
                        {type === "signup" ? "Already have an account?":"Don't have an account?" }
                        <Link className="pl-2 underline" to={type=="signup"?"/signin":"/signup"}> 
                            {type==="signup"?"Login":"Signup"}
                        </Link>
                    </div>
                </div>
                <div className="pt-10">
                    {type=="signup"?<LabelledInput label="Name" placeholder="Enter your Name" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name:e.target.value
                        }))
                    }} />:null}
                    <LabelledInput label="Username" placeholder="Enter your email" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username:e.target.value
                        }))
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="Enter your Password" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password:e.target.value
                        }))
                    }} />
                    <button onClick={sendRequest} type="button" className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
                    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
                     dark:border-gray-700">{type === "signup" ? "Sign Up":"Log In"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType{
    label: string,
    placeholder: string,
    onChange: (e:ChangeEvent<HTMLInputElement>) => void,
    type?: string,
}

function LabelledInput({label,placeholder,onChange,type}: LabelledInputType){
    return <div className="mt-3">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <input onChange={onChange} type={type || "text" } id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder={placeholder} required />
    </div>
}