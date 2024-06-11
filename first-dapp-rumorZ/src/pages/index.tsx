import { Inter } from "next/font/google";
import Head from "next/head";
import { CardanoWallet, MeshBadge, useWallet, useLovelace } from "@meshsdk/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { wallet, connected, name, connecting, connect, disconnect, error } = useWallet();
  const lovelace:any = useLovelace();
  console.log("connected", connected)

  return (
    <div className="bg-gray-900 w-full text-white text-center">
      <Head>
        <title>RumorZ Test App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh, created by RumorZ" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `}
      >

        <h1 className="text-6xl font-thin mb-20">
          <a href="https://meshjs.dev/" className="text-sky-600">Mesh</a> RumorZ dAPP
        </h1>

        <div className="mb-20">
          {
            !connected ? (
              <CardanoWallet />
            ):
            (
              <>Connected: You have ₳{(lovelace) / 1000000}</>
            )

          }
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center justify-around ">
          <a href="https://meshjs.dev/apis" className="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5">
            <h2 className="text-2xl font-bold mb-2">NFT Market</h2>
            <p className="text-gray-400">
              A marketplace to buy and sell Star Force NFTs.
            </p>
          </a>

          <a href="https://meshjs.dev/guides" className="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96  p-5 m-5">
            <h2 className="text-2xl font-bold mb-2">Shopping Marketplace</h2>
            <p className="text-gray-400">
              A marketplace to buy products with Star Force tokens or ADA.
            </p>
          </a>

          <a href="https://meshjs.dev/react" className="bg-gray-800 rounded-xl border border-white hover:scale-105 transition max-w-96 p-5 m-5 md:mx-auto lg:mx-5 md:col-span-2 lg:col-span-1 ">
            <h2 className="text-2xl font-bold mb-2">Multi-Sig</h2>
            <p className="text-gray-400">
            Selling and minting tokens with multi-sig transactions.
            </p>
          </a>
        </div>
      </main>
      <footer className="p-8 border-t border-gray-300 flex justify-center">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
