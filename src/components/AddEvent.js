import React, { useState } from "react";
import axios from "axios";

import "./AddEvent.scss";

export default function AddEvent() {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    event_start: "",
    event_end: "",
    description: "",
    event_platform: "",
    link: "",
    artist: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name, newEvent);

    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://djstreams.herokuapp.com/api/events", newEvent)
      .then((res) => {
        // setNewEvent(res.data);
        // console.log("success", res);
        window.alert(`Thank you for adding ${newEvent.event_name}`);
        setNewEvent({
          event_name: "",
          event_start: "",
          event_end: "",
          description: "",
          event_platform: "",
          event_link: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <row>
          <label>Event Name</label>
        </row>
        <row>
          <input
            placeholder="Event Name"
            onChange={(e) => handleChange(e)}
            name="event_name"
            value={newEvent.event_name}
            type="text"
          />
        </row>
        <row>
          <label>Start Time</label>
        </row>
        <row>
          <input
            placeholder="Start Time"
            name="event_start"
            onChange={(e) => handleChange(e)}
            value={newEvent.event_start}
            type="datetime-local"
          />
        </row>
        <row>
          <label>End Time</label>
        </row>
        <row>
          <input
            placeholder="End Time"
            name="event_end"
            onChange={(e) => handleChange(e)}
            value={newEvent.event_end}
            type="datetime-local"
          />
        </row>
        {/* <label>
          Platform:
          <select name="event_platform" onChange={(e) => handleChange(e)}>
            <option value="youtube">Youtube</option>
            <option value="twitch">Twitch</option>
            <option value="other">Other</option>
          </select>
        </label> */}
        <row>
          <label>Link</label>
        </row>
        <row>
          <input
            placeholder="www.twitch.tv/skrillex"
            name="link"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newEvent.link}
          />
        </row>
        <row>
          <label>Artists</label>
        </row>
        <row>
          <textarea
            name="description"
            onChange={(e) => handleChange(e)}
            placeholder="Add the Event Description Here"
            rows="5"
            columns="100"
            value={newEvent.description}
          ></textarea>
        </row>
        <br></br>
        <row>
          <button type="submit">Add Event</button>
        </row>
      </form>
    </div>
  );
}
