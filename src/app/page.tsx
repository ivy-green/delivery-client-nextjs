//css
import "../assets/css/plugin.css";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "@/store/store.jsabout";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <h3>Main Page</h3>
        <Link href={"/manage/admin"}>Go to Admin page</Link>
      </Provider>
    </>
  );
}
