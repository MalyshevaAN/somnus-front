
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import StarsBackground from './components/stars';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Main from './pages/Main';
import { AuthProvider } from "./components/AuthContext";
import ProfilePage from './pages/Myspace';
import SendSon from './pages/NewSon';
import RandomSon from './pages/RandomSon';



const Home = () => {
  return (
    <>
      <Header />
      <StarsBackground />
      <div className='container-home'>
        <div className='info'>
          <div className='text'>
            <p>Добро пожаловать в онлайн форум-трекер снов! Место, где каждый может поделиться своими снами со всем миром</p>
            <p>Наш проект создан для общения и изучения самого таинственного и непонятного, что дарит нам наше подсознание.</p>
            <p>Ищите вдохновения? Вам приснилось что-то, чем срочно бы хотелось поделиться,
              ведь сюжет достоин Оскара за лучший сценарий? Или просто интересно, что сегодня снилось вашему коллеге?</p>
            <p>Тогда регистрируйтесь и отправляйтесь в ваше удивительное путешествие в мир снов: читайте, пишите и, конечно, высыпайтесь!</p>
            <p>А если пожелаете - наш проект позволит отследить взаимосвязь между настроением
              и самочувствием за день и качеством соответствующего сна. Изучайте, размышляйте, делитесь и заботьтесь о своём самочувствии.</p>
            <p>Спокойной ночи или доброго утра! С любовью, команда Somnus!</p>
          </div>
          <div className='btns-enter-register'>
            <Link to='/login' id='btn_enter'>войти</Link>
            <Link to='/registration' id='btn_reg'>зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/SendSon" element={<SendSon />} />
        <Route path="/RandomSon" element={<RandomSon />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

