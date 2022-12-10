import Stat from "./stat";

const Stats = ({ totals }) => {
  return (
    <section className="stats-section my-3">
      <div className="container" style={{ maxWidth: "650px" }}>
        <div className="row gap-2">
          <Stat statName="Calories" statValue={totals.calories} />
          <Stat statName="Meals" statValue={totals.meals} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
