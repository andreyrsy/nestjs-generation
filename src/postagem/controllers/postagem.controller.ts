import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemSerivce } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";


@Controller("/postagens")
export class PostagemController{
    constructor(private readonly postagemService: PostagemSerivce){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }
}