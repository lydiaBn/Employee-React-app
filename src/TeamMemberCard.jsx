/* eslint-disable react/prop-types */
import FemaleProfile from "./img/FemaleProfile.png";
import MaleProfile from "./img/MaleProfile.png";

const TeamMemberCard = ({ employee, HandleEmployeeCardClick, SelectedTeam }) => {
  return (
    <div key={employee.id} id={employee.id} className={(employee.teamName === SelectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={HandleEmployeeCardClick}>
      {
        (employee.gender === 'male') ? <img src={MaleProfile} className="card-img-top" />
          : <img src={FemaleProfile} className="card-img-top" />
      }

      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard;