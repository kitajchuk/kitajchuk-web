export default function Video() {
  return (
    <div className="vid">
      <video 
        autoPlay 
        loop 
        muted 
        playsinline 
        preload="auto" 
        poster="/img/kitajchuk_poster.png" 
        src="/media/kitajchuk_kickflip.mp4" 
        width="1920" 
        height="1080"
      ></video>
    </div>
  );
}