export default function Socials() {

    return (
        <div className="socials">
            <div className="coming-soon">
                <span>Coming Soon</span>
            </div>
            <a
                onClick={
                    (e) => {
                        e.preventDefault();
                       
                        setTimeout(() => {
                            
                        }, 1000);
                    }
                }
                href="#">
                <img src="/images/discord-square-color-icon.png" alt="discord" />
            </a>
            <a href="https://twitter.com/StarknetBunny" target="_blank">
                <img src="/images/twitter-app-icon.png" alt="twitter" />
            </a>
        </div>
    )
}