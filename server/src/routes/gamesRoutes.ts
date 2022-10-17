import { Router } from "express";

import gamesController from "./../controllers/gamesController";

class GamesRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    // Creating initial route 
    this.router.get("/", gamesController.list);
    this.router.get("/:id", gamesController.getById);
    this.router.post("/", gamesController.create);
    this.router.patch("/:id", gamesController.update);
    this.router.delete("/:id", gamesController.delete);
  }

}

const gamesRoutes = new GamesRoutes();

export default gamesRoutes.router;