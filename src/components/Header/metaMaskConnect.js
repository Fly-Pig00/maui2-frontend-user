import { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { apiSignIn, signOut, updateBalance } from "../../saga/actions/workflow";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { appConfig } from "../../appConfig";

function MetaMaskConnect(props) {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [appConfig.chainId],
  });

  const { activate, deactivate, account, active, library, chainId } =
    useWeb3React();

  const updateBalance = props.updateBalance;
  const isLogged = props.workflow.isLogged;

  const handleClick = async () => {
    // console.log("handle click", address);
    // if (address !== "") {
    //     console.log("disconnect");
    //     await window.ethereum.request({
    //         method: "eth_requestAccounts",
    //         params: [{
    //             eth_accounts: {}
    //         }]
    //     });
    //     setAddress("");
    // }
    // else {
    //     if (window.ethereum) {
    //         try {
    //           window.ethereum
    //               .request({method: "eth_requestAccounts"})
    //               .then((res) => {
    //                   setAddress(res[0]);
    //               });
    //         } catch (err) {
    //           toast.err("Connection error");
    //         }
    //       } else {
    //         toast.err('Metamask not installed');
    //       }
    // }
    await switchNetwork();
    if (active) {
      console.log("connected");
      deactivate();
      localStorage.clear();
    } else {
      await activate(injectedConnector, async (error) => {
        toast.error("error");
        return;
      });
    }
    updateBalance(account);
  };

  useEffect(() => {
    if (account) updateBalance(account);
  }, [account]);

  const switchNetwork = async () => {
    console.log(
      "switch network",
      `0x${Number(appConfig.chainId).toString(16)}`
    );
    try {
      console.log(
        "switch network: ",
        chainId,
        library.provider,
        `0x${Number(appConfig.chainId).toString(16)}`
      );

      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(appConfig.chainId).toString(16)}` }],
      });
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        console.log("add network");

        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${Number(appConfig.chainId).toString(16)}`,
                rpcUrls: [appConfig.rpcURL],
                chainName: "Ethereum Mainnet",
                nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
                blockExplorerUrls: [],
                iconUrls: [],
              },
            ],
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  /**
   * Render
   */

  return (
    <Button
      className="rounded-[10px] shadow-header-login-btn border-0 dark:border-2 dark:border-[#745FF2] w-[93px] h-[42px] bg-[#F3F3FB] dark:bg-transparent"
      onClick={handleClick}
      isLoading={false}
      isDisabled={false}
    >
      <span className="font-semibold text-[16px] leading-[24px] text-[#745FF2] dark:text-[#745FF2] transition-all duration-1000">
        {account
          ? `${account.slice(0, 5)}...${account.slice(
              account.length - 4,
              account.length
            )}`
          : "Connect"}
      </span>
    </Button>
  );
}

export default compose(
  connect(
    (state) => ({
      workflow: state.workflow,
    }),
    {
      updateBalance,
    }
  )
)(MetaMaskConnect);
