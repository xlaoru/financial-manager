import './App.css';
import Form from '../Form/Form'
import List from '../List/List'
import ScrollToTop from "react-scroll-to-top"
import {useSelector} from 'react-redux';


function App() {
  const notes = useSelector(state => state.notes.notes)

  const totalAmount = () => {
    let summary = 0
    notes.map(note => summary += +note.price)
    return summary
  }

  totalAmount()

  return (
    <div className="App">
      <h2>Financial Manager</h2>
      <Form />
      <hr />
      <h2>Total Amount: {totalAmount()} &#8372;</h2>
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
