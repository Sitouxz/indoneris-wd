import Followers from "./Followers";

export default function ProfileFollowers() {
    return (
        <section
            className="
                container
                d-flex
                flex-wrap
                justify-content-center
                align-items-center
                gap-3
                mb-5
                mt-3
            ">
            <Followers />
            <Followers />
            <Followers />
        </section>
    );
}
