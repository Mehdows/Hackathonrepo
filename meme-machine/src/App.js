import logo from './logo.svg';
import InputForm from './components/Form.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Meme Machine</h1>
        <InputForm text='toptext'></InputForm>
        <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />

        <InputForm text='bottomtext'></InputForm>
      </header>
    </div>
  );
}

export default App;
