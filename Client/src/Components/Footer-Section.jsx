import './Footer-Section.css'
const Footer_Section = (props) => {
    return(
        <div id="footer-details">
            <section id="footer-support">Support
                <a>Help Center</a>
                <a>AirCover</a>
                <a>Supporting people with disabiaties</a>
                <a>Cancellation options</a>
                <a>Our COVID-19 Response</a>
                <a>Report a neighborhood concern</a>   
            </section>

            <section id="footer-community">Community
                <a>Gabe Hribik</a>
                <a>Brandon White</a>
                <a>Jacquon Nicholson</a>
                <a>Jordan Napoleon</a>
            </section>

            <section id="footer-hosting">Hosting
                <a>Airbnb your home</a>
                <a>AirCover for Hosts</a>
                <a>Explore hosting resources</a>
                <a>Visit our community forum</a>
                <a>How to host responsibly</a>
            </section>

            <section id="footer-airbnb">Up In The AirBnb
                <a>Newsroom</a>
                <a>Learn about new features</a>
                <a>Letter from our founders</a>
                <a>Careers</a>
                <a>Investors</a>
                <a>Gift cards</a>
            </section>
        </div>
    )

}

export default Footer_Section;