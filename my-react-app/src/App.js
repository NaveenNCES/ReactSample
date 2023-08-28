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
import Style from './components/Style.js';
import './components/appStyles.css'
import './components/appStyles.modules.css'
import FormSample from './components/FormSample';
import GetDataFromApi from './components/GetDataFromApi';

function App() {
  return (
    <div className="App">
      <h1 className='success'>Error</h1>
      <GetDataFromApi/>
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
      <Style />
      <FormSample />
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
