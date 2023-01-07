import {useDispatch} from 'react-redux';
import {addNote} from '../../store/NoteSlice'

import './Form.css'

const Form = () => {
    const dispatch = useDispatch()

    function getData(event) {
        event.preventDefault()
        let data = event.target.elements
        if (data.date.value !== '' && data.title.value !== '' && data.price.value !== '') {
            dispatch(addNote({date: data.date.value, title: data.title.value, price: data.price.value}))
            data.date.value = ''
            data.title.value = ''
            data.price.value = ''
        } else {
            alert('Fill all inputs')
        }
    }

    return (
        <div className="Form" onSubmit={getData}>
            <form>
                <input type="text" name="date" placeholder='type date...' />
                <input type="text" name="title" placeholder="type title..." />
                <input type="number" name="price" placeholder="type price..." />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;