import { useState } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios';
import { TASK_URL } from '../../resources/CONSTS.json';

const CreateTask = ({ trigger }) => {

    const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState(false);

    const clearValues = () => {
        setDescription('');
    }

    const create = (e) => {
        e.preventDefault();
        axios.post(`${TASK_URL}/create`, { description, isDone })
            .then((res) => {
                clearValues();
                trigger(res.data);
            }).catch((err) => {
                trigger(err.data);
            })
    }

    return (
        <>
            <Card>
                <CardHeader>Create a task</CardHeader>
                <CardBody>
                    <form onSubmit={create}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Insert task description..."
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                        />
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </form>

                </CardBody>

            </Card>
        </>
    )
}

export default CreateTask;