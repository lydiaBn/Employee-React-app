/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({
  employees,
  HandleEmployeeCardClick,
  SelectedTeam,
}) => {
    return (
        employees.map((employee) => (
          <TeamMemberCard employee={employee} HandleEmployeeCardClick={HandleEmployeeCardClick} SelectedTeam={SelectedTeam} />
        ))
      )
    }


    TeamMembers.propTypes = {
        employee: PropTypes.object.isRequired,
        HandleEmployeeCardClick: PropTypes.func.isRequired,
        MaleProfile: PropTypes.string.isRequired,
        FemaleProfile: PropTypes.string.isRequired,
        SelectedTeam: PropTypes.string.isRequired,
      };

    export default TeamMembers;




