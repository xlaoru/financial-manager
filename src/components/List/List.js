import './List.css'
import NoteItem from '../NoteItem/NoteItem'
import {useSelector} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';

const List = () => {
    const notes = useSelector(state => state.notes.notes)

    return (
        <div className="List">
            <Container>
                <Row>
                    {notes.length === 0 ? <h2>No Notes</h2> 
                    : notes.map(item => 
                        <Col key={item.date}>
                            <NoteItem
                                date={item.date}
                                title={item.title}
                                price={item.price}
                            />
                        </Col>
                    )}
                </Row>
            </Container>

        </div>
    );
};

export default List;