import { FaLaptopCode } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsLine } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

import './App.css'

function App() {
  return (
    <div className="card">
      <div className="card_body">
        <div className="profile text-center">
          <img src="/Avatar.png" className="avatar" />
          <div className="rd-12 p_8">
            <h1>Hilmi Hakim Ramadani</h1>
            <p>Discover my profil and connect with me through the links below.</p>
          </div>
        </div>
        <div className="button">
          <a className="btn_action" href="">
            <FaLaptopCode />
            <span>Website</span>
          </a>
        </div>
        <div className="button">
          <a className="btn_action" href="">
            <BsInstagram />
            <span>Instagram</span>
          </a>
        </div>
        <div className="button">
          <a className="btn_action" href="">
            <BsFacebook />
            <span>Facebook</span>
          </a>
        </div>
        <div className="button">
          <a className="btn_action" href="">
            <BsTelegram />
            <span>Telegram</span>
          </a>
        </div>
        <div className="button">
          <a className="btn_action" href="">
            <BsLine />
            <span>Line</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
