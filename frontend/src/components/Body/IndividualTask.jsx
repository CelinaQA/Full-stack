import { Card, CardText } from 'reactstrap';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';

const IndividualTask = ({ item, trigger }) => {

    return (
        <>
            <Card body>
                <CardText>{item.description}</CardText>
                <DeleteTask itemId={item._id} trigger={trigger} />
                <UpdateTask item={item} trigger={trigger} />
            </Card>
        </>
    )

}

export default IndividualTask;