"use client";

import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";

interface Props {
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  errorMsg?: string | undefined;
  options: string[];
}

const FormSelect: FC<Props> = ({
  id,
  label,
  register,
  errorMsg,
  options,
}): JSX.Element => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="text-xs uppercase font-bold">
        {label}
      </label>
      <select
        id={id}
        {...register}
        className="w-full outline-none border bg-[#f5f5f5] rounded-sm py-[10px] px-4"
      >
        <option value="">{`--- Chọn ${label.toLowerCase()} ---`}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errorMsg && (
        <p className="text-xs text-red-700 mt-1 flex items-center gap-[2px]">
          <AiOutlineWarning />
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default FormSelect;
