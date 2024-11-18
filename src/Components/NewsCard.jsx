
import { AiFillStar } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props={}) => {
    const {news} = props || {};
  const {
    title,
    author,
    published_date,
    rating,
    total_view,
    image_url,
    details,
  } = news;

  return (
    <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-white text-lg font-bold">{author.name}</h1>
        <span className="text-sm text-gray-300">{new Date(published_date).toDateString()}</span>
      </div>
      <img className="w-full h-48 object-cover" src={image_url} alt="news thumbnail" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{details}</p>
        <div className="mt-4 flex items-center">
          <div className="flex items-center text-yellow-500">
            {[...Array(Math.round(rating.number))].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
          <span className="text-gray-600 ml-2">{rating.number} ({rating.badge})</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Link to={`/news/${news._id}`} className="text-sm text-blue-500 hover:underline">Read More</Link>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">{total_view} views</span>
            <FaShareAlt className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

