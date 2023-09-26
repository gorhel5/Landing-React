import './App.css';
import Arrivels from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';

export default function App() {

  return (
    <div>
      <Header />
      <Promo />
      <Brands />
      <Arrivels />
    </div>
   
  )

}