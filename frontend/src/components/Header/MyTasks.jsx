import CreateTask from "../Body/CreateTask"
import { useState } from 'react';

const MyTasks = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (

        <div className="row">
            <div className="col-md-3">
                <CreateTask trigger={trigger} />

            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>

                </div>
            </div>
        </div>
    )
}
export default MyTasks;