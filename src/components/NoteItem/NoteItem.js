import {Card} from 'react-bootstrap'
import './NoteItem.css'

import {useDispatch} from 'react-redux'
import {removeNote} from '../../store/NoteSlice'

const NoteItem = ({date, title, price}) => {
    const dispatch = useDispatch()
    return (
        <div className='NoteItem'>
            <Card>
                <Card.Body>
                    <Card.Title>
                        <p className='date'>{date}</p>{title}
                    </Card.Title>
                    <Card.Text>
                        {price} &#8372;
                    </Card.Text>
                    <div className='delete-button'>
                        <button onClick={() => dispatch(removeNote({date}))}>close</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NoteItem