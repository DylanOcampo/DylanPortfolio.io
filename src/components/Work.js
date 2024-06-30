
import github from "../assets/img/github.png";
import file from "../assets/img/Logo_Files.svg";
import pitchdeck from "../assets/img/pitchdeck.png";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BeyondTheFederationGif from '../assets/Work/BeyondTheFederation.gif'
import BeyondTheFederationLogo from '../assets/Work/BeyondLogo.gif'

const BeyondTheFederationDescription = "During my last semester of university, I developed a project with my teammates, the objective was to simulate the development of a video game with the objective of making a vertical slice, for 6 months. In this project I had the role of Lead Programmer, coordinating with another colleague to develop the game systems and ensure an appropriate connection between them. The objective was to create a game with the aesthetics of Paper Mario that would combine platforming and later on detective game mechanics."

export const Work = ({ num }) => {
const Descriptions = [ BeyondTheFederationDescription, "FullStack Developer", "Technical Artist" ];
const Logos = [ BeyondTheFederationLogo, "FullStack Developer", "Technical Artist" ];
const gifs = [ BeyondTheFederationGif, "FullStack Developer", "Technical Artist" ];
const doclinks = [ "https://drive.google.com/drive/folders/1vRaVGKF_tg2PJt_ikWjxx_4n_4gUNOz1?usp=sharing", "https://drive.google.com/drive/folders/1jeDVZS3h2_PF22CYuvh11u0tFhFxCF-i?usp=sharing", "Technical Artist" ];
const gitLinks = [ "https://github.com/DylanOcampo/Beyond-The-Federation", "FullStack Developer", "Technical Artist" ];
const PitchDeck = [ "https://www.canva.com/design/DAF1zcxLcwI/_0AZ_i4GmG2gHTs0JA-N3g/view?utm_content=DAF1zcxLcwI&utm_campaign=designshare&utm_medium=link&utm_source=editor#1", "https://www.canva.com/design/DAFLe2J6_HA/vVsa-O2RbLlzRLxPNc9atA/view?utm_content=DAFLe2J6_HA&utm_campaign=designshare&utm_medium=link&utm_source=editor", "Technical Artist" ]; 





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
                <Col> <img src={gifs[num]} alt="loading..." /></Col>
            </Row>

            <Row >
                <Col>
                    <div><Row>
                    <Col ></Col>
                    <Col > <h1>Project Repository</h1>  </Col>
                    <Col> <div className="work-icon"><a  href={gitLinks[num]}><img src={github} alt="" /></a></div></Col>
                    </Row></div>
                </Col>


                <Col>
                    <div><Row>
                    <Col></Col>
                    <Col > <h1>Documents</h1></Col>
                    <Col> <div className="work-icon"><a  href={doclinks[num]}><img src={file} alt="" style={{ width: '60%'}}/></a></div></Col>
                    </Row></div>
                </Col>

                <Col>
                    <div><Row>
                    <Col ></Col>
                    <Col > <h1>Pitch Deck</h1></Col>
                    <Col> <div className="work-icon"><a  href={PitchDeck[num]}><img src={pitchdeck} alt="" style={{ width: '60%'}}/></a></div></Col>
                    </Row></div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
    
  )
}