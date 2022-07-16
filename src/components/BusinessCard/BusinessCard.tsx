import "./BusinessCard.css"
import MailIcon from "./../../assets/Mail.png"
import LinkedInIcon from "./../../assets/Icon/Font Awesome Free/Brands/L/linkedin.png"
import BusinessCardProps from "./BusinessCardProps";
import defaultImgSrc from "../../assets/portrait.jpeg"
import FacebookLogo from "./../../assets/Facebook Icon.png"
import InstagramLogo from "./../../assets/Instagram Icon.png"
import GithubLogo from "./../../assets/GitHub Icon.png"
import LinkedInIconGray from "./../../assets/Linkedin Icon Grey.png"
import TwitterLogo from "./../../assets/Twitter Icon.png"
export default function BusinessCard(props: BusinessCardProps) {

    let name = props.name ?? "Ulric Todman";
    let about = props.about ?? "A full-stack Java developer familiar with both React and Angular,  looking to contribute in a team environment full of positive people."
    let interests = props.interests ?? "I love technology, movies, video games, music, and documentaries. I would like to find some like-minded folks to build the future with."
    let profession = props.profession ?? "Full Stack Java Developer"
    let portraitSrc = props.portraitSrc ?? defaultImgSrc
    let url = props.url ?? "https://www.ulrictodman.com"
    let urlViewName = props.urlViewName ?? "UlricTodman.com"
    let linkedInUrl = props.linkedInUrl ?? "https://linkedin.com/in/ulric-todman"
    let githubUrl = props.github ?? "https://github.com/ricksinclair"

    return (
        <div className="canvas">
            <div className="business-card">
                <img src={portraitSrc} className="portrait" alt={name + ' portrait'}>
                </img>

                <div className="business-card-body">
                    <h1>{name}</h1>
                    <h4>{profession}</h4>
                    <div className="link-container">
                        <a href={url} className="url" target="_blank">{urlViewName}</a>
                    </div>

                    <div className="button-container">
                        {
                            props.emailPrimary ?
                                <button className="mail-primary"><img src={MailIcon} /> <p>Mail</p></button> : <>
                                    <button className="mail"><img src={MailIcon}/> <p>Mail</p></button>
                                    <button className="linkedin"><img src={LinkedInIcon} alt=""/><p>LinkedIn</p></button>
                                </>

                        }


                    </div>
                    <div className="body-text-container">

                        <h4 className="subheading">About</h4>
                        <p className="copy-text">{about}</p>


                        <h4 className="subheading">Interests</h4>
                        <p className="copy-text">{interests}</p>

                    </div>


                </div>
                <div className="business-card-footer">

                    {
                        (name == "Ulric Todman" &&props.emailPrimary && linkedInUrl == "https://linkedin.com/in/ulric-todman")|| (props.linkedIn != null  && props.emailPrimary) ?
                            <a href={linkedInUrl} target="_blank"><img src={LinkedInIconGray} alt="LinkedIn Logo" className="footer-icon"></img></a> : null
                    }

                    {
                        props.facebook ?  <a href={props.facebook} target="_blank"><img src={FacebookLogo} alt="LinkedIn Logo" className="footer-icon"></img></a>:  null

                    }
                    {
                        props.instagram ? <a href={props.instagram} target="_blank"><img src={InstagramLogo} alt="LinkedIn Logo" className="footer-icon"></img></a>: null

                    }
                    {
                        (name=="Ulric Todman")|| props.github != null ? <a href={githubUrl} target="_blank"><img src={GithubLogo} alt="LinkedIn Logo" className="footer-icon"></img></a>: null

                    }

                    {
                        props.twitter ? <a href={linkedInUrl} target="_blank"><img src={TwitterLogo} alt="LinkedIn Logo" className="footer-icon"></img></a>: null

                    }

                </div>
            </div>
        </div>
    )


}

