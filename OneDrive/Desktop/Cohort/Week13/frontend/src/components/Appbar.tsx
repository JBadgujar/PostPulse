import { Link } from "react-router-dom"
import { Avatar } from "./BlogsCard"


export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={"/blogs"}>
            <div className="flex flex-col justiy-center font-bold text-2xl">Medium</div>
        </Link>
        <div>
            <Avatar authorName="Jayesh" size={"big"} />
        </div>
    </div>
}