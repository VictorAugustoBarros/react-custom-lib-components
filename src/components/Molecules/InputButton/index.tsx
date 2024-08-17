import React from "react";
import { Input, InputProps } from "@/components/Atoms/Input";
import { Button } from "@/components/Atoms/Button/";

interface InputWithButtonProps {
  inputType: InputProps["type"];
  inputPlaceholder: string;
  buttonText: string;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  inputType,
  inputPlaceholder,
  buttonText,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Input type={inputType} placeholder={inputPlaceholder} />
      <Button>{buttonText}</Button>
    </div>
  );
};

export { InputWithButton };
