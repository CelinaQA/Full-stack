import axios from 'axios';
import { useState } from 'react';
import { TASK_URL } from '../../resources/CONSTS.json';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpdateTask = ({ item, trigger }) => {

    const { description, isDone } = item;
    const [updateDescription, setDescription] = useState(description);
    const [updateIsDone, setIsDone] = useState(isDone);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const clearValues = () => {
        setDescription('');
    }

    const updateTask = () => {
        axios.patch(`${TASK_URL}/update/${item._id}`, { description, isDone })
            .then((res) => {
                clearValues();
                toggle();
                trigger(res.data);
            })
            .catch((err) => {
                trigger(err.data);
            })
    }

    return (
        <>
            <button className='btn btn-info' onClick={toggle}>Edit</button>
            <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                toggle={toggle}>
                <ModalHeader toggle={toggle}>Update your task</ModalHeader>
                <ModalBody>
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Insert task description..."
                            value={updateDescription}
                            onChange={({ target }) => setDescription(target.value)}
                        />
                        <input
                            type="checkbox"
                            className="form-control"
                            checked={updateIsDone}
                            onChange={({ target }) => setIsDone(target.value)}
                        />
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={updateTask}>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )

}

export default UpdateTask;