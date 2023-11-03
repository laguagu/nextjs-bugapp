"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface bugForm {
  title: string;
  description: string;
}

export default function NewBugPage() {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<bugForm>();
  const [error, setError] = useState("");

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/bugs", data);
            router.push("/bugs");
          } catch (error) {
            setError("Error occured");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Otsikko" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Kuvaus" {...field} />}
        />
        <Button>Lisää bugi</Button>
      </form>
    </div>
  );
}
