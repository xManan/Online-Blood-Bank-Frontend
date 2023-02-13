import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'

interface NotificationProps {
    show: boolean
    setShow: Function
    status: string
    message: string
    variant: string
}

function Notification(props: NotificationProps) {
    return (
        <ToastContainer className="position-fixed mt-4" position="top-center">
            <Toast 
                className="text-white" 
                bg={props.variant} 
                show={props.show} 
                onClose={() => props.setShow(false)} 
                delay={3000} autohide 
            >
                <Toast.Header>
                    {props.status}
                </Toast.Header>
                <Toast.Body>
                    {props.message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default Notification
