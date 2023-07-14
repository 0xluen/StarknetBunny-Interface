import { connect, disconnect } from "get-starknet"
import {useState} from "react"
import { useLocation } from 'react-router-dom';



export default function Header({theme = "light",walletMode=false}) {
  
    const [buttonStatus, setStatus] :any = useState(true)

    const location = useLocation();

    const patch = location.pathname.split('/')[1]; 

    const connectPatch = "golden-carrot"
  
  
    async function handleDisconnect() {
        await disconnect()
        setStatus(true)
    }
    
    function getRandomWith() {
        let screenWidth = window.innerWidth;
        return Math.floor(Math.random() * (screenWidth - 1));
    }
    
    function getRandomHeight() {
        let screenHeight = window.innerHeight;
        return Math.floor(Math.random() * (screenHeight - 1));
    }

   


    return (
        <header className={
            theme === "dark" ? "darkHeader" : "lightHeader"
        }>
            <div className="logoDiv">
                <div className="logo">
                    <a href="/">
                        <img
                          
                            className="escaping" src="/images/carrot-logo-min.png" alt="logo" />
                    </a>
                    <div className="spaceArea"
                         onMouseEnter={
                             async()=>{
                            
                             }
                         }
                       
                    >
                    </div>
                </div>
            </div>
            <div className="navDiv">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/bunny-land">BunnyLand</a></li>
                        <li><a href="/roadmap">Roadmap</a></li>
                        <li className="goldenNav"><a href="/golden-carrot">Golden Carrot</a></li>
                        {patch === connectPatch ? walletMode &&  
                        <li> { buttonStatus == true ? <a onClick={
                            async () => {
                                try {
                                    const wallet = await connect({
                                        include: ["braavos","argentX"],/// ,"argentX"
                                        
                                    });
                                    if (wallet) {
                                        await wallet.enable({ showModal: true });
                                        setStatus(false)
                                    }
                                } catch (err) {
                                    console.error(err);
                                }
                            }
                         }>
                            Connect Wallet
                            </a>
                        :<a onClick={() => handleDisconnect()}>Disconnect</a>}</li>:''}
                        
                    </ul>
                </nav>
            </div>
            <div className="navDivMobile">
                <div
                    className={
                        theme === "dark" ? "hamburgerButton darkHamburgerButton" : "hamburgerButton"
                    }
                >
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
                    </svg>
                </div>
                <nav className="menuMobil openMenu">
                    <ul>
                        <li><a href="/bunny-land">BunnyLand</a></li>
                        <li><a href="/roadmap">Roadmap</a></li>
                        <li className="goldenNav"><a href="/golden-carrot">Golden Carrot</a></li>
                        <li><a href="#">Connect Wallet</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}