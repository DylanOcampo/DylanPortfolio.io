import {BrowserView, MobileView} from 'react-device-detect';
import ReactPlayer from 'react-player'
import github from "../assets/img/github.png";
import file from "../assets/img/Logo_Files.svg";
import pitchdeck from "../assets/img/pitchdeck.png";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BeyondTheFederationGif from '../assets/Work/BeyondTheFederation.gif'
import BeyondTheFederationLogo from '../assets/Work/BeyondLogo.gif'

import ScapeImage from "../assets/Work/Scape.gif";
import ScapeLogo from "../assets/Work/ScapeLogo.png";

import MovieLogo from "../assets/Work/MovieLogo.svg";
import Moviegif from "../assets/Work/MovieV.gif";


const BeyondTheFederationDescription = "During my last semester of university, I developed a project with my teammates, the objective was to simulate the development of a video game with the objective of making a vertical slice, for 6 months. In this project I had the role of Lead Programmer, coordinating with another colleague to develop the game systems and ensure an appropriate connection between them. The objective was to create a game with the aesthetics of Paper Mario that would combine platforming and later on detective game mechanics."
const ScapeDescription = "I'm currently working on this game, Scape. Which is a modification of a card game called Escape. I used to play this game with my friends in high school, we modified it and added rules to make it more fun. Currently you can play against the computer, I will continue working on this game to add Multiplayer, Vfx, Skins and a user system. Scape has been in development since Winter 2023, is developed in Unity.";
const MovieDescription = "At the beginning of my master's degree I had to develop a project that would replicate the functionality of Netflix. Helping to develop my knowledge in web development. This project is developed in React using the TMDB API.";
export const Work = ({ num }) => {

    let titleHelper = "Pitch Deck"
    if(num === 5){
        num = 1;
        titleHelper = "Game"    
    }
    if(num === 6){
        num = 2;
        titleHelper = "Site"    
    }


const Descriptions = [ BeyondTheFederationDescription, ScapeDescription, MovieDescription ];
const Logos = [ BeyondTheFederationLogo, ScapeLogo, MovieLogo ];
const gifs = [ BeyondTheFederationGif, ScapeImage, Moviegif ];
const doclinks = [ "https://drive.google.com/drive/folders/1vRaVGKF_tg2PJt_ikWjxx_4n_4gUNOz1?usp=sharing", "0", "0" ];
const gitLinks = [ "https://github.com/DylanOcampo/Beyond-The-Federation", "https://github.com/DylanOcampo/Scape", "https://github.com/DylanOcampo/netflix" ];
const PitchDeck = [ "https://www.canva.com/design/DAF1zcxLcwI/_0AZ_i4GmG2gHTs0JA-N3g/view?utm_content=DAF1zcxLcwI&utm_campaign=designshare&utm_medium=link&utm_source=editor#1", "https://dylanocampo.github.io/Scape.io/","https://netflix-kappa-pink.vercel.app/" ]; 


return (
    <div className="skill" id="skills" style={{tableLayout: "auto", display: "flex",}}>
        <div className="container" style = {{ justifyContent: 'center', alignItems: 'center', height: 'auto' , marginTop: 20}}>
        <img 
                src={Logos[num]}
                alt="loading..." 
                style={{ width: '50%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginBottom: 20}} 
      />
            <div className="center">
        <BrowserView> 
            <Row style={{marginBottom: 30}}>
                <Col><h4 style={{textAlign: 'justify', fontWeight: "normal", paddingRight: 30, fontSize: "auto"}}>{Descriptions[num]}</h4></Col>
                <Col> <img src={gifs[num]} alt="loading..."  style={{width: '20', height: 'auto', justifyContent: 'center', alignItems: 'center'}}/></Col>
                
            </Row>

            <Row >
                <Col>
                    {gitLinks[num] === "0" ? null : <div><Row>
                    <Col ></Col>
                    <Col > <h1>Project Repository</h1>  </Col>
                    <Col> <div className="work-icon"><a  href={gitLinks[num]}><img src={github} alt="" /></a></div></Col>
                    </Row></div>}
                    
                </Col>


                <Col>
                {doclinks[num] === "0" ? null : <div><Row>
                    <Col></Col>
                    <Col > <h1>Documents</h1></Col>
                    <Col> <div className="work-icon"><a  href={doclinks[num]}><img src={file} alt="" style={{ width: '60%'}}/></a></div></Col>
                    </Row></div> }
                    
                </Col>

                <Col>
                    {PitchDeck[num] === "0" ? null :  <div><Row>
                    <Col ></Col>
                    <Col > <h1> {titleHelper} </h1></Col>
                    <Col> <div className="work-icon"><a  href={PitchDeck[num]}><img src={pitchdeck} alt="" style={{ width: '60%'}}/></a></div></Col>
                    </Row></div>}
                    
                    </Col>
                </Row>
        </BrowserView>  
            </div>

        <MobileView style={{justifyContent: 'center', alignItems: 'center'}}>
            
                <Col><h4 style={{textAlign: 'justify', fontWeight: "normal", paddingRight: 30, fontSize: "auto"}}>{Descriptions[num]}</h4></Col>
                <Col> <img src={gifs[num]} alt="loading..."  style={{width: '20', height: 'auto', justifyContent: 'center', alignItems: 'center'}}/></Col>
            

            
                
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: "center"}} >
                    
                     <h1>Project Repository</h1>  
                     <div className="work-icon" style={{ marginBottom: "20"}}><a  href={gitLinks[num]}><img src={github} alt="" /></a></div>
                    </div>
                


                
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: "center"}} >
                    
                    <h1>Documents</h1>
                    <div className="work-icon" style={{ marginBottom: "20"}}><a  href={doclinks[num]}><img src={file} alt="" style={{ width: '60%'}}/></a></div>
                    </div>
                

                
                    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: "center"}} >
                    
                     <h1>Pitch Deck</h1>
                     <div className="work-icon" style={{ marginBottom: "20"}}><a  href={PitchDeck[num]}><img src={pitchdeck} alt="" style={{ width: '60%' }}/></a></div>
                    </div>
                    
                
        </MobileView>
        
        </div>
    </div>
    
  )
}