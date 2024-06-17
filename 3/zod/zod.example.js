const zod=require('zod');

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})

const ans=schema.safeParse({
    email:"xyz@AbortController.com",
    password:"passworld"})

 console.log(ans);