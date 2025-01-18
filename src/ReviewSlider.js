import React, { useState, useEffect } from "react";
import './ReviewSlider.css';
import Images from './Images';

const TextSlider = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (data && data.users) {
            changeImage(currentIndex);
        }
    }, [currentIndex, data]);

    const nextMessage = () => {
        let messageReview = document.getElementById("slide-cont-rev")
        let messageUser = document.getElementById("slide-cont-user")

        messageReview.style.opacity = 0;
        messageUser.style.opacity = 0;

        setTimeout(() => {
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data.users.length - 1));
            messageReview.style.opacity = 1;
            messageUser.style.opacity = 1;
        }, 450);

    };

    const prevMessage = () => {
        let messageReview = document.getElementById("slide-cont-rev")
        let messageUser = document.getElementById("slide-cont-user")

        messageReview.style.opacity = 0;
        messageUser.style.opacity = 0;

        setTimeout(() => {
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            messageReview.style.opacity = 1;
            messageUser.style.opacity = 1;
        }, 450);

    };

    const changeImage = (index) => {
        for (let i = 0; i < data.users.length; i++) {
            let message = document.getElementById(`mes-${i}`);
            if (i === index) {
                message.src = Images.MessageSelect;
            } else {
                message.src = Images.Message;
            }
        }
    };

    const selectMessage = (index) => {
        let messageReview = document.getElementById("slide-cont-rev")
        let messageUser = document.getElementById("slide-cont-user")

        messageReview.style.opacity = 0;
        messageUser.style.opacity = 0;

        setTimeout(() => {
            setCurrentIndex(index);
            messageReview.style.opacity = 1;
            messageUser.style.opacity = 1;
        }, 500);
    };

    if (!data || !data.users || data.users.length === 0) {
        return <div>No reviews available</div>;
    }

    const { name, staff, review } = data.users[currentIndex];

    return (
        <div className="slider-main">
            <div className="slider-container">
                <div className="slider-container-review" id="slide-cont-rev">
                    <p className="slider-user-review">"{review}"</p>
                </div>
                <div className="slider-container-user" id="slide-cont-user">
                    <h2 className="slider-user-name">{name}</h2>
                    <p className="slider-user-job-title">{staff}</p>
                </div>
                <div className="slider-controls">
                    <button
                        id="ArrowLeft"
                        onClick={prevMessage}
                        disabled={currentIndex === 0}
                        className="slider-control-arrow"
                    >
                        <img src={Images.ArrowL} alt="Previous"/>
                    </button>
                    <div className="slider-controls-mes">
                        {data.users.map((user, index) => (
                            <button key={index}>
                                <img id={`mes-${index}`} src={Images.Message} alt={index} onClick={() => selectMessage(index)} />
                            </button>
                        ))}
                    </div>
                    <button
                        id="ArrowRight"
                        onClick={nextMessage}
                        disabled={currentIndex === data.users.length - 1}
                        className="slider-control-arrow"
                    >
                        <img src={Images.ArrowR} alt="Next"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TextSlider;