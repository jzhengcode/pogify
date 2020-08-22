import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: 'false'
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }
  componentDidMount() {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.setState({ darkMode: storedDarkMode })
  }

  toggleDarkMode() {
    const newDarkMode = !(this.state.darkMode);
    this.setState({ darkMode: newDarkMode })
    localStorage.setItem('darkMode', newDarkMode);
  }

  render() {
    let darkMode = this.state.darkMode;

    let contentClass = 'content';
    if (darkMode) {
      contentClass += ' darkContent';
    }

    return (
      <div className="layout">
        <div className={contentClass}>
          {this.props.children}
        </div>
        <footer className="footer">
          ©{" "}
          <a href="https://www.pogify.net/">Pogify</a>{" "}|{" "}
          <Link to="/tou">Terms of Use</Link>{" "}|{" "}
          <Link to="/privacy">Privacy Policy</Link>{" "}|{" "}
          <button onClick={this.toggleDarkMode} className={"mode-toggle"}>Switch to {darkMode ? 'Light' : 'Dark'} Mode!</button>
          <br />
          <a href="https://www.spotify.com">Spotify</a> is copyright Spotify AB and is not affiliated with Pogify.
        </footer>

      </div >
    );
  }
};

// Layout.propTypes = {
//   children: PropTypes.element.isRequired
// };
