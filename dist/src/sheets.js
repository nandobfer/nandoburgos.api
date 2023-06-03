"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const sheets = yield prisma.sheets.findMany({ include: { language: true, user: true } });
    response.json(sheets);
}));
router.post("/add", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const sheet = yield prisma.sheets.create({
        data: {
            title: data.title,
            code: data.code,
            keywords: data.keywords,
            language_id: data.language,
            user_id: data.id,
        },
        include: { language: true, user: true },
    });
    response.json(sheet);
}));
router.post("/update", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const sheet = yield prisma.sheets.update({
        where: { id: data.id },
        data: {
            title: data.title,
            code: data.code,
            keywords: data.keywords,
            language_id: data.language,
        },
        include: { language: true, user: true },
    });
    response.json(sheet);
}));
router.post("/delete", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const data = request.body;
    const sheet = yield prisma.sheets.delete({ where: { id: data.id } });
    response.json(sheet);
}));
exports.default = router;
