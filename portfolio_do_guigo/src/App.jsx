import React, { useEffect, useRef } from "react";
import "./App.css";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/src/vanta.net";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButtons";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaRef.current || vantaEffect.current) return;
    vantaEffect.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3da9fc,
      backgroundColor: 0x094067,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 15.0,
    });
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <ScrollProgress />

      {/*
        Wrapper externo fixo gerencia o posicionamento.
        O div interno é o target do Vanta (ele força position:relative internamente),
        mas como está dentro do wrapper fixed, o canvas fica preso ao viewport.
      */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div ref={vantaRef} style={{ width: "100%", height: "100%" }} />
      </div>

      <Navbar />

      {/*
        relative + z-[1] + isolate cria um stacking context acima do Vanta (z:-1).
        As seções ficam dentro desse contexto, então seus gradientes e conteúdo
        são empilhados corretamente sobre o fundo animado.
      */}
      <main className="relative z-[1] isolate">
        <Home />
        <Services />
        <Resume />
        <Work />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default App;
