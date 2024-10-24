import React from "react";
import "./mainbar.css";
import Skills from "./skills";
import PriceBox from "../pricebox/pricebox";
import Reputation from "../reputation/reputation";
import Image1 from "../images/photo-1573847792062-9292df56ebb4.jpeg";
import Image2 from "../images/photo-1603005901058-02e1cfc65270.jpeg";
import Image3 from "../images/photo-1617561310881-02761a4bee63.jpeg";
import Image4 from "../images/photo-1620001001197-2484c0bb0f3f.jpeg";
import Image5 from "../images/photo-1620403724159-40363e84a155.jpeg";
import Image6 from "../images/photo-1702672583069-1eb79ebeb8c4.jpeg";
import Image7 from "../images/photo-1702672583445-ee0bbff8a7bf.jpeg";
import Image8 from "../images/premium_photo-1668024966086-bd66ba04262f.jpeg";
import Image9 from "../images/premium_photo-1687151931576-dd919e62acb6.jpeg";

const MainBar = () => {
  return (
    <div>
      <div className="container">
        <h3>Tohidul</h3>
        <h3>kaiser...</h3>
        <p>Researcher , Digital Marketer , Graphics Designer</p>
      </div>
      <div className="about">
        <h2
          style={{
            fontFamily: "Tinos",
            fontSize: "38px",

            fontWeight: "400",
          }}
        >
          About Myself
        </h2>
        <p>-----------------------------</p>
        <p
          style={{
            fontFamily: "Fira-code",
            fontSize: "20px",
            color: "#808080",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          veniam corporis rerum iusto modi aliquid? Ipsum quod eum, asperiores
          sint ipsam molestiae enim accusamus. Itaque omnis ab tempora odio quos
          eveniet iusto, ad officia aspernatur in harum sapiente! Placeat
          facilis illum autem corporis aliquid soluta accusamus voluptas?
          Aperiam voluptatibus quaerat dolore perspiciatis labore sed
          repudiandae vero eos porro voluptas aut dignissimos hic alias libero
          perferendis, deleniti beatae quisquam unde dolores obcaecati
          architecto quis voluptate! Sapiente repellendus omnis tenetur
          assumenda optio!
        </p>
      </div>
      <div className="aboutSkill">
        <h2
          style={{
            fontFamily: "Tinos",
            fontSize: "38px",

            fontWeight: "400",
          }}
        >
          My Skills
        </h2>
        <p>-----------------------------</p>
        <Skills skill="Research" percentage="30%" />
        <Skills skill="Digital Marketing" percentage="90%" />
        <Skills skill="Graphics Designing" percentage="70%" />
      </div>

      <div className="aboutProject">
        <div
          style={{
            width: "100%",
            height: "40%",

            marginTop: "200px",
            backgroundColor: "#BDB76B",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              marginLeft: "90px",
              marginRight: "90px",
            }}
          >
            <div className="count">
              <p
                style={{
                  fontSize: "30px",
                  margin: "0",
                  fontFamily: "Fira-code",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                11+
              </p>
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "Tinos",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                }}
              >
                Partners
              </p>
            </div>
            <div className="count">
              <p
                style={{
                  fontSize: "30px",
                  margin: "0",
                  fontFamily: "Fira-code",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                55+{" "}
              </p>
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "Tinos",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                }}
              >
                Projects Done
              </p>
            </div>
            <div className="count">
              <p
                style={{
                  fontSize: "30px",
                  margin: "0",
                  fontFamily: "Fira-code",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                89+{" "}
              </p>
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "Tinos",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                }}
              >
                Happy Clients
              </p>
            </div>
            <div className="count">
              <p
                style={{
                  fontSize: "30px",
                  margin: "0",
                  fontFamily: "Fira-code",
                  fontWeight: "bold",
                  color: "#800000",
                }}
              >
                150+
              </p>
              <p
                style={{
                  fontSize: "22px",
                  fontFamily: "Tinos",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                }}
              >
                Meetings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="about"
        style={{ marginTop: "131px", marginBottom: "86px" }}
      >
        <h2>My Price</h2>
        <p>-------------------------------</p>
      </div>
      <div
        className="about"
        style={{
          height: "auto",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PriceBox level="Basic" GB="10" price="$10" />
        <PriceBox level="Pro" GB="50" price="$25" />
      </div>
      <div
        style={{
          height: "auto",
          width: "80vw",

          marginLeft: "250px",
          marginTop: "90px",
        }}
      >
        <div>
          <h1>My Reputation</h1>
          <p>-----------------------------------------</p>
          <Reputation />
          <Reputation />
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "80vw",

          marginLeft: "250px",
          marginTop: "90px",
        }}
      >
        <h1>My Clicks</h1>
        <p>---------------------------------</p>

        <div className="photo-container">
          <img src={Image1} />
          <img src={Image2} />
          <img src={Image3} />
          <img src={Image4} />
          <img src={Image5} />
          <img src={Image6} />
          <img src={Image7} />
          <img src={Image8} />
          <img src={Image9} />
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "80vw",

          marginLeft: "250px",
          marginTop: "90px",
        }}
      >
        <h1>Contact Me</h1>
        <p>----------------------------</p>
        <div style={{ marginTop: "30px", gap: "10px" }}>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <i
              className="fa-solid fa-location-dot"
              style={{
                fontSize: "45px",
                marginBottom: "5px",
                marginLeft: "4px",
              }}
            ></i>
            <span
              style={{
                marginLeft: "30px",
                fontSize: "20px",
                marginTop: "10px",
                color: "#A9A9A9",
                textDecoration: "uppercase",
              }}
            >
              Halisahar , CTG
            </span>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <i
              className="fa-solid fa-phone"
              style={{ fontSize: "40px", marginBottom: "5px" }}
            ></i>
            <span
              style={{
                marginLeft: "30px",
                fontSize: "20px",
                marginTop: "10px",
                color: "#A9A9A9",
              }}
            >
              Mobile : +8801914812964
            </span>
          </div>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <i
              className="fa-regular fa-envelope"
              style={{ fontSize: "40px", marginBottom: "5px" }}
            ></i>
            <span
              style={{
                marginLeft: "30px",
                fontSize: "20px",
                marginTop: "6px",
                color: "#A9A9A9",
              }}
            >
              {" "}
              E-mail : touhiudlkaiser90@gmail.com
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: "90px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ fontFamily: "tinos", fontSize: "25px" }}>
            Let's get in touch . Send me a message.
          </span>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "30px",
              backgroundColor: "#696969",
              fontSize: "18px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#FFFFFF",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="test@email.com"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "30px",
              backgroundColor: "#696969",
              fontSize: "18px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#FFFFFF",
            }}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "30px",
              backgroundColor: "#696969",
              fontSize: "18px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#FFFFFF",
            }}
          />
          <input
            type="text"
            name="Message"
            placeholder="Message"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "30px",
              backgroundColor: "#696969",
              fontSize: "18px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              color: "#FFFFFF",
            }}
          />
        </div>
        <div
          className="message"
          style={{
            width: "20%",
            height: "60px",
            border: "1px solid black",
            marginTop: "20px",
          }}
        >
          <div style={{ margin: "15px", display: "flex" }}>
            <i className="fa-solid fa-comment" style={{ fontSize: "35px" }}></i>
            <span style={{ marginLeft: "10px", marginTop: "5px" }}>
              SEND MESSAGE
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "500px",
          width: "80vw",

          marginLeft: "250px",
          marginTop: "90px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", marginTop: "200px", gap: "10px" }}>
            <i
              className="fa-brands fa-facebook"
              style={{ fontSize: "30px" }}
            ></i>
            <i
              className="fa-brands fa-instagram"
              style={{ fontSize: "30px" }}
            ></i>
            <i
              className="fa-brands fa-twitter"
              style={{ fontSize: "30px" }}
            ></i>
            <i
              className="fa-brands fa-snapchat"
              style={{ fontSize: "30px" }}
            ></i>
            <i
              className="fa-brands fa-linkedin"
              style={{ fontSize: "30px" }}
            ></i>
            <i
              className="fa-brands fa-pinterest-p"
              style={{ fontSize: "30px" }}
            ></i>
          </div>
          <p
            style={{
              marginTop: "100px",
              fontSize: "20px",
              fontFamily: "tinos",
              color: "#808000",
            }}
          >
            Designed by Waset....
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
