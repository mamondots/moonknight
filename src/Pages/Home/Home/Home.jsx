import Banner from "../Banner/Banner";
import DeliverPage from "../DeliverPage/DeliverPage";
import ManCate from "../ManCate/ManCate";
import Products from "../ProductsPage/Products/Products";
import Treanding from "../Treanding/Treanding";
import WomanCate from "../WomanCate/WomanCate";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WomanCate></WomanCate>
            <Products></Products>
            <ManCate></ManCate>
            <Treanding></Treanding>
            <DeliverPage></DeliverPage>
        </div>
    );
};

export default Home;