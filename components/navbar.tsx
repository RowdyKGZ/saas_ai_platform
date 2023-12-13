import { UserButton } from "@clerk/nextjs";

import { MobielSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobielSidebar />

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
