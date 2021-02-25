import axios from 'axios';
import { useEffect, useState } from 'react';
import { TASK_URL } from '../../resources/CONSTS.json';
import IndividualTask from './IndividualTask';

const ReadTasks = ({ msg, trigger }) => {

    const [taskList, setTaskList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${TASK_URL}/getAll`)
            .then((res) => {
                setIsLoaded(true);
                setTaskList(res.data);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err.message);
            })
    }, [msg]);

    if (error) {
        return <p>{error}</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="row">
                {taskList.map((item) => (
                    <div className="col-md-6">
                        <IndividualTask key={item._id} item={item} trigger={trigger} />
                    </div>
                ))}
            </div>
        )
    }

}

export default ReadTasks;