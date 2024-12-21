enum Gender{
    'MALE' = 'Male',
    'FEMALE' = 'Female',
    'GENDERLESS' = 'Genderless',
    'UNKNOWN' = 'Unknown'
}
export interface Person{
    id: number,
    name: string,
    age: number,
    phone_number: string,
    document_number: string,
    document_type: string,
    date_birth: string,
    gender: Gender
}


