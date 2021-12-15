import Faq from "./Faq";
import Cta from "./Cta";
import bg2 from "../assets/images/bg2.svg";

export default function Bottom() {
    return (
        <section className="bg-white">
            <div>
                <img src={bg2} className="w-100" alt="" />
            </div>
            <div className="bg-light-blue py-5">
                <Faq />
                <Cta />
            </div>
        </section>
    );
}
