import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";

function Home() {
  const [users, setUsers] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, [url]);

  return (
    <div>
      <Header />
      {users &&
        users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            website={user.website}
          />
        ))}
    </div>
  );
}

export default Home;
