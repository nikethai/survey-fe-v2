import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunctionArgs, json, MetaFunction } from "@remix-run/node";
import { getValidatedFormData } from "remix-hook-form";
import { z } from "zod";

import { Form } from "~/templates/form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
});

type FormData = z.infer<typeof schema>;

const resolver = zodResolver(schema);
export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<FormData>(request, resolver);
  if (errors) {
    // The keys "errors" and "defaultValue" are picked up automatically by useRemixForm
    return json({ errors, defaultValues });
  }

  console.log(data);

  // Do something with the data
  return json(data);
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Form<FormData>>
        {({ register, formState: { errors } }) => (
          <>
            <label>
              Name:
              <input {...register("name")} />
              {errors.name && <p>{errors.name.message}</p>}
            </label>
            <label>
              Email:
              <input {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}
            </label>
            <button type="submit">Submit</button>
          </>
        )}
      </Form>
    </div>
  );
}
