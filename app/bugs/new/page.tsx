"use client"
import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function NewBugPage() {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Otsikko' />
        </TextField.Root>
        <SimpleMDE placeholder='Kuvaus' />
        <Button>Lisää bugi</Button>
    </div>
  )
}
