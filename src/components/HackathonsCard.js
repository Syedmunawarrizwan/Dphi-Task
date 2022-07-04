import React, { useEffect, useState } from 'react';
import "./HackathonsCard.css"
import { useNavigate } from "react-router-dom"
import DetailPAge from './DetailPage';

import Countdown from 'react-countdown';


function HackathonsCard(props) {


    const navigate = useNavigate();
    const navigateToDeatilPage = () => {
        navigate("/detail/" + props.id)
    }
    const [status, setStatus] = useState();
    const [timerElement, setTimerElement] = useState("");

    useEffect(() => {
        if (props.start_date > new Date() && props.end_date > new Date()) {
            const timeLeft = Date.now() + Date.parse(props.start_date) - Date.now();
            console.log(timeLeft);
            setStatus("Upcoming");
            setTimerElement(<>
                Starts In:
                <Countdown date={timeLeft}></Countdown>
            </>)
        } else if (props.start_date < new Date() && props.end_date > new Date()) {
            setStatus("Active");
            const timeLeft = Date.now() + Date.parse(props.end_date) - Date.now();
            console.log(timeLeft);

            setTimerElement(<>
                Ends In:
                <Countdown date={timeLeft}></Countdown>
            </>)
        } else {
            setStatus("Ended")
            setTimerElement(`Ended on ${props.end_date.toDateString()}`);
        }
    }, [])
    const showTimerElement = () => {


    }

    return (
        <div className='main'>
            <div className='hackathons-card-container'>
                <div className='card-img'>
                    <img src={props.hackathons_img} alt="img" />
                </div>
                <div className='status-div'>
                    <p className='card-sta'>{status}</p>
                </div>
                <div className='card-name'>
                    <h2 className='card-h'> {props.hackathon_title}</h2>
                </div>
                <div className='card-time'>
                    <h4>
                        {timerElement}
                    </h4>

                </div>
                <div>
                    <button onClick={navigateToDeatilPage} className='card-btn'>Participate Now</button>
                </div>

            </div>
        </div>
    );
}

export default HackathonsCard;
