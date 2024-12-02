import React, { useEffect, useState } from 'react';
import Jeremy from '../src/assets/image-jeremy.png';
import GridItem from '../src/components/grid_item';
import SvgStudy from '../src/components/svg_study';
import SvgWork from '../src/components/svg_work';
import SvgExercise from '../src/components/svg_exercise';
import SvgPlay from '../src/components/svg_play';
import SvgSelfCare from '../src/components/svg_self_care';
import SvgSocial from '../src/components/svg_social';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
const Dashboard = () => {
    const [Dark, setDark] = useState(true);
    const changeTheme = () => {
        setDark((theme) => !theme);
    }
    const [dashboardCard, setDashBoardCard] = useState([]);
    const info = ["Daily", "Weekly", "Monthly"];
    const modified_info = ["Yesterday", "Last Week", "Last Month"];
    const [selected, setSelected] = useState(0); 
    const [transitioning, SetTransitioning] = useState(false);
    const colors = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)'];
    const SvgData = [
        SvgWork,
        SvgPlay,
        SvgStudy,
        SvgExercise,
        SvgSocial,
        SvgSelfCare,
    ];

    useEffect(() => {
        fetch('/data/data.json') // Correct path for public directory
            .then(response => response.json())
            .then((data) => {
                setDashBoardCard(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleSelectionChange = (index) => {
        SetTransitioning(true);
        setTimeout(() => {
            setSelected(index);
            SetTransitioning(false);
        }, 250);
    };

    return (
        <div className = {`dashboard${Dark ? '' : '-light'}`}>
            {Dark ? <MdOutlineWbSunny onClick={changeTheme} style={{color: 'white', position: 'absolute', top: '1rem', left: '1rem', width: '3rem', height: '3rem', cursor: 'pointer'}}/> : <MdOutlineDarkMode onClick={changeTheme} style={{color: 'black', position: 'absolute', top: '1rem', left: '1rem', width: '3rem', height: '3rem', cursor: 'pointer'}}/>}
            
            <div className="dashboard-grid">
                <div className="first-item">
                    <div className="top-component">
                        <img src={Jeremy} height={100} width={100} alt="Jeremy"></img>
                        <div className='top-component-text'>
                            <h3>Report for</h3>
                            <div className="top-component-name">
                                <h1>Jeremy</h1>
                                <h1>Robson</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-component">
                        {info.map((info, index) => (
                            <h3
                                key={index}
                                onClick={() => handleSelectionChange(index)}
                                style={{ color: index === selected ? 'white' : Dark ? 'slategrey' : 'black' }}
                            >
                                {info}
                            </h3>
                        ))}
                    </div>
                </div>
                {dashboardCard.map((card, index) => (
                    <GridItem 
                        key={index}
                        activity={card.title}
                        hours={card.timeframes[info[selected].toLowerCase()].current}
                        info={modified_info[selected]}
                        last={card.timeframes[info[selected].toLowerCase()].previous}
                        className={transitioning ? 'grid-content-exit' : 'grid-content'}
                        backgroundColor={colors[index]}
                        svg={SvgData[index]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
