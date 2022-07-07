export interface Game {
    slug:string,
    name:string,
    playtime:number,
    platforms:any,
    stores:any,
    released:string,
    tba:boolean
    background_image:string,
    rating:string,
    rating_top:string,
    ratings:any,
    ratings_count:number,
    reviews_text_count:number,
    added:number,
    added_by_status:any,
    metacritic:number,
    suggestions_count:number,
    updated:string,
    id:number,
    score:string,
    clip:null,
    tags:any,
    esrb_rating:any,
    user_game:null,
    reviews_count:number,
    saturated_color:string,
    dominant_color:string,
    short_screenshots:any,
    parent_platforms:any,
    genres:any
}


export interface ApiResult {
    count:number,
    next:string,
    previous:null,
    results:Game[],
    user_plataforms:boolean
}

export interface Juego{
    id?:number,
    titulo?:string,
    descripcion?:string,
    ano?:number,
    portada?:string
}

export interface User{
    nombre?:string,
    email?:string,
    password?:string,
    confirmpassword?:string
}

export interface userToken{
    ok:boolean,
    token:string
}

export interface createdUser{
    email?:string,
    password?:string,
    confirmpassword?:string
}