import './App.css';
import AppFooter from './components/app-footer/App-footer';
import AppHeader from './components/app-header/App-header';
import AppUrlInput from './components/app-url-input/App-url-input';
import AppVersion from './components/app-version/App-version';

function App() {
    return (
        <div>
            <div className="App">
                <AppHeader></AppHeader>
                <AppUrlInput></AppUrlInput>
                <AppFooter></AppFooter>
            </div>
            <AppVersion></AppVersion>
        </div>
    );
}

export default App;
