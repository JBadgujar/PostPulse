import { Appbar } from "../components/Appbar"
import { BlogsCard } from "../components/BlogsCard"
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const {loading,blogs}  = useBlogs() 
    if(loading){
        return <div>
            loading....
        </div>
    }
    
    return(
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="">
                    {blogs.map((blog) => <BlogsCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous"} 
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"2nd August 2024"} 
                    />)}
                </div>
            </div>
        </div>
    )
    
}

