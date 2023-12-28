import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import "./cs.css"
import { useLocation } from 'react-router-dom';

import imaget from "./images/3.jpg"
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap'
function Pac1() {


  const location = useLocation();
  const { data } = location.state;
  const [response1, setResponse1] = useState(null);

  function cart(event) {
    event.preventDefault();
    fetch('http://localhost:5000/login/pac', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pacid: 1, name: data, packagename: "Spiti Valley", price: 9000 })
    }).then((response1) => response1.json())
      .then((data) => setResponse1(data))
      .catch((error) => console.error(error));


  };


  return (
    <div>
      <Header title={data} />
      <div className='content' >
        <Card
          style={{ width: '90rem' }}>
          <CardBody>
            <CardTitle tag="h5">
              Spiti Valley
            </CardTitle>

            {<CardSubtitle
              className="mb-2 text-muted"
              tag="h6">
              5 Days & 4 Nights
            </CardSubtitle>}
            <button onClick={cart} id='card1d'>
              Select Package
            </button>
          </CardBody>
          <img
            alt="Card cap"
            src={imaget}
            width="100%"
          />
          <CardBody>
            <CardText>
              In these tour you will witness the beaiuty of himcahl and ladadhk at the same time because it is in mid of both states.
            </CardText>

            <CardText>
              <h1>Itinerary</h1>
              <br />
              <b>DAY 0:</b> DEPART FROM DELHI BY 09:30 PM
              <br />
              We depart from Delhi around 9:30 PM in an AC Vehicle. (Know the true value of time; snatch, seize, and enjoy every moment of it.)
              Pit stop for dinner at any decent roadside restaurant.
              Note: The pickup point will be Majnu Ka Tila (Near Vidhan Sabha Metro Station)
              <br />
              <b>DAY 1:</b> REACH SHIMLA | TRANSFER TO KALPA FROM SHIMLA | OVERNIGHT STAY IN KALPA
              <br />
              Morning departure to Kalpa around 7 am via Tempo Traveller.
              It’s a 10-11 hours drive traversing through the mountains.
              Overnight stay in Kalpa.
              <br />
              <b>DAY 2:</b> TRANSFER FROM KALPA TO TABO via NAKO  | OVERNIGHT STAY IN TABO
              <br />
              Post breakfast, drive to Kaza via Nako a part of the Spiti Valley.
              Visit Nako lake & enjoy the beautiful view.
              Reach Tabo by evening, Check-in and overnight stay.
              <br />
              <b>DAY 3:</b> VISIT TABO MONASTERY AND DHANKAR MONASTERY | OVERNIGHT STAY IN KAZA
              <br />
              Post breakfast, head out to experience the true beauty of Spiti valley - Tabo Monastery & Dhankar Monastery.
              Further we drive towards Kaza.
              Reach kaza by evening, Check-in and overnight stay in kaza.
              <br />
              <b>DAY 4:</b>VISIT HIKKIM, KOMIC & LANGZA | OVERNIGHT STAY IN KAZA
              <br />
              Post breakfast, head out to Visit Hikkim (home to the highest post office in the world, send postcards to your loved ones), Komik and eat at the highest cafe in the world. Langza (the site for the holy Buddha Statue).
              Return to Kaza, Dinner & Overnight stay in Kaza.
              <br />
              <b>DAY 5:</b> DEPARTURE TO KALPA FROM KAZA | VISIT KEY MONASTERY & CHICHAM BRIDGE | OVERNIGHT STAY IN KALPA
              <br />
              Post breakfast, check-out of the hotel.<br />
              Visit Key Monastery & Ride to the highest suspension bridge of Asia- the one and only Chicham Bridge.
              Reach Kalpa by Night.
              Dinner & Overnight stay in Kalpa.<br />
              <b>DAY 6:</b> DRIVE TO THE LAST VILLAGE - CHITKUL | OVERNIGHT STAY AT CHITKUL<br />

              After an amazing experience of the Spiti Valley, the end might seem a bit lazy but there is one more amazing place right around the bend.
              Chitkul - is another enchanted place of this beautiful land. Has a high altitude river flowing right beside it. Offers grand views of the nearby mountain peaks.
              It is also a starting and end point for multiple high altitude treks.
              Dinner & Overnight stay in Chitkul.<br />
              <b>DAY 7:</b> DEPART TO SHIMLA | OVERNIGHT JOURNEY TO DELHI<br />

              This is the last day of the trip and is filled with tons of emotions.
              Post breakfast, we check-out from the hotel and start our return journey to Delhi.
              We drive to Shimla first which is again a 10-11 hours journey and then an overnight journey by Volvo to Delhi.
              Back home with memories of the land far away but forever etched in us.<br />
              <b>DAY 8:</b> REACH DELHI BY MORNING<br />

              Reach delhi by morning.
            </CardText>
          </CardBody>
        </Card>

      </div>
      <Footer />
      {response1 && (
        <div>
          <h2>Server Response:</h2>
          <p>{response1.message}</p>
        </div>
      )}
    </div>
  )
}

export default Pac1
