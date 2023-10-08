export interface Patient {
    id?: number;
    name: string;
    specie: string;
    birth: Date;
    image: string;
    appointment: Date;
    owner: string;
    phoneNumber: number;
    email: string;
}