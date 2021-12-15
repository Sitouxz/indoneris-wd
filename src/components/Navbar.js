export default function Header() {
    return (
        <header className="container navbar py-3 d-flex justify-content-between">
            <h1 className="fw-bold text-light">Logo</h1>
            <div>
                <button className="btn text-light">Login</button>
                <button className="btn3d text-primary">Register</button>
            </div>
        </header>
    );
}
