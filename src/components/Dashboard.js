import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

import "./Dashboard.scss";

export default function Dashboard() {
  const [events, setEvents] = useState([
    // {
    //   name: "Digital Mirage",
    //   artist: "many",
    //   description:
    //     "Online Music Fest presented by Proximity and Brownies & Lemonade",
    //   link: "http://youtube.com/Proximity",
    //   headbops: 15,
    //   tracklist: "www.google.com"
    // },
    // {
    //   name: "test",
    //   artist: "many",
    //   description: "totally cool",
    //   link: "ww.google.com",
    //   headbops: 11,
    //   tracklist: "www.yahoo.com"
    // }
  ]);

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
