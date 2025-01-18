

export default function Jsx3() {

    const names = ["John", "Jane", "Jack", "Jonathan"];
    const cities = ["New York", "London", "Paris", "Berlin"];

  return (
    <div>
      <h1>JSX - 3</h1>
      {
        names.map((name, index) => <p key={index}>{name}</p>)
      }
        <select>

            {cities.map((city) => {
                return (
                    <option key={city} value={city}>{city}</option>
                )
            })
            }
        </select>


    </div>
  )
}
