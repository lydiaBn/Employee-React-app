/* eslint-disable react/prop-types */

const Teams = ( {SelectedTeam, HandleTeamSelectionChange}) => { 
    return ( 
        <select
        className="form-select form-select-lg"
        values={SelectedTeam}
        onChange={HandleTeamSelectionChange}
      >
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
      </select>
     );
} 

export default Teams;
