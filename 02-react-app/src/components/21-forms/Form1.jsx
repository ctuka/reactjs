import { useState } from "react"

import Form from "react-bootstrap/Form";




export default function Form1() {
  //Interview sorusu Bir dwopdown listeden ulke secildiginde diger drop down listeden stateler secilebilecek bir dropdawn menu yapin
    const countries = {
      America:["Illinois", "Washington"],
      Kanada:["Toronto", "Yaprak", "Kurek"],
      Turkey:["Adana", "Ankara", "Istanbul", "NewSehir"]
    };

    const [country, setCountry] = useState("");
    const [states, setStates] = useState("");

    const handleCountryChange = (event) => {
       setCountry(event.target.value);
       //setStates(!states);
       console.log(country);
    }

    const handleStateChange = (event) => {
        setStates(event.target.value);
        setStates(!states);
        console.log(states);
    };


  return (
      <Form>
          <Form.Group controlId="countySelect">
              <h1 className="text-center text-danger"> Form - 1</h1>
              <Form.Label htmlFor="country">Country:</Form.Label>
              <Form.Control as="select" value={country} onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {Object.keys(countries).map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
              </Form.Control>
              </Form.Group>

              <Form.Group controlId="stateSelect">
                <Form.Control as="select" value={states} onChange={handleStateChange} >

               
              <Form.Label htmlFor="state">State:</Form.Label>
              <option value="" >
                  Select State
              </option> 
              {country && countries[country].map((states) => (
                <option key={states} value={states}>
                  {states}
                </option>
              ))}
              
              </Form.Control>
              </Form.Group>
              {/* <Form.Control as="input" value={}
              <Form.Label htmlFor="username">Username:</Form.Label>

              <Form.Control
                  type="input"
                  id="username"
                  name="username"
                  onChange={handleUsernameChange}
              ></Form.Control>
          </Form.Group> */}
      </Form>
  );
}
