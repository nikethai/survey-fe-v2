import { zodResolver } from "@hookform/resolvers/zod";
import { Form as RemixForm } from "@remix-run/react";
import { useEffect } from "react";
import {
  FieldValues,
  UseFormProps,
} from "react-hook-form";
import { useRemixForm } from "remix-hook-form";
import type { Schema } from "zod";

type ServerErrors<T> = {
  [Property in keyof T]: string;
};

type FormProps<TFormValues extends FieldValues> = {
  onMethodInit?: (
    methods: ReturnType<typeof useRemixForm<TFormValues>>
  ) => void;
  children: (
    methods: ReturnType<typeof useRemixForm<TFormValues>>
  ) => React.ReactNode;
  useFormProps?: UseFormProps<TFormValues>;
  validationSchema?: Schema<TFormValues>;
  fieldErrors?: any[] | null;
  formError?: string | string[] | null | any;
  serverError?: ServerErrors<Partial<TFormValues>> | null;
  resetValues?: any | null;
  className?: string;
  id?: string;
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>,
>({
  onMethodInit,
  children,
  useFormProps,
  validationSchema,
  resetValues,
  className,
  id,
  ...formProps
}: FormProps<TFormValues>) => {
  const methods = useRemixForm<TFormValues>({
    ...useFormProps,
    ...(validationSchema && { resolver: zodResolver(validationSchema) }),
  });

  useEffect(() => {
    if (onMethodInit) {
      onMethodInit(methods);
    }
  }, [onMethodInit, methods]);

  useEffect(() => {
    if (resetValues) {
      methods.reset(resetValues);
    }
  }, [resetValues, methods]);

  return (
    <RemixForm
      noValidate
      id={id}
      onSubmit={() => methods.handleSubmit()}
      {...formProps}
      className={className}
    >
      {children(methods)}
    </RemixForm>
  );
};
