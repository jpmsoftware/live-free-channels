import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function View(props) {
  let location = useLocation();
  let src = location.state.src;
  let navigate = useNavigate();

  useEffect(() => {
    let video = document.getElementById('video');

    video.requestFullscreen();

    document.addEventListener("fullscreenchange", (e) => {
      if (window.innerHeight !== window.screen.height) {
        navigate('/');
      }

    }, false);

  });

  return (
    <div>
      <iframe
        id="video"
        className="video"

        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default View;