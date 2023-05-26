import React from "react";

function Categorias() {
  const buttons = [
    {
      name: "TODO",
    },
    {
      name: "EMBARAZADAS",
    },
    {
      name: "RECIEN NACIDOS",
    },
    {
      name: "FAMILIAS",
    },
    {
      name: "15 AÑOS",
    },
    {
      name: "EJECUTIVOS - WEB - LINKEDIN",
    },
    {
      name: "CUMPLEAÑOS - EN ESTUDIO",
    },
    {
      name: "GRADUACIÓN",
    },
    {
      name: "ESTUDIANTES",
    },
    {
      name: "BODAS",
    },
  ];

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {buttons.map((item, index) => {
        return (
          <li
            key={index}
            className="px-3 py-1 font-montserrat font-light text-xs border border-black hover:border-yellow-700/70 hover:bg-yellow-700"
          >
            <button type="button">{item.name}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Categorias;
