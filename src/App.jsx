import "./App.css";
import One from "./components/one";
import MiniCard from "./components/mini-card";
import Card from "./components/card";
import Button from "./components/button";
import Contact from "./components/contact";
import Two from "./components/two";
import logo from "@/assets/IMAGE (10).svg";
import call from "@/assets/IMAGE (11).svg";
import foto1 from "@/assets/Group (4).png";
import foto2 from "@/assets/IMAGE (84).png";
import foto3 from "@/assets/IMAGE (85).png";
import foto4 from "@/assets/IMAGE (86).png";
import foto5 from "@/assets/IMAGE (87).png";
import foto6 from "@/assets/IMAGE (88).png";
import foto7 from "@/assets/IMAGE (89).png";
import foto8 from "@/assets/Frame (29).png";
import foto9 from "@/assets/IMAGE (90).png";
import foto10 from "@/assets/IMAGE (91).png";
import foto11 from "@/assets/IMAGE (92).png";
import foto12 from "@/assets/Group (5).png";
import foto13 from "@/assets/IMAGE (93).png";
import foto14 from "@/assets/IMAGE (94).png";
import foto15 from "@/assets/Frame (7).svg";
import foto16 from "@/assets/Frame (8).svg";
import foto17 from "@/assets/Frame (9).svg";

