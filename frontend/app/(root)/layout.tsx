"use client";
import React from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import NavbarMain from "@/components/common/NavbarMain";
import Footer from "@/components/common/Footer";

require("@solana/wallet-adapter-react-ui/styles.css");

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = clusterApiUrl(network);

    // const wallets = useMemo(() => [], [network]);

    return (
        <>

            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={[]} autoConnect>
                    <WalletModalProvider>
                        <NavbarMain />
                        {children}
                        <Footer />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider></>
    );
}