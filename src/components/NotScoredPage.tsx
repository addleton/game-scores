export const NotScoredPage: React.FC = ({ game }) => {
  console.log(game);
  return (
    <>
    <h2>Be the first to score this game!</h2>
    <h3>{game.name}</h3>
    <ul>
      Developers:
      {game.developers.map((dev) => {
        return <li>{dev.name}</li>
      })}
    </ul>
    <ul>
      Genre:
      {game.genres.map((genre)=> {
        return <li>{genre.name}</li>
      })}
    </ul>
    <p>ESRB Rating: {game.esrb_rating.name}</p>
    <ul>
      Available on:
      {game.platforms.map((platform)=>{
        return <li>{platform.platform.name}</li>
      })}
    </ul>

        <div className="container"><img className="mask mask-square " src={game.background_image} /></div>

    </>

  );
};
