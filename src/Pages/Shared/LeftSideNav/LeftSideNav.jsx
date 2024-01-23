import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([]);
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <>
            <div>
                <h2 className="text-2xl font-semibold m-4">All Caterogy</h2>

                <button className="bg-gray-100 text[#403F3F] font-semibold text-xl px-10 py-4 m-3 ">National News</button>

                {
                    catagories.map(catagory =>
                        <Link className="block h-[64px] ml-12  text-[#9F9F9F] text-xl font-medium"
                            key={catagory.id}>
                            {catagory.name}
                        </Link>)
                }

            </div>

            <div>
                {
                    news.map(blogNews =>
                         <Link key={blogNews._id}>
                            
                           <img src= {blogNews.news_img1} alt="" />
                        </Link>)
                }
                <h2>News: {news.length}</h2>
            </div>
        </>
    );
};

export default LeftSideNav;