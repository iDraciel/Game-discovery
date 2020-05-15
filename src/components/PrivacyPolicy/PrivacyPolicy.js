import React from'react';

import './PrivacyPolicy.css';
import Footer from '../Footer/Footer';

import {Helmet} from "react-helmet";

const privacypolicy = () => (
    <div>
        <Helmet><title>GameSpaceX | Privacy Policy</title></Helmet>
        <div className="terms-wrapper">
        <h1 className="tc-h1">Privacy Policy</h1>
        <p>Your privacy is important to us. It is GameSpaceX's policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://gamespacex.netlify.app">http://gamespacex.netlify.app</a>, and other sites we own and operate.</p>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
        <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
        <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
        <p>GameSpaceX.com is a website about PC and Console games that shows updates, streams, and news about games.<b></b>
            <b>Check out the latest update of upcoming AAA games and live streams.</b>
            <b>Legal notice: GameSpaceX.com does NOT host any pirated or illegal content, does NOT provide links to any pirated or illegal sites.</b>
            <b>GameSpaceX uses Pictures and Videos from Twitch and Rawg.io. Copyrights are owned by those providers and can be removed upon official request.</b>
            <b>GameSpaceX is solemnly an informational website that provides updates on mostly PC games and view watch of games.</b>
            <b>GameSpaceX encourages users to purchase games from market and at least one purchase link on each game page is provided.</b>
        </p>
        <p>This policy is effective as of 15 May 2020.</p>
        </div>
        <Footer />
    </div>
)

export default privacypolicy;