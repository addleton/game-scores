
import Game from "../types/Types";

import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

const CarouselCard: React.FC<{ game: Game }> = ({ gameSet }) => {
  return (
    <div className="must-play-games">
      <Card variant='plain' className='must-play-card'sx={{ minHeight: "350px", width: 350 }}>
        <CardCover>
          <img
            src={gameSet[0].img_url}
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {gameSet[0].title}
          </Typography>
        </CardContent>
      </Card>
      <Card variant='plain' className='must-play-card'sx={{ minHeight: "350px", width: 350 }}>
        <CardCover>
          <img
            src={gameSet[1].img_url}
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {gameSet[1].title}
          </Typography>
        </CardContent>
      </Card>
      <Card variant='plain' className='must-play-card'sx={{ minHeight: "350px", width: 350 }}>
        <CardCover>
          <img
            src={gameSet[2].img_url}
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {gameSet[2].title}
          </Typography>
        </CardContent>
      </Card>
      <Card variant='plain' className='must-play-card'sx={{ minHeight: "350px", width: 350 }}>
        <CardCover>
          <img
            src={gameSet[3].img_url}
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {gameSet[3].title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarouselCard;
