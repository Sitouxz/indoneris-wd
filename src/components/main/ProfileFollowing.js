import Following from "./Following";

export default function ProfileFollowing() {
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
            <Following />
            <Following />
            <Following />
        </section>
    );
}
