export interface IUser {
    uid: string;
    email: string;
    displayName: string;
    name: string;
    lastName: string;
    patronName: string;
    photoURL: string;
    phoneNumber: string;
    address: string;
    city: string;
    street: string;
    numberHouse: string;
    emailVerified: boolean;
    type: 'User' | 'Deputy';
 }
