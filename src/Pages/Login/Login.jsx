import { computeHeadingLevel, configure } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../Common/Footer";
import auth from "../../fierbase.init";
import useExistingUser from "../../Hooks/useExistingUser";

const Login = () => {
  const [liveUser] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const [ existingUser, setExistingUser] = useState()
  const [ exitingUser, setEaitingUaer] = useState(false)

  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    // await fetch("http://localhost:5000/user", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then((req) => req.json())
    //   .then((data) => data && navigate(from));
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.pass);
  };

  useEffect(() => {


    const email = liveUser?.email;

    if(email){
      // fetch(`http://localhost:5000/user?userEmail=tanvirkk@gmail.com`,{
      fetch(`http://localhost:5000/user?userEmail=${email}`)
      // fetch(`http://localhost:5000/user?userEmail=tan@gmail.com`)
    //   ,{
    //     method: "GET",
    //     headers: {
    //       "content-type": "application/json",
    //     }
    // }
    // )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch( error => {
    toast.error(error.message)

          setEaitingUaer(true) 
          console.log(error);

        })
    }


    // {
      //   const userEmail = data.userEmail
    //   const userData = { userName: liveUser?.displayName, userEmail: liveUser?.email, userRoll: false }
    //   if(email != userEmail){
        
    //   }
    // }




  }, [liveUser, error]);
  
  console.log( exitingUser)
  useEffect(() =>{

    const userData = {userName: liveUser?.displayName, userEmail: liveUser?.email, userRoll: false}
    // toast.error(exitingUser)


    // if(exitingUser && (userData?.email)){
    //   fetch("http://localhost:5000/user", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   })
    //     .then((req) => req.json())
    //     .then((data) => {
    //       data && toast.success("user added");
    //     });
    
    // }
    error && toast.error(error.message.slice(22, -2).toUpperCase());
    liveUser && navigate(from);
  },[exitingUser, liveUser, error])

  return (
    <section className=" bg-accent">
      <h2 className="text-white text-3xl text-center mt-5 font-semibold">
        Login
      </h2>

      <div className="pb-[3rem]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center gap-5 pt-[3rem]">
            <input
              type="email"
              placeholder="Enter your Email"
              className="input w-full max-w-xs"
              required
              {...register("email")}
            />
            <input
              required
              type="password"
              placeholder="Enter Your Password"
              className="input w-full max-w-xs"
              {...register("pass")}
            />
            <input
              type="submit"
              className="input w-full max-w-xs text-white btn btn-primary"
              value="Loin"
            />
            <div className="text-white font-semibold text-sm">
              <Link to="/forgot">Forgotten password?</Link>
            </div>
            <div className="text-white font-semibold text-sm">
              <Link to="">Create new account?</Link>
            </div>

            <div className="w-full max-w-xs text-white divider mx-auto">OR</div>
          </div>
        </form>
        <div onClick={handleGoogleLogin} className="w-full">
          <button className="flex justify-center items-center  px-5 py-3 bg-blue-100 text-xl text-black font-semibold rounded-lg mx-auto max-w-xs w-full">
            <FcGoogle className="text-3xl mr-3" />
            <span>Sing IN with Google</span>
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
