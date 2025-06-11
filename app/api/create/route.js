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
    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })
    return Response.json({ message: 'Hello World' })
}