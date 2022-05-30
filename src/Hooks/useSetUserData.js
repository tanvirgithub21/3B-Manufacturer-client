import { useEffect, useState } from "react";


const useSetUserData = (user) => {

    const [token, setToken] = useState("")
    const email = user?.user?.email;

    console.log(user?.email)


    useEffect(() => {
        console.log("ooooooooooooooooooooooooooooooo");
        console.log(email)
        if (email) {

            console.log("inside useEffect", email);

            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((req) => req.json())
                .then((data) => console.log(data));
        }
    }, [email])



    return [token]



};

export default useSetUserData;