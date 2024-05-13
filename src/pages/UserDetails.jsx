import React from "react";
import { useParams } from "react-router-dom";
import { isSupportedChain } from "../utility";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProvider } from "../constants/providers";
import { readOnlyProvider } from "../constants/providers";
import singleThriftABI from "../constants/singleThrift.json";
import groupThriftABI from '../constants/groupThrift.json'
import { useState, useCallback, useEffect } from "react";
import { getErc20TokenContract } from "../constants/contract";
import Box from '@mui/material/Box';
import { RiErrorWarningFill } from "react-icons/ri";
import Modal from '@mui/material/Modal';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: '13px',
    backgroundColor: '#242424',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    p: 4,
    border: '1px solid #424155'
  };

const UserDetails = ({ value }) => {
  const { dashboardId } = useParams();
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(value)

  console.log(dashboardId);
  const [accountRequest, setAccountRequest] = useState([]);
  const [groupRequest, setGroupRequest] = useState([])

  async function handleSave() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const getSingleThriftContract = (providerOrSigner) =>
      new ethers.Contract(dashboardId, singleThriftABI, providerOrSigner);

    const contract = getSingleThriftContract(signer);
    const ercContract = getErc20TokenContract(signer);

    try {
      const _amount = (5 * 1e18).toString();

      const approveTx = await ercContract.approve(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        ethers.parseUnits(_amount, 18)
      );
      const approveReceipt = await approveTx.wait();

      if (approveReceipt.status) {
        toast.success("Approval successful!", {
          position: "top-center",
        });
      } else {
        toast.error("Approval failed!", {
          position: "top-center",
        });
        throw new Error("Approval failed");
      }

      const transaction = await contract.save();
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();
      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("Funds transfer successful!", {
          position: "top-center",
        });
      }

      toast.error("Can't save yet!", {
        position: "top-center",
      });
      console.log(error);
    } catch (e) {
      const errors = {
        Start: "Can't save yet!",
        PaymentCycle: "WAIT FOR NEXT PAYMENT CYCLE!!",
        Deleted: "ACCOUNT Deleted!!",
        Amount: "INVALID AMOUNT!!",
        Goal: "TARGET REACHED!!!",
        Deadline: "DEADLINE PASSED!!",
      };

      if (e.data && contract) {
        const decodedError = contract.interface.parseError(e.data);
        const errorName = decodedError?.name;
        if (errors[errorName]) {
          toast.error(`Transaction failed: ${errors[errorName]}`, {
            position: "top-center",
          });
          console.log(`Transaction failed: ${errors[errorName]}`);
        } else {
          toast.error(`Unknown error: ${errorName}`, {
            position: "top-center",
          });
          console.log(`Unknown error: ${errorName}`);
        }
      } else {
        toast.error(`Error in Save function:`, e, { position: "top-center" });
        console.log(`Error in Save function:`, e);
      }
    }
  }

  async function handleWithdraw() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const getSingleThriftContract = (providerOrSigner) =>
      new ethers.Contract(dashboardId, singleThriftABI, providerOrSigner);

    const contract = getSingleThriftContract(signer);

    try {
      const transaction = await contract.withdraw();
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();
      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("Funds transfer successful!", {
          position: "top-center",
        });
      }
    } catch (e) {
      const errors = {
        Owner: "NOT OWNER!!",
        Deleted: "ACCOUNT Deleted!!",
        Goal: "TARGET REACHED!!!",
        Amount: "NO FUNDS!!!!",
        Deadline: "DEADLINE NOT REACHED!!",
      };

      if (e.data && contract) {
        const decodedError = contract.interface.parseError(e.data);
        const errorName = decodedError?.name;
        if (errors[errorName]) {
          toast.error(`Transaction failed: ${errors[errorName]}`, {
            position: "top-center",
          });
          console.log(`Transaction failed: ${errors[errorName]}`);
        } else {
          toast.error(`Unknown error: ${errorName}`, {
            position: "top-center",
          });
          console.log(`Unknown error: ${errorName}`);
        }
      } else {
        toast.error(`Error in widthraw function:`, e, {
          position: "top-center",
        });
        console.log(`Error in widthraw function:`, e);
      }
    }
  }

  async function handleEmergencyWithdraw() {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();

    const getSingleThriftContract = (providerOrSigner) =>
      new ethers.Contract(dashboardId, singleThriftABI, providerOrSigner);

    const contract = getSingleThriftContract(signer);

    try {
      const transaction = await contract.emergencyWithdrawal();
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();
      console.log("receipt: ", receipt);

      if (receipt.status) {
        return toast.success("Withdrawal successful!", {
          position: "top-center",
        });
      }
    } catch (e) {
      const errors = {
        Owner: "NOT OWNER!!",
        Deleted: "ACCOUNT Deleted!!",
        Goal: "TARGET REACHED!!!",
      };

      if (e.data && contract) {
        const decodedError = contract.interface.parseError(e.data);
        const errorName = decodedError?.name;
        if (errors[errorName]) {
          toast.error(`Transaction failed: ${errors[errorName]}`, {
            position: "top-center",
          });
          console.log(`Transaction failed: ${errors[errorName]}`);
        } else {
          toast.error(`Unknown error: ${errorName}`, {
            position: "top-center",
          });
          console.log(`Unknown error: ${errorName}`);
        }
      } else {
        toast.error(`Error in widthraw function:`, e, {
          position: "top-center",
        });
        console.log(`Error in widthraw function:`, e);
      }
    }
  }

  const fetchAccount = useCallback(async () => {
    try {
      const getSingleThriftContract = (providerOrSigner) =>
        new ethers.Contract(dashboardId, singleThriftABI, providerOrSigner);

      const contract = getSingleThriftContract(readOnlyProvider);

      const res = await contract.getAccount();
      console.log(res);

      setAccountRequest(res);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchGroupAccount = useCallback(async () => {
    try {
      const getGroupThriftContract = (providerOrSigner) =>
        new ethers.Contract(dashboardId, groupThriftABI, providerOrSigner);

      const contract = getGroupThriftContract(readOnlyProvider);

      const res = await contract.getAccount();
      console.log(res);
      console.log("addresses RRY", res[9])

      setGroupRequest(res);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchGroupAccount();
  }, []);

  return (
    <main className="text-white">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 lg:text-[38px] md:text-[38px] text-[24px]">
          Thrift Details
        </h2>
        <button
          className="style border py-2 px-8 my-4 lg:w-[30%] md:w-[30%] w-[100%] hover:bg-[#9C0F94]"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <section
        className="p-6 rounded-lg flex justify-between bg-cover bg-center bg-[#696969] bg-blend-overlay h-[40vh]"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2017/11/12/19/59/piggy-bank-2943633_1280.jpg')`,
        }}
      >   
      </section>
      <section className="my-4">
      <div className="p-6 rounded-lg bg-[#060E37]">
          <p>Account owner: {accountRequest[0]}</p>
          <p>Thrift contract address: {accountRequest[1]}</p>
          <p>Goal description: {accountRequest[2]}</p>
          <p>Target amount: {Number(accountRequest[3]) / 1e18}</p>
          <p>Duration Time : {Number(accountRequest[4]) / 86400 + " days"}</p>
          <p>Currency: {accountRequest[5]}</p>
          <p>Start Time: {Number(accountRequest[6]) / 86400}</p>
          <p>End Time: {Number(accountRequest[7]) / 86400}</p>
          <p>Amount contributed: {Number(accountRequest[8]) / 1e18}</p>
          <p>Savings Interval: {Number(accountRequest[9]) / 86400 + " days"}</p>
          <p>Goal status: {accountRequest[10] === "true" ? "true" : "false"}</p>
          <p>Cancelled: {accountRequest[11] === "true" ? "true" : "false"}</p>
        </div>
      </section>
      <section className="my-6 bg-[#060E37] p-8 rounded-lg">
        <h3 className="mb-4 lg:text-[28px] md:text-[28px] text-[20px] font-bold">
          Manage Single Thrift Savings
        </h3>
        <div className="flex justify-between">
          <p className="text-[22px] w-[100%] lg:w-[40%] md:w-[40%] my-4">
            Effortlessly manage your savings goals, targets and withdrawals with
            ease.
          </p>
          <div className="flex justify-between items-center w-[100%] lg:w-[55%] md:w-[55%]">
            <div>
              <button
                className="style border py-2 px-8 my-4  hover:bg-[#9C0F94]"
                onClick={handleOpen}
              >
                Emergency Withdrawal
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                <RiErrorWarningFill className="text-[58px]"/>
                <p className="my-4">Emergency Withdrawal attracts 2% penalty fee.</p>
                <p>Are you sure you want to proceed? </p>
                <div className="mb-4">
                <button onClick={handleClose} className="border border-white py-2 px-8 my-4 mr-2 hover:bg-[#383838]">Cancel</button>
                <button className="style border py-2 px-8 my-4 hover:bg-[#9C0F94]" onClick={handleEmergencyWithdraw}>Save</button>
                </div>
                </Box>
              </Modal>
            </div>
            <button
              className="style border py-2 px-8 my-4 hover:bg-[#9C0F94]"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserDetails;
