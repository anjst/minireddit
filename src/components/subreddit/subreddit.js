import React from 'react'
import './subreddit.css'
import aww from '../../images/aww.jpg'
import funny from '../../images/funny.png'
import Games from '../../images/games.png'
import technology from '../../images/technology.png'
import Cyberpunk from '../../images/cyberpunk.jpg'
import ricknmorty from '../../images/ricknmorty.png'
import hacking from '../../images/hacking.png'
import { Link } from 'react-router-dom'


export function SubReddit(props) {

    const handleClick = (event) => {
        props.changeTopic(event.target.id)
        props.changeIcon(event.target.id)
        
    }

    return (
        <div className="dropdown-content">
                    <Link to="/r/aww"><span className="fake-link" onClick={handleClick} id="aww"><img className="aww" alt="aww" id="aww" src={aww}/>r/aww</span></Link>
                    <Link to="/r/rickandmorty"><span className="fake-links" onClick={handleClick} id="rickandmorty"><img className="aww" alt="rickandmorty" src={ricknmorty} id="rickandmorty"/>r/ricknmorty</span></Link>
                    <Link to="/r/Cyberpunk"><span className="fake-link" onClick={handleClick} id="Cyberpunk"><img className="aww" id="Cyberpunk" alt="cyberpunk" src={Cyberpunk}/>r/Cyberpunk</span></Link>
                    <Link to="/r/hacking"><span className="fake-link" onClick={handleClick} id="hacking"><img className="aww" id="hacking" alt="hacking" src={hacking}/>r/hacking</span></Link>
                    <Link to="/r/Games"><span className="fake-link" onClick={handleClick} id="Games"><img className="aww" id="Games" alt="games" src={Games}/>r/Games</span></Link>
                    <Link to="/r/funny"><span className="fake-link" onClick={handleClick} id="funny"><img className="aww" id="funny" alt="funny" src={funny}/>r/funny</span></Link>
                    <Link to="/r/technology"><span className="fake-link" onClick={handleClick} id="technology"><img className="aww" id="technology" alt="technology" src={technology}/>r/technology</span></Link>
        </div>
    )
}