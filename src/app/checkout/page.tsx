"use client"

import { Suspense } from "react"
import CheckoutInner from "./CheckoutInner"

export default function CheckoutPage() {
return (
<Suspense fallback={<div>Loading...</div>}> <CheckoutInner /> </Suspense>
)
}
