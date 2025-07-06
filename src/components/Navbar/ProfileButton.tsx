"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/stores";
import { User } from "lucide-react";
import Link from "next/link";

export function ProfileButton() {
  const { user, clearAuth } = useAuthStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {user ? (
            <>
              <Link href="/write">
                <DropdownMenuItem>Write</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="destructive" onClick={clearAuth}>
                  Logout
                </Button>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <DropdownMenuItem>Sign In</DropdownMenuItem>
              </Link>
              <Link href="/sign-up">
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
              </Link>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
