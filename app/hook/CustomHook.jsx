"use client"
import { Briefcase, CreditCard, User } from "lucide-react"
import { personalInfoSchema } from "../types"
import { billingInfoSchema } from "../types"
import { professionalInfoSchema } from "../types"
import { useState } from "react";


const stepSchemas = [
    personalInfoSchema,
    professionalInfoSchema,
    billingInfoSchema,
];
export const steps = [
    { id: "personal" , name: "personal info",icon: User },
    { id: "professional" , name: "professional info",icon: Briefcase },
    { id: "billing" , name: "billing info",icon: CreditCard }
]

export function useCustomHook() {
    const [currentStep,setCurrentStep] = useState(0);
    const [formData,setFormData] = useState({})
    const [isSubmitted,setIsSubmitted] = useState(false);

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;
    const getCurrentStepSchema = () => stepSchemas[currentStep];

    const goToNextStep = () => {
      if (!isLastStep) setCurrentStep((prev) => prev + 1);
    };
  
    const goToPreviousStep = () => {
      if (!isFirstStep) setCurrentStep((prev) => prev - 1);
    };

    const updateFormData = (newData) => {
          setFormData((prev) => ({ ...prev, ...newData }));
    };
    const submitForm = (data) => {   
          console.log("final submitted data",data)   
          setIsSubmitted(true);

    };
    const resetForm = () => {
         setFormData({});
         setCurrentStep(0);
         setIsSubmitted(false);
    };

  return (
    {
       currentStep,
       formData,
       isFirstStep,
       isLastStep,
       isSubmitted,
       steps,
       goToNextStep,
       goToPreviousStep,
       updateFormData,
       submitForm,
       resetForm,
       getCurrentStepSchema,
    }
  )
}

export default useCustomHook