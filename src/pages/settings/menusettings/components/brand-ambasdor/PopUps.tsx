"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import CustomButton from "@/app/Components/ui/CustomButton";
import { Pencil, PlusIcon, Trash2 } from "lucide-react";

//faqs
type Faqs = {
  id: number;
  question: string;
  answer: string;
};
export function AddFaqs() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CustomButton
        label="Add New"
        icon={<PlusIcon size={16} />}
        className="text-xl text-white"
        bgColor="bg-blue-500"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Add Faqs
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Question
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Answer
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Description"
                    className="h-12 p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function EditFaqs({ faqsData }: { faqsData: Faqs }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Pencil
        size={28}
        className=" text-blue-500 hover:bg-blue-200/90 cursor-pointer   px-2 rounded-full"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Edit Faqs
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    value={faqsData.question}
                    placeholder="Enter your email"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <input
                    type="text"
                    value={faqsData.answer}
                    placeholder="Enter your Description"
                    className="h-12 p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export function DeleteFaqs() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Trash2
        size={28}
        className=" text-red-500 hover:bg-red-200/90  cursor-pointer rounded-full   px-2"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex border-b-1 text-3xl flex-col gap-3">
                Delete Core Value
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 p-6 sm:grid-cols-2 gap-5">
                <label className="block w-max text-gray-700 mb-2 text-[1.4rem]">
                  Are you sure you want to delete this core value? This action
                  cannot be undone.
                </label>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Delete"
                  buttonType="submit"
                  bgColor="bg-red-600"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

//howItWork
type howItWork = {
  id: number;
  title: string;
  description: string;
};
export function AddhowItWork() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CustomButton
        label="Add New"
        icon={<PlusIcon size={16} />}
        className="text-xl text-white"
        bgColor="bg-blue-500"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Add How It Work
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Title"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter your Description"
                    className=" p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function EdithowItWork({ data }: { data: howItWork }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Pencil
        size={28}
        className=" text-blue-500 hover:bg-blue-200/90 cursor-pointer   px-2 rounded-full"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Edit How It Works
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    value={data.title}
                    placeholder="Enter your Title"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    value={data.description}
                    placeholder="Enter your Description"
                    className="  p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export function DeletehowItWork() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Trash2
        size={28}
        className=" text-red-500 hover:bg-red-200/90  cursor-pointer rounded-full   px-2"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex border-b-1 text-3xl flex-col gap-3">
                Delete This
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 p-6 sm:grid-cols-2 gap-5">
                <label className="block w-max text-gray-700 mb-2 text-[1.4rem]">
                  Are you sure you want to delete this? This action cannot be
                  undone.
                </label>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Delete"
                  buttonType="submit"
                  bgColor="bg-red-600"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

//benefits
type Benefits = {
  id: number;
  title: string;
  description: string;
};
export function Addbenefits() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CustomButton
        label="Add New"
        icon={<PlusIcon size={16} />}
        className="text-xl text-white"
        bgColor="bg-blue-500"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Add Benefits
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Title"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter your Description"
                    className=" p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function Editbenefits({ data }: { data: Benefits }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Pencil
        size={28}
        className=" text-blue-500 hover:bg-blue-200/90 cursor-pointer   px-2 rounded-full"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Edit benefits
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    value={data.title}
                    placeholder="Enter your Title"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    value={data.description}
                    placeholder="Enter your Description"
                    className="  p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export function Deletebenefits() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Trash2
        size={28}
        className=" text-red-500 hover:bg-red-200/90  cursor-pointer rounded-full   px-2"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex border-b-1 text-3xl flex-col gap-3">
                Delete This
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 p-6 sm:grid-cols-2 gap-5">
                <label className="block w-max text-gray-700 mb-2 text-[1.4rem]">
                  Are you sure you want to delete this? This action cannot be
                  undone.
                </label>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Delete"
                  buttonType="submit"
                  bgColor="bg-red-600"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

//requirements
type Requirements = {
  id: number;
  title: string;
  description: string;
};
export function AddRequirements() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CustomButton
        label="Add New"
        icon={<PlusIcon size={16} />}
        className="text-xl text-white"
        bgColor="bg-blue-500"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Add Requirements
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Title"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter your Description"
                    className=" p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function EditRequirements({ data }: { data: Requirements }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Pencil
        size={28}
        className=" text-blue-500 hover:bg-blue-200/90 cursor-pointer   px-2 rounded-full"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-3xl flex-col gap-3 bg-blue-500 text-white py-8">
                Edit Requirements
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 gap-5 my-12">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Title
                  </label>
                  <input
                    type="text"
                    value={data.title}
                    placeholder="Enter your Title"
                    className="h-12 p-4 text-2xl w-full border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2 text-[1.4rem]">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    value={data.description}
                    placeholder="Enter your Description"
                    className="  p-4 w-full text-2xl border-gray-300 rounded-md border-1 placeholder:text-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Save Changes"
                  buttonType="submit"
                  bgColor="bg-blue-500"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export function DeleteRequirements() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Trash2
        size={28}
        className=" text-red-500 hover:bg-red-200/90  cursor-pointer rounded-full   px-2"
        onClick={onOpen}
      />
      <Modal
        isOpen={isOpen}
        placement="center"
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex border-b-1 text-3xl flex-col gap-3">
                Delete This
              </ModalHeader>
              <ModalBody className="grid grid-cols-1 p-6 sm:grid-cols-2 gap-5">
                <label className="block w-max text-gray-700 mb-2 text-[1.4rem]">
                  Are you sure you want to delete this? This action cannot be
                  undone.
                </label>
              </ModalBody>
              <ModalFooter>
                <CustomButton
                  label="Cancel"
                  buttonType="submit"
                  borderColor="blue"
                  bgColor="bg-white"
                  textColor="text-blue-500"
                  className=" text-xl "
                  onClick={onClose}
                />
                <CustomButton
                  label="Delete"
                  buttonType="submit"
                  bgColor="bg-red-600"
                  textColor="text-white"
                  className=" text-xl "
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
