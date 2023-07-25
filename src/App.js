import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="App mx-auto" style={{ width: "800px" }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />}>  </Route>
          <Route path='/read' element={<Read />}>  </Route>
          <Route path='/update' element={<Update />}>  </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
