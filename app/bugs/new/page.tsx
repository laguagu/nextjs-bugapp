"use client"
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

export default function NewBugPage() {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Otsikko' />
        </TextField.Root>
        <TextArea placeholder='Kuvaus' />
        <Button>Lisää bugi</Button>
    </div>
  )
}
