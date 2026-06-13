export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, price } = body

    const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(process.env.PAYMONGO_SECRET_KEY + ":").toString("base64"),
      },
      body: JSON.stringify({
        data: {
          attributes: {
            billing: {
              name: "Customer",
              email: "customer@email.com",
            },
            send_email_receipt: true,
            show_description: true,
            show_line_items: true,
            line_items: [
              {
                currency: "PHP",
                amount: Number(price) * 100,
                description: name,
                name: name,
                quantity: 1,
              },
            ],
            payment_method_types: ["gcash", "card"],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
          },
        },
      }),
    })

    const data = await response.json()

    return Response.json({
      checkout_url: data.data.attributes.checkout_url,
    })
  } catch (error) {
    console.error(error)
    return new Response("Error creating payment", { status: 500 })
  }
}