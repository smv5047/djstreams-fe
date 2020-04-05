import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

import "./Dashboard.scss";

export default function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://djstreams.herokuapp.com/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="dashboard">
      {events.map(event => (
        <Card event={event} key={event.id} />
      ))}
    </div>
  );
}
