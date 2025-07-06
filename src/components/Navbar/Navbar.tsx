import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../mode-toggle";
const NavbarPage = () => {
  return (
    <div className="z-50">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />
          {/* Desktop Menu */}
          
          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            <ModeToggle/>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavbarPage;


// https://ui.shadcn.com/docs/dark-mode/next

//https://www.shadcnui-blocks.com/blocks/navbar-01