import { ethers } from "ethers";
import thriftABI from "./thrift.json"
// import groupABI from "./groupThrift.json"
// import singleABI from "./singleThrift.json"

export const getThriftContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        thriftABI,
        providerOrSigner
    );

// export const getSingleThriftContract = (providerOrSigner) =>
//     new ethers.Contract(
//         import.meta.env.VITE_DAO_CONTRACT_ADDRESS,
//         singleABI,
//         providerOrSigner
//     );

// export const getErc20TokenContract = (providerOrSigner, tokenAddress) =>
//     new ethers.Contract(tokenAddress, erc20ABI, providerOrSigner);