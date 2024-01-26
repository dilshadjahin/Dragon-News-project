import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const News = () => {
    return (
        <div>

            <Header/>

            <div className="grid md:grid-cols-4">

                <div className="col-span-3">

                <h2 className="text-5xl">hereis our news details</h2>

                </div>
                <div>
                    <RightSideNav/>
                </div>

            </div>
            
        </div>
    );
};

export default News;