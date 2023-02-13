import Form from 'react-bootstrap/Form'
interface BloodGroupProps {
    value: string
    setBlood: Function
}
function BloodGroup(props: BloodGroupProps) {
    return (

        <Form.Select id="blood-grp" value={props.value} onChange={(e) => props.setBlood(e.target.value)}>
            <option value="">--Blood Group--</option>
            <option>A-</option>
            <option>A+</option>
            <option>B-</option>
            <option>B+</option>
            <option>AB-</option>
            <option>AB+</option>
            <option>O-</option>
            <option>O+</option>
        </Form.Select>
    )
}

export default BloodGroup
