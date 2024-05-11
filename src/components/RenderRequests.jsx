import { useState } from "react";
import { isSupportedChain } from "../utility";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
  } from "@web3modal/ethers/react";
import { getThriftContract } from "../constants/contract";
import { readOnlyProvider } from "../constants/providers";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const RenderRequests = () => {
    const { chainId } = useWeb3ModalAccount();
    // const { walletProvider } = useWeb3ModalProvider();
    const [allProposals, setAllProposals] = useState('')

    async function handleProposals () {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
      
        const contract = getThriftContract(readOnlyProvider);
    
        try {
          const transaction = await contract.allSingle();
            console.log(transaction)
            setAllProposals(transaction)
            
        } catch (error) {
          toast.error("Collateral deposit failed", {
              position: "top-center",
            });
          console.log(error)
        }
      };

      console.log(allProposals)

  return (
    <div>
        <button onClick={handleProposals} className="bg-green-200">GEt</button>
       
</div>
  )
}

export default RenderRequests