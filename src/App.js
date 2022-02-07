import './App.css';
import NavInshorts from './components/NavInshorts';
import { useEffect, useState } from "react";
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apikey from './data/config';
import Footer from './components/Footer/Footer';

function App() {

 const[category, setCategory] = useState("General");

 const[newsArray, setNewsArray] = useState([]);
 const[newsResults, setNewsResults] = useState();

  const[loadmore,setLoadmore]=useState(15);

 //code for api
 // async function is used return promise and await is used to wait for a promise and to ensure that only asynchronous data is received before continuing.
 // axios is a promise based js library used to send asynchronous http request.
 //Asynchronous means that the script will send a request to the server, and continue it's execution without waiting for the reply. As soon as reply is received a browser event is fired, which in turn allows the script to execute associated actions

 const newsApi = async () => {
   try{
    
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`);
    
    console.log(news);
    setNewsArray(news.data.articles);
    setNewsResults(news.data.totalResults);
    //console.log(news.data.totalResults);

   } catch (error){
     console.log(error);
   }
   
 };

 // for calling newsApi 
//  useeffect is fired when categories and news effects are changing 
// so it fires newsApi function to reinitialize state and news results. 
 useEffect(() => {
 newsApi();
    // eslint-disable-next-line
 },[newsResults,category,loadmore]);

  return (
    <div className="App">
     <NavInshorts setCategory={setCategory}/>

     <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore}/>
     <Footer/>
    </div>
  );
}

export default App;
