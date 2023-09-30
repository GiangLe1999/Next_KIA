"use client";

import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../form-input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormSelect from "../form-select";
import { carNames } from "@/data/home";
import { ImSpinner } from "react-icons/im";
import { getCarLinesByCarName } from "@/lib/fetchData";
import { provinces, services } from "@/data/contact-page";
import Swal from "sweetalert2";

interface Props {}

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  province: string;
  car: string;
  carLine: string;
  service: string;
  content: string;
};

const contactFormSchema: Yup.AnyObjectSchema = Yup.object({
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
  service: Yup.string().required("Vui lòng chọn dịch vụ mà anh / chị quan tâm"),
});

const ContactForm: FC<Props> = (props): JSX.Element => {
  const [carLines, setCarLines] = useState([]);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      province: "",
      car: "",
      carLine: "",
      service: "",
      content: "",
    },
    resolver: yupResolver(contactFormSchema),
  });

  const { register, handleSubmit, formState, watch, reset } = form;

  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const fetchCarLines = async (currentCar: string) => {
    const cars = await getCarLinesByCarName(currentCar);
    setCarLines(cars);
  };

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
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

  let currentCar = watch("car");

  useEffect(() => {
    if (currentCar) {
      fetchCarLines(currentCar);
    } else {
      setCarLines([]);
    }
  }, [currentCar]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="shadow-md py-10 px-6 border rounded-sm">
      <p className="text-center font-bold mb-4">
        VUI LÒNG ĐỂ LẠI THÔNG TIN LIÊN HỆ THEO MẪU BÊN DƯỚI
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <div className="grid grid-cols-2 gap-4">
          <FormSelect
            id="province"
            label="Khu vực"
            register={register("province")}
            options={provinces}
            errorMsg={errors.province?.message}
          />

          <FormSelect
            id="service"
            label="Dịch vụ"
            register={register("service")}
            options={services}
            errorMsg={errors.service?.message}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormSelect
            id="car"
            label="Dòng xe"
            register={register("car")}
            options={carNames}
          />

          <FormSelect
            id="carLine"
            label="Phiên bản"
            register={register("carLine")}
            options={carLines}
          />
        </div>

        <FormInput
          id="content"
          label="Nội dung"
          register={register("content")}
          textarea
          rows={6}
        />

        <button className="primary-btn !bg-primary ml-auto">
          {isSubmitting ? (
            <>
              <ImSpinner className="animate-spin" />
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

export default ContactForm;
