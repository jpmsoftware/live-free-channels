import { useLocation } from 'react-router-dom';

function View(props) {

  const location = useLocation();
  const src = location.state.src;

  return (
    <div>
      <iframe className='video-max'
        width="100%"
        height="100%"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default View;