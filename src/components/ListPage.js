import React, { useEffect } from 'react';
import "./ListPage.css"

import { ReactComponent as RocketSvg } from "../assets/icons/Rocket.svg"
import { ReactComponent as AiSvg } from "../assets/icons/Group 1000002515.svg"
import { ReactComponent as GroupiSvg } from "../assets/icons/Group 1000002516.svg"
import { ReactComponent as SocialMediaSvg } from "../assets/icons/Group 1000002518.svg"
import { ReactComponent as CardbonSvg1 } from "../assets/icons/carbon_notebook-reference.svg"
import Hackathons from './Hackathons';
import { ReactComponent as VectorSvg } from "../assets/icons/Vector.svg"
import { ReactComponent as RobotSvg } from "../assets/icons/Robot.svg"
import { ReactComponent as IdentificationSvg } from "../assets/icons/IdentificationCard.svg"


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { hackathonActions } from '../store';


function ListPage(props) {
    const [loading, seLoading] = useState(false);
    const hackathonsList = useSelector(state => state.data);
    const dispatch = useDispatch();




    console.log(hackathonsList);
    const navigate = useNavigate();


    const createchallengeHandler = () => {
        navigate("/admin/-1")
    }

    return (
        <div className='listpage-containe'>
            <div className='create-challenge-div'>
                <div className='description-btn'>
                    <div className='description-h1-div'>
                        <h1  >Accelerate Innovation with Global AI Challenges</h1>
                    </div>
                    <div className='description-p-div'>
                        <p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    </div>
                    <button onClick={createchallengeHandler}>Create Challenge</button>

                </div>
                <div>
                    <RocketSvg />
                </div>



            </div>

            <div className='description-footer'>
                <div className="icon-footer">
                    <AiSvg />
                    <div className='icon-des'>
                        <h4>100k+</h4>
                        <p>AI model submissions</p>
                    </div>

                </div>
                <div className="icon-footer">
                    <GroupiSvg></GroupiSvg>
                    <div className='icon-des'>
                        <h4>50K+</h4>
                        <p>Data Scientists</p>
                    </div>

                </div>
                <div className="icon-footer">
                    <SocialMediaSvg></SocialMediaSvg>
                    <div className='icon-des'>
                        <h4>100+</h4>
                        <p>Ai Challenges hosted</p>
                    </div>
                </div>


            </div>

            <div className='participate-div'>
                <h1 className='participate-h1'>Why Participate in <b>AI Challenges?</b></h1>
                <div className='cards-1'>
                    <div className='participate-card'>
                        <CardbonSvg1 />
                        <h1>Prove Your Skills</h1>
                        <p>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
                    </div>
                    <div className='participate-card'>
                        <VectorSvg />
                        <h1>Learn from community</h1>
                        <p>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.</p>

                    </div>
                </div>
                <div className='cards-2'>
                    <div className='participate-card'>
                        <RobotSvg />
                        <h1>Challenge yourself</h1>
                        <p>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
                    </div>
                    <div className='participate-card'>
                        <IdentificationSvg />
                        <h1>Earn recognition</h1>
                        <p>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
                    </div>
                </div>
            </div>
            <Hackathons hackathonsList={hackathonsList}></Hackathons>





        </div>
    );
}

export default ListPage;