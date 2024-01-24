import { ArtDirection } from "./StarRatings/ArtDirection";
import { Enjoyment } from "./StarRatings/Enjoyment";
import { Gameplay } from "./StarRatings/Gameplay";
import { Narrative } from "./StarRatings/Narrative";
import { Soundtrack } from "./StarRatings/Sountrack";

export const NotScoredPage: React.FC = ({ game }) => {


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row box-content bg-base-100 shadow-xl rounded-lg p-20">
          <img
            src={game.background_image}
            className="max-w-2xl rounded-lg shadow-2xl mr-12 flex-shrink-0"
          />
          <div className="divider lg:divider-horizontal" />
          <div className="container ml-12 flex flex-col self-start flex-grow">
            <h2 className="text-4xl mb-6 font-bold">{game.name}</h2>
            <h3 className="text-xl font-bold">Gameplay</h3>
            <div>
              <Gameplay />
            </div>
            <h3 className="text-xl font-bold">Narrative</h3>
            <div>
              <Narrative />
            </div>
            <h3 className="text-xl font-bold">Soundtrack / Score</h3>
            <div>
              <Soundtrack />
            </div>
            <h3 className="text-xl font-bold">Art Direction</h3>
            <div>
              <ArtDirection />
            </div>
            <h3 className="text-xl font-bold">Personal Enjoyment</h3>
            <Enjoyment />
          </div>
        </div>
      </div>
    </>
  );
};
