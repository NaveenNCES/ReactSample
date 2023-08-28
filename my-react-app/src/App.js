import logo from './logo.svg';
import './App.css';
import SampleFunction from './components/Sample';
import Welcome from './components/ClassComponent';
import JSXSample from './components/JSXSample';
import PropsSampleConst from './components/Sample';
import Message from './components/StateSample';
import RCESample from './components/RCESample';
import EventHandlerFunction from './components/EventHandlerFunction';
import ClassEventHandler from './components/ClassEventHandler';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <SampleFunction />
      <Welcome />
      <JSXSample />
      <PropsSampleConst name='Naveen'><p> This is a children props </p></PropsSampleConst>
      <PropsSampleConst name='Mugunthan'>
        <button>SampleButton</button>
      </PropsSampleConst>
      <PropsSampleConst name='Ram' />
      <Message />
      <RCESample />
      <EventHandlerFunction />
      <ClassEventHandler />
      <EventBind />
      <ParentComponent />
      <ConditionalRendering />
      <NameList />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Naveen</code> and save to reload.
        </p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
