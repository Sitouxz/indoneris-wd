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
                            <h2 className="fw-bold">
                                Lorem ipsum dolor sit amet, consectetur
                                adispiscing...
                            </h2>
                            <h4 className="fw-bold text-secondary">
                                info@email.com
                            </h4>
                        </div>
                        <div className="col-12 col-lg-4">
                            <p className="fw-bold">Lorem</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minima sapiente labore ab.
                                Quaerat, maiores voluptatem?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nam, labore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
