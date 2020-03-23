import Footer from "../components/footer";
import Header from "../components/header";
import SearchContainer from "../components/searchContainer";
import Details from "../components/details";
import Desktop from "../components/desktop";
import Mobile from "../components/mobile";
import MobileHeader from "../components/mobileHeader";

const App = () => {
  return (
    <div>
      <Desktop>
        <Header />
        <SearchContainer />
        <Details />
        <Footer />
      </Desktop>
      <Mobile>
        {/* <Header /> */}
        <MobileHeader />
        <SearchContainer />
        <Details />
        <Footer />
      </Mobile>
    </div>
  );
};

export default App;
