import './Footer-Section.css'

const Footer_Section = (props) => {

    return(
        <div id="footer-section-all">
            <div id="footer-details-top">
                <section id="footer-support">Support
                    <a>Help Center</a>
                    <a>AirCover</a>
                    <a>Supporting people with disabiaties</a>
                    <a>Cancellation options</a>
                    <a>Our COVID-19 Response</a>
                    <a>Report a neighborhood concern</a>   
                </section>

                <section id="footer-community">Community
                    <a /*href=''*/>Gabe Hribik</a>
                    <a /*href='https://www.linkedin.com/in/brandon-c-white/'*/>Brandon White</a>
                    <a /*href='https://www.linkedin.com/in/jacquon-nicholson-591465232/'*/>Jacquon Nicholson</a>
                    <a /*href='https://www.linkedin.com/in/jordan-agcaoili-napoleon/'*/>Jordan Napoleon</a>
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
        <div id='footer-details-bottom'>
            <div id="footer-details-bottom-left"> © 2022 UpInTheAirbnb, Inc.
            · <a><ul className='bottom-details'>Terms</ul></a>
            · <a><ul className='bottom-details'>SiteMap</ul></a>
            · <a><ul className='bottom-details'>Privacy</ul></a>
            · <a><ul className='bottom-details'>Privacy Your Choices</ul></a>
            </div>
            <div id='footer-details-bottom-right'>
            </div>
        </div>
    </div>
    )

}
export default Footer_Section;