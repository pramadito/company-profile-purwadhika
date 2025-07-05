import Loading from "@/components/Loading";
import { useAuthStore } from "@/stores/stores";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const AuthGuard = (Component: any) => {
  return (props: any) => {
    const { user } = useAuthStore();
    const [isLoading, setIsLoadng] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoadng(false);
      },1000);
    }, []);

    if(isLoading){
        return <Loading />;
    }

    if (!user) {
      return redirect("/");
    }
    return <Component {...props} />;
  };
};
