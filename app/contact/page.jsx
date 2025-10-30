"use client"
import { useForm } from "react-hook-form"
import useCustomHook from "../hook/CustomHook"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  BillingInfoStep,
  PersonalInfoStep,
  ProfessionalInfoStep
} from "@/components/contactform/Steps"
import ProgressSteps from "@/components/contactform/ProgressStep"



const MultiStepForm = () => {

      const {
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
      } = useCustomHook()

     const { 
      register,
      handleSubmit,
      formState:{ errors },
      trigger,
      setValue,
      reset,
     } =   useForm({
         resolver: zodResolver(getCurrentStepSchema()),
         mode:"onChange",
         defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          position: "",
          experience: "",
          industry: "",
          cardNumber: "",
          cardHolder: "",
          expiryDate: "",
          cvv: "",
           ...formData,
         }
     })

     useEffect(() => {
        reset(formData);
     },[formData, reset])



  const onNext = async (data) => {
    
    const isValid = await trigger();
    if (!isValid) return; 
    console.log(formData)
    const updatedData = { ...formData, ...data };
      updateFormData(updatedData);

    if (isLastStep) {
      
      try {
        submitForm(updatedData);
      } catch (error) {
        console.error("Submission failed:", error);
        
      }
    } else {
      
      goToNextStep();
    }
  };

  const onPrevious = () => goToPreviousStep();
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center  p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            {/* Success icon - green circle with checkmark */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-semibold mb-2">Success!</h2>
            <p className="text-gray-600 mb-6">Your form has been submitted.</p>

            {/* Allow user to submit another form */}
            <Button onClick={resetForm} className="w-full">
              Submit Another Form
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }














  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl" key={currentStep}>
        {/* Header: Progress Steps Indicator */}
        <CardHeader>
          <ProgressSteps currentStep={currentStep} steps={steps} />
        </CardHeader>

        <CardContent  className="space-y-6">
          {currentStep === 0 && (
            <PersonalInfoStep register={register} errors={errors} />
          )}
          {currentStep === 1 && (
            <ProfessionalInfoStep
              register={register}
              errors={errors}
              setValue={setValue} // Needed for Select component
            />
          )}
          {currentStep === 2 && (
            <BillingInfoStep register={register} errors={errors} />
          )}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onPrevious}
              disabled={isFirstStep}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <Button type="button" onClick={handleSubmit(onNext)}>
              {isLastStep ? "Submit" : "Next"}
              {!isLastStep && <ChevronRight className="w-4 h-4 ml-1" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MultiStepForm