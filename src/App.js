import React from "react";
import CommentDetail from "./components/CommentDetails";
import ApprovalCard from "./components/ApprovalCard";
import { faker } from '@faker-js/faker';
import './App.css';
const App =() => {
 
    return (
        <div className="ui container comments">
        {/* <ApprovalCard><div>
          <h4>Warning!</h4>
          Are you sure?
        </div></ApprovalCard> */}
         <ApprovalCard>
            <CommentDetail 
            authorName ={faker.name.fullName()} 
            timeAgo='Today at 5:45 pm' 
            mnth={faker.date.month()} 
            imageSrc={faker.image.avatar()} 
            authorsMusic={faker.music.songName()}
            txt="Nice Blog post!" 
            city={faker.address.city()}
            authorsAnimal={faker.animal.cat()}     />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            authorName ={faker.name.fullName()} 
            timeAgo='Today at 5:45 pm' 
            mnth={faker.date.month()} 
            imageSrc={faker.image.avatar()} 
            authorsMusic={faker.music.songName()}
            txt="Nice Blog post!" 
            city={faker.address.city()}
            authorsAnimal={faker.animal.cat()}     />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            authorName ={faker.name.fullName()} 
            timeAgo='Today at 5:45 pm' 
            mnth={faker.date.month()} 
            imageSrc={faker.image.avatar()} 
            authorsMusic={faker.music.songName()}
            txt="Nice Blog post!" 
            city={faker.address.city()}
            authorsAnimal={faker.animal.cat()}     />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
            authorName ={faker.name.fullName()} 
            timeAgo='Today at 5:45 pm' 
            mnth={faker.date.month()} 
            imageSrc={faker.image.avatar()} 
            authorsMusic={faker.music.songName()}
            txt="Nice Blog post!" 
            city={faker.address.city()}
            authorsAnimal={faker.animal.cat()}     />
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail  
            authorName ={faker.name.fullName()} 
            timeAgo='Today at 2:45 pm' 
            mnth={faker.date.month()} 
            imageSrc={faker.image.avatar()}
            authorsMusic={faker.music.songName()} 
            txt="Nice Blog post!" 
            city={faker.address.city()}
            authorsAnimal={faker.animal.cat()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail  
            authorName ="Jane" 
            timeAgo='Today at 1:45 pm' 
            mnth={faker.date.month()} 
            imageSrc={faker.image.avatar()}
            authorsMusic={faker.music.songName()} 
            txt="Nice Blog post!" 
            city={faker.address.city()}
            authorsAnimal={faker.animal.cat()} />
        </ApprovalCard>
       

        

      </div>
    
        );
};
export default App;