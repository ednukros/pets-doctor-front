export interface Patient {
    id?: number;
    name: string;
    species: string;
    race: string;
    birth: Date;
    image: string;
    next_appointment: Date;
    owner: string;
    phoneNumber: number;
    email: string;
}