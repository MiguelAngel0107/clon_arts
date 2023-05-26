"use client"
import React, { useEffect, useState } from "react";

function Navbar() {
  const [isPageAtTop, setIsPageAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsPageAtTop(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = isPageAtTop
    ? "bg-black p-6 text-white font-monserrat py-8"
    : "bg-neutral-900 p-6 text-white font-monserrat py-8";

  return (
    <div className={navbarClassName}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 px-8 font-bold text-xl">
          <a href="https://cmartsproducciones.com/" data-magic-cursor="link">
            <span>CM ART'S PRODUCCIONES</span>
          </a>
        </div>

        <div className="flex flex-end px-14">
          <nav>
            <ul className="flex gap-2 text-sm font-montserrat">
              <li className=" hover:text-yellow-600 px-3 group">
                <span className="absolute top-14 h-1 bg-yellow-700 w-[265px] transform origin-left scale-x-0 group-hover:scale-x-100 transition duration-500"></span>
                <a href="https://cmartsproducciones.com/" aria-current="page">
                  <span>PAGINA PRINCIPAL – SESION DE FOTOS</span>
                </a>
              </li>
              <li className=" hover:text-yellow-600 px-3 group">
                <span className="absolute top-14 h-1 bg-yellow-700 w-[160px] transform origin-left scale-x-0 group-hover:scale-x-100 transition duration-500"></span>
                <a href="https://cmartsproducciones.com/business/">
                  <span>ACERCA DE NOSOTROS</span>
                </a>
              </li>
              <li className=" hover:text-yellow-600 px-3 group">
                <span className="absolute top-14 h-1 bg-yellow-700 w-[106px] transform origin-left scale-x-0 group-hover:scale-x-100 transition duration-500"></span>
                <a href="https://cmartsproducciones.com/contactanos/">
                  <span>CONTACTANOS</span>
                </a>
              </li>
              <li className=" hover:text-yellow-600 px-3 group">
                <span className="absolute top-14 h-1 bg-yellow-700 w-[128px] transform origin-left scale-x-0 group-hover:scale-x-100 transition duration-500"></span>
                <a href="https://cmartsproducciones.com/tienda/">
                  <span>PRECIO – OFERTAS</span>
                  <span className="line"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
