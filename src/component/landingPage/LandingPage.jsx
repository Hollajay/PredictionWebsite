import { Link } from 'react-router-dom'
import './landingpage.css'

export const LandingPage = () => {
  return (
   <div className="container">
    <div className="background_div_img1"><img src="https://i.postimg.cc/bvwHPtNc/Polygon-3-3.png" alt="" /></div>
    <div className="background_div_img2"><img src="https://i.postimg.cc/vBLQvcfT/Polygon-1.png" alt="" /></div>
    <div className="background_div_img3"><img src="https://i.postimg.cc/W458q7f1/Polygon-2.png" alt="" /></div>

 <nav className="navbar">
  <div className="headerLogo">
   <Link to="/"><img src="https://i.postimg.cc/d34N6BL3/Logo.png" alt="" /></Link> 
  </div>
  <div className="nav_lists_div">
    <ul>
    <li ><Link to='/predict' className="nav_list">Predict</Link> </li>
    <li ><Link to='/about' className="nav_list">About</Link></li>
    </ul>
  </div>
 </nav>


   <section className="text_content_section">
   <h1 className='text_header'>Welcome to Precision Play! </h1>
   <p>At Precision Play, we offer a cutting-edge football prediction platform that lets you explore and analyze the outcomes of past football matches through a unique blend of historical data and predictive modeling. Whether you are a fan, a statistician, or just curious about football dynamics, our tool is designed to enhance your understanding of the game uncertainties and probabilities.</p>
   <h2 className='text_header_2'>Discover the Past, Understand the Future </h2>
   <p>Our platform allows you to select any past match from our extensive database. With just a few clicks, you can view both our model prediction and the actual result of the game. This feature not only provides insights into the predictive capabilities of our algorithms but also lets you compare, learn, and perhaps even refine your own predictions.</p>
   <h2 className='text_header_3'>How It Works</h2>
   <ul >
    <li className="text_content_list">1.  Choose Your Match: Navigate through our user-friendly interface to select any historical match you are interested in.</li>
    <li className="text_content_list"> 2.Get Instant Insights: Once a match is selected, our model processes numerous data points to provide you with a detailed prediction of the outcomes.</li>
    <li className="text_content_list"> 3.Compare and Analyze: View the predicted versus actual results side by side. Dive deeper with our analysis tools to understand the prediction dynamics.</li>
   </ul>
   </section>

   <div className="select_match_div">
    <h1 className='select_match_header'>Select the match</h1>
    <select name="" id="" className='select_option_div'>
       <option value="">Valencia - FC Bacelona</option>
       <option value="">Arsenal - chelsea</option>
       <option value="">Mancity - Liverpool</option>
       <option value="">Realmadrid - Napoli</option>
       <option value=""></option>
    </select>
    <div className='precision_div'>
        <div className='precision_sub_div'>
            <p>Precision Play Prediction</p>
            <h3>LOCAL WINS</h3>
            </div>
        <div className='precision_sub_div'>
            <p>Actual Result </p>
            <h3>LOCAL WINS </h3>
        </div>

    </div>
   </div>




   </div>
  )
}
