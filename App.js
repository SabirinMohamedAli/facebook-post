import Post from './Post';
import imge from './images/1.jpg';
import imges from './images/14.jpg';
import imgess from './images/3.jpg';
import img from './images/4.jpg';

import imgg from './images/5.jpg';
import imggg from './images/6.jpg';
import imgc from './images/7.jpg';
import imgs from './images/8.jpg';
import imgss from './images/11.jpg';
import imgsss from './images/12.jpg';
import imgssss from './images/13.jpg';
import imgssses from './images/15.jpg';








const App = () => {
  return (
    <div>
       <Post
        image= {imge}
        username="Sabirin Mohamed Ali  "
       
      timestap="10hr"
      
        context=" can vary widely depending on cultural, social, and familial beliefs. "
        contextImage= {imges}
      />

<Post
        image= {imgess}
        username="Juweria Dahir Apdirahman "
       
      timestap="3hr"
      
        context=" Define what you want to achieve with your reading"
        contextImage= {img}
      />
       <Post
        image= {imgg}
        username="Fatima Mohidin Ahmed "
       
      timestap="1d"
      
        context="happiness is personal and can mean different things to different people.  "
        contextImage= {imggg}
      />

<Post
        image= {imgss}
        username="Suhayla Mohamed Ahmed "
       
      timestap="3hr"
      
        context=" Define what you want to achieve with your reading"
        contextImage= { imgsss}
      />







<Post
        image= {imgssss}
        username="saam yonis Ahmed "
       
      timestap="3hr"
      
        context=" Define what you want to achieve with your reading"
        contextImage= { imgssses}
      />































       <Post
        image= {imgc}
        username="Caishaa Farah Isse  "
       
      timestap="20hr"
      
        context=" Understanding that it's okay to feel angry is the first step towards managing your emotions effectively."
        contextImage= {imgs}
      />

    </div>
  );
};

export default App;
