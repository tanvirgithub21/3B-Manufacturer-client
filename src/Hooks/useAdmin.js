import { useEffect, useState } from "react";

const useAdmin = (userEmail) => {



    const [adminState, setAdminState] = useState(false)
    const [rowData, setRowData] = useState({})

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
                    setAdminState(data?.userRoll)
                    setRowData(data)
                })
        }
    }, [userEmail])

    return [adminState, setAdminState, rowData]

}

export default useAdmin