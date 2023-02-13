import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'

interface SelectStateProps {
    value: string
    setState: Function
}

function SelectState(props: SelectStateProps) {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        console.log("fd")
        setLoading(true)
        try{
            let response = await fetch("http://localhost:6969/api/states")
            if (response.status >= 200 && response.status <= 299) {
                let data = await response.json()
                setStates(data.states.map((state: { _id: any, state: string }) => state.state))
            }
            setLoading(false)
        } catch(e) {
            console.log("oops!")
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Form.Select disabled={loading} value={props.value} onChange={(e) => props.setState(e.target.value)}>
            <option value="">{loading ? 'loading' : 'Select State'}</option>
            {states.map((state, idx) => (
                <option key={'state' + idx}>{state}</option>
            ))}
        </Form.Select>
    )
}

export default SelectState
