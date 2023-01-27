import './RoundedBtn.css'

export interface RoundedBtnProps {
    title: string;
    icon: string;
    color: string;
}

function RoundedBtn(props: RoundedBtnProps) {
    return (
        <button className="rounded-btn">
            <img src={props.icon} />
            <br />
            <p>{props.title}</p>
        </button>
    )
}

export default RoundedBtn
