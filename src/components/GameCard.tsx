

const GameCard: React.FC = ({ game }) => {
  console.log(game)
  return (

    <div className="card w-5/6 bg-base-100 shadow-xl image-full">
      <figure>
        <img className="card-image" src={game.background_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.name}</h2>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default GameCard;
