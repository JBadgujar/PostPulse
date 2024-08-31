import { Link } from "react-router-dom"

interface BlogsCardProps{
    id : string;
    authorName: string,
    title: string,
    content: string,
    publishedDate : string
}

export const BlogsCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogsCardProps) =>{
    return <Link to={`/blog/${id}`}> 
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex pt-2">
            <div className="flex justify-center flex-col">
                <Avatar authorName={authorName} size={"small"}/>
            </div>
            <div className="pl-2 font-light"> 
                {authorName} 
            </div> 
            <div className="pl-2 flex justify-center flex-col">
                <Circle />
            </div>
            <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col text-sm">
                {publishedDate}
            </div>
        </div>
        <div className="text-xl font-bold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+'...'}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s)`}
        </div>
        
    </div>
    </Link>
}

function Circle(){
    return <div className="w-1 h-1 rounded-full bg-slate-400">
    </div>
}

export function Avatar({authorName,size}:{authorName:string,size:string}){
    return <div className={`relative inline-flex items-center justify-center w-${size=="big"?10:5} h-${size=="big"?10:5} overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}>
        <span className="font-sm text-gray-800 dark:text-gray-300">{authorName[0].toUpperCase()}</span>
    </div>
    
}