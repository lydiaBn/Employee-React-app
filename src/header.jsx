import PropTypes from "prop-types";

function Header({ SelectedTeam, teamMemberCount }) {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member Allocation</h1>
          <h3>
            Team : {SelectedTeam} has {teamMemberCount} {teamMemberCount > 1 ? "members" : "member"}
          </h3>
        </div>{" "}
      </div>
    </header>
  );
}

Header.propTypes = {
  SelectedTeam: PropTypes.string.isRequired,
  teamMemberCount: PropTypes.number.isRequired,
};

export default Header;
