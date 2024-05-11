import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getThriftContract } from "../constants/contract";
import { wssProvider } from "../constants/providers";
import { ethers } from "ethers";

const UseFetchRequests = () => {
    const [allRequests, setAllRequests] = useState([]);
    const [count, setCount] = useState(0);

    const fetchAllSingleThrift = useCallback(async () => {
        try {
            const contract = getThriftContract(readOnlyProvider);
            const res = await contract.allSingle();
            console.log(res)
            // const converted = res?.map((item)=>{
            //     return{id: item[0],
            //     address: item[1],
            //     amount: item[2],
            //     interest: item[3],
            //     repayment: item[4],
            //     Offer: item[5]?.map((ite)=>{
            //         return{
            //             offerId: ite[0],
            //             tokenAdd: ite[1],
            //             author: ite[2],
            //             loanAmount: ite[3],
            //             loanInt: ite[4],
            //             rDate: ite[5],
            //             offerStat: ite[6]
            //         }
            //     }),
            //     rDate: item[6],
            //     lender: item[7],
            //     loanReq: item[8],
            //     loanStatus: item[9]
    
            //    }
            // }) 
            // setAllRequests(converted)
        } catch (error) {
            console.error(error);
        }
    }, []);

    // const trackingRequests = useCallback(() => {
    //     setCount((prevValue) => prevValue + 1);
    //     fetchAllSingleThrift();
    // }, [fetchAllSingleThrift]);


    // useEffect(() => {
    //     fetchAllSingleThrift();

    //     const filter = {
    //         address: import.meta.env.VITE_CONTRACT_ADDRESS,
    //         topics: [ethers.id("RequestCreated(address,string,SingleThrift)")],
    //     };

    //     wssProvider.getLogs({ ...filter, fromBlock: 4702687 }).then((events) => {
    //         setCount(events.length + 1);
    //     });

    //     const provider = new ethers.WebSocketProvider(
    //         import.meta.env.VITE_WSS_RPC_URL
    //     );
    //     provider.on(filter, trackingRequests);

    //     return () => {
    //         // Perform cleanup
    //         provider.off(filter, trackingRequests);
    //     };

    // }, [fetchAllSingleThrift, trackingRequests, count]);

    // return allRequests;
    return (
    <button onClick={fetchAllSingleThrift} className="bg-red-300">Fetch</button>
    )
}

export default UseFetchRequests