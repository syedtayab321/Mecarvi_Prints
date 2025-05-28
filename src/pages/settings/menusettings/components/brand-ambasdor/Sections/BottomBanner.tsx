"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useState } from "react";
import { CustomInput } from "@/app/Components/ui/CustomInput";
import { CustomTextarea } from "@/app/Components/ui/CustomTextArea";
import CustomButton from "@/app/Components/ui/CustomButton";

interface BottomBannerData {
  heading: string;
  image: string;
}

const mockCompanyAboutData: BottomBannerData = {
  heading: "Sign up to get the latest jobs",

  image:
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1000&q=80",
};

const validationSchema = Yup.object({
  heading: Yup.string().required("Heading is required"),
  image: Yup.string().required("Image is required"),
});

export default function BottomBanner() {
  const [aboutCompanyData, setAboutCompanyData] =
    useState<BottomBannerData>(mockCompanyAboutData);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    fieldName: keyof BottomBannerData
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFieldValue(fieldName, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-max sm:min-w-[97%] mt-8 sm:m-8 p-8 bg-white w-auto rounded-2xl shadow-custom max-w-[100%]">
      <h1 className="text-4xl font-bold mb-8 border-b pb-2">Bottom Banner</h1>

      <Formik
        initialValues={aboutCompanyData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setAboutCompanyData(values);
          console.log("Updated Company About Section:", values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6 bg-gray-50 rounded-md flex flex-col p-6 text-2xl">
            <CustomInput
              name="heading"
              label="Heading"
              value={values.heading}
              placeholder="Enter section heading"
            />

            <div>
              <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                Banner Image URL or Upload
              </label>
              <CustomInput
                name="image"
                placeholder="Image URL"
                value={values.image}
              />
              <input
                type="file"
                accept="image/*"
                className="mt-2 file:px-2 file:rounded-md file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer hover:file:bg-blue-600"
                onChange={(e) => handleImageUpload(e, setFieldValue, "image")}
              />
              {values.image && (
                <Image
                  src={values.image}
                  alt="Company Preview"
                  width={100}
                  height={100}
                  className="mt-4 rounded-md shadow"
                />
              )}
            </div>

            <div className="flex justify-end">
              <CustomButton
                label="Save Changes"
                buttonType="submit"
                bgColor="bg-blue-600"
                textColor="text-white"
                className="2xl"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
