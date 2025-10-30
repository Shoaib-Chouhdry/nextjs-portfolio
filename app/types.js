import {z} from "zod"

export const personalInfoSchema= z.object({
   firstName: z.string().min(1,"First name is required"),
   lastName: z.string().min(1,"Last name is required"),
   email:z.string().email("Invalid Email Address"),
   phone: z.string().min(10,"phonenumber is too short"),
});
export const professionalInfoSchema= z.object({
   company: z.string().min(1,"company is required"),
   position: z.string().min(1,"position is required"),
   experience:z.enum(["0-2","3-5","6-10","10+"]),
   industry: z.string().min(10,"industry is required"),
});
export const billingInfoSchema= z.object({
   cardNumber: z
       .string()
       .min(1,"cardnumber must be 16 digits")
       .max(16,"cardnumber must be 16 digits"),
   cardHolder: z.string().min(1,"cardholder is required"),
   expiryDate: z.string().min(4,"Invalid expiry date "),
   cvv: z.string().min(3,"Invalid cvv ").max(4),
});