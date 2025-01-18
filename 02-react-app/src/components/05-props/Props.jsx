import clothingData from "../../assets/data/clothing.json"
import Card from "./Card"

export default function Props() {
  return (
      <div>
          <h1>Props</h1>
          <div style={{padding:"3rem", display:"flex", gap:"2rem",flexWrap:"wrap"}}>
              {
                clothingData.map((item) => (
                //console.log(item);
                  <Card
                      key={item.id}
                      title={item.title}
                      desc={item.text}
                      imgUrl={item.imgUrl}
                  />
                )
                )
            }
             
          </div>
      </div>
  );
}
