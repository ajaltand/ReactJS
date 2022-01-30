import './App.css';
import Ticket from './Ticket.js';
import Status from './Status.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ticket title="Upload image"/>
        <Status status="Done"/>
      </header>
    </div>
  );
}

export default App;
