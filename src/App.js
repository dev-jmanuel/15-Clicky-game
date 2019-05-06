import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import EmployeeCard from "./components/EmployeeCard";
import Footer from "./components/Footer";
import employee from "./office.json";

class App extends Component {

  state = {
    employee,
    clicked: [],
    score: 0
  };

  imageClick = event => {
    const current = event.target.alt;
    const selected =
      this.state.clicked.indexOf(current) > -1;

    if (selected) {
      this.setState({
        employee: this.state.employee.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clicked: [],
        score: 0
      });
        alert("You lose. Play again?");

    } else {
      this.setState(
        {
          employee: this.state.employee.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clicked: this.state.clicked.concat(
            current
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 15) {
            alert("Yay! You Win!");
            this.setState({
              employee: this.state.employee.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header score={this.state.score}  />
        <Wrapper>
          {this.state.employee.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              imageClick={this.imageClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
