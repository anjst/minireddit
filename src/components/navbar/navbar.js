import React, { useEffect, useState} from 'react';
import './navbar.css'
import { SearchBar } from '../searchbar/sarchbar'
import { SubReddit } from '../subreddit/subreddit'
import arrowdown from '../../images/arrowdown.png'
import aww from '../../images/aww.jpg'
import funny from '../../images/funny.png'
import games from '../../images/games.png'
import technology from '../../images/technology.png'
import cyberpunk from '../../images/cyberpunk.jpg'
import ricknmorty from '../../images/ricknmorty.png'
import hacking from '../../images/hacking.png'
import reddit from '../../images/reddit.png'

import { useSelector } from 'react-redux'


export function NavBar() {

        const icons = {
            aww: aww,
            funny: funny,
            Games: games,
            technology: technology,
            rickandmorty: ricknmorty,
            hacking: hacking,
            Cyberpunk: cyberpunk,
            searchReddit: reddit,
        }
    

    const value = useSelector(state => state.subreddit);

    let [topic, setTopic] = useState(value);

    const changeTopic = (argument) => {
        setTopic(argument)
    }
    
    let [icon, setIcon] = useState(icons.Cyberpunk);

    const changeImage = (argument) => {
        setIcon(icons[argument])
    }

    useEffect(() => {
        setTopic(value)
    },[value])



   

    return (
        <div>
        <div className="container">
            <div className="topnav">
                <img className="subreddit" alt="subreddit-icon" src={icon} />
                <div className="dropdown">
                    <button className="dropbtn"><img className="arrowdown" alt="arrow-down" src={arrowdown} /></button>
                    <SubReddit changeTopic={changeTopic} changeIcon={changeImage} />
                </div>
                <SearchBar />
            </div>
        </div>
        <div className="topic">
            <h3>r/{topic}</h3>
        </div>
    </div>
     )
}

