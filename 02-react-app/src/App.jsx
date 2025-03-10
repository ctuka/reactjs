// import MyComponent, { MyComponent2 as Smth
// } from "./components/01-my-component/MyComponent";
// import Jsx1 from "./components/02-jsx/Jsx1";
// import Jsx2 from "./components/02-jsx/Jsx2";
// import Jsx3 from "./components/02-jsx/Jsx3";
// import ExternalStyling from "./components/03-styling/ExternalStyling";
// import InlineStyling from "./components/03-styling/InlineStyling";
// import InternalStyling from "./components/03-styling/InternalStyling";
// import ModuleStyling from "./components/03-styling/ModuleStyling";
// import Scss from "./components/03-styling/Scss";
// import DigitalClock1 from "./components/04-digital-clock-1/DigitalClock1";
//import Card from "./components/05-props/Card"
//import Props from "./components/05-props/Props";
//import Parent from "./components/05-props/Parent";
//import DigitalClock2 from "./components/05-props/DigitalClock2";
//import ProfileCard from "./components/07-profile-card/ProfileCard";
//import ReactBootstrap from "./components/08-bootstrap/ReactBootstrap";
//import ReactIcons from "./components/09-react-icons/ReactIcons";
//import Events from "./components/10-events/Events";
//import VanillaBootstrap from "./components/08-bootstrap/VanillaBootstrap";

// import Hook from "./components/12-hooks/Hook";
// import Counter1 from "./components/13-counter-1/Counter1";
// import { useState } from "react";
// import UseEffect from "./components/14-use-effect/UseEffect";
// import Button from "react-bootstrap/esm/Button";
// import DigitalClock3 from "./components/16-digital-clock-3/DigitalClock3";
//import UseRef from "./components/17-useref/UseRef";
// import Countries from "./components/19-fetching-data/Countries";
// import CountriesWithAxios from "./components/19-fetching-data/CountriesWithAxios";
//import ParentLiftingStateUp from "./components/20-lifting-state-up/ParentLiftingStateUp";
//import Form1 from "./components/21-forms/Form1";
//import Form2 from "./components/21-forms/Form2";
//import FormPractice from "./components/21-forms/FormPractice";
//import FormValidationManually from "./components/21-forms/FormValidationManually";
//import FormikYup1 from "./components/22-formik-yup/FormikYup1";
//import FormikYup2 from "./components/22-formik-yup/FormikYup2";
//import FormikYup3 from "./components/22-formik-yup/FormikYup3";
import Form1 from "./components/21-forms/Form1";

export default function App() {

  // const statistics = [
  //     {
  //         value: 2,
  //         label: "Shot",
  //     },
  //     {
  //         value: 234,
  //         label: "Followers",
  //     },
  //     {
  //         value: 327,
  //         label: "Following",
  //     },
  // ];

//   const [show, setShot] = useState(true);

//   const isshow = () =>(
//     setShot(prev => !prev));
  

  return (
      <div>
          <h1 style={{color:"blue", textAlign:"center"}} >App</h1>
          <hr />
          {/* <DigitalClock2 color="greenyellow" backgroundColor="crimson" />
          <DigitalClock2 color="violet" backgroundColor="indigo" /> */}
          {/* <MyComponent />
          <hr />
          <Smth />
          <hr />
          <Jsx1 />
          <Jsx2 />
          <Jsx3 />
          {/* STYLING */}
          {/*<InlineStyling />
          <InternalStyling />
          <ExternalStyling />
          <ModuleStyling />
          <hr />
          <Scss />
          <DigitalClock1 /> */}
          {/*  <Card
              title="Jacket"
              desc="Lorem ipsum dolor sit amet."
              imgUrl="https://picsum.photos/200"
          /> */}
          {/* <Parent>
            <input type="text" />
            <button>SUBMIT</button>
            <Props/>

          </Parent>

          <Parent>
            <h1>
                <mark>I have changed it</mark> </h1>

           <Props /> 
          </Parent> */}
          {/* <ProfileCard
              title="Walker"
              location="Nashville, Tennessee"
              imgUrl=""
              statistics={statistics}
          />
          <ProfileCard
              title="Kelesh"
              location="Swh, ITW"
              imgUrl="/profile.jpg"
              statistics={statistics}
          />
          <ProfileCard
              title="Kelesh"
              location="Swh, ITW"
              imgUrl="/profile.jpg"
              statistics={statistics}
          /> */}
          {/* <VanillaBootstrap /> */}
          {/* <ReactBootstrap /> */}
          {/* <ReactIcons /> */}
          {/* <Events /> */}
          {/* <Hook /> */}
          {/* <Counter1 /> */}
          {/* <Button onClick={isshow}> {show ? 'Hide' : 'Show'}  </Button>
          {show && <UseEffect />} */}
          {/* <DigitalClock3 color="violet" backgroundColor="indigo" /> */}
          {/* <UseRef /> */}
          {/* <CountriesWithAxios /> */}
          {/* <ParentLiftingStateUp /> */}
          {/* <Form1 /> */}
          {/* <Form2 /> */}
          {/* <FormPractice /> */}
          {/* <FormValidationManually />  */}
          {/* <FormikYup1 /> */}
          {/* <FormikYup2 /> */}
          <Form1 />


      </div>
  );
}
