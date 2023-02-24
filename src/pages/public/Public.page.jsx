import './public.styles.css';
const Public = () => {
  return (
    <>
      <main className="main-container">
        <div className="containter-fluid container-md container-sm hero">
          <h3>Centenaria Escuela Primaria</h3>
          <h2>Juan N. Álvarez</h2>
          <div className="main-message-container">
            <div className="welcome">
              <h1>Bienvenido a Corte de Caja </h1>
              <h2>Sistema de consulta de Finanzas</h2>
              <p>
                En esta aplicación podrás consultar los ingresos y egresos de la
                cooperativa escolar.
              </p>
              <p>
                Para comenzar, haga clic en el botón Iniciar Sesión en la parte
                superior de la pantalla
              </p>
            </div>
            <div className="school-logo">
              <img src="logo.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Public;
