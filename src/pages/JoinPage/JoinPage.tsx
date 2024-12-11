import "./JoinPage.css";

import JoinCard from "../../components/JoinCard/JoinCard";
import { joinCardData } from "./JoinCardData";

function JoinPage() {
  return (
    <div className="join-main-container">
      <div className="join-container">
        {joinCardData.map((data) => (
          <div
            key={data.number}
            style={{
              marginTop: data.number % 2 !== 0 ? 0 : "65px",
              marginBottom: data.number % 2 === 0 ? 0 : "65px",
            }}
          >
            <JoinCard
              number={data.number}
              src={data.src}
              title={data.title}
              body={data.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinPage;
