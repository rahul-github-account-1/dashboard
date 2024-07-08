import { Link } from "react-router-dom"
import DashboardStatsGrid from "./DashboardStatsGrid"
export default function Dashboard() {
    return (
        <div> 
            <DashboardStatsGrid></DashboardStatsGrid>
            <Link to='/products'>Go to Products</Link>
        </div>
    )
}