import * as React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/Atoms/Input";
import { Button } from "@/components/Atoms/Button";

interface IFormInput {
  email: string;
}

const ExampleForm: React.FC = () => {
  const methods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-8 rounded shadow-md"
      >
        <FormField
          name="email"
          control={methods.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Digite seu e-mail" />
              </FormControl>
              <FormDescription>Digite um e-mail válido.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default ExampleForm;
