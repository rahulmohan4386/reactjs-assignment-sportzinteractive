import PropTypes from "prop-types";

const PlayerCard = (props) => {
  // Get PFName, SkillDesc, value, CCode, VsCCode, match time from the prop.
  const { PFName, SkillDesc, value, CCode, VsCCode, nextMatchTime, id } = props;

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`player-images/${id}.jpg`}
        alt={PFName}
        style={{ minHeight: "304px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{PFName}</h5>
      </div>
      <ul className="list-group list-group-flush f--14">
        <li className="list-group-item">
          <div className="d-flex">
            <p className="mr-3 f--500">Skill: &nbsp;</p>
            <p>{SkillDesc}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className="mr-3 f--500">Value: &nbsp;</p>
            <p>{`$${value}`}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className=" f--500">Upcoming Matches: &nbsp;</p>
            <p>{CCode}</p> <span>&nbsp;VS&nbsp;</span>
            <p>{VsCCode}</p>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex">
            <p className="mr-3 f--500">Next Match Time: &nbsp;</p>
            <p>{nextMatchTime}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

PlayerCard.propTypes = {
  id: PropTypes.string,
  PFName: PropTypes.string,
  SkillDesc: PropTypes.string,
  value: PropTypes.string,
  CCode: PropTypes.string,
  VsCCode: PropTypes.string,
  nextMatchTime: PropTypes.string,
};

export default PlayerCard;
