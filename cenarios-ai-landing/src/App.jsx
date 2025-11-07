import Header from './components/Header';
import Hero from './sections/Hero';
import SobreCenarios from './sections/SobreCenarios';
import Modules from './sections/Modules';
import ComoFunciona from './sections/ComoFunciona';
import Impacto from './sections/Impacto';
import Footer from './sections/Footer';

// Importe os demais componentes de seção conforme a nossa estrutura planejada:
// import Modules from './sections/Modules';
// import HowItWorks from './sections/HowItWorks';
// import Impact from './sections/Impact';
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Aqui serão incluídas as seções */}
        <Hero />
        <SobreCenarios />
        <Modules />
        <ComoFunciona />
        <Impacto />
      </main>
        <Footer />
    </>
  );
}

export default App;