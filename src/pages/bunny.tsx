import Header from "../components/header"
import Socials from "../components/socials"

export default function Bunny(){

    return(
        <main className="bunnyLandSection">
            <Header theme="dark" />
            <Socials/>
        <div className="bunnyLandContent">
            <div className="slogan">
                The winners of this race will be the rabbits, stay tuned for more.
            </div>
            <div className="bunnyImg">
                <img src="/images/bunny-2.png" alt="bunny land"/>
            </div>
        </div>
        </main>
    )
}