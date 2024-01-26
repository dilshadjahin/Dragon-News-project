import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from 'moment';
import { SlCalender } from "react-icons/sl";


const LeftSideNav = () => {
    const [catagories, setCatagories] = useState([]);
    const [news, setNews] = useState([]);

    const dates = moment().format("MMM Do YY")

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCatagories(data))
        fetch('recentNews.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <>
            <div>
                <h2 className="text-2xl font-semibold m-4">All Caterogy</h2>

                <div className="py-4 bg-gray-100 mb-4">
                    <NavLink className=" text[#403F3F] font-semibold text-xl px-10 py-4 m-3 ">National News</NavLink>
                </div>

                <div className="leftSide">
                    {
                        catagories.map(catagory =>
                            <div className="block text-[#9F9F9F] text-xl font-medium my-8 ml-10"
                                key={catagory.id}>
                                <NavLink to="#" className="listDIV text[#403F3F] text-center pt-3" activeClassName="activeLink">
                                  
                                        {catagory.name}
                                   
                                </NavLink>
                            </div>)
                    }
                </div>

            </div>

            <div>
                {
                    news.map(blogNews =>
                        <Link key={blogNews.id}>

                            <div className="">
                                <img src={blogNews.news_img} alt="" className="w-[267px] h-[150px]" />
                            </div>
                            <h3 className="text-xl font-semibold my-6">{blogNews.news_title}</h3>
                            <div className="flex justify-between my-2">
                                <span className="text-[#403F3F] font-medium text-base">{blogNews.news_catagory}</span>
                                <div className="flex mx-auto items-center gap-2 ">
                                    <SlCalender />
                                    <p className="text-[#9F9F9F] font-medium text-base">{moment(blogNews.published_date).format("ll")}</p>
                                </div>
                            </div>
                        </Link>)
                }



            </div>
        </>
    );
};

export default LeftSideNav;