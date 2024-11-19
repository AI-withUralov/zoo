import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { query } from 'express';

@Controller('dog')
export class DogController {
    constructor(public dogservice:DogService){}

    @Get() 
    public getDog(): string {
        return this.dogservice.getDog();
    }

    @Get('greet/:id') 
    public introDog(@Param() params:any, @Query() query:any) :string {
        console.log("param:", params);
        console.log("query:", query);
        return this.dogservice.introDog();
    }

    @Get('edit') 
    public modifyDetail(@Body() body: any): string {
        console.log("body:", body)
        return this.dogservice.modifyDetail();
    }
}
