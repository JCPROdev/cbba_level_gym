import express from "express";
import { PrismaClient } from "@prisma/client"
const app = express();
const prisma = new PrismaClient();

app.get("/venta", async (req,res) => {
  try {
    const venta = await prisma.venta.findMany({});
    res.json({
      data: venta,
      message: "ventas obtenidas correctamente"
    })
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las ventas", error: error.message
    })
  }
})
app.post("/venta", async (req, res) => {
  try {
    const venta = await prisma.venta.create({
      data: req.body
    })
    res.json({
      data: venta,
      message: "venta creada correctamente"
    })
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la venta",
      error: error.message
    })
  }
})
export default app;