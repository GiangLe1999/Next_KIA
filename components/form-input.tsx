"use client";

import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";

interface Props {
  id: string;
  type?: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  errorMsg: string | undefined;
}

const FormInput: FC<Props> = ({
  type,
  id,
  label,
  register,
  errorMsg,
}): JSX.Element => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-xs uppercase font-bold">
        {label}
      </label>
      <input
        id={id}
        type={type || "text"}
        {...register}
        className="w-full outline-none border bg-[#f5f5f5] rounded-sm py-[10px] px-4"
      />
      {errorMsg && (
        <p className="text-xs text-red-700 mt-1 flex items-center gap-[2px]">
          <AiOutlineWarning />
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default FormInput;
