import logo from './logo.svg';
import './App.css';
import AddEmployee from './component/AddEmployee';
import SearchEmployee from './component/SearchEmployee';
import EmployeeNavbar from './component/EmployeeNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AttendanceEmployee from './component/AttendanceEmployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>

<Route path='/' element={<AddEmployee/>} />
<Route path='/search' element={<SearchEmployee/>} />
<Route path='/att' element={<AttendanceEmployee/>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
