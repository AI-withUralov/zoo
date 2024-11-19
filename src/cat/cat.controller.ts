import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catservice: CatService) {}

    @Get()
    public getHello(): string {
        return this.catservice.getHello()
    }

    @Get('greet')
    public introduce():string {
        return this.catservice.introduce()
    }

    }


