import './App.css';

function App() {
  const testArray = ["First","Second","Third","Fourth"]

  return (
    <div className="App">
      <div>Hello, Test</div>
      <div className="test-div">
        {testArray.map((item) => (
          <div>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
