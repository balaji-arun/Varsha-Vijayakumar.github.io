import React, { useState, useEffect } from "react";
import axios from "axios";

import CreatePost from "./Post";

import PostList from "./Prev";

const Page = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8070/post").then(res => {
            setPosts(res.data);
        });
    }, []);

    const addNewPost = name => {
        axios.post("http://localhost:8070/post", { title: name })
            .then(success => {
                setPosts([...posts, success.data])
            })
    }
    const handleDelete = (idd) => {

        axios.delete("http://localhost:8070/post/" + idd).then(success => {
            if (success.status === 200 && success.statusText === "OK") {
                setPosts(posts.filter(i => i.id !== idd));
            }
        });
    };

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <Header title={"Post"} />
                    <CreatePost addNewPost={addNewPost} />
                    <PostList posts={posts} handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
};

const Header = ({ title }) => (
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">{title}</span>
    </nav>
);



export default Page;