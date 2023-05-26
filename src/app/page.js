import Categorias from "@/components/home/categorias";
import Image from "next/image";

export default function Home() {
  const images = [
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-premium-33.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-semirealistas-46.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-clasico-21.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/embarazadas-artisitico-17.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-ejecutivos-linkedin-hombres-1.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2022/02/sesion-de-fotos-para-ejecutivos-4-1.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2022/03/cumpleanos-15-anos-24.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-para-familias-145b.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/cumpleanos-8.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2022/03/sesion-de-fotos-cumpleanos-50-anos-4b.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-para-familias-83.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-fotos-para-recien-nacidos-7.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2021/08/sesion-de-foto-para-graduacion-19-1.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2023/05/fotos-para-bodas-3-2.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2023/05/fotos-para-bodas-Miraflores-Lima-Peru-1-1.jpg",
    "https://cmartsproducciones.com/wp-content/uploads/2023/05/fotos-para-bodas-19.jpg",
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
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-montserrat">
                    Texto de la imagen
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </header>
  );
}
