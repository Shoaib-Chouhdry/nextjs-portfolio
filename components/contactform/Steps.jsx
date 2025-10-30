"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardTitle } from "@/components/ui/card";
import FormField from "./FormField";



function PersonalInfoStep({ register, errors }) {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Personal Information</CardTitle>

      {/* Two-column layout for first/last name */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="firstName"
          label="First Name"
          register={register}
          errors={errors}
        />
        <FormField
          id="lastName"
          label="Last Name"
          register={register}
          errors={errors}
        />
      </div>

      {/* Full-width fields */}
      <FormField
        id="email"
        label="Email Address"
        register={register}
        errors={errors}
        type="email"
      />
      <FormField
        id="phone"
        label="Phone Number"
        register={register}
        errors={errors}
        type="tel"
      />
    </div>
  );
}


function ProfessionalInfoStep({ register, errors, setValue }) {
  // Local state for Select component (controlled component pattern)
  const [experience, setExperience] = useState("");

  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Professional Details</CardTitle>

      <FormField
        id="company"
        label="Company"
        register={register}
        errors={errors}
      />
      <FormField
        id="position"
        label="Position"
        register={register}
        errors={errors}
      />

      
      <div className="space-y-2">
        <Label htmlFor="experience">Years of Experience</Label>
        <Select
          onValueChange={(value) => {
            // Update React Hook Form state (for validation)
            setValue?.(
              "experience",
              value,
              { shouldValidate: true } // Trigger validation immediately
            );
            // Update local state (for UI display)
            setExperience(value);
          }}
          value={experience}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select experience" />
          </SelectTrigger>
          <SelectContent className="bg-accent text-black">
            <SelectItem value="0-2">0-2 years</SelectItem>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="6-10">6-10 years</SelectItem>
            <SelectItem value="10+">10+ years</SelectItem>
          </SelectContent>
        </Select>
        {/* Display validation error if exists */}
        {errors.experience && (
          <p className="text-sm text-red-500">
            {errors.experience.message}
          </p>
        )}
      </div>

      <FormField
        id="industry"
        label="Industry"
        register={register}
        errors={errors}
      />
    </div>
  );
}


function BillingInfoStep({ register, errors }) {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Billing Information</CardTitle>

      <FormField
        id="cardNumber"
        label="Card Number"
        register={register}
        errors={errors}
        maxLength={16}
      />
      <FormField
        id="cardHolder"
        label="Cardholder Name"
        register={register}
        errors={errors}
      />

      {/* Two-column layout for expiry and CVV */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="expiryDate"
          label="Expiry Date"
          register={register}
          errors={errors}
          maxLength={5}
        />
        <FormField
          id="cvv"
          label="CVV"
          register={register}
          errors={errors}
          maxLength={4}
        />
      </div>
    </div>
  );
}

export { PersonalInfoStep, ProfessionalInfoStep, BillingInfoStep };