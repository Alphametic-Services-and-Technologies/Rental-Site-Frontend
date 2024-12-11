import "./HouseCard.css";
import { Card, CardMedia, CardContent, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export type HouseCardProps = {
  imageSrc: string;
  title: string;
  company: string;
  remainingTime: Date;
  currentBid: number;
};

function HouseCard(props: HouseCardProps) {
  const { imageSrc, title, company, remainingTime, currentBid } = props;

  const [liked, setLiked] = useState(false);
  const [seconds, setSeconds] = useState(remainingTime.getSeconds());
  const [minutes, setMinutes] = useState(remainingTime.getMinutes());
  const [hours, setHours] = useState(remainingTime.getHours());

  const timer = setTimeout(() => {
    setSeconds(seconds - 1);
    if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    if (minutes === 0 && seconds === 0) {
      setHours(hours - 1);
      setMinutes(59);
    }
  }, 1000);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearTimeout(timer);
  }

  const getTime = () => {
    return `${hours}h : ${minutes}m : ${seconds}s`;
  };
  return (
    <Card className="card-container">
      <CardMedia
        image={imageSrc}
        title={title}
        className="card-container-img"
      />
      <IconButton className="heart-button" onClick={() => setLiked(!liked)}>
        {liked ? (
          <FavoriteIcon color="error" />
        ) : (
          <FavoriteBorderIcon sx={{ color: "white" }} />
        )}
      </IconButton>
      <CardContent sx={{ padding: 0 }}>
        <h4>{title}</h4>
        <p className="gray-90">{company}</p>
        <div className="info-container">
          <div className="time-bid-container">
            <h5>{getTime()}</h5>
            <p className="gray-90">Remaining Time</p>
          </div>
          <div className="time-bid-container">
            <h5>{currentBid}ETH</h5>
            <p className="gray-90">Current Bid</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default HouseCard;
