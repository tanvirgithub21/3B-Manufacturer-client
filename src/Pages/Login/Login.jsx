import React, { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../Common/Footer";
import auth from "../../fierbase.init";


const Login = () => {

  const [liveUser] = useAuthState(auth)
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.pass)

  }



  useEffect(() =>{
    error && toast.error(error.message.slice(22, -2).toUpperCase());
    liveUser && navigate(from)
  },[liveUser, error])


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
              class="input w-full max-w-xs"
              required
              {...register("email")}
            />
            <input
              required
              type="password"
              placeholder="Enter Your Password"
              class="input w-full max-w-xs"
              {...register("pass")}
            />
            <input
              type="submit"
              class="input w-full max-w-xs text-white btn btn-primary"
              value="Loin"
            />
              <div className="text-white font-semibold text-sm">
                <Link to="">Forgotten password?</Link>
              </div>
              <div className="text-white font-semibold text-sm">
                <Link to="">Create new account?</Link>
              </div>

            <div class="w-full max-w-xs text-white divider mx-auto">OR</div>
          </div>
        </form>
        <div className="w-full">
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
