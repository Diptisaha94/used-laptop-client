import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer,setisBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://laptop-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => { 
                    console.log(data);
                    setisBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;