import './App.css';
import AppFooter from './components/app-footer/App-footer';
import AppHeader from './components/app-header/App-header';
import AppUrlInput from './components/app-url-input/App-url-input';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <AppUrlInput></AppUrlInput>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
