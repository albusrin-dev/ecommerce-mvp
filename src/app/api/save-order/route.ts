// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
//       method: "POST",
//       body: JSON.stringify(body),
//     })

//     const data = await response.json()

//     return Response.json(data)
//   } catch (error) {
//     console.error(error)
//     return new Response("Error saving order", { status: 500 })
//   }
// }