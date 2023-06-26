import { Navigate } from "../navigate"
import { UserList } from "../userList"
import './layout.scss'

export const  Layout=()=>{
return(
    <>
    <div className="container">
        <Navigate/>
        <UserList/>

    </div>
    </>
)
}