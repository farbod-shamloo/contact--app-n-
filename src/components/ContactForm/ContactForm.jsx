import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./ContactForm.module.css";
import { ContactContext } from "../../context/ContactContext";

const validationSchema = yup.object().shape({
  name: yup.string().required("وارد کردن نام الزامی است."),
  lastName: yup.string().required("وارد کردن نام خانوادگی الزامی است."),
  email: yup.string().email("ایمیل معتبر نیست.").required("ایمیل الزامی است."),
  phone: yup.string().required("وارد کردن شماره تلفن الزامی است."),
});

function ContactForm() {
  const { addContact, editContact, editingContact, setEditingContact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", lastName: "", email: "", phone: "" },
    resolver: yupResolver(validationSchema),
  });

  // بروزرسانی مقادیر فرم هنگام انتخاب مخاطب برای ویرایش
  useEffect(() => {
    if (editingContact) {
      reset(editingContact);
    }
  }, [editingContact, reset]);

  const onSubmit = (data) => {
    if (editingContact) {
      editContact(data); // ویرایش مخاطب
    } else {
      addContact(data); // افزودن مخاطب جدید
    }
    reset(); // پاک کردن فرم
    setEditingContact(null); // بستن حالت ویرایش
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register("name")} placeholder="نام" />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <input {...register("lastName")} placeholder="نام خانوادگی" />
      {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}

      <input {...register("email")} placeholder="ایمیل" />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <input {...register("phone")} placeholder="شماره تلفن" />
      {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

      <button type="submit">{editingContact ? "ویرایش" : "افزودن"}</button>
    </form>
  );
}

export default ContactForm;
