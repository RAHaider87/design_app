import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import CareerAndFinance from './components/career&finance';
import Family from './components/family';
import Food from './components/food';
import Health from './components/health';
import Home from './components/home';
import Wellness from './components/wellness';
import SexAndRelationship from './components/sex&relationship';
import Beauty from './components/beauty';
import './App.css';
import Blog from './components/blog';
import PrivacyPolicy from './components/privacyPolicy';
import CookiePolicy from './components/cookiePolicy';
import TermsAndConditions from './components/termsAndconditions';
import MessageChefs from './components/chefs/messageChefs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<MessageChefs/>}></Route>
       <Route path='/terms' element={<TermsAndConditions/>}></Route>
       <Route path='/cookie' element={<CookiePolicy/>}></Route>
       <Route path='/privacy' element={<PrivacyPolicy/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/health' element={<Health/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/career&finance' element={<CareerAndFinance/>}></Route>
        <Route path='/family' element={<Family/>}></Route>
        <Route path='/food' element={<Food/>}></Route>
        <Route path='/wellness' element={<Wellness/>}></Route>
        <Route path='/sex&relationship' element={<SexAndRelationship/>}></Route>
        <Route path='/beauty' element={<Beauty/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
