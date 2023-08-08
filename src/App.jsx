import "./App.css";
import Footer from "./footer.jsx"; // This is the footer component
import Header from "./header.jsx"; // This is the header component
import Employees from "./employees.jsx"; // This is the employee component
import Nav from "./nav.jsx"; // This is the nav component
import NotFound from "./NotFound.jsx"; // This is the NotFound component
import GroupedTeamMembers from "./GroupedTeamMembers.jsx"; // This is the groupedTeamMembers component
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [SelectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("SelectedTeam")) || "TeamA"
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }),
    [employees];

  useEffect(() => {
    localStorage.setItem("SelectedTeam", JSON.stringify(SelectedTeam));
  }),
    [SelectedTeam];

  function HandleTeamSelectionChange(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }

  function HandleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.TeamName === SelectedTeam
          ? { ...employee, teamName: " " }
          : { ...employee, teamName: SelectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }

  return (
    <>
      <Router>
        <Nav />
        <Header
          SelectedTeam={SelectedTeam}
          teamMemberCount={
            employees.filter((employee) => employee.teamName === SelectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employees={employees}
                SelectedTeam={SelectedTeam}
                HandleEmployeeCardClick={HandleEmployeeCardClick}
                HandleTeamSelectionChange={HandleTeamSelectionChange}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={
              <GroupedTeamMembers
                employees={employees}
                SelectedTeam={SelectedTeam}
                setTeam={setTeam}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;