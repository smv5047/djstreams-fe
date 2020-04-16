import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AddEvent.scss";

export default function AddEvent() {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    event_start: "",
    event_end: "",
    description: "",
    event_platform: "",
    event_link: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value,
    });
  };

  //TODO Fix hanbdle submit -does it need to be passed "e" argument
  //Complete submit and

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("hello");
    // console.log(newEvent);
    // axios
    //   .post("https://djstreams.herokuapp.com/api/events", newEvent)
    //   .then((res) => {
    //     setNewEvent(res.data);
    //     console.log("success", res);
    //   })
    //   .catch((err) => console.log(err.response));
  };

  return (
    <>
      <form>
        <label>Event Name:</label>
        <input
          placeholder="Event Name"
          onChange={(e) => handleChange(e)}
          name="event_name"
          value={newEvent.event_name}
          type="text"
        />
        <label>Start Time:</label>
        <input
          placeholder="Start Time"
          name="event_start"
          onChange={(e) => handleChange(e)}
          value={newEvent.event_start}
          type="datetime-local"
        />
        <label>End Name:</label>
        <input
          placeholder="End Time"
          name="event-end"
          onChange={(e) => handleChange(e)}
          value={newEvent.event_end}
          type="datetime-local"
        />
        {/* <label>
          Platform:
          <select name="event_platform" onChange={(e) => handleChange(e)}>
            <option value="youtube">Youtube</option>
            <option value="twitch">Twitch</option>
            <option value="other">Other</option>
          </select>
        </label> */}
        <label>
          Link:
          <input
            placeholder="www.twitch.tv/skrillex"
            name="link"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newEvent.link}
          />
        </label>
        <label>
          Artists:
          <textarea
            name="description"
            onChange={(e) => handleChange(e)}
            placeholder="Add the Event Description Here"
            rows="10"
            columns="40"
            value={newEvent.description}
          ></textarea>
        </label>
        <br></br>
        <button type="submit" onSubmit={handleSubmit}>
          Add Event
        </button>
      </form>
    </>
  );
}
