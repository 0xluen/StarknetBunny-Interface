import Header from "../components/header"
import Socials from "../components/socials"

export default function Roadmap(){
    return(
        <main className="roadmapSection">
        <Header/>
        <Socials/>
        <div className="container">
            <div className="roadmap">
                <p>
                    <span>Phase 1: Creation and Distribution of Bunny NFTs</span>

                    Designing and creating Bunny NFTs.
                    Launching and distributing NFTs on the primary market.
                    Engaging with the community through social media and forums to gather feedback.
                </p>
                <p>
                    <span>Phase 2: Development of Community Portal</span>

                    Developing a dedicated community portal for Bunny NFT owners.
                    Integrating features that provide advantages to NFT owners within the portal.
                </p>
                <p>
                    <span>Phase 3: Community Events and Contests</span>

                    Organizing community events.
                    Conducting contests and rewards to encourage competition among Bunny NFT owners.
                    Creating a feedback mechanism for community members to share their ideas and suggestions.
                </p>
                <p>
                    <span>Phase 4: Integration and Collaborations</span>

                    Integrating Bunny NFTs into the Starknet ecosystem.
                    Expanding the utility and adoption of NFTs through collaborations and partnerships.
                </p>
            </div>
            <div className="faq">
                <section className="faq-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="faq" id="accordion">

                                    <div className="card">
                                        <div className="card-header" id="faqHeading-1">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse"
                                                    data-target="#faqCollapse-1" data-aria-expanded="true"
                                                    data-aria-controls="faqCollapse-1">
                                                    <span className="badge">1</span>What is StarknetBunny NFT? What will be its benefit for me? If you are curious, click and learn &#x1f955;
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                <p>StarknetBunny will provide you the perfect community never seen before. <br/>
                                                    1-) A community portal is being developed to provide exclusive access, advantages, and privileges to Bunny NFT owners.<br/>
                                                    2-) The portal will offer special content, events, and discounts specifically tailored for NFT owners.<br/>
                                                    3-) Additionally, a marketplace will be integrated within the portal to facilitate NFT trading among community members, along with community events, contests, and rewards.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <div className="card-header" id="faqHeading-1">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse"
                                                    data-target="#faqCollapse-1" data-aria-expanded="true"
                                                    data-aria-controls="faqCollapse-1">
                                                    <span className="badge">2</span>What is Bunny Supply? What is Bunny mint price? When is mint day?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                <p>be patient dude, all for now tba.<br/>
                                                    Stay tuned &#x1f430;
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <div className="card-header" id="faqHeading-1">
                                            <div className="mb-0">
                                                <h5 className="faq-title" data-toggle="collapse"
                                                    data-target="#faqCollapse-1" data-aria-expanded="true"
                                                    data-aria-controls="faqCollapse-1">
                                                    <span className="badge">3</span>WHAT İS GC?
                                                </h5>
                                            </div>
                                        </div>
                                        <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1"
                                             data-parent="#accordion">
                                            <div className="card-body">
                                                <p>
                                                    This is an excellent question. GC (Golden Carrot) is a community of 100 selected individuals from various networks that will help us create an exceptional community. These individuals will distribute 5 Carrot (Whitelist) each to their own communities, making our community truly unique. Stay tuned for more details. The race has begun
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
</main>
    )
}