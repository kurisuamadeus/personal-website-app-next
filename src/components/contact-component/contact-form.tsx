"use client";

import { contactFormSchema } from "@/schema/schema";
import { ContactPageData } from "@/types";
import FormValidationMessage from "@/utils/helper/form-validation-message";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormProps {
    pageData: ContactPageData
}



export default function ContactForm({ pageData }: ContactFormProps) {
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    const { register, handleSubmit, formState } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(contactFormSchema(pageData?.formErrorMessage))
    });
    const formMemberClassName = "grid grid-cols-[50%_50%] w-full mb-[1vh]";
    const formMemberTextFieldClassName = "text-black";
    return (
        <div>
            <form className="flex flex-col items-start w-[80vw] max-w-[800px]" onSubmit={handleSubmit((data) => {
                setDisableSubmitButton(true);
                console.log(data);
                axios.post(`${window.location.origin}/api/contact-form/submit`, data)
                    .then(res => {
                        console.log(res);
                        alert(pageData?.submitNotificationText != undefined ? pageData?.submitNotificationText : "sent");
                        setDisableSubmitButton(false)
                    })
                    .catch(err => {
                        alert(err)
                    })
            })}>
                <p>
                    {FormValidationMessage({
                        messages: [
                            String(formState.errors.email?.message),
                            String(formState.errors.name?.message),
                            String(formState.errors.inquiry?.message),
                            String(formState.errors.message?.message)
                        ]
                    })}
                </p>
                <div className={formMemberClassName}>
                    <label>{pageData?.emailTitle}</label>
                    <input className={formMemberTextFieldClassName} type='email' {...register("email")} placeholder='youremail@mail.com' />
                </div>
                <div className={formMemberClassName}>
                    <label>{pageData?.nameTitle}</label>
                    <input className={formMemberTextFieldClassName} type='text' {...register("name")} placeholder={pageData?.nameTitle} />
                </div>
                <div className={formMemberClassName}>
                    <label>{pageData?.inquiryTitle}</label>
                    <select className={formMemberTextFieldClassName} {...register("inquiry")}>
                        {pageData?.inquiryValues.map((value, x) => {
                            return <option key={`inquiry-option-${x}`} value={value.inquiryValue}>{value.inquiryName}</option>
                        })}
                    </select>
                </div>
                <label className="text-start mb-[1vh]">{pageData?.messageTitle}</label>
                <textarea className={`w-full h-[20vh] ${formMemberTextFieldClassName}`} {...register("message")} placeholder={pageData?.messageTitle} />
                <input className={`justify-self-center self-center mt-[1vw] w-[80%] h-[3vw] text-black ${disableSubmitButton ? "bg-zinc-300" : "bg-white"}`} type='submit' disabled={disableSubmitButton} value={pageData?.submitButtonText ? pageData?.submitButtonText : ""} />
            </form>
        </div>
    )
}