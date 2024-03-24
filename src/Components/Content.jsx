import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, tags, published_at, title, description } = blog;
    return (
        <div className=" border-2 p-2  border-opacity-30 mx-auto group hover:no-underline focus:no-underline">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                {tags.map(tag =>
                    <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{tag}</a>
                )}

            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Content;