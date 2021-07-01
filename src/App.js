import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: null,
    };
  }

  componentDidMount() {
    fetch('api/group')
      .then((res) => res.json())
      .then((data) => this.setState({ appName: data.appName }));
  }

  render() {
    const { appName } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {appName ? `Hello ${appName}` : 'Hello World'}
        </header>
      </div>
    );
  }
}

export default App;
