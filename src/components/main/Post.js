export default function Post() {
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
            ">
            <p className="my-auto">
                <span className="text-muted me-3">13 June 2022</span>
                Exercise #3
            </p>
            <button className="btn btn-blue px-5">Done</button>
        </div>
    );
}
