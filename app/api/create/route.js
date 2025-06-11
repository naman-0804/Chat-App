import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server';
const api_key = "n5kgyjq4t3at";
const api_secret = "q4j6kxh4rzgtxqaaa4d3mqa2dyvx7w3q642sfk4xwkwsddq95fsgxpkpyhdrdfxd";
export async function POST(request) {
    const server_client = StreamChat.getInstance(
        api_key,
        api_secret
    )
    const user = await request.json()
    const token = server_client.createToken(user.data.id) //user id taken dyanmaicaly
    console.log("A new user ", token)
    const client = await clerkClient()
    await server_client.upsertUser({
        id: user.data.id,
        role: 'admin'
    })
    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })
    //give access to this user chat for all
    const slugs = ["python-chat", "javascript-chat", "general-development-chat", "feedback"];
    slugs.forEach(async(item)=>{
        const channel = server_client.channel("messaging", item, {
            image: `https://getstream.io/random_png/?name=${item}`,
            name: `${item.toUpperCase()} Discussion`,
            created_by_id:user.data.id
        });
        await channel.create();
        await channel.addMembers([user.data.id]);
    })
    return Response.json({ token });
}