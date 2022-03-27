import './App-url-input.css'
import React from 'react';
import { isHttpsUri } from 'valid-url';

const API_URL = "https://eps-dev.net"

class AppUrlInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', shortenedUrl: '', error: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.value || !isHttpsUri(this.state.value)) {
            this.setState({ error: 'Not a valid HTTPS url.' })

            return;
        }

        this.setState({ shortenedUrl: '', error: '' })

        fetch(
            `${API_URL}/add`,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: this.state.value
                })
            }
        ).then((response) => {
            response.json().then(responseJson => {
                this.setState({ shortenedUrl: responseJson.url, value: '' })
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Shorten URL" />
                </form>
                <p className="error">{this.state.error}</p>
                <a className='App-link'
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.state.shortenedUrl}>{this.state.shortenedUrl}
                </a>
            </div>
        );
    }
}

export default AppUrlInput;
