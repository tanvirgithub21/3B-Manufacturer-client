import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../fierbase.init";

const Forgot = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        sendPasswordResetEmail(data.email)
        reset()
        if(!error){
            toast.success("Reset Email Send")
        }
    }

  return (
    <div className="flex justify-center items-center h-[80%]">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-accent p-8 rounded-xl w-96">
        <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="text-white text-xl text-center font-semibold">Forgotten password</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            class="input w-full"
            required
            {...register("email")}
          />
          <input
            type="submit"
            class="input w-full text-white btn btn-primary"
            value="Loin"
          />
        </div>
      </form>
    </div>
  );
};

export default Forgot;
