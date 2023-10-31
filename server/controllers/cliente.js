import Express from "express";
import { PrismaClient } from "@prisma/client";
const app = Express();
const prisma = new PrismaClient();

app.get("/cliente", async (req, res) => {
  const cliente = await prisma.cliente.findMany({});
  res.json({
    data: cliente,
    message: "cliente obtenido con correctamente",
  });
});
 
export default app;