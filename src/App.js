import React from "react";
import QRCode from "qrcode.react";

import "./styles/main.scss";

const ticketStyles = ["Alpha", "OMEGA"];

const ticketInfo = {
  Alpha: [
    "Flight 5791 /// Nov. 3, 2018",
    "Frida Michele Albers",
    "08:45AM PST",
    "AA-23",
    "ALPHA ONE",
    "ZZ",
    "2A",
    "SEA",
    "Seatac, WA",
    "LAX",
    "Los Angeles, CA",
  ],
  OMEGA: [
    "Flight 673 /// Nov. 3, 2018",
    "Solange Ora",
    "11:37AM EST",
    "F-35",
    "Priority",
    "3",
    "23D",
    "JFK",
    "New York, NY",
    "MCO",
    "Orlando, FL",
  ],
};

const QRColors = {
  Alpha: ["#feebea", "#2955f4"],
  OMEGA: ["#feebea", "#fa7065"],
};

function renderTickets() {
  return ticketStyles.map((ticketStyle, i) => {
    return (
      <div className={"ticket " + ticketStyle}>
        <div className="ticket-top">
          <div className="ticket-banner">
            {i === 0 ? <div id="Alpha-logo" /> : null}

            <h1>{ticketStyle}</h1>
          </div>
          <div className="flight-info">
            <p>{ticketInfo[ticketStyle][0]} </p>
            <div className={"dot " + ticketStyle}></div>
            <div className="info-wrapper">
              <p>
                {ticketInfo[ticketStyle][1]} <hr />
                <label>PASSENGER</label>
              </p>
              <div className="info-columns">
                <div className="col">
                  <p>
                    {ticketInfo[ticketStyle][2]} <hr />
                    <label>BOARDING TIME</label>
                  </p>
                  <p>
                    {ticketInfo[ticketStyle][4]} <hr />
                    <label>CLASS</label>
                  </p>
                </div>
                <div className="col">
                  <p>
                    {ticketInfo[ticketStyle][3]} <hr />
                    <label>GATE</label>
                  </p>
                  <div className="row">
                    <p>
                      {ticketInfo[ticketStyle][5]} <hr />
                      <label>ZONE</label>
                    </p>
                    <p>
                      {ticketInfo[ticketStyle][6]} <hr />
                      <label>SEAT</label>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-bottom">
          <div className="bottom-col">
            <div className="info-wrapper">
              <div className="square left" />
              <div className="square bottom-left" />
              <div className="square right" />
              <div className="line" />
              <div>
                <h2>{ticketInfo[ticketStyle][7]}</h2>
                <p>{ticketInfo[ticketStyle][8]}</p>
              </div>

              <div className="down-arrow" />
              <div>
                <h2>{ticketInfo[ticketStyle][9]}</h2>
                <p>{ticketInfo[ticketStyle][10]}</p>
              </div>
            </div>
            <div className="btn-wrapper">
              <button className="info-button">?</button>
            </div>
          </div>
          <div className="bottom-col">
            <div className="info-wrapper">
              <QRCode
                value="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg"
                bgColor={QRColors[ticketStyle][0]}
                fgColor={QRColors[ticketStyle][1]}
                className="qr"
              />
            </div>
            <div className="btn-wrapper">
              <button className="purchase-button">Add to wallet</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

function App() {
  return <div id="App">{renderTickets()}</div>;
}

export default App;
