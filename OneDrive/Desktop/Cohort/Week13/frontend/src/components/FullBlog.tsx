import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogsCard"

export const FullBlog = ({blog} : {blog: Blog|undefined }) =>{
    return( <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                <div className="col-span-8 px-10">
                    <div className="text-5xl font-bold">
                        {blog?.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd August
                    </div>
                    <div className="pt-4"> 
                        {blog?.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="font-semibold text-2xl text-slate-500">Author</div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar authorName={blog?.author.name || "Anonymous"} size={"big"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog?.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero suscipit officiis nulla, neque impedit illum veritatis placeat illo, veniam est ratione reiciendis, ullam asperiores cum magni. Quod, consequatur est.
                            </div>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </div>
    </div>
        
    )
}