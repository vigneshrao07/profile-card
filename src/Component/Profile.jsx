import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Profile = ({
  name,
  title,
  image,
  bio,
  followers,
  likes,
  photos,
  backgroundImage,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Top Half with Background Image */}
      <div
        className="relative h-35 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <img
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-20 h-20  rounded-full border-4 border-white"
          src={image}
          alt={name}
        />
      </div>

      {/* Content */}
      <div className="pt-12 px-6 pb-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="mt-3 text-gray-700 text-sm">{bio}</p>

        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            Follow
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition">
            Message
          </button>
          <button className="bg-green-500 text-gray-800 px-4 py-2 rounded-full hover:bg-red-400 transition">
            call
          </button>
        </div>
      </div>

      <div className="mt-4 mb-4 flex justify-center gap-6 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:bg-pink-300  rounded-4xl    "
          
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="text-sky-400  hover:bg-pink-300 rounded-4xl    "
        >
          <FaTwitter />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="text-red-600   hover:bg-pink-300 rounded-4xl "
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-pink-500  hover:bg-pink-300 rounded-4xl  "
        >
          <FaInstagram />
        </a>
      </div>

      <div className=" border-t px-6 py-4 bg-gray-50 flex justify-between text-center text-sm text-gray-700">
        <div>
          <p className="font-bold text-lg">{followers}</p>
          <p>Followers</p>
        </div>
        <div>
          <p className="font-bold text-lg">{likes}</p>
          <p>Likes</p>
        </div>
        <div>
          <p className="font-bold text-lg">{photos}</p>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
