import { useEffect, useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'


const MiddleNav = () => {

    const [rating, setRating] = useState(0)
    const [latestNews, setLatestNews] = useState([]);

    // viewer function

    const [viewerCount, setViewerCount] = useState(() => {
        const storedCount = localStorage.getItem('viewerCount');
        return storedCount ? parseInt(storedCount, 10) : 0;
      });

    const incrementViewerCount = () => {
        setViewerCount((prevCount) => {
            const newCount = prevCount + 1;
            localStorage.setItem('viewerCount', newCount.toString());

            return newCount;
        }
        );
      };

    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value, index) => console.log(value, index);

    useEffect(() => {
        fetch('latestNews.json')
            .then(res => res.json())
            .then(data => setLatestNews(data))
    }, [])

    return (
        <div>

            <h2 className="text-2xl font-semibold p-4">Dragon News Home</h2>

            {/* news part-top  */}

            {
                latestNews.map(latestNewses => <div key={latestNewses.id} className="mx-4" >

                    {/* profile setting */}

                    <div className="flex justify-between bg-[#F3F3F3] p-4">

                        {/* profile  */}

                        <div className="flex justify-between gap-4 bg-[#F3F3F3]">

                            {/* profile pic */}

                            <div className="w-[56px] h-[56px] ">

                                <img src={latestNewses.author_profile} className="rounded-full" alt="" />

                            </div>

                            {/* profile-info */}

                            <div>

                                <p className="text-base font-semibold">{latestNewses.author_name}</p>
                                <span className="text-sm text-[#706F6F]">{latestNewses.published_date}</span>

                            </div>



                        </div>

                        {/* icon */}

                        <div className="flex gap-4">

                            <CiBookmark></CiBookmark>
                            <CiShare2></CiShare2>

                        </div>
                    </div>

                    {/*  */}

                    <Link onClick={incrementViewerCount} ><h2  className="text-lg font-semibold my-4"> {latestNewses.title}</h2></Link>
                    <img src={latestNewses.image_url} alt="" onClick={incrementViewerCount} />

                    {/* condition apply */}


                    {
                      latestNewses.details.length > 200 ?  
                       <p className="text-justify mt-6">{latestNewses.details.slice(0,200)} 
                       <Link to={`/news/${latestNewses.id}`} className="text-[#FF8C47] font-semibold text-lg mx-2" >Read More</Link>
                      </p>

                      : <p>{latestNewses.details}</p>

                    }

                   

                    {/* <button  className="text-[#FF8C47] font-semibold text-lg">Read More</button> */}

                    {/* ratings */}

                    <hr className="my-4" />
                    

                    <div className="flex">
                        <div className="flex w-full gap-4">
                            <Rating
                                 onClick={handleRating}
                                 onPointerEnter={onPointerEnter}
                                 onPointerLeave={onPointerLeave}
                                 onPointerMove={onPointerMove}
                             
                        
                            /* Available Props */
                            />
                            <span className="text-xl mt-2 font-normal">{latestNewses.rating.number}</span>

                        </div>
                        <div className="flex gap-3  mx-auto items-center text-lg">
                            <FiEye/>
                            <div>

                           <p>{viewerCount}</p>

                            </div>

                        </div>

                    </div>

                </div>)
            }

              {/* news part-bottom  */}

            


              




        </div>
    );
};

export default MiddleNav;