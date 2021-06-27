import { Link } from "react-router-dom";
import { getBackgroundColor } from "../../utils"
import "./FeatureHeader.css";

const FeatureHeader = (props: object) => {
    return (
        <div className="flex px-0 xl:px-32 justify-between h-24 xl:h-32">
            <div className={`feature-header-item1 rounded-3xl flex p-4 transition duration-200 transform hover:-translate-y-1 cursor-pointer ${getBackgroundColor()}`}>
                <Link to="" className="hidden md:block">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
                        className="rounded-2xl"
                    />
                </Link>
                <Link
                    to=""
                    className="flex items-center text-base sm:text-lg lg:text-2xl font-extrabold sm:px-4"
                >
                    More Than Team Source
                </Link>
            </div>
            <div className={`feature-header-item2 bg-blue-200 rounded-3xl flex p-4 transition duration-200 transform hover:-translate-y-1 cursor-pointer ${getBackgroundColor()}`}>
                <Link to="" className="hidden md:block">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/img/feature-header-item-1.jpeg`}
                        className="rounded-2xl"
                    />
                </Link>
                <Link
                    to=""
                    className="flex items-center text-base sm:text-lg lg:text-2xl font-extrabold sm:px-4"
                >
                    About Me
                </Link>
            </div>
        </div>
    );
};

export { FeatureHeader };