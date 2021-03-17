export default function Video() {
  return (
    <div className="vid">
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        preload="auto" 
        poster="/kitajchuk_poster.png" 
        src="/kitajchuk_kickflip.mp4" 
        width="1920" 
        height="1080"
      ></video>
    </div>
  );
};