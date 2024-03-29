import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import MiddleNav from "../Shared/MiddleNav/MiddleNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 border">

                <div className="border">
                    <LeftSideNav/>
                </div>
                <div className="lg:col-span-2 border">
                    <MiddleNav/>
                    {/* <h2 className="text-4xl">News comming soon</h2> */}

                </div>
                <div className="border">
                    <RightSideNav/>
                </div>
            </div>
            
        </div>
    );
};

export default Home;