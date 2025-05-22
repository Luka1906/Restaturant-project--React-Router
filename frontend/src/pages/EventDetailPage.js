import {useParams} from "react-router-dom"
export default function EventDetailPage () {
    const params = useParams();
    console.log(params)
    return <div>{params.eventId}</div>
}