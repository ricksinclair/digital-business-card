import "./BusinessCard.css"
import MailIcon from "./../../assets/Mail.png"
import LinkedInIcon from "./../../assets/Icon/Font Awesome Free/Brands/L/linkedin.png"


export default function BusinessCard() {

    return (
        <div className="canvas">
            <div className="business-card">
                <div className="portrait">
                </div>
                <div className="business-card-body">
                    <h1>Ulric Todman</h1>
                    <h4>Full Stack Engineer</h4>
                    <div className="link-container">
                        <a href="https://www.ulrictodman.com" className="url" target="_blank">ulrictodman.com</a>
                    </div>
                    <div className="button-container">
                        <button className="mail"><img src={MailIcon}/> <p>Mail</p></button>
                        <button className="linkedin"><img src={LinkedInIcon} alt=""/><p>LinkedIn</p></button>

                    </div>
                    <div className="body-text-container">

                        <h4 className="subheading">Lorem ipsum dolor sit amet</h4>
                        <p className="copy-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                            asperiores autem, delectus dolorem dolorum ducimus eaque eos esse impedit laudantium,
                            maiores placeat praesentium quaerat quas quidem recusandae saepe ullam veritatis.</p>


                        <h4 className="subheading">Lorem ipsum dolor sit amet</h4>
                        <p className="copy-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            aliquid deleniti dolores eligendi iure quibusdam repellat voluptas. Aperiam autem blanditiis
                            magnam officiis quisquam suscipit veritatis voluptatum! Blanditiis illo in quisquam!</p>

                    </div>


                </div>
                <div className="business-card-footer">

                </div>
            </div>
        </div>
    )


}

