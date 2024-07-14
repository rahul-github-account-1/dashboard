import { Link } from "react-router-dom"
import DashboardStatsGrid from "./DashboardStatsGrid"
import TransactionChart from "./TransactionChart"
import BuyerProfile from "./BuyerProfile"
export default function Dashboard() {
    return (
        <div> 
            <DashboardStatsGrid></DashboardStatsGrid>
            <div className="flex flex-row w-full gap-4">
            <TransactionChart></TransactionChart>
            <BuyerProfile></BuyerProfile>
            </div>
            
            <Link to='/products'>Go to Products</Link>
        </div>
    )
}