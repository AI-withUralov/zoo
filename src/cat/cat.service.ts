import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "Myeow, Myeow!"
    }
    public introduce(): string {
        return "My name is Najim!"
       }
}
