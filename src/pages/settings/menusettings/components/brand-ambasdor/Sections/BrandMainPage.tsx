"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useState } from "react";
import { CustomInput } from "@/app/Components/ui/CustomInput";
import { CustomTextarea } from "@/app/Components/ui/CustomTextArea";
import CustomButton from "@/app/Components/ui/CustomButton";

interface PartnerWithUs {
  slogan: string;
  title: string;
  description: string;
  howItWorkDescription: string;
  bgImage: string;
}

const mockPartnerData: PartnerWithUs = {
  slogan:
    "With we want to optimize the customization process so your team can save time when building websites.",
  title: "1M+ Satisfied Customers",
  description:
    "Vestibulum vitae lorim tellus nec dui dictum lorim ac, place uilm rat Lorse ipsom",
  howItWorkDescription: "Product Management at Spotify",

  bgImage:
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1000&q=80",
};

const validationSchema = Yup.object({
  slogan: Yup.string().required("Slogan is required"),
  title: Yup.string().required("Title is required"),
  howItWorkDescription: Yup.string().required(
    "howItWorkDescription is required"
  ),
  description: Yup.string().required("Description is required"),
  bgImage: Yup.string().required("Background image is required"),
});

export default function MainBrandAmbassador() {
  const [aboutData, setAboutData] = useState<PartnerWithUs>(mockPartnerData);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void,
    fieldName: keyof PartnerWithUs
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
      <h1 className="text-4xl font-bold mb-8 border-b pb-2">
        Brand Ambassador
      </h1>

      <Formik
        initialValues={aboutData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setAboutData(values);
          console.log("Updated About Section:", values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-6 bg-gray-50 rounded-md flex flex-col p-6 text-2xl">
            <main className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CustomInput
                name="slogan"
                label="Slogan"
                value={mockPartnerData.slogan}
                placeholder={mockPartnerData.slogan}
              />
              <CustomInput
                name="title"
                label="Title"
                value={mockPartnerData.title}
                placeholder={mockPartnerData.title}
              />

              <div className="sm:col-span-2">
                <CustomTextarea
                  name="description"
                  label="Description"
                  placeholder={mockPartnerData.description}
                />
              </div>
              <div className="sm:col-span-2">
                <CustomTextarea
                  name="howItWorkDescription"
                  label="How It Work Description"
                  placeholder={mockPartnerData.description}
                />
              </div>

              <div className="sm:col-span-2"></div>
            </main>

            <section>
              <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                Background Image URL or Upload
              </label>
              <CustomInput
                name="bgImage"
                placeholder={mockPartnerData.bgImage}
                value={mockPartnerData.bgImage}
              />
              <input
                type="file"
                accept="image/*"
                className=" file:px-2 file:rounded-md file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer hover:file:bg-blue-600"
                onChange={(e) => handleImageUpload(e, setFieldValue, "bgImage")}
              />
              {values.bgImage && (
                <Image
                  src={values.bgImage}
                  alt="Background Preview"
                  width={100}
                  height={100}
                  className="mt-4 rounded-md shadow"
                />
              )}
            </section>

            <div className="flex justify-end">
              <CustomButton
                label="Save Changes"
                buttonType="submit"
                bgColor="bg-blue-600"
                textColor="text-white"
                className=" text-2xl "
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
