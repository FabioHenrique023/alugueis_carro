import React from 'react';
import { useState } from 'react';
import '../css/sobre.css';

import Blog1 from '../Assets/blog-1.jpg';
import Blog2 from '../Assets/blog-2.jpg';
import Blog3 from '../Assets/blog-3.jpg';
import Blog4 from '../Assets/blog-4.jpg';
import Blog5 from '../Assets/blog-5.jpg';

import Person1Image from '../Assets/person1.jpg';
import Person2Image from '../Assets/person2.jpg';
import Person3Image from '../Assets/person3.jpg';

import { IoPersonAddOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";

function Sobre() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <>
    <body>
    <main>
      <article>
       {/* #INFORMAÇÕES SOBRE CARROS */}
       <section className="section car-info">
        <div className="container">
          <h2 className="sobre-title">Descubra mais sobre nossos carros</h2>
          <div className="card-container">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className={`car-card ${expandedCard === index ? 'expanded' : ''}`}>
                <h3 className="card-title">Modelo X{index}</h3>
                <p className="card-text">
                  Um carro moderno com tecnologia avançada e design elegante.
                </p>
                <div className="expand-icon" onClick={() => handleCardClick(index)}>
                  {expandedCard === index ? '▲' : '▼'}
                </div>
                {expandedCard === index && (
                  <div className="additional-info">
                    {/* Conteúdo adicional aqui */}
                    <p>Outras informações interessantes sobre o Modelo X{index}...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section testimonials">
      <div className="container">
        <h2 className="cliente-title">O que nossos clientes dizem</h2>
        <div className="testimonial-cards">
          {/* Card 1 */}
          <div className="testimonial-card">
            <img src={Person1Image} alt="Cliente 1" className="person-image" />
            <p className="testimonial-text">
              "Alugar um carro na empresa foi uma experiência incrível. O processo foi fácil, e a equipe foi muito prestativa. Recomendo!"
            </p>
            <h3 className="person-name">João Silva</h3>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card">
            <img src={Person2Image} alt="Cliente 2" className="person-image" />
            <p className="testimonial-text">
              "Os carros são modernos e bem mantidos. Além disso, os preços são competitivos. Fiquei muito satisfeito com o serviço!"
            </p>
            <h3 className="person-name">Homem Aranha</h3>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card">
            <img src={Person3Image} alt="Cliente 3" className="person-image" />
            <p className="testimonial-text">
              "Ótima variedade de veículos para escolher. A reserva online foi simples, e o processo de retirada foi rápido e eficiente."
            </p>
            <h3 className="person-name">Maria Lurdes</h3>
          </div>
        </div>
      </div>
    </section>

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

export default Sobre;
