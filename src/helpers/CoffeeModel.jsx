import { Dialog, Transition } from "@headlessui/react";
// import { BsCheckLg, HiChevronUpDown } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
// import { Web3NetworkSwitch } from "@web3modal/react";
import { useAccount, useBalance, useConnect } from "wagmi";
import { RiListSettingsFill } from "react-icons/ri";
import { HiChevronUpDown } from "react-icons/hi2";
import { BiSolidChevronDown } from "react-icons/bi";
import { useChainModal } from "@rainbow-me/rainbowkit";

import _Metamask from "../assets/logos/wallet-metamask.png";
import tether from "../assets/tokens/tether.svg";

import { chains } from "./chains";

export default function CoffeeModel({ isOpen, setIsOpen }) {
  const { open, setDefaultChain } = useWeb3Modal();
  const { openChainModal } = useChainModal();
  const { connector: activeConnector, isConnected } = useAccount();
  const { isLoading } = useConnect();

  const [selectedChain, setSelectedChain] = useState("Ethereum");

  console.log("Active Connector Wallet:", activeConnector);
  console.log("Active Connected Chain:", setDefaultChain);

  const { address } = useAccount();
  const {
    data: balance,
    isError,
    isLoading: isBalanceLoading,
  } = useBalance({
    address: address,
  });

  return (
    <>
      {/* <Web3NetworkSwitch /> */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white/45 border border-white/25 backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {/* Buy me a coffee! */}
                    <div className="shadows-text text-3xl">
                      <span>b</span>
                      <span>u</span>
                      <span>y</span>
                      <span> </span>
                      <span>m</span>
                      <span>e</span>
                      <span> </span>
                      <span>a</span>
                      <span> </span>
                      <span>c</span>
                      <span>o</span>
                      <span>f</span>
                      <span>f</span>
                      <span>e</span>
                      <span>e</span>
                    </div>
                  </Dialog.Title>
                  {isConnected ? (
                    <div className="mt-5">
                      <div className="bg-white/20 border border-white/30 rounded-xl backdrop-blur-md p-7 font-orbi">
                        <div className="flex items-center justify-between">
                          <img
                            src={_Metamask}
                            alt="metamask"
                            className="w-16 h-16"
                          />
                          <RiListSettingsFill className="text-2xl" />
                        </div>
                        <div className="my-7">
                          <h6 className="text-[0.6rem] font-medium tracking-wider">
                            Wallet Address
                          </h6>
                          <div className="flex items-center justify-between text-3xl gap-4">
                            <h3>{address.slice(0, 4)}</h3>
                            <h3>{address.slice(4, 8)}</h3>
                            <h3>{address.slice(8, 12)}</h3>
                            <h3>{address.slice(12, 14)} ...</h3>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6/12">
                            <h6 className="text-[0.6rem] font-medium tracking-wider">
                              Total Balance
                            </h6>
                            <h3>
                              {console.log("BB:", balance)}
                              {parseInt(balance?.formatted) > 0
                                ? balance?.formatted
                                : balance?.formatted.slice(0, 6)}
                            </h3>
                          </div>
                          <div className="w-3/12">
                            <h6 className="text-[0.6rem] font-medium tracking-wider">
                              Chain
                            </h6>
                            <h3>1234</h3>
                          </div>
                          <div className="w-3/12">
                            <h6 className="text-[0.6rem] font-medium tracking-wider">
                              ID
                            </h6>
                            <h3>1234</h3>
                          </div>
                        </div>
                      </div>
                      {/* Select Option ------------------------------- */}
                      <div className="grid grid-cols-3 gap-6 font-poppins text-sm mt-6">
                        <button
                          disabled
                          className="w-full border border-cgreen rounded-lg py-1 hover:cursor-not-allowed"
                        >
                          Buy
                        </button>
                        <button
                          disabled
                          className="w-full border border-cgreen rounded-lg py-1 hover:cursor-not-allowed"
                        >
                          Swap
                        </button>
                        <button className="w-full bg-cgreen text-dark font-semibold rounded-lg">
                          Donate
                        </button>
                      </div>
                      {/* Change Chain -------------------------------- */}
                      {chains.map(
                        (chain) =>
                          chain.name === selectedChain && (
                            <button
                              onClick={() => openChainModal()}
                              className="flex items-center justify-between border border-cgreen text-cgreen font-bold rounded-lg px-4 py-2 mt-6 w-full outline-none hover:shadow-inner"
                            >
                              <div className="flex items-center">
                                <img
                                  src={chain.logo}
                                  alt="logo"
                                  className="mr-1 h-8 -my-1 -mx-2"
                                />
                                {selectedChain}
                              </div>

                              <HiChevronUpDown className="text-2xl" />
                            </button>
                          )
                      )}
                      {/* Donate -------------------------------------- */}
                      <div className="flex items-center justify-between bg-black border border-neutral-600 mt-6 rounded-lg py-2 px-4">
                        <div className=" w-9/12">
                          <input
                            type="number"
                            autoFocus
                            placeholder="0.0"
                            className="text-xl font-orbi bg-transparent outline-none"
                          />
                          <p className=" text-xs mt-1">~ 1,800$</p>
                        </div>

                        <button className="w-3/12 flex items-center justify-end">
                          <img src={tether} alt="tether" className="mr-2 h-7" />
                          <p className="text-lg mr-1">USDT</p>
                          <BiSolidChevronDown className="text-xl" />
                        </button>
                      </div>
                      <div className="w-full flex justify-end">
                        <p className=" text-xs font-poppins mt-2 px-1.5">
                          1 ETH = 1,809 USDT
                        </p>
                      </div>
                      <button className="bg-cgreen text-dark uppercase font-semibold w-full font-poppins rounded-lg py-2 mt-4 ">
                        Donate
                      </button>
                      {/* <div className=" bg-zinc-600/40 text-white font-medium border border-neutral-700/70 rounded-lg px-4 py-2 w-full">
                        <p className=" text-center font-bold text-base">
                          Select a chain
                        </p>
                        <div className="grid grid-cols-3 gap-2 text-sm mt-4">
                          {chains.map((chain) =>
                            chain.name === selectedChain ? (
                              <div className="flex items-center justify-between border border-cgreen rounded-lg">
                                <div className="flex items-center">
                                  <img
                                    src={chain.logo}
                                    alt="ethereum"
                                    className="w-10 h-10 -my-1"
                                  />
                                  <p className="-my-2">{chain.name}</p>
                                </div>
                                <div className=" w-2 h-2 bg-cgreen mx-3 rounded-full shadow-sm shadow-cgreen" />
                              </div>
                            ) : (
                              <div className="flex items-center hover:bg-neutral-700/30 rounded-lg cursor-pointer ">
                                <img
                                  src={chain.logo}
                                  alt="ethereum"
                                  className="w-10 h-10 -my-1"
                                />
                                {chain.name}
                              </div>
                            )
                          )}
                        </div>
                      </div> */}
                    </div>
                  ) : (
                    <button
                      onClick={open}
                      className="text-center bg-cgreen text-dark font-bold rounded-lg px-4 py-2 w-full mt-5"
                    >
                      {isLoading ? "Loading..." : "Connect Wallet"}
                    </button>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
