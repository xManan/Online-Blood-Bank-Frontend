import Button from 'react-bootstrap/Button'
import './BloodBtn.css'

export interface BloodBtnProps {
    'blood-grp': string,
    'count': number,
}

function BloodBtn(props: BloodBtnProps) {
    return (
        <Button variant="danger" className="blood-btn">
            <h1>{props['blood-grp']}</h1>
            <p>{props.count}</p>
        </Button>
    )
}

export default BloodBtn
