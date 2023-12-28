import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap'

import "./cs.css"

import { useNavigate } from 'react-router-dom'
function Content(props) {
    const navigate=useNavigate();
    function pac1(){
        const data=props.title
        navigate('/home/pac1',{state:{data}})
    }
    function pac2(){
        const data=props.title
        navigate('/home/pac2',{state:{data}})
    }
    function pac3(){
        const data=props.title
        navigate('/home/pac3',{state:{data}})
    }
    const textstyle = {
        padding: "2% 10% 2% 10%"
    }

    const imgstyle = {
        height: "300px ",
        width: "500px",
        align: "center",
        padding: "2% 10% 2% 10%"
    }
    const inttt = {
        align: "center"
    }


    return (
        <React.Fragment >
            <div className='content ' style={inttt}>
                <scrollbars>
                    <section id="packages" >
                        <Container >
                            <Row >
                                <Card
                                    style={{ width: '18rem' }}>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Spiti Valley
                                        </CardTitle>
                                        { <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6">
                                            5 Days & 4 Nights
                                        </CardSubtitle> }
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src="https://th.bing.com/th/id/OIP.x-ygtAKanTFU7LO6NV3wIAHaFj?pid=ImgDet&rs=1"
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardText>
                                           In these tour you will witness the beaiuty of himcahl and ladadhk at the same time because it is in mid of both states. 
                                         </CardText>
                                         <button onClick={pac1} id='card1'>
                                          View Details
                                        </button>
                                    </CardBody>
                                </Card>




                                <Card
                                    style={{ width: '18rem' }}>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Simla
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6" >
                                            6 Days & 5 Nights
                                        </CardSubtitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src="https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4"
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardText>
                                        In these tour you will witness the beauty of the simla with its grenaery and snow at the same time and its heritages    
                                        u will enjoy it try it as per majority review
                                        </CardText>
                                        <button onClick={pac2} id='card2'>
                                          View Details
                                        </button>
                                    </CardBody>
                                </Card>




                                <Card
                                    style={{ width: '18rem' }}>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Manali
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6">
                                            9 Days & 8 Nights
                                        </CardSubtitle>
                                    </CardBody>
                                    <img
                                        alt="Card cap"
                                        src="https://media.tripinvites.com/india/himachal-pradesh/kalpa-himachal-pradesh-featured.jpg"
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardText>
                                            In these tour u will get the thrill feeling with the adventour group and full fun u will witness the beautiful terrain and bike riding experience
                                            </CardText>
                                            <button onClick={pac3} id='card3'>
                                          View Details
                                        </button>
                                        
                                    </CardBody>
                                </Card>
                            </Row>
                        </Container>
                    </section>


                    <section id="about">
                        <div style={{ padding: "1% 0% 1% 0%" }} className="abcolor">
                            <table className='container-fluid back ' >
                                <tr>


                                </tr>

                                <tr><div>
                                    <p style={textstyle}>Himachal Tourism is a specialist travel agency
                                        for travellers who want an original, authentic and unforgettable
                                        experience at the land of the Himachal.
                                        From spiti all included tours, to off-the-beaten-path adventures at the spiti valley,
                                        manali, simla, rohtang and many more: we offer customized
                                        travel packages for all interests and needs. Since Himachal Tousrim was established in 2009,
                                        we have had the pleasure of welcoming tens of thousands of happy travellers from all over country.
                                        We hope to be able to welcome you and introduce you to the magical, biodiverse and adventurious Himachal,
                                        our home.
                                        Rocky
                                        CEO & Founder
                                    </p>

                                </div>
                                </tr></table>
                        </div>

                    </section>

                    <section id='contact'>
                        <div className='sectionheight'>
                            <table >
                                <tr className='emailpadding'>
                                    <th >Contact No.</th>
                                    <th>Mail.id </th>

                                </tr>

                                <tr >
                                    <td >9998744566</td>
                                    <td>Rambjbjb#@gmail.com</td>

                                </tr>
                            </table>

                        </div>

                    </section>
                  

                </scrollbars>
            </div>
        </React.Fragment>
    );
}

export default Content;
