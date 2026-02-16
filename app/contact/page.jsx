// "use client"
// import { useForm } from "react-hook-form"
// import useCustomHook from "../hook/CustomHook"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useEffect, useMemo } from "react"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { Check, ChevronLeft, ChevronRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { 
//   BillingInfoStep,
//   PersonalInfoStep,
//   ProfessionalInfoStep
// } from "@/components/contactform/Steps"
// import ProgressSteps from "@/components/contactform/ProgressStep"



// const MultiStepForm = () => {

//       const {
//        currentStep,
//        formData,
//        isFirstStep,
//        isLastStep,
//        isSubmitted,
//        steps,
//        goToNextStep,
//        goToPreviousStep,
//        updateFormData,
//        submitForm,
//        resetForm,
//        getCurrentStepSchema,
//       } = useCustomHook()
     
//     // const schema = getCurrentStepSchema();
//     // console.log("Schema fields:", Object.keys(getCurrentStepSchema().shape));
//     const currentSchema = useMemo(() => getCurrentStepSchema(), [currentStep]);
//      const { 
//       register,
//       handleSubmit,
//       formState:{ errors },
//       trigger,
//       setValue,
//       watch,
//       reset,
//      } =   useForm({
//            resolver: zodResolver(currentSchema),
//            mode:"onChange",
//          defaultValues: {
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           company: "",
//           position: "",
//           experience: "",
//           industry: "",
//           cardNumber: "",
//           cardHolder: "",
//           expiryDate: "",
//           cvv: "",
//            ...formData,
//          }
//      })
     
//     //  useEffect(() => {

//     //     reset(formData);
//     //  },[currentStep, reset])

// useEffect(() => {
//   console.log("🔍 Current Step:", currentStep);
//   console.log("🧾 Watched values:", watch());
//   console.log("❗ Current Errors:", errors);
//   console.log("📜 Active schema fields:", Object.keys(currentSchema.shape));
// }, [currentStep, watch(), errors]);

//   const onNext = async (data) => {
//     console.log("data",data)
//     const isValid = await trigger();
//     if (!isValid) return; 
    
//     const updatedData = { ...formData, ...data };
//       updateFormData(updatedData);

//     if (isLastStep) {
      
//       try {
//         submitForm(updatedData);
//       } catch (error) {
//         console.error("Submission failed:", error);
        
//       }
//     } else {
      
//       goToNextStep();
//     }

//    reset({
//         ...updatedData,
//         // keep defaults if some fields are missing
//         // firstName: updatedData.firstName || "",
//         // lastName: updatedData.lastName || "",
//         // email: updatedData.email || "",
//         // phone: updatedData.phone || "",
//         // company: updatedData.company || "",
//         // position: updatedData.position || "",
//         // experience: updatedData.experience || "",
//         // industry: updatedData.industry || "",
//         // cardNumber: updatedData.cardNumber || "",
//         // cardHolder: updatedData.cardHolder || "",
//         // expiryDate: updatedData.expiryDate || "",
//         // cvv: updatedData.cvv || "",
//     });



//   };

//   const onPrevious = () => goToPreviousStep();
//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center  p-4">
//         <Card className="w-full max-w-md text-center">
//           <CardContent className="pt-6">
//             {/* Success icon - green circle with checkmark */}
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Check className="w-8 h-8 text-green-600" />
//             </div>

//             <h2 className="text-2xl font-semibold mb-2">Success!</h2>
//             <p className="text-gray-600 mb-6">Your form has been submitted.</p>

//             {/* Allow user to submit another form */}
//             <Button onClick={resetForm} className="w-full">
//               Submit Another Form
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }














//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <Card className="w-full max-w-2xl">
//         {/* Header: Progress Steps Indicator */}
//         <CardHeader>
//           <ProgressSteps currentStep={currentStep} steps={steps} />
//         </CardHeader>

//         <CardContent  className="space-y-6">
//           {currentStep === 0 && (
//             <PersonalInfoStep register={register} errors={errors} />
//           )}
//           {currentStep === 1 && (
//             <ProfessionalInfoStep
//               register={register}
//               errors={errors}
//               setValue={setValue} // Needed for Select component
//             />
//           )}
//           {currentStep === 2 && (
//             <BillingInfoStep register={register} errors={errors} />
//           )}
//           <div className="flex justify-between pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={onPrevious}
//               disabled={isFirstStep}
//             >
//               <ChevronLeft className="w-4 h-4 mr-1" />
//               Previous
//             </Button>

//             <Button type="button" onClick={handleSubmit(onNext)}>
//               {isLastStep ? "Submit" : "Next"}
//               {!isLastStep && <ChevronRight className="w-4 h-4 ml-1" />}
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default MultiStepForm

"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <footer
      id="contact"
      className="relative py-20 px-6 border-t border-white/10"
    >
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Let’s <span className="text-accent">Connect</span>
        </motion.h2>

        {/* Contact Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Email */}
          <a
            href="mailto:mashraf.shoaib@gmail.com"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-accent transition"
          >
            <FiMail className="text-2xl group-hover:scale-110 transition" />
            <span className="text-sm">mashraf.shoaib@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+923000000000"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-accent transition"
          >
            <FiPhone className="text-2xl group-hover:scale-110 transition" />
            <span className="text-sm">+92 303 6446852</span>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-2 text-white/70">
            <FiMapPin className="text-2xl" />
            <span className="text-sm">Pakistan</span>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/Shoaib-Chouhdry"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-accent transition"
          >
            <FiGithub className="text-2xl group-hover:scale-110 transition" />
            <span className="text-sm">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-shoaib-b92433248"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-accent transition"
          >
            <FaLinkedinIn className="text-2xl group-hover:scale-110 transition" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-16 text-white/40 text-sm">
          © {new Date().getFullYear()} Shoaib Ashraf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
