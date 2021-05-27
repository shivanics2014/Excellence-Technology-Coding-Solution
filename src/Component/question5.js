import React,{Component} from 'react';

class QuestionNumber5 extends Component{
    value=()=>{
        var obj = [
            {"id" : 4, "name" :"abc"},
            {"id" : 10, "name" : "ab2"}, 
            {"id" : 5, "name" : "abc3"}, 
            {"id" : 6, "name" : "abc5"}
        ];  
        obj.sort((a,b)=>a.id-b.id);
        console.log(obj);
    }
    render(){
        return(
            <div>
            <h1>Value By Sorted Id:</h1>
            {this.value()}
            </div>
        );
    }
}
export default QuestionNumber5;