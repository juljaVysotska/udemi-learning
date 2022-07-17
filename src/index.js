
import React from 'react';
import ReactDOM from 'react-dom/client';

import { SeasonDisplay } from './components/SeasonDisplay';
import { Spinner } from './components/Spinner';

class App extends React.Component {

    state = {
        lat: null,
        long: null,
        error: ''
    }; 

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude, long: position.coords.longitude })
            },
            (err) => {
                this.setState({error: err.message})
            }
        );
    }

    renderBody() {
        if(this.state.error && !this.state.lat) {
            return <div>Error: {this.state.error }</div>
        }

        if(!this.state.error && this.state.lat) {
            return <SeasonDisplay lat = { this.state.lat } />
        }

        return <Spinner message='Please accept location request' />;
    }

    render () {
        return (
            <div>
                {this.renderBody()}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
