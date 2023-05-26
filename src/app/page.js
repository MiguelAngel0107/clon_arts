import Categorias from "@/components/home/categorias";
import Image from "next/image";

export default function Home() {

  const images = [
    "./img/prueba1.jpg",
    "./img/prueba2.jpg",
    "./img/prueba3.jpg",
    "./img/prueba4.jpg",
    "./img/prueba5.jpg",
    "./img/prueba6.jpg",
    "./img/prueba7.jpg",
    "./img/prueba8.jpg",
    "./img/prueba9.jpg",
    "./img/prueba10.jpg",
    "./img/prueba11.jpg",
    "./img/prueba12.jpg",
    "./img/prueba13.jpg",
  ];


  return (
    <header>
      <div className="py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-5xl font-montserrat font-bold">
            Sesión de fotos en estudio fotográfico
          </h1>
          <div className="text-3xl font-montserrat font-bold p-8">
            Galería de Fotos
          </div>
        </div>

        <main className="flex flex-col cotainer max-auto text-white items-center pt-10">
          <Categorias />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 pt-10">
            {/* Iterar sobre las imágenes y mostrarlas */}
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </main>
      </div>
    </header>
  );
}
