export default function Following() {
    return (
        <div
            className="
                bg-white
                border border-2 border-secondary
                d-flex
                justify-content-between
                align-items-center
                p-2
                rounded-10
                mb-3
                w-100
            ">
            <div className="d-flex align-items-center">
                <div>
                    <img
                        src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png"
                        width="32px"
                        className="me-3"
                        alt="..."
                    />
                </div>
                <p className="my-auto">John Doe</p>
            </div>
            <div className="d-flex gap-2">
                <button className="btn btn-red d-none d-md-block">
                    <i className="bi bi-envelope-fill me-2"></i>Contact
                </button>
                <button className="btn btn-light btn-outline-secondary">
                    <i className="bi bi-person-dash-fill me-2"></i>Unfollow
                </button>
            </div>
        </div>
    );
}
