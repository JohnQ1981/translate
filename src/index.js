import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetails';
const App =() => {
 
    return (
        <div className="ui container comments">
      
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />

        

      </div>
    
        );
};

ReactDOM.render(<App />, document.querySelector('#root'));