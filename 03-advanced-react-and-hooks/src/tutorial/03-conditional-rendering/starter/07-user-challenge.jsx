import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState();

  const userLogIn = () => setUser({ name: "Harsh", id: 1 });
  const userLogOut = () => setUser(null);

  return user ? (
    <LogedIn click={userLogOut} person={user} />
  ) : (
    <LogedOut click={userLogIn} />
  );
};

const LogedIn = ({ person, click }) => {
  return (
    <div>
      <h1 style={{ color: "#504acc" }}>Hello there!</h1>
      <h4>i am user {person.name}</h4>
      <button className="btn" onClick={click}>
        Logo
      </button>
    </div>
  );
};
const LogedOut = ({ click }) => {
  return (
    <div>
      <h3 style={{ color: "#504acc" }}>Please Log In</h3>
      <button className="btn" onClick={click}>
        Login
      </button>
    </div>
  );
};

export default UserChallenge;
