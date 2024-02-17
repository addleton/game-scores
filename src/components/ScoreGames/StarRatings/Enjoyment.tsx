import { EnjoymentRatingProps } from "../../../types/Types";

export const Enjoyment: React.FC<EnjoymentRatingProps> = ({
    enjoymentScore,
    setEnjoymentScore,
}) => {
    return (
        <div className="rating rating-lg rating-half">
            <input
                type="radio"
                name="rating-5"
                className="rating-hidden"
                value={0}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
                checked={enjoymentScore === "0"}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-1"
                value={0.5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-2"
                value={1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-1"
                value={1.5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-2"
                value={2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-1"
                value={2.5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-2"
                value={3}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-1"
                value={3.5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-2"
                value={4}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-1"
                value={4.5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
            <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400 mask-half-2"
                value={5}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEnjoymentScore(e.target.value);
                }}
            />
        </div>
    );
};
