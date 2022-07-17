import ProfileSectionProps from "./ProfileSectionProps";
import defaultImgSrc from "../../../assets/portrait.jpeg";
import "./ProfileSection.css"

export default function ProfileSection(props:ProfileSectionProps){

    let url = props.url ?? "https://www.ulrictodman.com"
    let urlViewName = props.urlViewName ?? "UlricTodman.com"
    let profession = props.profession ?? "Full Stack Java Developer"
    let name = props.name ?? "Ulric Todman";
    let portraitSrc = props.portraitSrc ?? defaultImgSrc


    return(
        <>
            <img src={portraitSrc} className="portrait" alt={name + ' portrait'}>
            </img>
        <h1>{name}</h1>
    <h4>{profession}</h4>
            {props.defaultValues || props.urlViewName ?
                <div className="link-container">
                    <a href={url} className="url" target="_blank">{urlViewName}</a>
                </div> : null

            }
        </>
    )
}