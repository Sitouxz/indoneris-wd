import {useEffect} from "react"
import LoginForm from "../components/LoginForm";
import bg4 from "../assets/images/bg4.svg";
import bgVertical from "../assets/images/bg-vertical.svg";
import Validation from "../components/Validation";

export default function Login() {
    useEffect(() => {
        Validation()
    }, []);
    
    return (
        <div className="container-fluid">
            <div className="row bg-primary">
                <div className="col-4 d-none d-lg-block">
                    <div
                        className="
                        container
                        vh-100
                        text-white
                        d-flex
                        flex-column
                        justify-content-center
                    ">
                        <img
                            src={bg4}
                            className="
                            position-absolute
                            d-none d-lg-block
                            vh-100
                        "
                            alt=""
                        />
                        <h1 className="fs-7 fw-bold mb-3">Brand</h1>
                        <h3 className="fs-2 fw-bold">Lorem ipsum</h3>
                        <p className="fs-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Aliquam, asperiores!
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-8 d-flex p-0 vh-100">
                    <div>
                        <img
                            src={bgVertical}
                            className="vh-100 side-divider d-none d-lg-block"
                            alt=""
                        />
                    </div>
                    <div className="w-100 d-flex front bg-white-blue">
                        <div
                            className="
                            container
                            p-5
                            d-flex
                            justify-content-center
                            align-items-center
                        ">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
