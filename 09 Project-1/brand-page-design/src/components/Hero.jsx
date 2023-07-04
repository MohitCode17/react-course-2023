const Hero = () => {
  return (
    <main className="hero wrapper">
        <div className="hero_content">
            <h1>STEP UP YOUR GAME ELEVATE YOUR<br/>STYLE</h1>
            <p>
                WE UNDERSTAND THE IMPORTANCE OF A PERFECT FIT, WHICH IS WHY WE PRIORITIZE BOTH STYLE AND COMFORT IN OUR SHOE.
            </p>

            <div className="hero_btn">
                <button>Shop now</button>
                <button>Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="brand_icons">
                    <a href="https://www.amazon.in/" target="_blank"><img src="./images/amazon.png" alt="amazon" /></a>
                    <a href="https://www.flipkart.com/" target="_blank"><img src="./images/flipkart.png" alt="flipkart" /></a>
                </div>
            </div>
        </div>
        <div className="hero_banner_img">
            <img src="./images/hero-img.png" alt="" />
        </div>
    </main>
  )
}

export default Hero