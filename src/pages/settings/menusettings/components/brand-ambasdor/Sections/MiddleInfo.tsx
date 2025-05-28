"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { CustomInput } from "@/app/Components/ui/CustomInput";
import { CustomTextarea } from "@/app/Components/ui/CustomTextArea";
import CustomButton from "@/app/Components/ui/CustomButton";

interface CareerFormData {
  title: string;
  description: string;
}
const initialValues: CareerFormData = {
  title: "Career",
  description:
    "With we want to optimize the customization process so your team can save time when building websites.",
};

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

export default function MiddleInfo() {
  return (
    <div className="min-h-max sm:min-w-[97%] mt-8 sm:m-8 p-8 bg-white w-auto rounded-2xl shadow-custom max-w-[100%]">
      <h1 className="text-4xl font-bold mb-8 border-b pb-2">Middle Info</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Updated Career Data:", values);
          console.log("Uploaded files:", {});
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6 bg-gray-50 rounded-md flex flex-col p-6 text-2xl">
            <CustomInput name="title" label="Title" value={values.title} />

            <div>
              <CustomTextarea name="description" label="Description" />
            </div>

            <div className="flex justify-end mt-6">
              <CustomButton
                className="text-2xl"
                label="Save Changes"
                buttonType="submit"
                bgColor="bg-blue-600"
                textColor="text-white"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
