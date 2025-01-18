import "./ProfileCard.scss";
import ProfileCardImage from "../../assets/images/profile-card.jpg";
export default function ProfileCard({title, location, imgUrl, statistics}) {

// const data = {
//      title: "Walker",
//     location: "Nashville, Tennessee",
//     imgUrl: "",
//     statistics: [
//         {
//             value: 2,
//             label: "Shot",
//         },
//         {
//             value: 234,
//             label: "Folowers",
//         },
//         {
//             value: 237,
//             label: "Following",
//         },
//     ]
// }

    // const title = "Walker";
    // const location = "Nashville, Tennessee";
    // const imgUrl = "";
    // const statistics = [
    //     {
    //         value: 2,
    //         label: "Shot",
    //     },
    //     {
    //         value: 234,
    //         label: "Folowers",
    //     },
    //     {
    //         value: 237,
    //         label: "Following",
    //     },
    // ];

    const profileCardStyle = {
        backgroundImage: `url(${imgUrl || ProfileCardImage})`
    };

    
  return (
      <div className="profile-card-container">
          <div className="profile-card-header" style={profileCardStyle}></div>
          <div className="profile-card-content">
              <div
                  className="profile-card-avatar"
                  style={profileCardStyle}
              ></div>

              <h2>{title}</h2>
              <h3>{location}</h3>
              <div className="profile-card-stats">
                  {
                  statistics.map((stats, index) => (
                      <div key={index} className="profile-card-stats-info">
                          <p>{stats.value}</p>
                          <p>{stats.label}</p>
                      </div>
                  ))}
              </div>

              {/* <div className="profile-card-stats-info">
                      <p>2</p>
                      <p>Shot </p>
                  </div>
                  <div className="profile-card-stats-info">
                      <p>234</p>
                      <p>Folowers </p>
                  </div>
                  <div className="profile-card-stats-info">
                      <p>234</p>
                      <p>Following </p>
                  </div> */}
          </div>
      </div>
  );
}
