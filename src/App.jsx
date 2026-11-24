import './App.css';

function App() {
  const donors = [
    { id: 1, name:"Ravi",group:"O+" ,contact:654664},
    { id: 2, name:"Vasu",group:"O-",contact:5446266}
    
  ];

  return (
    <div>
      <h1>Blood Management System</h1>
      {donors.map(d => (
        <div key={d.id}>
          <h3>{d.name}</h3>
          <p>Group: {d.group}</p>
          <p>Contact: {d.contact}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;