import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import cloud from './cloud.png';
import moon from './moon.png';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <img style={{ width: '10vw' }} src={cloud} />
                <li>
                    <div className="link-container">
                        <img src={moon} />
                        <Link to="/Profile">личный кабинет</Link>
                    </div>
                </li>
                <li>
                    <div className="link-container">
                        <img src={moon} />
                        <Link to="/SendSon">добавить сон</Link>
                    </div>
                </li>
                <li>
                    <div className="link-container">
                        <img src={moon} />
                        <Link to="/RandomSon">рандомный сон</Link>
                    </div>
                </li>
            </div>
            <li id='exit'>
                <div className="link-container">
                    <img src={moon} />
                    <Link to="/">выход</Link>
                </div>
            </li>
        </div>
    );
};

export default Sidebar;
