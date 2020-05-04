import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './loader.css';

const loader = () => {
   /*+ const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: FetchingLoader.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }

    }

    let content = (
         <div>
            <FadeIn>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                    <h2>Please wait Fetching  Data</h2>
                    <Lottie options={defaultOptions} height={200} width={200} />
                </div>
            </FadeIn>
        </div>
    );
*/
    return (
        <div className="lds-loader"><div></div><div></div><div></div></div>
    );
}

export default loader; 