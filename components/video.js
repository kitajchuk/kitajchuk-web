export default function Video() {
  return (
    <div className="vid">
      <video 
        preload="auto" 
        autoplay 
        loop 
        muted 
        playsinline 
        poster="" 
        src="/kitajchuk_kickflip.mp4" 
        width="1920" 
        height="1080"></video>
    </div>
  );
};