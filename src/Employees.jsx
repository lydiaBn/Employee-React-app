
import TeamMembers from "./teamMembers";
import Team from "./Teams";
import PropTypes from 'prop-types';
function Employees  ({employees, SelectedTeam, HandleEmployeeCardClick, HandleTeamSelectionChange}) {
 
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-B">
            <Team SelectedTeam={SelectedTeam} HandleTeamSelectionChange={HandleTeamSelectionChange} />
        </div>
      </div>

      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers employees={employees}
              HandleEmployeeCardClick={HandleEmployeeCardClick}
              SelectedTeam={SelectedTeam} />
          </div>
        </div>
      </div>
    </main>
  );
}

Employees.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.object).isRequired,
    SelectedTeam: PropTypes.string.isRequired,
    HandleEmployeeCardClick: PropTypes.func.isRequired,
    HandleTeamSelectionChange: PropTypes.func.isRequired,
  };


export default Employees;
