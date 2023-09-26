import Card from '../card/Card';
import './favourite.css';

import img01 from './../../img/images/promo-01.jpg';
import img02 from './../../img/images/promo-02.jpg';

const Favourite = () => {
    return ( 
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <div className="favourite__title">
                        <div className="title-2 favourite-t">Young’s Favourite</div>
                    </div>
                </div>
                <div className="favourite__cards">
                    <Card title="Trending on instagram" img={img01}/>
                    <Card title="All Under $40" img={img02} />
                </div>
            </div>
        </section>
     );
}
 
export default Favourite;