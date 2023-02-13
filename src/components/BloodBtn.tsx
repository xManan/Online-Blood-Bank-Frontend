import Button from 'react-bootstrap/Button'
import './BloodBtn.css'

export interface BloodBtnProps {
    'blood-grp': string,
    count: number,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

function BloodBtn(props: BloodBtnProps) {
    return (
        <Button value={props['blood-grp']} variant="danger" className="blood-btn" onClick={props.handleClick}>
            <h1>{props['blood-grp']}</h1>
            <p>{props.count}</p>
        </Button>
    )
}

export default BloodBtn
