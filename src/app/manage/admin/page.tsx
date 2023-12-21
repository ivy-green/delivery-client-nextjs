import { ReactElement } from "react";
import AdminLayout from "@/components/layout/AdminLayout.tsxabout";
import { NextPageWithLayout } from "@/app/_app.tsxabout";

const AdminPage: NextPageWithLayout = () => {
  return (
    <>
      <div className="page_title">Admin Dashboard Page</div>
    </>
  );
};

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
