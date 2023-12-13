import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>DASHBOARD</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
