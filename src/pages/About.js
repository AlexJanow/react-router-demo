import me from "../img/me.jpeg";
import "./About.css";

export default function About() {
  return (
    <div className="about__main">
      <h2>About</h2>
      <p>something about you</p>
      <img className="img__me" alt="me" src={me} />
    </div>
  );
}
