
import './countdown.css';
import {getRemainingTimeUntilMsTimestamp} from '../countdown/Utils/CountdownTimerUtils.js';
import * as React from 'react'
import {useState, useEffect} from 'react';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
			<div className="box1">
			<div className="two-numbers">{remainingTime.days}</div>
            <div className="days"><br></br>DAYS</div>
			</div>
            
			<div className="box2">
			<div className="two-numbers">{remainingTime.hours}</div>
            <div className="hours"><br></br>HOURS</div>
			</div>

			<div className="box3">
			<div className="two-numbers">{remainingTime.minutes}</div>
            <div className="minutes"><br></br>MINUTES</div>
			</div>

			<div className="box4">
			<div className="two-numbers">{remainingTime.seconds}</div>
            <div className="seconds"><br></br>SECONDS</div>
			</div>

        </div>
    );
}

export default CountdownTimer;