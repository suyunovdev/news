import "./App.css";
import logo from "./assets/images/logos.svg";
import search from "./assets/images/searchs.svg";
import tell from "./assets/images/tells.svg";
import play from "./assets/images/play.svg";
import opa from "./assets/images/opa.png";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src={logo} alt="" />
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Services</li>
              <li>Offers</li>
            </ul>
            <div className="right">
              <img src={search} alt="" />
              <button>
                <img src={tell} alt="" /> Contact
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className="container">
        <main>
          <div className="left">
            <h1>
              Dive into Delights Of Delectable <span>Food</span>
            </h1>
            <p>
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <div className="pas">
              <button>Order Now</button>
              <a href="#">Watch Video</a>
              <div className="plays">
                <img src={play} alt="" />
              </div>
            </div>
          </div>
          <img className="opa" src={opa} alt="" />
        </main>
      </div>
    </>
  );
}

export default App;
