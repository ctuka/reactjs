import "./Card.scss";

//export default function Card(props) {
export default function Card({title, desc, imgUrl}) {
    // const  data = {
    //     id:1,
    //     title:"JACKET",
    //     imgUrl: "https://picsum.photos/200",
    //     desc :" Lorem ipsum dolor sit amet."

    // }

    return (
        <div className="props-card-container">
            <img
                className="props-card-image"
                src={imgUrl}
                alt={title}
            ></img>
            <div className="props-card-content">
                <h3 className="props-card-title">{title}</h3>
                <p className="props-card-text">{desc}</p>
                <button className="props-card-button">ADD TO BASKET</button>
            </div>
        </div>
    );
}
