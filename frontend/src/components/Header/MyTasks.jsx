import CreateTask from "../Body/CreateTask"
import { useState } from 'react';
import ReadTasks from "../Body/ReadTasks";

const MyTasks = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
        setTimeout(() => { setMsg('') }, 2000)
    }

    return (

        <div className="row">
            <div className="col-md-3">
                <CreateTask trigger={trigger} />

            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>
                    <ReadTasks msg={msg} trigger={trigger} />
                </div>
            </div>
        </div>
    )
}
export default MyTasks;