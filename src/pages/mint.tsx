import Header from "../components/header"
import Socials from "../components/socials"
import { connect, getStarknet } from "get-starknet";
import { Abi, Contract, Signature } from "starknet";

import Erc20Abi from "../ERC20_Mintable_abi.json";
import { composeUInt256, parseInputAmountToUint256 } from "../utils";
import { useState } from "react";

export default function GoldenCarrot({ network = "goerli-alpha" }: { network?: string }){
    
    const textTweet = "I have been chosen for @StarknetBunny and we will create an amazing community together. I minted my Golden Carrot, the race has begun, and of course the bunnies will be the winners. LFG!" 

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textTweet)}&url=${encodeURIComponent('https://imgur.com/a/dFTupUt')}`;

    let [control,setControl]:any = useState(0)

    const contract = "0x06e931246fbae79e0453f780ed58a4cb2ff91f7f1c702705c3c1de41a55d9e72"

    const mint = async () => {

        const wallet = await getStarknet();
       

        if (wallet.isConnected) {
            
            if(control===0){
                window.open(tweetUrl, '_blank');
                await setControl(control++)
            }else{
                const contractAddress =
                network === "goerli-alpha"
                    ? contract
                : network === "dev"
                    ? contract
                : undefined;
            if (!contractAddress) {
                return undefined;
            }

            const erc20Contract = new Contract(
                Erc20Abi as Abi,
                contractAddress,
                wallet.account
            );

            return erc20Contract.mint(
                wallet.account.address,
                parseInputAmountToUint256("100")
            );
            }
        }else{
            alert("Wallet not connected ")
        }
    };

    return(
        <main className="goldenCarrotSection">
        <div className="goldenBg">
            <Header theme="dark" walletMode={true}/>
            <Socials/>
            <div className="goldenCarrotContent">
                <div className="leftContent">
                    <img src="/images/golden-carrot.png" alt="golden carrot"/>
                </div>
                <div className="rightContent">
                    <h6>
                        Dear GC winners, the protagonists of our story,
                        Golden Carrots the Bunny collection will be closed for sales and transfers until it is sold out. Each of you has the opportunity to distribute 5 whitelist spots to your community. Yes, you have been chosen to create a unique community for the Bunnies. As a Golden Carrot holder, you can mint 1 Free Bunny and an additional Bunny at the whitelist price. More utilities will be announced soon. Just know that you are incredibly lucky for being chosen.
                    </h6>
                    <br></br>
                
                 <a className="mintButton" onClick={() => mint()}>
                 Mint
                 </a>
                 
                                    
                </div>
            </div>
        </div>
    </main>
    )
}
