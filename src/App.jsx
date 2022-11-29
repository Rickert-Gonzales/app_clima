import "./App.css";
//-> Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function App() {
   return (
      <div className="App">
         <p>Click on the Vite and React logos to learn more</p>
         <p>
            <FontAwesomeIcon icon={faCloud} />
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faBolt} />
         </p>
      </div>
   );
}

export default App;
