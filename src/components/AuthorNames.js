import React from "react";
import { faker } from '@faker-js/faker';
const AuthorNames = () =>{
    return(
        <div>Hi {faker.animal.bear()}</div>
    );
};

export default AuthorNames;