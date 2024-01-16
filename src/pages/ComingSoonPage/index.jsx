import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import video from '/fleurveda.cs.mp4'
import "./styles.css"

const ComingSoonPage = () => {
    const el = (<video src={video} autoPlay muted loop id="bg-video" type="video/mov"></video>);
    console.log(el)
    return (
        <main className="cs">
            <section className="cs-first-section cs-section" id="cs-first-section">
                <section className="cs-first-video-section">
                    <video src={video} autoPlay muted loop id="bg-video" type="video/mp4"></video>
                    {/* <video src="https://drive.google.com/file/d/1LcnrH5Hse5PhKNeisEWF6YgP_OUKQXkq/view?usp=sharing" autoPlay muted loop id="bg-video" type="video/mov"></video> */}
                </section>
                <section className="cs-first-bottom-section">
                    <span>All rights reserved &#169;</span>
                    <a href="#cs-second-section" className="scroll-icon-section pseudobtn">
                        <MdKeyboardDoubleArrowUp />
                        <p>Show more</p>
                    </a>
                    <span>
                        <p>Fleurveda is Going Live Soon . . .</p>
                    </span>
                </section>
            </section>
            <section className="cs-second-section cs-section" id="cs-second-section">
                <img src="/pattern.1.png" alt="pattern1" className="cs-pattern-2"/>
                <img src="/pattern.1.png" alt="pattern1" className="cs-pattern-1"/>
                <a href="#cs-first-section" className="cs-second-top-section pseudobtn">
                        <MdKeyboardDoubleArrowDown />
                        <p>Show Less</p>
                </a>
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