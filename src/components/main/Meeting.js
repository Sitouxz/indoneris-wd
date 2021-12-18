export default function Meeting(props) {
    return (
        <div
            className="
                d-flex
                flex-column
                bg-light
                text-primary
                p-3
                rounded-3
                mb-2
            ">
            <div
                className="d-flex justify-content-between"
                data-bs-toggle="collapse"
                href={`#meeting${props.order}`}
                role="button"
                aria-expanded="false"
                aria-controls={`meeting${props.order}`}>
                <h5 className="fw-bold">On going meeting</h5>
                <i className="bi bi-caret-down-fill"></i>
            </div>
            <div className="collapse" id={`meeting${props.order}`}>
                <h6>25+ Students joined</h6>
                <h5>June 23, 2022 4:30 AM</h5>
                <button className="btn3d btn-blue mb-2 w-100">Join</button>
            </div>
        </div>
    );
}
