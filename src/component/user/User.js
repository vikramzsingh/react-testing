import React from "react";

export default function User({ id }) {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return user === null ? (
    <p>Loading!</p>
  ) : (
    <div>
      Name: {user.name}
      <br />
      Email: {user.email}
    </div>
  );
}
