import ValidatePays from "./ValidatePays/ValidatePays"
import { Routes, Route } from "react-router-dom";
import cbMenu from "../callbacks/cbMenu";
import Profile from "./Profile/Profile";
import Transactions from "./Transactions/Transactions";

function Menu() {

    let menu = [
        { links: '/menu/validatepay', options: 'Validate Payments' },
        { links: '/menu/transactions', options: 'Make a transaction'},
        { links: '/menu/profile', options: 'Profile' }
    ]

    return (
        <div>
    <div>
        {menu.map(cbMenu)}
    </div>
            Menu
            <Routes>
                    <Route path='/validatepay' element={<ValidatePays/>} />
                    <Route path="/profile/*" element = {<Profile/>} />
                    <Route path="/transactions" element = {<Transactions/>} />
             </Routes>
        </div>
    )
}

export default Menu