import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";

function Home() {
  const [users, setUsers] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, [url]);

  if (users) {
    console.log(users);
  }

  return (
    <div>
      <Header />
      {users &&
        users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            website={user.website}
          />
        ))}
    </div>
  );
}

export default Home;
