import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Hinnuraisen Huikopalat</h1>
            <section id="gallery"><div className="container">
                <div className="gallery-grid">
                    <div className="grid-item-1 grid-div">
                        <Link to="recipes/22">
                            <img src="..//Assets/smoothiebowl.jpg"
                                alt="smoothiebowl" />
                        </Link>
                    </div>
                    <div className="grid-item-2 grid-div">
                        <Link to="recipes/17">
                            <img src="https://source.unsplash.com/8dQ2FGjtbCY/1600x900"
                                alt="nuts" />
                        </Link>
                    </div>
                    <div className="grid-item-3 grid-div">
                        <Link to="recipes/14">
                            <img src="../Assets/siemennäkkäri.jpg"
                                alt="thinbread" />
                        </Link>
                    </div>
                    <div className="grid-item-4 grid-div">
                        <Link to="recipes/24">
                            <img src="..//Assets/proteinfluff2.jpg"
                                alt="proteinfluff" />
                        </Link>
                    </div>
                    <div className="grid-item-5 grid-div">
                        <Link to="recipes/26">
                            <img src="..//Assets/hernehummus.png"
                                alt="hummus" />
                        </Link>
                    </div>
                    <div className="grid-item-6 grid-div">
                        <Link to="recipes/13">
                            <img src="..//Assets/suklaapirtelö2.jpg"
                                alt="chocolateshake" />
                        </Link>
                    </div>
                    <div className="grid-item-7 grid-div">
                        <Link to="recipes/20">
                            <img src="https://source.unsplash.com/h83Rm3njjcg/1600x900"
                                alt="kikherneet" />
                        </Link>
                    </div>
                    <div className="grid-item-8 grid-div">
                        <Link to="recipes/21">
                            <img src="https://source.unsplash.com/5fj-ShvSEnc/1600x900"
                                alt="chiapudding" />
                        </Link>
                    </div>
                    <div className="grid-item-9 grid-div">
                        <Link to="recipes/19">
                            <img src="..//Assets/avokadoleipä2.jpg"
                                alt="avocadobread" />
                        </Link>
                    </div>
                </div>
            </div>
            </section>
        </div >
    );
};

export default Home;