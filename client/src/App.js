import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import ProgressBar from './components/ProgressBar'; // New import

function App() {
  return (
    <div className="app-container">
      <div className="left-section">
        <Header />
        <TodoForm />
        <Todos />
      </div>
      <div className="right-section">
        <ProgressBar />
      </div>
    </div>
  );
}

export default App;
