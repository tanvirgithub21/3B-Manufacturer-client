import React, { useState } from "react";
import Footer from "../../Common/Footer";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../fierbase.init";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


const SingIn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    emailUserError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


  const { register, handleSubmit, reset} = useForm();
  const [error, setError] = useState("")

  const onSubmit = data =>{

    if(data?.confirmPass.length >= 6){
      setError("")
      if(data.pass === data.confirmPass){
        createUserWithEmailAndPassword(data?.email, data?.pass)
        
        if(!emailUserError){
          toast.success("Email Verification Sent")
          reset()
          navigate(from)
        }else{
          toast.error(`${emailUserError?.message.slice(22, -2)?.toUpperCase()}`)
          
        }
        setError("")
      }
      else{
        return setError("Password Not Match")
      }
    }else{
      setError("Minimum 6 Character")
    }

  }

  return (
    <section className="min-h-[91%] bg-accent">
      <h2 className="text-white text-3xl text-center mt-5 font-semibold">
        SingIn
      </h2>

      <div className="pb-[1rem] min-h-[92%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-5 pt-[3rem]">
            <input
              type="text"
              placeholder="Name"
              class="input w-full max-w-xs"
              required
              {...register("name")}
            />
            <input
              required
              type="email"
              placeholder="Email"
              class="input w-full max-w-xs"
              {...register("email")}
            />
            <input
              type="password"
              placeholder="Password"
              class="input w-full max-w-xs"
              required
              {...register("pass")}
            />
            <input
              type="password"
              placeholder="Conform Password"
              class="input w-full max-w-xs"
              required
              {...register("confirmPass")}
            />
            {
              error && <small className="text-red-600 text-sm font-semibold">{error}</small>
            }
            <input
              type="submit"
              class="input w-full max-w-xs text-white btn btn-primary"
              value="Sing In"
            />
          </div>
          <div className="w-full max-w-xs text-white mx-auto">

              <p className="text-center mt-5">Have a already account? <span className="text-black font-semibold cursor-pointer">Login</span></p>
        
          </div>
         
        </form>
      </div>
      <Footer/>
    </section>
  );
};

export default SingIn;
