"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("./../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Creating initial route 
        this.router.get("/", gamesController_1.default.list);
        this.router.get("/:id", gamesController_1.default.getById);
        this.router.post("/", gamesController_1.default.create);
        this.router.patch("/:id", gamesController_1.default.update);
        this.router.delete("/:id", gamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
