
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.log("Erro ao conectar ao MongoDB" + error);
  });

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
  try {
    const createdUser = await User.create(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Já existe um usuário com este email" });
    } else {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
});

    app.get("/users", async (req, res) => {
  const databaseUsers = await User.find();

  res.json(databaseUsers);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  await User.findByIdAndDelete(id);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
