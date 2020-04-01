import React, { useState } from "react";

import "./Card.scss";

export default function Card() {
  const [event, setEvent] = useState({
    name: "Digital Mirage",
    artist: "many",
    description:
      "Online Music Fest presented by Proximity and Brownies & Lemonade",
    link: "http://youtube.com/Proximity",
    headbops: 15,
    tracklist: "www.google.com"
  });

  return (
    <div className="event-card">
      <div>{event.name}</div>
      <div>{event.artist}</div>
      <div className="set-time">
        <div>Start Time</div>
        <div>End Time</div>
      </div>
      <div>{event.description}</div>
      <div className="card-details">
        <div>{event.link}</div>
        <div>{event.headbops}</div>
        <div>{event.tracklist}</div>
        <div>Set Reminder</div>
      </div>
    </div>
  );
}
