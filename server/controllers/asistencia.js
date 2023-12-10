import express from "express";
import { PrismaClient } from "@prisma/client"
const app = express();
const prisma = new PrismaClient();

app.post("/asistencia/:id", async (req, res) => {
  const asistenciaHoy = await prisma.asistencia.findMany({
    where: {
      inscripcionId: Number(req.params.id)
    }
  });
  let flag = false;
  asistenciaHoy.forEach(asistencia => {
    const fecha = new Date(asistencia.fecha);
    const hoy = new Date();
    if(fecha.getDate() === hoy.getDate() && fecha.getMonth() === hoy.getMonth() && fecha.getFullYear() === hoy.getFullYear()) {
      flag = true;
    }
  });
  if(flag) {
    return res.json({
      status: 3,
      message: "El cliente ya asistió hoy"
    });
  }

  const asistencia = await prisma.asistencia.create({
    data: {
      inscripcionId: Number(req.params.id)
    },
    include: {
      inscripcion: true
    }
  });
  if(asistencia.inscripcion.diasRestantes === 0) {
    return res.json({
      status: 2,
      message: "Al cliente ya no le quedan días restantes"
    });
  }
  const limite = new Date(asistencia.inscripcion.fechaLimite);
  if(new Date().getTime() > limite.getTime()) {
    return res.json({
      status: 2,
      message: "Ya pasó la fecha límite del cliente"
    });
  } 

  await prisma.inscripcion.update({
    where: {
      id: Number(req.params.id)
    },
    data: {
      diasRestantes: {
        decrement: 1
      }
    }
  });
  res.json({
    status: 1,
    message: "Asistencia registrada correctamente"
  });
});

export default app;