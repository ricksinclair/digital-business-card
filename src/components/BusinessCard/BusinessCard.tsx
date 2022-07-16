import "./BusinessCard.css"
import MailIcon from "./../../assets/Mail.png"
import LinkedInIcon from "./../../assets/Icon/Font Awesome Free/Brands/L/linkedin.png"
import BusinessCardProps from "./BusinessCardProps";
import defaultImgSrc from "../../assets/portrait.jpeg"

export default function BusinessCard(props:BusinessCardProps) {

    let name = props.name ?? "Ulric Todman";
    let about = props.about ?? "A full-stack Java developer familiar with both React and Angular,  looking to contribute in a team environment full of positive people."
    let interests = props.interests ?? "I love technology, movies, video games, music, and documentaries. I would like to find some like-minded folks to build the future with."
    let profession = props.profession ?? "Full Stack Java Developer"
    let portraitSrc = props.portraitSrc ?? defaultImgSrc
    let url = props.url ?? "https://www.ulrictodman.com"
    let urlViewName = props.urlViewName ?? "UlricTodman.com"

    return (
        <div className="canvas">
            <div className="business-card">
                <img src={portraitSrc} className="portrait"  alt={name + ' portrait'}>
                </img>

                <div className="business-card-body">
                    <h1>{name}</h1>
                    <h4>{profession}</h4>
                    <div className="link-container">
                        <a href={url} className="url" target="_blank">{urlViewName}</a>
                    </div>

                    <div className="button-container">
                        <button className="mail"><img src={MailIcon}/> <p>Mail</p></button>
                        <button className="linkedin"><img src={LinkedInIcon} alt=""/><p>LinkedIn</p></button>

                    </div>
                    <div className="body-text-container">

                        <h4 className="subheading">About</h4>
                        <p className="copy-text">{about}</p>


                        <h4 className="subheading">Interests</h4>
                        <p className="copy-text">{interests}</p>

                    </div>


                </div>
                <div className="business-card-footer">

                </div>
            </div>
        </div>
    )


}

