import { Link } from 'react-router-dom';

function Channel({ channel }) {

  return (
    <Link to="/view" state={{ src: channel.src }} >
      <div className='channel'>
        <div className='info'>
          <p className='name'>{channel.name}</p>
          <p className='country'>{channel.country}</p>
        </div>

        <div className='background'>
          <img src={`/img/${channel.img}`} className='background-image' alt="" />
        </div>
      </div>
    </Link>
  )
}

export default Channel;