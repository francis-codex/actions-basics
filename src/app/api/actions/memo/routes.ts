import { ActionGetResponse } from "@solana/actions"

export const GET = (req: Request) => {

    const payload : ActionGetResponse = {
        icon: new URL("/sprintiq.jpg", new URL(req.url).origin).toString(),
        label: "Send Memo",
        description: "This is a simple solana actions that sends memo onchain.",
        title: "Memo Demo",
        type: "action"
    }


    return Response.json({})
}