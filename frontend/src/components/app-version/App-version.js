import './App-version.css'
import React from 'react';

const API_URL = "https://eps-dev.net"

class AppVersion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { version: '' };
    }

    componentDidMount() {
        fetch(`${API_URL}/stats`).then((result) => result.json().then((responseJson) => {
            this.setState({ version: responseJson.version })
        }))
    }

    render() {
        return (
            <p className="version">v{this.state.version}</p>
        );
    }
}

export default AppVersion;
