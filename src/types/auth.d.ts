export type User =  {
    email : string
    password: string
}

export type PayloadToken = {
    accessToken: string
    refreshToken: string
}

export type Product = {
    readonly id:          number;
    readonly title:       string;
    readonly price:       number;
    readonly description: string;
    readonly images:      string[];
    readonly creationAt:  Date;
    readonly updatedAt:   Date;
    readonly category:    Category;
}

export type Category = {
    readonly id:         number;
    readonly name:       string;
    readonly image:      string;
    readonly creationAt: Date;
    readonly updatedAt:  Date;
}
