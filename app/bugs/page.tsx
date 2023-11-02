import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

function Bugpage() {
  return (
    <div><Button><Link href="/bugs/new">Uusi bugi</Link></Button></div>
  )
}

export default Bugpage