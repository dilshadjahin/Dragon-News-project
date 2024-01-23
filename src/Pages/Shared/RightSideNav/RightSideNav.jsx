import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bgImage from '../../../assets/bg1.png'

const RightSideNav = () => {
    return (
        <>


            {/* // google & github login */}

            <div className="p-4 space-y-3">

                <h2 className="text-2xl font-semibold">Login With</h2>
                <div>

                    <button className="btn btn-outline w-full"> <FaGoogle />Log In With Github</button>
                </div>

                <div>

                    <button className="btn btn-outline w-full"> <FaGithub /> Log In With Github</button>
                </div>

            </div>

            {/* find us on */}

            <div className="p-4 ">

                <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
                <div className="flex px-4 py-3 mx-auto items-center gap-2 border rounded-t-lg">

                    <a href="" className="bg-gray-200 p-2 rounded-full"><FaFacebookF className=" " /></a>
                    <span className="text-base font-medium">Facebook</span>
                </div>

                <div className="flex px-4 py-3 mx-auto items-center gap-2 border-x">

                    <a href="" className="bg-gray-200 p-2 rounded-full"><FaTwitter /></a>
                    <span className="text-base font-medium">Twiter</span>
                </div>

                <div className="flex px-4 py-3 mx-auto items-center gap-2 border rounded-b-lg">

                    <a href="" className="bg-gray-200 p-2 rounded-full"><FaInstagramSquare /></a>
                    <span className="text-base font-medium">Instagram</span>
                </div>

            </div>

            {/* q-zone */}

            <div className="m-4 bg-gray-100 ">

                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4 ">Q-Zone</h2>

                    <div>

                        <img src={qZone1} alt="" />
                    </div>

                    <div>

                        <img src={qZone2} alt="" />
                    </div>

                    <div>

                        <img src={qZone3} alt="" />
                    </div>
                </div>



            </div>

            {/* card */}

            <div className="m-4 h-[600px] w-[240px] relative cover" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat" }}>
                <div className="w-full h-[500px]  bg-black opacity-[0.8]">

                </div>
                <div className="px-4 py-16 items-center w-full h-full text-center absolute top-0">
                    <h2 className="text-2xl text-white font-bold ">Create an Amazing Newspaper</h2>
                    <p className="text-white text-base font-normal leading-6 my-6 ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="bg-[#D72050] text-white font-normal px-6 py-3 rounded">Learn More</button>
                </div>

            </div>


        </>
    );
};

export default RightSideNav;