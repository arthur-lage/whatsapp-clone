import React from "react";

import { BottomLine, Container, Divisor, DownloadWhatsapp } from "./styles";

import KeepPhoneConnectedIllustration from "../../assets/keep-phone.jpg";

const KeepYourPhoneConnected: React.FC = () => {
  return (
    <Container>
      <img
        src={KeepPhoneConnectedIllustration}
        alt="Keep your phone connected"
      />
      <h1>Keep your phone connected</h1>
      <p id="about-usage">
        WhatsApp connects to your phone to sync messages. To reduce data usage,
        connect your phone to Wi-Fi.
      </p>
      <Divisor></Divisor>
      <DownloadWhatsapp>
        <p>
          <span>
            <i className="fas fa-laptop"></i>
          </span>
          Make calls from desktop with WhatsApp for Windows.
          <a href="https://www.whatsapp.com/download">&nbsp;Get it here</a>.
        </p>
      </DownloadWhatsapp>
      <BottomLine />
    </Container>
  );
};

export default KeepYourPhoneConnected;
