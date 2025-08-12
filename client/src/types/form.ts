export type FieldType = "text" | "number" | "email" | "textarea";

export interface Field {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
}

export interface FormData {
  title: string;
  fields: Field[];
}
