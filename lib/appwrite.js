import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680b8166000feb8df147')
    .setPlatform('dev.firstreact.native');



export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);



