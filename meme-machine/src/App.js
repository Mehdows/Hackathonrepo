import logo from './logo.svg';
import InputForm from './components/Form.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputForm text='toptext'></InputForm>
        <InputForm text='bottomtext'></InputForm>
      </header>
    </div>
  );
}

export default App;
