import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";
import z from "zod";
import { createBlogInput, CreateBlogInput,updateBlogInput } from "@jayesh02/medium-common";



export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL : string;
        JWT_SECRET : string;
    },
    Variables:{
        userId : string;
    }
}>()

blogRouter.use('/*', async (c,next)=>{
    const authHeader = c.req.header("Authorization") || "";
    const user = await verify(authHeader,c.env.JWT_SECRET)
    try{
        if(user){
            //@ts-ignore
            c.set("userId",user.id)
            await next()    
        }
        else{
            c.status(403)
            return c.json({
                message:"You are not logged in"
            })
        }
    }
    catch(e){
        c.status(403)
        return c.json({
            message:"You are not logged in"
        })
    }
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            error: "Input are not correct"
        })
    }
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,

    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: (authorId) ,
        }
    })

    return c.json({
        id:blog.id
    })
})

blogRouter.put('/', async(c) => {
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
            error: "Input are not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    
    const authorId = c.get("userId");
    const blog = await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id:blog.id
    })
})


// Todo : add pagination
blogRouter.get('/bulk', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    const blogs = await prisma.blog.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        blogs
    })
}) 

blogRouter.get('/:id',async (c) =>{
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,

    }).$extends(withAccelerate())

    try{
        const blog = await prisma.blog.findUnique({
            where:{
                id:id 
            },
            select:{
                id:true,
                title: true,
                content : true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(403)
        return c.json({
            error:"Error while fetching blog post"
        })
    }
})
  

