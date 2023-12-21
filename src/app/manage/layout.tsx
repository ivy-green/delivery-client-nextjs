import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar.tsxabout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Delivery",
};

export default function AdminLayout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-primary text-font">
      <Sidebar heading="Temas" show={true} />
      <div id="mainBody" className="bg-white pt-[2em] px-[5em]">
        {props.children}
      </div>
    </div>
  );
}
