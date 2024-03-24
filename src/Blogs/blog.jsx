import { useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from './blogcard';
import Spinner from "../Components/spinner";
const blog = () => {
    const blog = useLoaderData()
    const Navigation =useNavigation();
    if(Navigation.state === 'loading') return <Spinner></Spinner>
    return (
        <div>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                        <img src={blog[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blog[0].title}</h3>
                            <span className="text-xs text-gray-400 ">{new Date(blog[0].published_at).toLocaleDateString()}</span>
                            <p>{blog[0].description}</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                        blog.map(blogs=>
                        <BlogCard blog={blogs} key={blogs.id}></BlogCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default blog;