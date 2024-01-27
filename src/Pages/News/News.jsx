import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const News = () => {
    const newses = useLoaderData();
    const {id} = useParams();
    const AllNews = newses.find((news) => news.id === parseInt(id));
    console.log(AllNews);
    

    return (
        <div>

            <Header/>

            <div className="grid md:grid-cols-4 max-w-7xl mx-auto">

                <div className="col-span-3">

                <h2 className="text-lg font-semibold text-start">Dragon News</h2>
                <div className="">
                    <img src={AllNews?.image_url} alt="" className="my-6"/>
                    <p className="leading-6">{AllNews.details}</p>

                </div>

                </div>
                <div>
                    <RightSideNav/>
                </div>

            </div>
            
        </div>
    );
};

export default News;