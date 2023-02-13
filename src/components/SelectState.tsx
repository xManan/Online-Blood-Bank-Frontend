import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'

interface SelectStateProps {
    value: string
    setState: Function
}

function SelectState(props: SelectStateProps) {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        return fetch("http://localhost:6969/api/states")
            .then((response) => response.json())
            .then((data) => { 
                setStates(data.states.map((state: { _id: any, state: string }) => state.state)) 
                setLoading(false)
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Form.Select disabled={loading} value={props.value} onChange={(e) => props.setState(e.target.value)}>
            <option value="">{loading ? 'loading' : 'Select State'}</option>
            {states.map((state,idx) => (
                <option key={'state'+idx}>{state}</option>
            ))}
        </Form.Select>
    )
}

export default SelectState
