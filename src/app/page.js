import Categorias from "@/components/home/categorias";
import Image from "next/image";

export default function Home() {
  const categories = [
    {
      title: "Sesión de fotos para embarazadas - Fondos Premium",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-premium-33.jpg",
    },
    {
      title: "Sesión de fotos para embarazadas - Fondos semi realistas",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-semirealistas-46.jpg",
    },
    {
      title: "Sesión de fotos para embarazadas - Fondos Clásicos",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-clasico-21.jpg",
    },
    {
      title: "Sesión de fotos para embarazadas – Fondos Artísticos",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-artisitico-17.jpg",
    },
    {
      title:
        "Sesión de fotos para Ejecutivos - LinkedIn - candidatos - Hombres",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-ejecutivos-linkedin-hombres-1.jpg",
    },
    {
      title:
        "Sesión de fotos para Ejecutivos - LinkedIn - Candidatos - Mujeres",
      href: "https://cmartsproducciones.com/wp-content/uploads/2022/02/sesion-de-fotos-para-ejecutivos-4-1.jpg",
    },
    {
      title:
        "Sesión de fotos para 15 años fondos Semi realistas , Premium clásicos",
      href: "https://cmartsproducciones.com/wp-content/uploads/2022/03/cumpleanos-15-anos-24.jpg",
    },
    {
      title: "Sesión de fotos para Familias fondos Clásicos y Artísticos",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-para-familias-145b.jpg",
    },
    {
      title: "Sesión de fotos para Cumpleaños fondos clásicos",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/cumpleanos-8.jpg",
    },
    {
      title: "Sesión de fotos para Cumpleaños fondos semi realistas",
      href: "https://cmartsproducciones.com/wp-content/uploads/2022/03/sesion-de-fotos-cumpleanos-50-anos-4b.jpg",
    },
    {
      title: "Sesión de fotos para Familias fondo semi realista",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-para-familias-83.jpg",
    },
    {
      title: "Sesión de fotos para recién nacidos",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-para-recien-nacidos-7.jpg",
    },
    {
      title: "Sesión de fotos para Graduación",
      href: "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-foto-para-graduacion-19-1.jpg",
    },
    {
      title: "Paseo- Boda Religiosa - Pentagonito",
      href: "https://cmartsproducciones.com/wp-content/uploads/2023/05/fotos-para-bodas-3-2.jpg",
    },
    {
      title: "Fotos de Boda Civil - Pentagonito",
      href: "https://cmartsproducciones.com/wp-content/uploads/2023/05/fotos-para-bodas-Miraflores-Lima-Peru-1-1.jpg",
    },
    {
      title: "Fotos de Bodas - Miraflores - Hotel Marriot - Pentagonito",
      href: "https://cmartsproducciones.com/wp-content/uploads/2023/05/fotos-para-bodas-19.jpg",
    },
  ];

  return (
    <header>
      <div className="py-4">
        <div className="container mx-auto text-white text-center mt-24">
          <h1 className="text-5xl font-montserrat font-bold">
            Sesión de fotos en estudio fotográfico
          </h1>
          <div className="text-3xl font-montserrat font-bold p-8">
            Galería de Fotos
          </div>
        </div>

        <main className="flex flex-col cotainer max-auto text-white items-center px-2 pt-10">
          <Categorias />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-4 pt-10">
            {/* Iterar sobre las imágenes y mostrarlas */}
            {categories.map((category, index) => (
              <div key={index} className="relative">
                <img
                  src={category.href}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-zinc-900 opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                  <h6 className="text-white text-3xl font-montserrat text-center font-bold">
                    {category.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </header>
  );
}
