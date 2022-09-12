import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="andrewheyer_observatory_pose1.png" className="d-block mx-lg-auto img-fluid"
                             alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Hello, World</h1>
                        <p className={"mt-2"}>I’m excited to present v1 of my portfolio website. <code>You will.find(
                            3_projects ) foreach</code> one is focused on concepts and practical
                            implementations of React, Django, and AWS. I created these projects to level up my
                            skill-set and confidence within the full stack software domain.
                        </p>
                        <p> Thanks for your time.
                        </p>
                        <p> - Andrew Heyer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;