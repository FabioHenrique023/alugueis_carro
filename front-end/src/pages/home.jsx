import React from 'react';
import '../css/home.css';

import CarImagem from '../Assets/car-1.jpg';
import CarImagem2 from '../Assets/car-2.jpg';
import CarImagem3 from '../Assets/car-3.jpg';
import CarImagem4 from '../Assets/car-4.jpg';
import CarImagem5 from '../Assets/car-5.jpg';
import CarImagem6 from '../Assets/car-6.jpg';
import Blog1 from '../Assets/blog-1.jpg';
import Blog2 from '../Assets/blog-2.jpg';
import Blog3 from '../Assets/blog-3.jpg';
import Blog4 from '../Assets/blog-4.jpg';
import Blog5 from '../Assets/blog-5.jpg';

import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { PiStarThin } from "react-icons/pi";


function Home() {
  return (
    <>
    <body>
    <main>
      <article>
        {/* 
    - #HERO
  */}
        <section className="section hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h2 className="h1 hero-title">A maneira mais fácil de alugar um carro</h2>
              <p className="hero-text">
                Empresa localizada em Rio Verde!
              </p>
            </div>
            <div className="hero-banner" />
            <form action="" className="hero-form">
              <div className="input-wrapper">
                <label htmlFor="input-1" className="input-label">
                Carro, modelo ou marca
                </label>
                <input
                  type="text"
                  name="car-model"
                  id="input-1"
                  className="input-field"
                  placeholder="Qual carro você está procurando?"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="input-2" className="input-label">
                  Max. pagamento mensal
                </label>
                <input
                  type="text"
                  name="monthly-pay"
                  id="input-2"
                  className="input-field"
                  placeholder="Adicione um valor R$"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="input-3" className="input-label">
                  Ano
                </label>
                <input
                  type="text"
                  name="year"
                  id="input-3"
                  className="input-field"
                  placeholder="Add um ano de produção"
                />
              </div>
              <button type="submit" className="btn">
                Pesquisar
              </button>
            </form>
          </div>
        </section>
        {/* 
    - #FEATURED CAR
  */}
        <section className="section featured-car" id="featured-car">
          <div className="container">
            <div className="title-wrapper">
              <h2 className="h2 section-title">Carros em destaque <PiStarThin /></h2>
              {/* <a href="#" className="featured-car-link">
                <span>Visualizar</span>
                <ion-icon name="arrow-forward-outline" />
              </a> */}
            </div>
            <ul className="featured-car-list">
              <li>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    <img
                      src={CarImagem}
                      alt="Toyota RAV4 2021"
                      loading="lazy"
                      width={440}
                      height={300}
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        <a href="#">Toyota RAV4</a>
                      </h3>
                      <data className="year" value={2021}>
                        2021
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline />
                        <span className="card-item-text">4 Pessoas</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline />
                        <span className="card-item-text">Hibrido</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline />
                        <span className="card-item-text">6.1km / 1-litro</span>
                      </li>
                      <li className="card-list-item">
                        <ion-icon name="hardware-chip-outline" />
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>R$440</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline" />
                      </button>
                      <button className="btn">alugue agora</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    <img
                      src={CarImagem2}
                      alt="BMW 3 Series 2019"
                      loading="lazy"
                      width={440}
                      height={300}
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        <a href="#">BMW 3 Series</a>
                      </h3>
                      <data className="year" value={2019}>
                        2019
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline />
                        <span className="card-item-text">4 Pessoas</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline />
                        <span className="card-item-text">Gasolina</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline />
                        <span className="card-item-text">8.2km / 1-litro</span>
                      </li>
                      <li className="card-list-item">
                        <ion-icon name="hardware-chip-outline" />
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$350</strong> / month
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline" />
                      </button>
                      <button className="btn">alugue agora</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    <img
                      src={CarImagem3}
                      alt="Volkswagen T-Cross 2020"
                      loading="lazy"
                      width={440}
                      height={300}
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        <a href="#">Volkswagen T-Cross</a>
                      </h3>
                      <data className="year" value={2020}>
                        2020
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline />
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline />
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline />
                        <span className="card-item-text">5.3km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <ion-icon name="hardware-chip-outline" />
                        <span className="card-item-text">Automatic</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$400</strong> / month
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline" />
                      </button>
                      <button className="btn">alugue agora</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    <img
                      src={CarImagem4}
                      alt="Cadillac Escalade 2020"
                      loading="lazy"
                      width={440}
                      height={300}
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        <a href="#">Cadillac Escalade</a>
                      </h3>
                      <data className="year" value={2020}>
                        2020
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline />
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline />
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline />
                        <span className="card-item-text">7.7km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <ion-icon name="hardware-chip-outline" />
                        <span className="card-item-text">Automatic</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$620</strong> / month
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline" />
                      </button>
                      <button className="btn">alugue agora</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    <img
                      src={CarImagem5}
                      alt="BMW 4 Series GTI 2021"
                      loading="lazy"
                      width={440}
                      height={300}
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        <a href="#">BMW 4 Series GTI</a>
                      </h3>
                      <data className="year" value={2021}>
                        2021
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline />
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline />
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline />
                        <span className="card-item-text">7.6km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <ion-icon name="hardware-chip-outline" />
                        <span className="card-item-text">Automatic</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$530</strong> / month
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline" />
                      </button>
                      <button className="btn">alugue agora</button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="featured-car-card">
                  <figure className="card-banner">
                    <img
                      src={CarImagem6}
                      alt="BMW 4 Series 2019"
                      loading="lazy"
                      width={440}
                      height={300}
                      className="w-100"
                    />
                  </figure>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">
                        <a href="#">BMW 4 Series</a>
                      </h3>
                      <data className="year" value={2019}>
                        2019
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline />
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline />
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline />
                        <span className="card-item-text">7.2km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <ion-icon name="hardware-chip-outline" />
                        <span className="card-item-text">Automatic</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$490</strong> / month
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <ion-icon name="heart-outline" />
                      </button>
                      <button className="btn">alugue agora</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #GET START
  */}
        <section className="section get-start">
          <div className="container">
            <h2 className="h2 section-title">Get started with 4 simple steps</h2>
            <ul className="get-start-list">
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-1">
                    <ion-icon name="person-add-outline" />
                  </div>
                  <h3 className="card-title">Create a profile</h3>
                  <p className="card-text">
                    If you are going to use a passage of Lorem Ipsum, you need to
                    be sure.
                  </p>
                  <a href="#" className="card-link">
                    Get started
                  </a>
                </div>
              </li>
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-2">
                    <ion-icon name="car-outline" />
                  </div>
                  <h3 className="card-title">Tell us what car you want</h3>
                  <p className="card-text">
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose
                  </p>
                </div>
              </li>
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-3">
                    <ion-icon name="person-outline" />
                  </div>
                  <h3 className="card-title">Match with seller</h3>
                  <p className="card-text">
                    It to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic
                  </p>
                </div>
              </li>
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-4">
                    <ion-icon name="card-outline" />
                  </div>
                  <h3 className="card-title">Make a deal</h3>
                  <p className="card-text">
                    There are many variations of passages of Lorem available, but
                    the majority have suffered alteration
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 
    - #BLOG
  */}
        <section className="section blog" id="blog">
          <div className="container">
            <h2 className="h2 section-title">Our Blog</h2>
            <ul className="blog-list has-scrollbar">
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={Blog1}
                        alt="Opening of new offices of the company"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Company
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">Opening of new offices of the company</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">01 Novembro, 2023</time>
                      </div>
                      <div className="comments">
                        <ion-icon name="chatbubble-ellipses-outline" />
                        <data value={114}>114</data>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={Blog2}
                        alt="What cars are most vulnerable"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Repair
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">What cars are most vulnerable</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">January 14, 2022</time>
                      </div>
                      <div className="comments">
                        <ion-icon name="chatbubble-ellipses-outline" />
                        <data value={114}>114</data>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={Blog3}
                        alt="Statistics showed which average age"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Cars
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">Statistics showed which average age</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">January 14, 2022</time>
                      </div>
                      <div className="comments">
                        <ion-icon name="chatbubble-ellipses-outline" />
                        <data value={114}>114</data>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={Blog4}
                        alt="What´s required when renting a car?"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Cars
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">What´s required when renting a car?</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">January 14, 2022</time>
                      </div>
                      <div className="comments">
                        <ion-icon name="chatbubble-ellipses-outline" />
                        <data value={114}>114</data>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={Blog5}
                        alt="New rules for handling our cars"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Company
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">New rules for handling our cars</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">January 14, 2022</time>
                      </div>
                      <div className="comments">
                        <ion-icon name="chatbubble-ellipses-outline" />
                        <data value={114}>114</data>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
    {/* 
      - #FOOTER
    */}
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" alt="Ridex logo" />
            </a>
            <p className="footer-text">
              Search for cheap rental cars in New York. With a diverse fleet of
              19,000 vehicles, Waydex offers its consumers an attractive and fun
              selection.
            </p>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Pricing plans
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Our blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contacts
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Ask a question
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms &amp; conditions
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Neighborhoods in New York</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Manhattan
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Central New York City
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Upper East Side
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Queens
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Theater District
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Midtown
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                SoHo
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Chelsea
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-skype" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="mail-outline" />
              </a>
            </li>
          </ul>
          <p className="copyright">
            © 2022 <a href="#">UEG</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    </body>
  </>
  
  );
}

export default Home;
