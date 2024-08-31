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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi sit illum molestiae autem perferendis labore nulla, officia dolorum expedita perspiciatis unde dolores? Eius minus earum aperiam odit exercitationem officia.
                        Nulla error dolores dolorum rerum quasi repellendus laudantium quis alias corrupti quo tenetur veniam ea, molestias tempora quas delectus ab ad illum. Porro nobis esse eveniet consequatur libero beatae recusandae?
                        Praesentium ab voluptate minima totam? Cum, nemo libero amet eveniet molestias magni. Minima nesciunt voluptatum totam nisi ratione accusamus asperiores minus doloribus repudiandae nemo quisquam ipsa animi assumenda, facilis in?
                        Exercitationem officia dicta delectus harum explicabo recusandae nihil, optio dignissimos reiciendis amet velit voluptas alias quo. Debitis beatae accusamus laudantium esse commodi cupiditate eum, magnam quam magni, incidunt eos praesentium.
                        Quis laudantium excepturi blanditiis eveniet nihil aperiam ab perferendis enim alias repellat. Doloremque tempora velit cumque suscipit! Rerum sit nostrum optio vitae! Nemo, tempore officia? Nulla numquam tempora ut itaque?
                        Voluptatum nulla maiores totam necessitatibus impedit suscipit dolorum harum inventore sit quasi, laboriosam minima optio perferendis. Atque facere, ab expedita est dolorum reprehenderit suscipit voluptate, deserunt, quia adipisci veniam similique?
                        Ratione delectus facere sint nostrum? Minus quos tenetur eveniet temporibus pariatur architecto vitae aliquid voluptatibus expedita fugit ipsa odit, ut ducimus error nostrum, est possimus ex, incidunt molestiae distinctio id.
                        Nesciunt debitis praesentium nulla labore numquam corporis natus vel, mollitia dolores distinctio quo quod odio, fugit nihil doloribus iusto voluptas officiis ex unde? Enim nemo provident repellendus perspiciatis hic omnis.
                        Maxime explicabo magnam alias dolorem saepe dignissimos distinctio consectetur debitis fugit asperiores nemo, unde reiciendis quos blanditiis odio possimus natus esse sapiente accusantium facilis dolorum pariatur reprehenderit ullam suscipit. Quibusdam!
                        Ducimus, et rerum, aperiam vel consequuntur rem temporibus maxime doloribus, ratione porro earum. Ipsum qui adipisci ad sequi, distinctio ipsa dignissimos? Praesentium reprehenderit nostrum reiciendis amet recusandae quidem numquam officiis!
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