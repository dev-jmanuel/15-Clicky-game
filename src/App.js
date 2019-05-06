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

  // onClick event function
  imageClick = event => {
    
    // if obj is in clicked arr, indexof will return 0-14 (true), else return -1 (false)
    const current = event.target.alt; 
    const isAlreadyClicked = this.state.clicked.indexOf(current) > -1;
    
    // score function: re-sort employees; add obj into clicked arr; increase score
    if (isAlreadyClicked === false) {
      this.setState(
        {
          employee: this.state.employee.sort(() => 0.5 - Math.random()),
          clicked: this.state.clicked.concat(current),
          score: this.state.score + 1
        },

        // win function: reset state when score reaches 15; send win alert
        () => {
          if (this.state.score === 15) {
            alert("Congratulations, you win");
            this.setState({
              employee: this.state.employee.sort(() => 0.5 - Math.random()),
              clicked: [],
              score: 0
            });
          }
        }
      );
    }

    // lose function: reset state; send lose alert
    if (isAlreadyClicked === true) {
      this.setState({
        employee: this.state.employee.sort(() => 0.5 - Math.random()),
        clicked: [],
        score: 0
      });
      alert("Failure of any kind is failure   -D.Schrute");
    } 
  };

  // render components
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
