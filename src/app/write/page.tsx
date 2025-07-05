"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Textarea } from "@/components/ui/textarea";
import TiptapRichtextEditor from "@/components/TiptapRichtextEditor";
import * as Yup from "yup";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import useCreateBlog from "./_hooks/useCreateBlog";
import { AuthGuard } from "@/hoc/AuthGuard";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Titles is Required"),
  category: Yup.string().required("Category is Required"),
  description: Yup.string().required("Description is Required"),
  content: Yup.string().required("Content is Required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
});

const Write = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const onChangeThumbnail = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const files = e.target.files;

    if (files && files.length) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setFieldValue("thumbnail", files[0]);
    }
  };

  const removeThumbnail = (
    setFieldValue: (field: string, value: any) => void
  ) => {
    setSelectedImage("");
    setFieldValue("thumbnail", null);
  };
  const { mutateAsync: createBlog, isPending } = useCreateBlog();

  return (
    <main className="cointainer mx-auto px-4 pb-20">
      <Formik
        initialValues={{
          title: "",
          description: "",
          content: "",
          category: "",
          thumbnail: null,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await createBlog(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div className="flex flex-col gap-6">
              {/*TITLE*/}
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Field
                  name="title"
                  as={Input}
                  type="text"
                  placeholder="Your Title"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
              {/*CATEGORY*/}
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Field
                  name="category"
                  as={Textarea}
                  placeholder="Category"
                  style={{ resize: "none" }}
                />
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
              {/*DESCRIPTION*/}
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Field
                  name="description"
                  as={Textarea}
                  placeholder="Description"
                  rows={5} // Add this line to set the number of visible rows
                  className="min-h-[200px]" // Optional: set minimum height
                  style={{ resize: "none" }}
                />
                <ErrorMessage
                  name="description"
                  component="p"
                  className="text-sm text-red-500"
                />
              </div>
              {/* CONTENT  */}
              <TiptapRichtextEditor label="Content" name="content" />
              {/*Thumbnail*/}
              {selectedImage ? (
                <div className="relative w-fit">
                  <Image
                    src={selectedImage}
                    alt="thumbnail"
                    width={200}
                    height={150}
                    className="object-cover"
                  />
                  <Button
                    size="icon"
                    className="absolute -top-2 -right-2 rounded-full bg-red-500"
                    onClick={() => removeThumbnail(setFieldValue)}
                  >
                    <Trash />
                  </Button>
                </div>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="thumbnail">Thumbnail</Label>
                  <Input
                    name="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={(e) => onChangeThumbnail(e, setFieldValue)}
                  />
                  <ErrorMessage
                    name="thumbnail"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Loading" : "Submit"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default AuthGuard(Write);
