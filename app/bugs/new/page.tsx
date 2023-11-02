"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";


interface bugForm {
  title: string;
  description: string;
}

export default function NewBugPage() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<bugForm>();

  return (
    <form className="max-w-xl space-y-3" onSubmit={handleSubmit(async (data) => {
      await axios.post("/api/bugs", data)
      router.push("/bugs")
    })}>
      <TextField.Root>
        <TextField.Input placeholder="Otsikko" {...register("title")}/>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) =><SimpleMDE placeholder="Kuvaus" {...field}/>}
      />
      <Button>Lisää bugi</Button>
    </form>
  );
}
