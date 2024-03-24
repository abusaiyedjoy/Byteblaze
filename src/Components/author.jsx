import { useLoaderData } from "react-router-dom";

const author = () => {
    const blog = useLoaderData();
    return (
        <div>
            <h1>{blog.user.name}</h1>
        </div>
    );
};

export default author;