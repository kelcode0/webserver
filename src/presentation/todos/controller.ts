import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto } from "../../domain/dtos";

export class TodoController {
  //constructor() {}

  public getTodos = async (req: Request, res: Response): Promise<void> => {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  };

  public getTodoById = async (req: Request, res: Response): Promise<void> => {
    const id = +req.params.id;
    if (isNaN(id)) {
      res.status(400).json({ error: "ID argument is not a number" });
      return;
    }

    const todo = await prisma.todo.findFirst({
      where: { id },
    });

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `TODO with id ${id} not found` });
  };

  public createTodo = async (req: Request, res: Response): Promise<void> => {
    const [errorMessage, createTodoDto] = CreateTodoDto.create(req.body);

    if (errorMessage) {
      res.status(400).json({ error: errorMessage });
    }

    const todo = await prisma.todo.create({
      data: createTodoDto!,
    });

    res.json(todo);
  };

  public updateTodo = async (req: Request, res: Response): Promise<void> => {
    const id = +req.params.id;
    if (isNaN(id)) {
      res.status(400).json({ error: "ID argument is not a number" });
    }

    const todo = await prisma.todo.findFirst({
      where: { id },
    });

    if (!todo) {
      res.status(404).json({ error: `Todo with id ${id} not found` });
      return;
    }

    const { text, completedAt } = req.body;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { text, completedAt: completedAt ? new Date(completedAt) : null },
    });

    // todo.text = text ?? todo.text;
    // completedAt === "null"
    //   ? (todo.completedAt = null)
    //   : (todo.completedAt = new Date(completedAt ?? todo.completedAt));

    res.json(updatedTodo);
  };

  public deleteTodo = async (req: Request, res: Response): Promise<void> => {
    const id = +req.params.id;

    const todo = await prisma.todo.findFirst({
      where: { id },
    });
    if (!todo) {
      res.status(404).json({ error: `Todo with id ${id} not found` });
      return;
    }

    const deletedTodo = await prisma.todo.delete({
      where: { id },
    });

    deletedTodo
      ? res.json(deletedTodo)
      : res.status(404).json({ error: `Todo whit id ${id} not found` });
  };
}
