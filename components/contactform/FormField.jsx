
import { Input } from "../ui/input";
import { Label } from "../ui/label";


function FormField({
  id,
  label,
  register,
  errors,
  type = "text",
  maxLength,
}) {
  return (
    <div className="space-y-2">
    
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} maxLength={maxLength} {...register(id)} />

      
      {errors[id] && (
        <p className="text-sm text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  );
}

export default FormField;