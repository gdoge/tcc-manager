export interface Training{
    id:number;
    name:string;
    description?:string;
    imageUrl?:string;
    discontinued?:boolean;
    nextRun:string;
}