
import './App.css';


import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Student from './components/Student'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import AddStud from './components/AddStud';
import Detail from './components/Detail';
import EditStud from './components/EditStud';
function App() {
  return (
    <Detail><div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = '/home' element = {<Home/>}/>
      <Route path = '/student' element = {<Student/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/AddStud' element = {<AddStud/>}/>
      <Route path = '/EditStud/:id' element = {<EditStud/>}/>

    </Routes>
    </BrowserRouter>
    
  </div></Detail>
    
  );
}

export default App;
