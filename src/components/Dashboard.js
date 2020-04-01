import React, { useState } from "react";

import Card from "./Card";

export default function Dashboard() {
  const [events, setEvents] = useState([
    {
      name: "Digital Mirage",
      artist: "many",
      description:
        "Online Music Fest presented by Proximity and Brownies & Lemonade",
      link: "http://youtube.com/Proximity",
      headbops: 15,
      tracklist: "www.google.com"
    },
    {
      name: "test",
      artist: "many",
      description: "totally cool",
      link: "ww.google.com",
      headbops: 11,
      tracklist: "www.yahoo.com"
    }
  ]);

  return <>{events && events.map(event => <Card event={event} />)}</>;
}
