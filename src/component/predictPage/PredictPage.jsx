import { Link } from 'react-router-dom'
import Barchart from './barchart/Barchart'
import './predictpage.css'


export const PredictPage = () => {
  return (
   <div className="predict_container">
    <div className='background_position_img1'><img src="https://i.postimg.cc/xT8zqRyC/Polygon-3.png" alt="" /></div>
    <div className='background_position_img2'><img src="https://i.postimg.cc/W458q7f1/Polygon-2.png" alt="" /></div>
    <div className='background_position_img3'><img src="https://i.postimg.cc/YqN1m3vB/Polygon-3-4.png" alt="" /></div>

<div className='predict_header_div'>
  <div className='header_logo_div'><Link to="/"><img src="https://i.postimg.cc/d34N6BL3/Logo.png" alt="" /></Link></div>
  <div className='predict_img_div'><img src="https://i.postimg.cc/VNQrGcyr/Polygon-6.png" alt="" />
  <h1 className='predict_header_text'>PRECISION PLAY</h1>
  </div>
  </div>


     <div className="predict_container_flex_div">

          <div className="left_section_div">
            <section className="explore_content_section">
            <h1>EXPLORE THE FUTURE OF FOOTBALL THROUGH DATA</h1>
            <p> 
                  Step into the arena of predictive analytics with our cutting-edge Football Result Prediction project.
                  By harnessing the power of extensive team data, our models analyze past performances to forecast upcoming
                  match outcomes: victory, defeat, or draw. Whether you are a football fan, data enthusiast, or curious observer, 
                  our project offers a unique window into how data science is transforming sports analytics. Discover how we use 
                  advanced algorithms and machine learning techniques to not only predict the results but also enhance understanding 
                  of team dynamics and game strategy. Join us to see how data predicts the next big win!
            </p>
            </section>

            <section className="leagues_section">
              <h1 className='leagues_header_text'>LEAGUES</h1>
                <div className="league_logo_div">
                    <div className="logo_image_div"><img src="https://i.postimg.cc/ydjR0LbF/image-31.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/bvQkwy0V/image-22.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/VLGFxk4j/image-28.png" alt="" className="league_logo" /></div>       
                    <div className="logo_image_div"><img src="https://i.postimg.cc/xT8dBW8B/image-24.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/90mk2gw4/image-25.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/RZgxvD0s/image-29.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/1z4hXrn9/image-19.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/25JpZLhn/image-20.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/yxcDDtph/image-21.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/xTVkwjq6/image-23.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/GmqHTkKf/image-26.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/FHBhQGDh/image-27.png" alt="" className="league_logo" /></div>
                    <div className="logo_image_div"><img src="https://i.postimg.cc/g2PDSHhy/image-30.png" alt="" className="league_logo" /></div>
                </div>
            </section>

            <section className="machine_learning_models">
              <h1 className='machine_learning_header'>MACHINE LEARNING MODELS </h1>

              <div className='machine_learning_sub_container'>
              <div className="machine_learning_content">
                <div className="machine_image_div"><img src="https://i.postimg.cc/nLw8XSp1/image-39.png" alt="" className="machine_image" /></div>
                  <h2 className='machine_learning_text'>Logistic Regression</h2>
              </div>
              <div className="machine_learning_content">
                <div className="machine_image_div"><img src="https://i.postimg.cc/7LB4gYM0/image-40.png" alt="" className="machine_image" /></div>
                  <h2 className='machine_learning_text'>Neuronal Networks</h2>
              </div>
              <div className="machine_learning_content">
                <div className="machine_image_div"><img src="https://i.postimg.cc/3RPPByy4/image59.png" alt="" className="machine_image" /></div>
                  <h2 className='machine_learning_text'>XGBoost</h2>
              </div>
              <div className="machine_learning_content">
                <div className="machine_image_div"><img src="https://i.postimg.cc/XYk4Ygr2/image-41.png" alt="" className="machine_image" /></div>
                  <h2 className='machine_learning_text'>SVM</h2>
              </div>
              <div className="machine_learning_content">
                <div className="machine_image_div"><img src="https://i.postimg.cc/mgxqmFW6/image-42.png" alt="" className="machine_image" /></div>
                  <h2 className='machine_learning_text'>Random Forest</h2>
              </div>
              <div className="machine_learning_content">
                <div className="machine_image_div"><img src="https://i.postimg.cc/DfRnK0K1/238672ar-no-bg-new-1.png" alt="" className="machine_image" /></div>
                  <h2 className='machine_learning_text'>Light GBM</h2>
              </div>
              </div>
            </section>
          </div>

          <div className="right_section_div">
            <section className='team_data_section'>
              <h1 className="team_data_header">TEAM DATA</h1>
               <div className="team_data_container">
                <div className='stats_detail_div'>
                <div className="word darkgreen">fouls</div>
      <div className="word darkblue">game_draw</div>
      <div className="word lemongreen">goals</div>
      <div className="word darkblue">shots_insidebox</div>
      <div className="word darkblue">corners</div>
      <div className="word darkblue">ball_safe</div>
      <div className="word darkblue">dangerous_attacks</div>
      <div className="word lemongreen">yellowcards</div>
      <div className="word darkblue">saves</div>
      <div className="word darkgreen">redcards</div>
      <div className="word darkgreen">penalties</div>
      <div className="word darkblue">succesful_passes</div>
      <div className="word darkblue">offsides</div>
      <div className="word darkgreen">attacks</div>
      <div className="word darkgreen">shots</div>
      <div className="word darkblue">intercepts</div>
      <div className="word lemongreen">passes</div>
      <div className="word darkgreen">shots_off_target</div>
      <div className="word darkblue">game_lost</div>
      <div className="word lemongreen">injuries</div>
      <div className="word lemongreen">substitutions</div>
      <div className="word darkblue">game_won</div>

                </div>


               <div className="details_data_div">
                  <div className="top_details_div">
                    <h1>Shots</h1>
                    <p className='details_p'>season</p>
                    <div className='top_sub_details'>
                      <p>Sum </p>
                      <hr className='top_detail_break_line'/>
                      <p>Avg</p>
                      <hr className='top_detail_break_line'/>
                      <p>Std</p>
                      
                    </div> 
                  </div> 
                  <hr className='details_middle_line'/>     
                     <div className="bottom_details_div">
                    <p className='details_p'>Last 5 matches</p>
                    <div className='bottom_sub_details'>
                      <p>Sum </p>
                      <hr className='bottom_detail_break_line'/>
                      <p>Avg</p>
                      <hr className='bottom_detail_break_line'/>
                      <p>Std</p>
                      
                    </div>
                  </div>
                  <hr className=' last_line'/>
               </div>
               </div>

            </section>

            <section className="howToPredict_section">
              <h1 className="howToPredict_header">HOW WE PREDICT?</h1>

              <div className="howToPredict_images_container">
                <div className="predictImages_sub_div1">
                  <div className="predict_image_div"><img src="https://i.postimg.cc/VknCwh4y/image-16.png" alt="" /></div>
                  <div className="predict_image_div"><img src="https://i.postimg.cc/25xLbBP2/Mediamodifier-Design-Template-1.png" alt="" /></div>
                </div>
                <div className="predictImages_sub_div2">
                <div className="predict_image_div"><img src="https://i.postimg.cc/d1pCwKMY/image-33.png" alt="" /></div>
                <div className="predict_image_div"><img src="https://i.postimg.cc/d1pCwKMY/image-33.png" alt="" /></div>
                </div>
                <div className="predictImages_sub_div3">
                <div className="predict_image_div"><img src="https://i.postimg.cc/Gmmm7SNJ/Arrow-9.png" alt="" /></div>
                <div className="predict_image_div"><img src="https://i.postimg.cc/D0c75qPM/Arrow-8.png" alt="" /></div>
                </div>
                <div className="predictImages_sub_div4">
                <div className="predict_image_div4"><img src="https://i.postimg.cc/zGvqSHbx/image-7.png" alt="" /></div>
                </div>
                <div className="predictImages_sub_div5">
                <div className="predict_image_div5"><img src="https://i.postimg.cc/bw4fxCjv/Arrow-10.png" alt="" /></div>
                <div className="predict_image_div5"><img src="https://i.postimg.cc/Ssq5dH1m/Arrow-11.png" alt="" /></div>
                <div className="predict_image_div5"><img src="https://i.postimg.cc/FH3D6DLz/Arrow-12.png" alt="" /></div>
                </div>
                <div className="predictImages_sub_div6">
                <div className="predict_image_div6"><img src="https://i.postimg.cc/VknCwh4y/image-16.png" alt="" /></div>
                <div className='predict_image_double_div6 bl_wh_cl'>
                <div className="predict_image_6"><img src="https://i.postimg.cc/VknCwh4y/image-16.png" alt="" /></div>
                <div className="predict_image_6"><img src="https://i.postimg.cc/25xLbBP2/Mediamodifier-Design-Template-1.png" alt="" /></div>
                </div>
                <div className="predict_image_div6 bl_wh_cl"><img src="https://i.postimg.cc/25xLbBP2/Mediamodifier-Design-Template-1.png" alt="" /></div>
                </div>
                <div className="predictImages_sub_div7">
                <div className="predict_image_div7"><img src="https://i.postimg.cc/MGsP0XBm/image-35.png" alt="" /></div>
                <div className="predict_image_div7 bl_wh_cl"><img src="https://i.postimg.cc/765k0F5b/DRAW.png" alt="" /></div>
                <div className="predict_image_div7 bl_wh_cl"><img src="https://i.postimg.cc/MGsP0XBm/image-35.png" alt="" /></div>
                </div>
              </div>
             
            </section>

            <section className="barChart_section">
              <h1 className="barChart_header">RESULT</h1>
              <Barchart/>
            </section>
          </div>
     </div>
   </div>
  )
}
