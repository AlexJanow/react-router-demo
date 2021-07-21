import nice from "../img/somethingnice.png";
import "./Home.css";
export default function Home() {
  return (
    <div className="home__main">
      <h2>Home</h2>
      <img alt="something nice" src={nice} />
    </div>
  );
}
