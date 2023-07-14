import Header from "../components/header"
import Socials from "../components/socials"

export default function Main(){
    return (
        <main className="homeSection">
            <Header />
            <Socials/>
            <div className="bunny">
                <img src="/images/bunny.png" alt="bunny" />
            </div>
        </main>)
}