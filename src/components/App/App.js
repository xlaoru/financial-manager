import './App.css';
import Form from '../Form/Form'
import List from '../List/List'
import ScrollToTop from "react-scroll-to-top"

function App() {
  return (
    <div className="App">
      <h2>Financial Manager</h2>
      <Form />
      <hr />
      <List />
      <ScrollToTop 
        smooth
        viewBox="0 0 32 32"
        svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"  
      />
    </div>
  );
}

export default App;
