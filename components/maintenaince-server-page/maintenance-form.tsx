"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import FormInput from "../form-input";
import { ImSpinner3 } from "react-icons/im";
import FormSelect from "../form-select";
import { provinces } from "@/data/contact-page";
import Swal from "sweetalert2";

interface Props {}

const today = new Date();
today.setHours(0, 0, 0, 0);

const testDriveFormSchema: Yup.AnyObjectSchema = Yup.object({
  date: Yup.date()
    .required("Vui lòng chọn ngày dự kiến")
    .typeError("Vui lòng chọn ngày hợp lệ")
    .min(today, "Ngày dự kiến phải là ngày sau hôm nay"),
  name: Yup.string()
    .required("Vui lòng nhập họ tên của anh / chị")
    .min(2, "Tên phải có ít nhất 2 kí tự"),
  email: Yup.string()
    .email("Email của anh / chị không hợp lệ")
    .required("Vui lòng nhập email của anh / chị"),
  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại của anh / chị")
    .matches(/^[0-9]+$/, "Vui lòng nhập số từ 0 đến 9")
    .min(10, "Vui lòng nhập ít nhất 10 chữ số")
    .max(11, "Vui lòng nhập không quá 11 chữ số"),
  province: Yup.string().required(
    "Vui lòng chọn Tỉnh / thành mà anh chị sinh sống"
  ),
});

export type MaintenaceValues = {
  date: string;
  hour: string;
  province: string;
  name: string;
  phone: string;
  email: string;
  content: string;
};

const MaintenanceForm: FC<Props> = (props): JSX.Element => {
  const form = useForm<MaintenaceValues>({
    defaultValues: {
      date: "",
      hour: "",
      province: "",
      name: "",
      phone: "",
      email: "",
      content: "",
    },
    resolver: yupResolver(testDriveFormSchema),
  });

  const { register, handleSubmit, formState, reset, setValue } = form;

  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = async (data: MaintenaceValues) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/maintenance`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      Swal.fire({
        icon: "success",
        title: "Thành công!",
        text: "Chúng tôi sẽ liên hệ đến Anh (Chị) trong thời gian sớm nhất.",
        confirmButtonColor: "green",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="mt-14 shadow-md border p-6 rounded-sm">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
        <h1 className="font-bold uppercase text-lg text-center pt-4 pb-6">
          ĐẶT LỊCH BẢO DƯỠNG XE
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            id="date"
            type="date"
            label="Ngày dự kiến"
            register={register("date")}
            errorMsg={errors.date?.message}
          />
          <FormInput
            id="hour"
            type="time"
            label="Thời gian dự kiến"
            register={register("hour")}
            errorMsg={errors.hour?.message}
          />
        </div>

        <FormSelect
          id="province"
          label="Khu vực"
          register={register("province")}
          options={provinces}
          errorMsg={errors.province?.message}
        />

        <FormInput
          id="name"
          label="Họ và tên"
          register={register("name")}
          errorMsg={errors.name?.message}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            id="phone"
            label="Số điện thoại"
            type="number"
            register={register("phone")}
            errorMsg={errors.phone?.message}
          />
          <FormInput
            id="Email"
            label="Email"
            type="email"
            register={register("email")}
            errorMsg={errors.email?.message}
          />
        </div>

        <FormInput
          id="content"
          label="Ghi chú"
          register={register("content")}
          textarea
          rows={6}
        />

        <button className="primary-btn !bg-primary ml-auto">
          {isSubmitting ? (
            <>
              <ImSpinner3 className="animate-spin" />
              Đang gửi
            </>
          ) : (
            "Đăng ký ngay"
          )}
        </button>
      </form>
    </div>
  );
};

export default MaintenanceForm;
