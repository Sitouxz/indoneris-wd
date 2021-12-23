import React, { Component } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import ProfileData from "../components/main/ProfileData";
import ProfileFollowers from "../components/main/ProfileFollowers";
import ProfileFollowing from "../components/main/ProfileFollowing";
import ProfileClass from "../components/main/ProfileClass";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            class: true,
            followers: false,
            following: false,
        };
        this.handleClass = this.handleClass.bind(this);
        this.handleFollowers = this.handleFollowers.bind(this);
        this.handleFollowing = this.handleFollowing.bind(this);
    }

    handleClass() {
        if (this.state.class === false) {
            this.setState({
                class: true,
                followers: false,
                following: false,
            });
        }
    }
    handleFollowers() {
        if (this.state.followers === false) {
            this.setState({
                class: false,
                followers: true,
                following: false,
            });
        }
    }
    handleFollowing() {
        if (this.state.following === false) {
            this.setState({
                class: false,
                followers: false,
                following: true,
            });
        }
    }

    render() {
        return (
            <div className="d-flex flex-column h-100">
                <Header />
                <ProfileData />
                <section className="container mt-5">
                    <div className="d-flex justify-content-between border-bottom">
                        <div>
                            <button
                                className="btn fw-bold"
                                onClick={() => this.handleClass()}>
                                Class <span className="fw-normal">26</span>
                            </button>
                            <button
                                className="btn fw-bold"
                                onClick={() => this.handleFollowers()}>
                                Followers <span className="fw-normal">102</span>
                            </button>
                            <button
                                className="btn fw-bold"
                                onClick={() => this.handleFollowing()}>
                                Following <span className="fw-normal">21</span>
                            </button>
                        </div>
                    </div>
                </section>
                {this.state.class ? <ProfileClass /> : null}
                {this.state.followers ? <ProfileFollowers /> : null}
                {this.state.following ? <ProfileFollowing /> : null}
                <Footer />
            </div>
        );
    }
}
