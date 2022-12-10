import propTypes from "prop-types";

const Stat = ({ statName, statValue }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{statName}</h5>
          <h5 className="card-title">{statValue}</h5>
        </div>
      </div>
    </div>
  );
};

Stat.propTypes = {
  statName: propTypes.string,
  statValue: propTypes.number,
};

Stat.defaultProps = {
  statName: "",
  statValue: 0,
};

export default Stat;
