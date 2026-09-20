import React from "react";

export default function DanceAnimation() {
  return (
    <div className="dance-video-wrap">
      <video
        className="dance-video"
        src="/dance.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="dance-blue-glow" />
    </div>
  );
}