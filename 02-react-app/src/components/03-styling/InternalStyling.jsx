

export default function InternalStyling() {


    const containerStyle = {
        border: "3px solid crimson",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "1rem",
        textAlign: "center"
    }

    const headingStyle = {
        fontSize:"2.5rem",
        color: "green",
        fontStyle: "Italic"
    }
const style = {
    color: "red",
    backgroundColor: "blue"
}

const buttonStyle = {
    margin: "1rem",
    padding: "1rem",
    backgroundColor: "red"
}

  return (
      <div style={containerStyle}>
          <h1 style={headingStyle}>INTERNAL STYLING</h1>
          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              natus exercitationem deleniti repudiandae veritatis enim?
              Voluptatum, asperiores accusamus? Vitae unde maxime deserunt cum
              reiciendis architecto, officiis at doloremque ratione minus.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              sapiente consequuntur asperiores, accusantium, eius saepe,
              inventore modi distinctio fuga culpa aperiam animi debitis minus
              vel magni sed aliquam. Laudantium, itaque?
          </p>

          <button style={{...buttonStyle, backgroundColor:"green"}}>Confirm</button>
          <button style={buttonStyle}>Delete</button>
      </div>
  );
}
