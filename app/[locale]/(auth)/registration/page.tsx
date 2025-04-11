"use client";

import { useState } from "react";
import RegistrationForm1 from "@/components/ui/auth/RegistrationForm1";
import RegistrationForm2 from "@/components/ui/auth/RegistrationForm2";
import RegistrationForm3 from "@/components/ui/auth/RegistrationForm3";
import RegistrationForm4 from "@/components/ui/auth/RegistrationForm4";

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  const goNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      {step === 1 && <RegistrationForm1 onNext={goNext} />}
      {step === 2 && <RegistrationForm2 onNext={goNext} onBack={goBack} />}
      {step === 3 && <RegistrationForm3 onNext={goNext} onBack={goBack} />}
      {step === 4 && <RegistrationForm4 />}
    </>
  );
}
