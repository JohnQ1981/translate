import React from "react";
import CommentDetail from "./components/CommentDetails";
import { faker } from '@faker-js/faker';

const App =() => {
 
    return (
        <div className="ui container comments">
      
        <CommentDetail authorName ={faker.name.fullName()} timeAgo='Today at 5:45 pm' mnth={faker.date.month()} imageSrc={faker.image.avatar()} txt="Nice Blog post!" city={faker.address.city()}/>
        <CommentDetail  authorName ={faker.name.fullName()} timeAgo='Today at 2:45 pm' mnth={faker.date.month()} imageSrc={faker.image.avatar()} txt="Nice Blog post!" city={faker.address.city()}  />
        <CommentDetail  authorName ="Jane" timeAgo='Today at 1:45 pm' mnth={faker.date.month()} imageSrc={faker.image.avatar()} txt="Nice Blog post!" city={faker.address.city()} />
       

        

      </div>
    
        );
};
export default App;