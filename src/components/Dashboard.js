import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

import Card from "./Card";

import "./Dashboard.scss";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://djstreams.herokuapp.com/api/events")
      .then((res) => {
        setEvents(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //Sort Events By Most Recent

  let sortableEvents = events;
  sortableEvents.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.event_start) - new Date(a.event_start);
  });
  sortableEvents.reverse();
  console.log(sortableEvents);

  return (
    <div className="dashboard">
      {isLoading && (
        <div className="loading-spinner">
          <ClipLoader size={150} color={"#725ac1"} loading={isLoading} />
        </div>
      )}
      {events.map((event) => (
        <Card event={event} key={event.id} />
      ))}
    </div>
  );
}
