import Profil from './Profil';
import './App.css';
import profilovyObrazek from './image/IMG_8190.png'
import profilovyObrazek from './image/.png'



function App() {
  return(<>


 
 
    <Profil img={profilovyObrazek} vek={20} mesto={"Praha"} jmeno={"Jan"} prijmeni={"Novak"}/>
    <Profil img={profilovyObrazek2} vek={20} mesto={"Praha"} jmeno={"Jan"} prijmeni={"Novak"}/>
    </>);
  }   
  export default App;