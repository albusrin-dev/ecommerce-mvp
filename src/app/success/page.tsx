"use client"

import { Suspense } from "react"
import SuccessInner from "./SuccessInner"

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessInner />
    </Suspense>
  )
}