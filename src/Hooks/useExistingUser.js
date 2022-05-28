import { useEffect, useState } from "react"

const useExistingUser = (userEmail) =>{

    const [existingUser, setExistingUser] = useState("")

    useEffect(() => {

        if (userEmail) {
            fetch(`http://localhost:5000/user?userEmail=${userEmail}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setExistingUser(data?.userEmail)
                })
        }
    }, [userEmail])

    return [existingUser]
} 

export default useExistingUser