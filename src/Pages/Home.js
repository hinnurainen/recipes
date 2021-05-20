import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Hinnuraisen Huikopalat</h1>
            <section id="gallery"><div className="container">
                <div className="gallery-grid">
                    <div className="grid-item-1 grid-div">
                        <img src="..//Assets/smoothiebowl.jpg"
                            alt="smoothiebowl" />
                    </div>
                    <div className="grid-item-2 grid-div">
                        <img src="https://source.unsplash.com/8dQ2FGjtbCY/1600x900"
                            alt="nuts" />
                    </div>
                    <div className="grid-item-3 grid-div">
                        <img src="../Assets/siemennäkkäri.jpg"
                            alt="thinbread" />
                    </div>
                    <div className="grid-item-4 grid-div">
                        <img src="..//Assets/proteinfluff2.jpg"
                            alt="proteinfluff" />
                    </div>
                    <div className="grid-item-5 grid-div">
                        <img src="..//Assets/hernehummus.png"
                            alt="hummus" />
                    </div>
                    <div className="grid-item-6 grid-div">
                        <img src="..//Assets/suklaapirtelö2.jpg"
                            alt="chocolateshake" />
                    </div>
                    <div className="grid-item-7 grid-div">
                        <img src="https://source.unsplash.com/h83Rm3njjcg/1600x900"
                            alt="kikherneet" />
                    </div>
                    <div className="grid-item-8 grid-div">
                        <img src="https://source.unsplash.com/5fj-ShvSEnc/1600x900"
                            alt="chiapudding" />
                    </div>
                    <div className="grid-item-9 grid-div">
                        <img src="..//Assets/avokadoleipä2.jpg"
                            alt="avocadobread" />
                    </div>
                </div>
            </div>

            </section>
        </div >
    );
};

export default Home;