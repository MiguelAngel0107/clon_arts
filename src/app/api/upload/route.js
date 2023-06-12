import { NextResponse } from "next/server";
import fs from "fs-extra";

export async function POST(request) {
  try {
    const res = await request.json();
    const base64 = res["imagen"];

    const rutaDestino = `public/collection/imagen3.jpg`;
    const imagenBuffer = Buffer.from(base64, 'base64');
  
    try {
      await fs.outputFile(rutaDestino, imagenBuffer);
      console.log('La imagen se ha guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar la imagen:', error);
    }

    return NextResponse.json({ base64 });
  } catch (err) {
    return NextResponse.json({ Error: "Error" });
  }
}
