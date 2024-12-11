import "./Partners.css";

import BlockPot from "../../assets/partners/blockport.png";
import Fantom from "../../assets/partners/fantom.png";
import Onfido from "../../assets/partners/onfido.png";
import Stellar from "../../assets/partners/stellar.png";
import Tr from "../../assets/partners/tr.png";

function Partners() {
  return (
    <div className="partners-main-container">
      <div className="partners-container">
        <img src={Stellar} alt="Stellar" />
        <img src={BlockPot} alt="BlockPot" />
        <img src={Fantom} alt="Fantom" />
        <img src={Onfido} alt="Onfido" />
        <img src={Tr} alt="Tr" />
      </div>
    </div>
  );
}

export default Partners;
