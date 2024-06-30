
import file from "../assets/img/Logo_Files.svg";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FunkoLogo from '../assets/Work/3D logo.png'
import AxeLogo from "../assets/Work/AxeLogo.png"

import Funkos from '../assets/Work/funko.jpg'
import YoutubeEmbed from "./YoutubeEmbed";

import Yucatani6 from "../assets/Work/Yucatani6.jpg";
import Yucatani6Logo from "../assets/Work/Yucatani6Logo.png"

import VicenteLogo from "../assets/Work/VF-Logo-Intro.png"
import Vicente from "../assets/Work/VicenteFernandez.jpg"

const funkoDescription = "I have worked as a freelancer since 2021. My job consists of designing funko-type statuettes although it was not limited to that, these designs were to the client's tastes and I had to work with them to ensure that my design would be close to their vision. Once the design is finished, I have to modify it so that it 3D prints correctly."
const AxeDescription = "On the project, I played a versatile role covering several important areas. I worked programming the game mechanics, designing the menus and levels, and also implementing and managing the multiplayer mode using photon. My primary responsibility was creating game systems from the ground up to ensure both the single-player and multiplayer experiences were smooth and consistent. Created in Unity"
const YucatanDescription = "I took on an integral role where I addressed various key responsibilities. This included managing connections to the server, developing the user interface to ensure an intuitive and engaging experience, as well as creating custom tools that were implemented and leveraged in subsequent projects. My approach ranged from fundamental technical aspects to strategic contributions that helped improve efficiency and overall quality of the final product. Created in Unity"
const VicenteDescription = "I used the 8th Wall platform to develop a virtual reality application, where I collaborated and programmed a 3D scenario using JavaScript, HTML and A-Frame. Additionally, I was in charge of modifying the project resources to ensure that they will function correctly and meet the established technical requirements.";


export const WorkSimple = ({ num }) => {
let elementWork;



const Descriptions = [ "a", funkoDescription, AxeDescription, YucatanDescription, VicenteDescription];
const Logos = [ "a", FunkoLogo, AxeLogo, Yucatani6Logo, VicenteLogo];
const gifs = [ "a", Funkos, "KgK0GhQ5yWA", Yucatani6, Vicente  ];
const doclinks = [ "a", "https://www.artstation.com/dylan-ocampo", "https://play.google.com/store/apps/details?id=com.rckgames.axess&hl=es_SV&pli=1", "https://play.google.com/store/apps/details?id=com.rckgames.yucatani6&hl=es", "https://vicenteaniversario.com/"];

if(num === 2) {
    elementWork = <Col><YoutubeEmbed embedId = {gifs[num]} /></Col>
}else{
    elementWork = <Col> <img src={gifs[num]} alt="loading..." /></Col>
}


return (
    <div className="skill" id="skills">
        <div className="container" style = {{ justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
        <img 
                src={Logos[num]}
                alt="loading..." 
                style={{ width: '30%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginBottom: 20}} 
      />
            <div className="center">

            <Row style={{marginBottom: 30}}>
                <Col><h4 style={{textAlign: 'justify', fontWeight: "normal", paddingRight: 30}}>{Descriptions[num]}</h4></Col>
                <>{elementWork}</>
            </Row>
            <div><Row>
                    <Col></Col>
                    <Col xs={1}> <h1>Links</h1></Col>
                    <Col xs={6}> <div className="work-icon"><a  href={doclinks[num]}><img src={file} alt="" style={{ width: '60%'}}/></a></div></Col>
                    </Row></div>


            </div>
        </div>
    </div>
    
  )
}