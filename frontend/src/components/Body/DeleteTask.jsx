import axios from 'axios';
import { TASK_URL } from '../../resources/CONSTS.json';
import { Button } from 'reactstrap';

const DeleteTask = ({ itemId, trigger }) => {

    const deleteTask = () => {
        axios.delete(`${TASK_URL}/delete/${itemId}`)
            .then((res) => {
                trigger("Successfully Deleted!")
            })
            .catch((err) => {
                trigger("Error Removing Object");
            })
    }

    return (
        <Button color="danger" onClick={deleteTask}>X</Button>
    )

}

export default DeleteTask;