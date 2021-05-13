import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <!-- Navigation --> */}
      '<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger logo-navbar" href="#page-top"><img src="../../assets/img/logos/logo.png"
            alt="ADSBD - Associação dos doadores de sangue de Bom Despacho"></img></a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services-top">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#hr-top">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#news-top">Notícias</a>
              </li>
              {/* <!--
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#donate-title">Doação</a>
              </li> --> */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="seta">
          <p onclick="scrollToY(0, 10000, 'easeInOutSine');" id="myBtn" title="Ir ao topo"><img className="ir-ao-topo"
              src="../../assets/img/team/seta.png" alt="Ir ao topo"></img></p>
        </div> */}
      </nav>
      {/* <!-- Header --> */}
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in"> Associação dos doadores de sangue de Bom Despacho</div>
            <div className="intro-heading text-uppercase">Unidos pela vida</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#!seeTimes">Veja nosso horários</a>
          </div>
        </div>
      </header>

      <div ng-view></div>
      
      {/* <!-- Footer --> */}
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; ADSBD 2020</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/adsbd.solidariedade.3">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>'
    </div>
    );
  }

  export default App;
