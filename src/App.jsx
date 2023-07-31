import { useState } from 'react'
import './App.css'
import checkMark from './assets/Check_mark.svg.png'
import imgTeste from './assets/istockphoto-876656396-1024x1024-transformed.jpeg'
import nutri from './assets/nutri.png'
import nutriLogo from './assets/adesivo-de-parede-60x49cm-simbolo-nutricao-r1697-adesivo-de-parede-removebg-preview.png'
function App() {

  return (
    <div style={{ maxWidth: '100%', height: '100vh' }}>
      <nav class="navbar navbar-dark" style={{ backgroundColor: "green" }}>
        <a class="navbar-brand mb-0 h1" href="#">
          <img src={nutriLogo} style={{ marginRight: '1rem' }} width="40" height="40" class="d-inline-block align-top" alt="" />
          <span className='mt-1'>Karla Nutricionista</span>
        </a>
        <span className='mt-1 h6 text-white'>Entre em contato pelo whatsapp</span>
      </nav>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div style={{ display: 'flex', flexDirection: 'row', maxHeight: '85vh' }}>
              <img class="d-block" style={{ flex: '1', objectFit: 'contain' }} src={imgTeste} alt="First slide" />
              <div className='mt-3' style={{ flex: '1', display: 'flex', marginRight: '3rem', justifyContent: 'center' }}>
                <div>
                  <h1 style={{ color: 'green', textAlign: 'center' }}>Mantenha seu corpo saudável</h1>
                  <h6 className='mt-5' style={{ textAlign: 'center' }}>Desperte a sua melhor versão com um acompanhamento nutricional online feito sob medida para você!</h6>
                  <div className='mt-5' style={{ display: 'flex', marginLeft: '2rem', flexDirection: 'column', }}>
                    <span>
                      <img src={checkMark} width="40" height="40" /> Atendimento 100% Online, para todo o Brasil</span>
                    <span>  <img src={checkMark} width="40" height="40" />  Tecnologia exclusiva para avaliação física a distância</span>
                    <span> <img src={checkMark} width="40" height="40" />   Programa alimentar personalizado para suas necessidades</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div style={{ display: 'flex', flexDirection: 'row', maxHeight: '85vh' }}>
              <div style={{ flex: '1', justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '10%' }} >

                <iframe style={{ border: 'none', borderRadius: '25px', borderLeft: 'solid 10px green', borderBottom: 'solid 8px green' }} className='mt-5' width="auto" height="80%" src="https://www.youtube.com/embed/J2wKVPUUGis" title="Como funciona o meu atendimento- site" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


              </div>
              <div className='mt-5' style={{ flex: '1', display: 'flex', marginRight: '3rem', justifyContent: 'center' }}>
                <div>
                  <h1 style={{ color: 'green', textAlign: 'center' }}>Têm resultados que só um nutricionista pode entregar!</h1>
                  <div style={{ marginTop: '10%' }}>
                    <h5 className='mt-5' style={{ textAlign: 'center' }}>Assista o vídeo ao lado e entenda o porquê você precisa de um nutricionista para te auxiliar na melhora da sua qualidade de vida, e como eu posso te acompanhar nessa jornada!</h5>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div style={{ display: 'flex', flexDirection: 'row', maxHeight: '85vh' }}>
              <img class="d-block" style={{ flex: '1', objectFit: 'contain' }} src={nutri} alt="First slide" />
              <div className='mt-3' style={{ flex: '1', display: 'flex', marginRight: '3rem', justifyContent: 'center' }}>
                <div>
                  <h1 style={{ color: 'green', textAlign: 'center' }}>Para quem serve o acompanhamento
                    nutricional online?</h1>

                  <div className='mt-5' style={{ display: 'flex', marginLeft: '2rem', flexDirection: 'column', }}>
                    <ul>
                      <li><span>Quem mora longe dos grandes centros, mas não dispensa o apoio de um nutricionista capacitado;</span></li>
                      <li><span>Quem tem a rotina corrida e não pode comparecer a um consultório presencialmente;</span></li>
                      <li><span>Quem quer economizar tempo e dinheiro com deslocamentos até um consultório;</span></li>
                      <li><span>Quem quer aproveitar os benefícios do acompanhamento do conforto de sua casa, sem abrir mão da qualidade do serviço.</span></li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  )
}

export default App
