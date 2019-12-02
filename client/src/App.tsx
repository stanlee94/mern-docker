import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { AxiosResponse } from "axios";

interface APIResponse {
  server: string;
  port: number;
  success: boolean;
}

class App extends React.Component {
  componentDidMount() {
    axios
      .get<APIResponse>("/api/v1/")
      .then((response: AxiosResponse<APIResponse>) => {
        console.log(response.data);
      });

    axios.get("/api/v1/price").then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Multi-container deployment to AWS EB
          </a>
        </header>
      </div>
    );
  }
}

export default App;
