export default function FaqItem(props) {
    return (
        <div className=" col-8 p-3 mb-3 border border-2 border-white rounded ">
            <h3 className="fw-bold">{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
}
