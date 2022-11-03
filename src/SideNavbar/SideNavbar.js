import React, { useState } from "react";
import dash from "./img/dash.svg";
import "./SideNavbar.css";
import bank from "./img/bank-building@2x 1.svg";
import wallet from "./img/wallet.svg";
import exchange from "./img/exchange.svg";
import learn from "./img/learn.svg";
import blog from "./img/blog.svg";
import profile from "./img/profile.svg";
import setting from "./img/setting.svg";
import logout from "./img/logout.png";
import bell from "./img/bell.svg";
import slash from "./img/slash.svg";
import btc from "./img/bitimg.svg";
import eth from "./img/ethimg.svg";
import usdt from "./img/usdtimg.svg";
import mty from "./img/emptyimg.svg";
import transact from "./img/transaction.svg";
import biticon from "./img/bitIcon.svg";
import ethicon from "./img/ethIcon.svg";

const SideNavbar = () => {
  const [isExpended, setExpendedState] = useState(false);

  const menuItems = [
    {
      text: "Dashboard",
      icon: dash,
      id: 1
    },
    {
      text: "Wallet",
      icon: wallet,
      id: 2
    },
    {
      text: "Exchange Rate",
      icon: exchange,
      id: 3
    },
    {
      text: "Learn",
      icon: learn,
      id: 4
    },
    {
      text: "Blog",
      icon: blog,
      id: 5
    },
    {
      text: "Profile",
      icon: profile,
      id: 6
    },
    {
      text: "Settings",
      icon: setting,
      id: 7
    },
    {
      text: "Logout",
      icon: logout,
      id: 8
    },
  ];

  const trad = [
    {
      first: "demi",
      last: "lade",
    },
    {
      first: "timi",
      last: "lehin",
    },
  ];
  console.log(menuItems);

  return (
    <div className="main-app">
      <div
        className={
          isExpended
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {isExpended && (
              <div className="nav-brand">
                <img src={bank} alt="" />
                <h2>TradExpress</h2>
              </div>
            )}
            <button
              className={
                isExpended
                  ? "hamburger hamburger-in"
                  : "hamburger hamburger-out"
              }
              onClick={() => setExpendedState(!isExpended)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          {menuItems.map((menu) => {
            const { text, icon, id } = menu;
            return (
              <div key={id}>
              <a
                href="#"
                className={isExpended ? "menu-item " : "menu-item menu-item-NX"}
              >
                <img src={icon} alt="" />
                {isExpended && <p className="pep">{text}</p>}
                {!isExpended && <div className="tooltip">{text}</div>}
              </a>
          </div>
            );
          })}
        </div>
        <button className={isExpended ? "btn" : "btn btn-NX"}>
          Contact Support
        </button>
      </div>

      {/* DASHBOARD STYLING*/}

      <div className={isExpended ? "dashboard dashboard-NX" : "dashboard"}>
        {/* <div className="boar"> */}
        <div className="top-not">
          <img src={slash} alt="" />
          <img src={bell} alt="" />
        </div>
        <div className="wallet-bal">
          <h3>Wallet Balance</h3>
          <p>121,546.32 NGN</p>
        </div>
        <h1 className="crypto-h1">Crypto Wallet Balance</h1>
        <div className="bbcb">
          <img src={btc} alt="" className="bbc" />
          <img src={eth} alt="" className="bbc" />
          <img src={usdt} alt="" className="bbc" />
          <img src={mty} alt="" className="bbb" />
        </div>
        <div className="white-space"></div>

        {/* COMPLETE YOUR PROFILE */}
        <div className="profile-Portfolio">
          <div className="proFile">
            <h1>
              Complete your Profile <span>2/4</span>
            </h1>
            <div className="proF">
              <button></button>
              <div className="comPlete">
                <h4>Confirm your email</h4>
                <p>Add an email to secure your account</p>
              </div>
            </div>
            <div className="proF">
              <button></button>
              <div className="comPlete">
                <h4>Add your phone number</h4>
                <p>Add an email to secure your account</p>
              </div>
            </div>
            <div className="proF">
              <button></button>
              <div className="comPlete">
                <h4>Add Bvn</h4>
                <p>Add an email to secure your account</p>
              </div>
            </div>
            <div className="proF">
              <button></button>
              <div className="comPlete">
                <h4>Add Bank Account</h4>
                <p>Add an email to secure your account</p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO */}
          <div className="portFolio">
            <h2>Portfolios</h2>
            <div className="port">
            <img src={transact} alt="" className="transacT" />
            <div>
              <div className="penDing">
                <button className="penD1"></button>
                <p>10 Pending Transaction</p>
              </div>
              <div className="penDing">
                <button className="penD2"></button>
                <p>285 Completed Transaction</p>
              </div>
              <div className="penDing">
                <button className="penD3"></button>
                <p>3 Declined Transaction</p>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* BUY / SELL */}

        <div className="Yub">
          <div className="BuY-btn">
            <button className="BuY-btn1">Buy</button>
            <button className="BuY-btn2">Sell</button>
          </div>
          <h2 className="select-coin">Select coin</h2>
          <div className="BuY-11">
            <div className="BuY-1">
              <img src={biticon} alt="" />
              <div className="heigh">
                <h5>Bitcoin</h5>
                <p>$ 5,256.00</p>
              </div>
            </div>
            <div className="BuY-2"></div>
            <div className="BuY-3">
              <img src={ethicon} alt="" />
              <div className="heighh">
                <h5>Ethereum</h5>
                <p>$10,257.57</p>
              </div>
            </div>
            <div className="BuY-2"></div>
          </div>
          <h2 className="exChanheH2">Exchange</h2>
          <div className="SeLecT">
            <select name="">
              <option value="bitcoin">Bitcoin(BTC)</option>
              <option value="ethereum">Ethereum(ETH)</option>
              <option value="tether">Tether(USDT)</option>
            </select>
            <select name="">
              <option value="bitcoin">US Dollar (USD)</option>
              <option value="ethereum">Naria (NGN)</option>
            </select>
          </div>
          <h1 className="usdh1">Amount</h1>
          <div className="usdh6">
            <h6>USD</h6>
            <p> 2,545.00</p>
          </div>
          <div className="bbbttt">
            <button className="btn-ConTinue">Continue</button>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
};

export default SideNavbar;
