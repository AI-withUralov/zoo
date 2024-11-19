import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getDog():string {
        return "Wow, Wow"
    }

    public introDog():string {
        return "My name is Jack!"
    }
    public modifyDetail(): string {
        return "Successfully modified!"
    }
}
