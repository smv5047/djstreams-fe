import React from "react";

import "./Card.scss";
//todo update arrangement of data
export default function Card(props) {
  let newStartDate = Date.parse(props.event.event_start);
  let formattedStartDate = new Date(newStartDate).toLocaleDateString();
  let formattedStartTime = new Date(newStartDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  let newEndDate = Date.parse(props.event.event_end);
  let formattedEndDate = new Date(newEndDate).toLocaleDateString();
  let formattedEndTime = new Date(newEndDate).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(new Date());

  let currentTime = new Date();

  let currentTimeMillisecs = Date.parse(currentTime);

  let isLive = false;
  if (
    currentTimeMillisecs > newStartDate &&
    currentTimeMillisecs < newEndDate
  ) {
    isLive = true;
  }

  return (
    <div className="event-card">
      <div className="event-card-header">
        {isLive && <div className="live">Live Now!</div>}
      </div>
      <div className="event-title">
        {/* If Stream Is Part of a Wider Event The Name Would be Be Displayed Here, Dafaults ot Artists NAme*/}
        {!props.event.event_name ? (
          <h2>{props.event.artist}'s Stream</h2>
        ) : (
          <h2>{props.event.event_name}</h2>
        )}
      </div>
      <div className="artists">
        <h2>Artist: {props.event.artist}</h2>
      </div>
      <div className="set-time">
        <div>
          <h2>Starts At:</h2> {formattedStartDate} {formattedStartTime}
        </div>
        <div>
          <h2>Ends At:</h2> {formattedEndDate} {formattedEndTime}
        </div>
      </div>

      <div className="description">{props.event.description}</div>
      <div className="card-details">
        <div>
          <a href={props.event.link} target="_blank" rel="noopener noreferrer">
            Start Listening
          </a>
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
