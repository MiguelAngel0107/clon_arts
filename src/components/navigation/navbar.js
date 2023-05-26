"use client";
import React, { useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";


function Navbar2() {
  const [isPageAtTop, setIsPageAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsPageAtTop(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = isPageAtTop
    ? "bg-black p-6 text-white font-monserrat py-8 fixed w-full z-10"
    : "bg-neutral-900 p-6 text-white font-monserrat py-8 fixed w-full z-10";

  return (
    <div className={navbarClassName}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 px-8 font-bold text-md xl:text-xl">
          <a href="https://cmartsproducciones.com/" data-magic-cursor="link">
            <span>CM ART'S PRODUCCIONES</span>
          </a>
        </div>

        <div className="flex flex-end px-14">
          <nav>
            <ul className="flex gap-2 text-sm font-montserrat font-light">
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

function Navbar() {
  const [isPageAtTop, setIsPageAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPageAtTop(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClassName = isPageAtTop
    ? "bg-black p-6 text-white font-monserrat py-8 fixed w-full z-10"
    : "bg-neutral-900 p-6 text-white font-monserrat py-8 fixed w-full z-10";

  return (
    <div className={navbarClassName}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 px-8 font-bold text-md xl:text-xl">
          <a href="https://cmartsproducciones.com/" data-magic-cursor="link">
            <span>CM ART'S PRODUCCIONES</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white hover:text-yellow-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-end px-14">
          <nav>
            <ul className="flex gap-2 text-sm font-montserrat font-light">
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

        {/* Mobile Menu Content */}
        <Transition
          show={isMobileMenuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-100 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          {(ref) => (
            <div className="lg:hidden" ref={ref}>
              <nav>
                <ul className="flex flex-col gap-2 text-sm font-montserrat font-light">
                  <li>
                    <a
                      href="https://cmartsproducciones.com/"
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md"
                      aria-current="page"
                    >
                      PAGINA PRINCIPAL – SESION DE FOTOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cmartsproducciones.com/business/"
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md"
                    >
                      ACERCA DE NOSOTROS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cmartsproducciones.com/contactanos/"
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md"
                    >
                      CONTACTANOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cmartsproducciones.com/tienda/"
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md"
                    >
                      PRECIO – OFERTAS
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export default Navbar2;
