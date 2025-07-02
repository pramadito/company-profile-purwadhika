"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios, { AxiosError } from "axios";

import { useFormik } from "formik";
import { useState } from "react";

import * as Yup from "yup";
import { Loader } from 'lucide-react';
import { toast } from "sonner";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});


const Login = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const url = "https://deluxefarm-us.backendless.app/api/users/login";
        // const response = await axios.post(url, {
        //   login: values.email,
        //   password: values.password,
        // });
        
        const body = {
          login: values.email,
          password: values.password,
        };

        const response = await axios.post(url,body)

        toast.success(`Success Login, Welcome ${response.data.name}`);
      } catch (error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  console.log(formik.values);
  return (
    <main className="container mx-auto">
      <div className="flex justify-center mt-24">
        <Card className="w-full max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {/* EMAIL */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                  {!!formik.touched.email && !!formik.errors.email ? (
                    <p className="text-red-500 text-xs">{formik.errors.email}</p>
                  ) : null}
                </div>
                {/* PASSWORD */}
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="password"
                    type="password"
                    required
                  />
                  {!!formik.touched.password && !!formik.errors.password ? (
                    <p className="text-red-500 text-xs">{formik.errors.password}</p>
                  ) : null}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader className="animate-spin"/> : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}

export default Login