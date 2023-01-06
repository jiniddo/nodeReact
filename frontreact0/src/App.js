

import Header from './component/Hd';
import Main from './component/Main';
import Worksswiper from './component/Swiper';
import AboutMe from './component/AboutMe';
import Preinterview from './component/Preinterview';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Main contentid="mainpage"></Main>
      <Worksswiper contentid="porfolio" title=""></Worksswiper>      
      <AboutMe contentid="aboutMe" objnm="aboutMe"  title="" ></AboutMe>
      <Preinterview contentid="preInterview" objnm="preinterview"   title="" ></Preinterview>
      <Contact contentid="contact" title=""></Contact>
      <Footer></Footer>
    </div>
  );
}



export default App;
