import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import video from '/fleurveda.cs.mp4'
import "./styles.css"

const ComingSoonPage = () => {
    return (
        <main className="cs">
            <section className="cs-first-section cs-section">
                <section className="cs-first-video-section">
                    <video src={video} autoPlay muted loop id="bg-video"></video>
                </section>
                <section className="cs-first-bottom-section">
                    <span>All rights reserved &#169;</span>
                    <span className="scroll-icon-section">
                        <MdKeyboardDoubleArrowUp />
                        <p>Show more</p>
                    </span>
                    <span>
                        <p>Fleurveda is Going Live Soon . . .</p>
                    </span>
                </section>
            </section>
            <section className="cs-second-section cs-section">
                <img src="/pattern.1.png" alt="pattern1" className="cs-pattern-2"/>
                <img src="/pattern.1.png" alt="pattern1" className="cs-pattern-1"/>
                <span className="cs-second-top-section">
                        <MdKeyboardDoubleArrowDown />
                        <p>Show Less</p>
                </span>
                <section className="cs-second-section-content">
                    <div className="content-textual">
                        <h4>FLEURVEDA</h4>
                        <p>|</p>
                        <p>Introducing a precise fusion of Science and Ayurveda, transcending the ordinary to elevate your self-care experience!</p>
                        <p>Coming up with our exclusive range of beauty elixirs, bath care products and hi-tech beauty accessories that caters to the refined tastes of the discerning connoisseur</p>
                        <h4>At fleurveda, Luxury meets purity, and care becomes an art!</h4>
                    </div>
                    <div className="content-functional">
                        <p>Subscribe to our newsletter for upcoming updates and exclusive insights!</p>
                        <form className="newsletter-area">
                            <input type="text" placeholder="Your Email Address"/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default ComingSoonPage