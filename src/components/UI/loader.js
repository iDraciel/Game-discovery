import React from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as FetchingLoader from '../../goFetch.json';


const loader = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: FetchingLoader.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }

    }
    let content = (
        <FadeIn>
            <div style={{ display: 'flex',flexDirection:'column',justifyContent: 'center', alignItems: 'center' ,marginTop:'100px'}}>
                <h2>Please wait Fetching  Data</h2>
                <Lottie options={defaultOptions} height={200} width={200} />
            </div>
        </FadeIn>
    );
    return (
        <div>
           {content}
        </div>
    );
}

export default loader; 