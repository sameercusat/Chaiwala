import "./styles/App.scss";
import IntroVideo from "./components/IntroVideo";
import './styles/intro.scss';
import './styles/section.scss';
import './styles/misc.scss';
import './styles/footer.scss';
import Section from './components/Section';
import Footer from './components/Footer';
import Loader from './components/Loader';
import pc1 from "./assets/academy.png";
import pc2 from "./assets/story.png";
import pc3 from "./assets/in-the-news.gif";
import pc4 from "./assets/franchise.gif";
import pc5 from "./assets/locations.png";
import pc6 from "./assets/image2.png";
import pc7 from "./assets/mba-cares.gif";
import pc8 from "./assets/image1.png";
import pc9 from "./assets/image3.png";
import data from "./data/data.json";
import Misc from "./components/Misc";
import { useEffect, useState } from "react";
const yellow="#fff100",pink="#ed1e79",white="#fff",brown="#6d3d0f";
function App() {
  useEffect(() => {
    window.addEventListener("mousemove",dotCursor);
    return () => {
      window.removeEventListener("mousemove",dotCursor);
    }
  }, [])
  const[isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    const loadingTimeout =setTimeout(()=>{
      setIsLoading(false);
    },4000);
    return () => {
      clearTimeout(loadingTimeout);
    }
  }, []);

  const {freshTopic,freshTopic2,tedTalks,franchise,album,courses,barat,chaiwala,map}=data;
  const dotCursor=(e)=>
  {
    const cursor=document.querySelector(".cursor");
    if(cursor)
    {
    cursor.style.top=`${e.pageY-14}px`;
    cursor.style.left=`${e.pageX-14}px`;
    const element=e.target;
    if(element.getAttribute("data-cursorpointer"))
    {
      cursor.classList.add("cursorHover");
    }
    else if (element.getAttribute("data-cursorpointerm"))
    {
      cursor.classList.add("cursorHoverMini");
    }
    else
    {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };
}
  
  return(
  <>
{isLoading ? (<Loader/>):(<><IntroVideo/> <Section h3={freshTopic.heading} text={freshTopic.text} btnText={freshTopic.btn} ImgSrc={pc1} HasBtn={true} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink} imgSize="65%"/>
<Section h3={freshTopic2.heading} text={freshTopic2.text} btnText={freshTopic2.btn} ImgSrc={pc2} HasBtn={true} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink} imgSize="50%"/>
<Section h3={tedTalks.heading} text={tedTalks.text} btnText={tedTalks.btn} ImgSrc={pc3} HasBtn={true} backgroundColor={yellow} headingColor={pink} textColor={pink} btnBgColor={pink} btnColor={yellow}/>
<Section h3={franchise.heading} text={franchise.text} btnText={franchise.btn} ImgSrc={pc4} HasBtn={true} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow}/>
<Section h3={map.heading} text={map.text} ImgSrc={pc5} HasBtn={false} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={brown} btnColor={yellow}/>
<Section h3={courses.heading} text={courses.text} btnText={courses.btn} ImgSrc={pc6} HasBtn={true} backgroundColor={yellow} headingColor={pink} textColor={pink} btnBgColor={pink} btnColor={yellow} imgSize="30%"/>
<Section h3={album.heading} text={album.text} btnText={album.btn} ImgSrc={pc7} HasBtn={true} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow}/>
<Section h3={barat.heading} text={barat.text} btnText={barat.btn} ImgSrc={pc8} HasBtn={true} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnBgColor={yellow} btnColor={pink} imgSize="50%"/>
<Section h3={chaiwala.heading} text={chaiwala.text} btnText={chaiwala.btn} ImgSrc={pc9} HasBtn={true} backgroundColor={white} headingColor={pink} textColor={brown} btnBgColor={brown} btnColor={yellow}/>
<Footer/>
<Misc/></>)
}
</>
  
);
};

export default App;