export default function App() {
  return (
    <>
      <div>
        <header>
          <nav>
            <img src={logo} className="invis" alt="" />
            <div className="navDivLeft">
              <img src={logo} alt="" />
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Pages</p>
              <p>Contact</p>
            </div>
            <div className="navDivRight">
              <p>Cart (0)</p>
              <Button>
                {["Get a free quote", "#0075FF", "#fff", "15px 20px", "none"]}
              </Button>
            </div>
          </nav>
          <div className="bigHead">
            <div className="leftHead">
              <h1>Quality cleaning for your home</h1>
              <p>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="leftHeadMini">
                <Button>
                  {["Get a free quote", "#0075FF", "#fff", "20px 30px", "none"]}
                </Button>
                <Contact>{[call]}</Contact>
              </div>
            </div>

            <img src={foto1} alt="" />
          </div>
        </header>
    <section>
    <div className="servHead">
      <h2>How our service works?</h2>
      <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
      <div className="servCard">
        <One>{[foto2,'1. Schedule online','Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.']}</One>
        <One>{[foto3,'2. Pay online easily','Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.']}</One>
        <One>{[foto4,'3. Get your house cleaned','Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.']}</One>
      </div>
      <div className="btnDiv">
        <Button>{["Get a free quote", "#0075FF", "#fff", "20px 30px", "none"]}</Button>
        <Button>{["Explore services", "#fff", "black", "20px 30px", "1px solid grey"]}</Button>
      </div>
    </div>

    </section>

    <section>

      <div className="secondSec">
        <h2>Our cleaning services have <br /> no comparison</h2>
        <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie <br /> sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.</p>
        <div className="servCard">
          <Two>{[foto5,'clients','3,480+']}</Two>
          <Two>{[foto6,'Jobs done','12,540+']}</Two>
          <Two>{[foto7,'Employees','100+']}</Two>
        </div>
        <img src={foto8} alt="" />
      </div>

    </section>

    <section>
      <div className="thSec">
        <div className="txtBtn">
          <h2>Take a look at our <br /> professional services</h2>
         <Button>{["Explore services", "#fff", "black", "13px 20px", "1px solid grey"]}</Button>
        </div>
        <div className="servCard">
          <Card>{[foto9,'House cleaning','Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est. ']}</Card>
          <Card>{[foto10,'Office cleaning','Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.']}</Card>
          <Card>{[foto11,'Industrial cleaning','Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.']}</Card>

        </div>
      </div>
    </section>

    <section>
     <div className="more">
       <img src={foto12} alt="" />

      <div className="rightAside">
        <p>Covid-19 sanitization</p>
        <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
        <p className="oneP">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
          <div className="leftHeadMini">
                <Button>
                  {["Get a free quote", "#0075FF", "#fff", "20px 15px", "none"]}
                </Button>
                <Contact>{[call,'#fff']}</Contact>
              </div>

      </div>
     </div>
    </section>


    <section className="oneMore">
      <img src={foto13} alt="" />
      <div className="miniOneMore">
        <h2>We cover all areas of <br /> your home or office</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div style={{display:'flex',alignItems:'center',gap:'50px'}}>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>
          <MiniCard>{[foto6,'Bedrooms']}</MiniCard>

        </div>
        <div style={{display:'flex',alignItems:'center',gap:'50px'}}>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>

        </div>
        <div style={{display:'flex',alignItems:'center',gap:'50px'}}>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>

        </div>
        <div style={{display:'flex',alignItems:'center',gap:'50px'}}>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>
          <MiniCard>{[foto6,'Bathrooms']}</MiniCard>

        </div>
        <Button>{["Get a free quote", "#0075FF", "#fff", "20px 30px", "none"]}</Button>
      </div>
    </section>

    <section className="numsec">
      <div className="leftaside">
        <h2>What makes us <br /> different?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque laudantiu sed ut.</p>
       <div className="bigNum">
         <div className="Num">
          <div className="miniNum">
            <h2>10 <span>+</span></h2>
          </div>
          <p>Years</p>
         
        </div>
        <div className="Num">
          <div className="miniNum">
            <h2>5k <span>+</span></h2>
          </div>
          <p>Clients</p>
         
        </div>
        <div className="Num">
          <div className="miniNum">
            <h2>20k <span>+</span></h2>
          </div>
          <p>Jobs done</p>
         
        </div>
        
       </div>
        <div>
           <Button>{["Get a free quote", "#0075FF", "#fff", "20px 30px", "none"]}</Button>
        </div>
      </div>
      <img src={foto14} alt="" />
    </section>

    <section>
        <div className="txtBtn">
         <div>
           <h2>Articles & resources</h2>
           <p>Lobortis mattis odio leo eget mauris met aliquet <br /> semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
         </div>
        <div style={{display:'flex',gap:'10px'}}>
           <Button>{["Get a free quote", "#0075FF", "#fff", "13px 20px", "none"]}</Button>
           <Button>{["Explore services", "#fff", "black", "13px 20px", "1px solid grey"]}</Button>
        </div>
        </div>
        <div className="two">
          <img src={foto16} alt="" />
          <img src={foto15} alt="" />

        </div>
    </section>

    <section className="thr">

  <div className="three">
        <div className="four">
        <h2>Request a free <br /> cleaning quote today</h2>
        <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
         <Contact>{[call]}</Contact>
         
      </div>
      <div className="five">
        <h2>Not convinced yet?</h2>
        <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
         <Button>{["Browse our packages", "#fff", "black", "20px 30px", "1px solid black"]}</Button>
      </div>
  </div>
  <div className="six">
    <img src={foto17} alt="" />
  </div>
    </section>

    <footer>

      <div className="foot1">
        <h3>Quality cleaning for <br /> your home</h3>
        <p>Lorem ipsum dolor sit amet cteturdo <br /> adipiscing elit, sed do eiusmo.</p>
      </div>
      <div className="foot1">
        <h3>Contact us</h3>
        <p>1827 Nickel Road, Los Angeles, <br /> CA, 90017, United States</p>
        <p>(414) 567 - 2109</p>
        <p>contact@cleaning.com</p>
      </div>
      <div className="foot1">
        <h3>Hours</h3>
        <h3>Monday to Friday</h3>
        <p>6:00 AM - 9:00 PM</p>
        <h3>Saturday & Sunday</h3>
        <p>(414) 567 - 2109</p>
        <p>8:00 AM - 8:00 PM</p>
      </div>
      <div className="foot1">
        <h3>Get a free estimate</h3>
        <h2>(414) 567 - 2109</h2>
        <p>Lorem ipsum dolor sit amet ectetur <br /> adipiscing elit, sed do eiusmod.</p>
        <h3>Saturday & Sunday</h3>
        <Button>{["Request a free quote", "#0075FF", "#fff", "15px 20px", "none"]}</Button>
        
      </div>
    </footer>

      </div>
    </>
  );
}
