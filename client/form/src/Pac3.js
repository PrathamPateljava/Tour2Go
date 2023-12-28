import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import imaget from "./images/2.jpg"
import { useLocation } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap'
function Pac3() {
  const location = useLocation();
  const { data } = location.state;
  const [response1, setResponse1] = useState(null);

  function cart(event){
    event.preventDefault();
        fetch('http://localhost:5000/login/pac', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ pacid: 1, name: data,packagename:"Manali" ,price:12000 })
        }).then((response1) => response1.json())
        .then((data) => setResponse1(data))
        .catch((error) => console.error(error));
         
  };

  return (
    <div>
      <Header title={data}/>
      <div className='content'>
      

                                <Card id='3'
                                    style={{ width: '90rem' }}>
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
                                        src={imaget}
                                        width="100%"
                                    />
                                    <CardBody>
                                        <CardText>
                                            In these tour u will get the thrill feeling with the adventour group and full fun u will witness the beautiful terrain and bike riding experience
                                            </CardText>
                                            <button onClick={cart} id='card3d'>

                                        Select Package
                                        </button>
                                        <CardText>
              DAY 1 - Delhi / Chandigarh – Shimla<br/>

              Arrive at the airport / railway station and transfer to Shimla. On the way to Shimla, visit Pinjore Garden. As soon as you arrive, check in at the hotel. Enjoy a delicious dinner and spend a relaxed night at the hotel.
              <br/>
              DAY 2 - Shimla Local - to Kufri and Mashobra

              After breakfast, proceed for sightseeing in Mashobra and Kufri. In the evening, visit The Mall and The Ridge. Facilities for dinner and overnight stay will be arranged at the hotel, in Shimla.
              <br/>
              DAY 3 - Shimla - Manali (280 Km / 7 hours)

              Relish a tasty breakfast and later, proceed to Manali. On the way, enjoy sightseeing in and around Manali. Enjoy the beauty of Sundernagar Lake, Mandi, Pandoh Dam, Hanogi Devi Temple and Vaishno Devi Temple in Kullu. As soon as you arrive in Manali, check in at the hotel. Enjoy a delicious dinner and stay overnight stay at a hotel, in Manali.
              <br/>
              DAY 4 - Manali - Solang Valley – Manali

              After breakfast, drive to Solang valley and indulge in adventurous activities like parachuting, paragliding or zorbing etc. Return to the hotel in Manali, where dinner and overnight stay facilities are arranged.
              <br/>
              DAY 5 - Manali City Tour

              Enjoy a tasty breakfast, check out from the hotel and enjoy local sightseeing in Manali. Visit Club House, Hadimba Temple, Tibetan Monastery and Van Vihar. Facilities for overnight stay and dinner will be arranged at the hotel, in Manali.
              <br/>
              DAY 6 - Manali - Chandigarh / Delhi (Dropping)

              After breakfast, check out from hotel and enjoy your journey to Chandigarh / Delhi. Transfer to the airport / railway station for your journey ahead.
              
              <br/><b>Inclusions</b>
              <ol>
            <li>Welcome drink on arrival.</li>
     <li> Parking and Toll tax.</li>
     <li>Meet & greet on arrival.</li>
     <li>05 Breakfasts & 05 Dinners.</li>
     <li>Pick and Drop at time of arrival/departure.</li>
     <li>Driver's allowance, Road tax and Fuel charges.</li>
     <li>Sightseeing by private car.</li>
     <li>All hotel and transport taxes & Driver Allowances.</li>
     <li>All transfers and sightseeing by personal car.</li>
     <li>05 Nights Accommodation on double sharing basis.</li>
</ol>
              <b>Exclusions</b>
              <ol>
            <li>  Camera fee.</li>
            <li>Alcoholic / Non- Alcoholic beverages.</li>
            <li>Travel insurance.</li>
            <li>5% GST.</li>
            <li>Any Airfare / Train fare.</li>
            <li>Expenses caused by factors beyond our control like rail and flight delays, roadblocks, and vehicle mal-functions, political disturbances etc.</li>
            <li>Tips, laundry & phone call.</li>
            <li>Entrance fees to monuments and museum.</li>
            <li>All personal expenses.</li>
</ol>
            </CardText>

                                        
                                    </CardBody>
                                </Card>
      </div>
      <Footer/>
      {response1 && (
                <div>
                    <h2>Server Response:</h2>
                    <p>{response1.message}</p>
                </div>
            )}
    </div>
  )
}

export default Pac3
