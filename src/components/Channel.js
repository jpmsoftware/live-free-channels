import { Link } from "react-router-dom";

function Channel({ channel }) {

  return (
    <Link to="/view" state={{ src: channel.src }} >
      <div className="channel">
        <div className="channel-info">
          <p className="channel-name">{channel.name}</p>
          <p className="channel-country">{channel.country}</p>
        </div>

        <div className="channel-background">
          <img src={`/img/${channel.img}`} className='background-image' alt="" />
        </div>
      </div>
    </Link>
  )
}

export default Channel;