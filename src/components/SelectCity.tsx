import {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'

interface SelectCityProps {
    value: string
    state: string
    setCity: Function
}

function SelectCity(props: SelectCityProps) {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        if(!props.state.length){
            setLoading(false)
            return
        }
        fetch(`${import.meta.env.VITE_API_BASE_URL}/cities/${props.state}`)
            .then((response) => response.json())
            .then((data) => { 
                setCities(data.cities) 
                setLoading(false)
            });
    }
    useEffect(() => {
        setLoading(true)
        fetchData();
    }, [props.state])

    return (
        <Form.Select disabled={loading || !cities.length} value={props.value} onChange={(e) => props.setCity(e.target.value)}>
            <option value="">{loading ? 'loading' : 'Select District'}</option>
            {cities.map((city,idx) => (
                <option key={'city'+idx}>{city}</option>
            ))}
        </Form.Select>
    )
}

export default SelectCity
