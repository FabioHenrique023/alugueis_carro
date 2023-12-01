import React from 'react';
import '../css/produto.css';
import { useState, useEffect } from 'react';

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
import { GiF1Car } from "react-icons/gi";

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoHardwareChipOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";

function Produtos() {
  const [carroData, setCarroData] = useState(null);

  useEffect(() => {
    const getCarroById = async (idcarro) => {
      try {
        const response = await fetch(`http://localhost:3001/api/carros/${idcarro}`);
        const data = await response.json();
        setCarroData(data);
      } catch (error) {
        console.error("Erro ao buscar carro:", error);
      }
    };

    // Chame a função com o ID do carro desejado
    getCarroById('550e8400-e29b-41d4-a716-446655440000'); // Substitua 1 pelo ID do carro desejado
  }, []); 
  return (
    <>
    <body>
    <main>
      <article>
        {/* 
    - #FEATURED CAR
  */}
        <section className="section featured-car" id="featured-car">
          <div className="container">
            <div className="title-wrapper">
              <h2 className="h2 section-title">"Desbrave novos horizontes"<GiF1Car className='cart-icon'/></h2>
              {/* <a href="#" className="featured-car-link">
                <span>Visualizar</span>
                <IoIosArrowRoundForward/>
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
                        <a href="#">{carroData?.nome}</a>
                      </h3>
                      <data className="year" value={2021}>
                        {carroData?.ano}
                      </data>
                    </div>
                    <ul className="card-list">
                      <li className="card-list-item">
                        <MdOutlinePeopleOutline className='estilo-icon'/>
                        <span className="card-item-text">4 Pessoas</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline className='estilo-icon'/>
                        <span className="card-item-text">Hibrido</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline className='estilo-icon'/>
                        <span className="card-item-text">6.1km / 1-litro</span>
                      </li>
                      <li className="card-list-item">
                        <IoHardwareChipOutline className='estilo-icon'/>
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$440</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <CiHeart />
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
                        <MdOutlinePeopleOutline className='estilo-icon'/>
                        <span className="card-item-text">4 Pessoas</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline className='estilo-icon'/>
                        <span className="card-item-text">Gasolina</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline className='estilo-icon'/>
                        <span className="card-item-text">8.2km / 1-litro</span>
                      </li>
                      <li className="card-list-item">
                        <IoHardwareChipOutline className='estilo-icon'/>
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$350</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <CiHeart />
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
                        <MdOutlinePeopleOutline className='estilo-icon'/>
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline className='estilo-icon'/>
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline className='estilo-icon'/>
                        <span className="card-item-text">5.3km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <IoHardwareChipOutline className='estilo-icon'/>
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$400</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <CiHeart />
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
                        <MdOutlinePeopleOutline className='estilo-icon'/>
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline className='estilo-icon'/>
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline className='estilo-icon'/>
                        <span className="card-item-text">7.7km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <IoHardwareChipOutline className='estilo-icon'/>
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$620</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <CiHeart />
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
                        <MdOutlinePeopleOutline className='estilo-icon'/>
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline className='estilo-icon'/>
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline className='estilo-icon'/>
                        <span className="card-item-text">7.6km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <IoHardwareChipOutline className='estilo-icon'/>
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$530</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <CiHeart />
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
                        <MdOutlinePeopleOutline className='estilo-icon'/>
                        <span className="card-item-text">4 People</span>
                      </li>
                      <li className="card-list-item">
                        <IoFlashOutline className='estilo-icon'/>
                        <span className="card-item-text">Gasoline</span>
                      </li>
                      <li className="card-list-item">
                        <IoSpeedometerOutline className='estilo-icon'/>
                        <span className="card-item-text">7.2km / 1-litre</span>
                      </li>
                      <li className="card-list-item">
                        <IoHardwareChipOutline className='estilo-icon'/>
                        <span className="card-item-text">Automatico</span>
                      </li>
                    </ul>
                    <div className="card-price-wrapper">
                      <p className="card-price">
                        <strong>$490</strong> / mês
                      </p>
                      <button
                        className="btn fav-btn"
                        aria-label="Add to favourite list"
                      >
                        <CiHeart />
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
            <h2 className="h2 section-title">Comece com 4 passos simples</h2>
            <ul className="get-start-list">
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-1">
                  <IoPersonAddOutline />
                  </div>
                  <h3 className="card-title">Crie um perfil</h3>
                  <p className="card-text">
                  Se você for usar uma passagem de Lorem Ipsum, precisa ter certeza.
                  </p>
                  <a href="#" className="card-link">
                    Get started
                  </a>
                </div>
              </li>
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-2">
                  <IoCarSportOutline />
                  </div>
                  <h3 className="card-title">Diga-nos qual carro você quer</h3>
                  <p className="card-text">
                  Várias versões evoluíram ao longo dos anos, às vezes por acidente, às vezes propositalmente
                  </p>
                </div>
              </li>
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-3">
                  <IoPersonOutline />
                  </div>
                  <h3 className="card-title">Combine com o vendedor</h3>
                  <p className="card-text">
                    It to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic
                  </p>
                </div>
              </li>
              <li>
                <div className="get-start-card">
                  <div className="card-icon icon-4">
                  <FaRegCreditCard />
                  </div>
                  <h3 className="card-title">Fazer um acordo</h3>
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
            <h2 className="h2 section-title">Blog</h2>
            <ul className="blog-list has-scrollbar">
              <li>
                <div className="blog-card">
                  <figure className="card-banner">
                    <a href="#">
                      <img
                        src={Blog1}
                        alt="Abertura de novos escritórios da empresa"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Compania
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">Abertura de novos escritórios da empresa</a>
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
                        alt="Quais carros são mais vulneráveis"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Reparar
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">Quais carros são mais vulneráveis</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">14 Janeiro, 2022</time>
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
                        alt="As estatísticas mostraram qual idade média"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Carros
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">As estatísticas mostraram qual idade média</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">14 Janeiro, 2022</time>
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
                        alt="O que é necessário ao alugar um carro?"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Aluguel
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">O que é necessário ao alugar um carro?</a>
                    </h3>
                    <div className="card-meta">
                      <div className="publish-date">
                        <ion-icon name="time-outline" />
                        <time dateTime="2022-01-14">14 Janeiro, 2022</time>
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
                        alt="Novas regras para lidar com nossos carros"
                        loading="lazy"
                        className="w-100"
                      />
                    </a>
                    <a href="#" className="btn card-badge">
                      Empresa
                    </a>
                  </figure>
                  <div className="card-content">
                    <h3 className="h3 card-title">
                      <a href="#">Novas regras para lidar com nossos carros</a>
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
              <p>LOGO</p>
            </a>
            <p className="footer-text" style={{ textAlign: 'justify' }}>
            Pesquise carros de aluguel baratos em Rio Verde. Com uma frota diversificada de 19 mil veículos, a rentcar oferece aos seus consumidores uma seleção atrativa e divertida.
            </p>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Empresa</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Preços
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contatos
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Suporte</p>
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
              <p className="footer-list-title">Bairros em Rio Verde</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Presidente Vargas
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Setor Central
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Bairro Popular
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

export default Produtos;
