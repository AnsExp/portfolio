import Header from "../components/Header";
import '../css/form.css';
import type { ReactNode } from "react";

const Page = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container page">
            <div className="row">
                <div className="col-12 col-lg-6 order-1 order-lg-1">
                    <Header />
                </div>
                <div className="col-12 col-lg-6 py-5 py-lg-0 order-2 order-lg-2">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Page;
