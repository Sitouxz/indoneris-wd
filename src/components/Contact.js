import bg3 from "../assets/images/bg3.svg";

export default function Contact() {
    return (
        <section className="bg-light-blue">
            <div>
                <img src={bg3} className="w-100" alt="" />
            </div>
            <div className="bg-second-blue py-5">
                <div className="container py-5">
                    <div className="row bg-light p-3 rounded mx-5">
                        <div className="col-12 col-lg-8">
                            <p className="text-primary">CONTACT US</p>
                            <h2 className="fw-bold">Learn and fun together!</h2>
                            <h4 className="fw-bold text-secondary">
                                something@email.com
                            </h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="fw-bold">...</p>
                            <p>
                                Make your online class easier, more interesting,
                                and more fun
                            </p>
                            <p>Distance is not a barrier to learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
