import { Link } from "react-router-dom"
export default function Dashboard() {
    return (
        <div> 
            <div>Dashboard</div>
            <Link to='/products'>Go to Products</Link>
        </div>
    )
}