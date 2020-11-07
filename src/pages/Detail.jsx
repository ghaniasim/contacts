import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import DetailView from "../components/DetailView";

function Detail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }, [url]);

  return (
    <div>
      <Header />
      {user && (
        <DetailView
          name={user.name}
          username={user.username}
          email={user.email}
          phone={user.phone}
          website={user.website}
          company={user.company}
          address={user.address}
        />
      )}
    </div>
  );
}

export default Detail;
