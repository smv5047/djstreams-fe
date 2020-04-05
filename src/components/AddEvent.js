import React, { useState, useEffect } from "react";

import "./AddEvent.scss";

export default function AddEvent() {
  return (
    <>
      <form>
        <label>Event Name:</label>
        <input placeholder="Event Name" />
        <label>Start Time:</label>
        <input placeholder="Start Time" />
        <label>End Name:</label>
        <input placeholder="End Time" />
        <label>
          Platform:
          <select>
            <option value="youtube">Youtube</option>
            <option value="twitch">Twitch</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button type="submit">Add Event</button>
      </form>
    </>
  );
}
