import React from "react";

import "./Card.scss";

export default function Card(props) {
  return (
    <div className="event-card">
      <div className="event-title">
        <h2>{props.event.event_name}</h2>
      </div>
      {/* <div>{props.event.artist}</div> */}
      <div className="artists">Artist: {props.event.description}</div>
      <div className="set-time">
        {/* <div>Start Time</div> */}
        <div>{props.event.event_start}</div>
        {/* <div>End Time</div> */}
        <div>{props.event.event_end}</div>
      </div>

      <div className="description">
        In this spirit, influential YouTube curation channel Proximity has
        teamed up with Los Angeles event company Brownies and Lemonade to
        announce Digital Mirage, a new three-day online music festival with all
        proceeds benefiting Sweet Relief Musicians Fund.
      </div>
      <div className="card-details">
        <div>
          <a href={props.event.link}>Link</a>
        </div>
        {/* <div>{props.event.headbops}</div> */}
        {/* <div>HEAD BOP IT</div> */}
        {/* <div>{props.event.tracklist}</div> */}
        {/* <div>
          <a href="https://www.1001tracklists.com/tracklist/238v18tt/sebastien-leger-beatport-live-reconnect-2020-03-28.html">
            Tracklist
          </a>
        </div>
        <div>Set Reminder</div> */}
      </div>
    </div>
  );
}
