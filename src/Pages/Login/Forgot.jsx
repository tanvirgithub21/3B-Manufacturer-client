import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../fierbase.init";

const Forgot = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleResetMail = e =>{
        e.preventDefault()
        const email = e.target.email.value
        sendPasswordResetEmail(email)
        if(!error){
            toast.success('Reset Email Send')
        }
    }
  return (
    <div className="flex justify-center items-center h-[80%]">
      <form onSubmit={handleResetMail} className="bg-accent p-8 rounded-xl w-96">
        <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="text-white text-xl text-center font-semibold">Forgotten password</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            class="input w-full"
            required
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
