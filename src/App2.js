import { Component } from "react";
// import { getTTFB } from "web-vitals";
import './App.css';

class Todo extends Component {
  render() {
    return <div onClick={this.props.deleteFunction}>{this.props.text}      &nbsp;&nbsp;  
     {/* {this.props.dateTodo} */}
    </div>
  }

  // todo.text
}

class TodoList extends Component {
 
  state = {
    todos:  []
    ,    inputText: ''
    , dateTodo: new Date()
    , sortFlag: ''
  } 
 

  //LOGIC CONTROLS
//   state = {todos: [], inputText: ''
//   , dateTodo: new Date() 
//  }
   // new in constructor [ state.dateTodo];
    validFlag = false;

  handleInputChange = (e) => this.setState({ inputText: e.target.value })

  addTodo = () => {
    //validate()
    let matchText = "";
    this.validFlag = false;
    // matchText =  this.state.inputText.match(matchText.trim());  
    ////.substring()
        
          // this.getList.is
          console.log("getList[]");   //  matchText1
          console.log(this.getList   );
          console.log("todo.text");

    //checkUniqueName(taskTodo) 
  // this.state.todos.find();
    this.state.todos.map((todo) => {
      // not yett valid  , so check text
          // if (  this.validFlag == false) {}    
          console.log(todo.text);
        this.validFlag =  todo.text.includes(  
                this.state.inputText);   
                // =  todo.text.includes(  ))
   
// = this.state.inputText.includes(  
//          todo.text)
     
        // matchText = this.state.inputText.includes(   todo.text)
    });
    console.log("validFlag");   //  matchText1
    console.log(this.validFlag   );
    // console.log( "  thisss.".includes("sii"));

   
    if (  !this.validFlag ) {
      //   checkk   is  false;
      //   coz  there IS matchingg   matchText ,;;;;
      // can NOT  adddd()   todo list ,
      matchText = "";
      // matchText = this.state.inputText;
    }
  
    // this.state.inputText.match== this.state.todos.map(x)
    //  this.state.todos.same nameee; 
    if (this.state.inputText.trim() == "") {
      // input is empty string, DO NOT add


    } 
    else{
  // if(  this.validFlag  ))
          //can CAN DO toAddddd();
      //input IS NOT EMPTY, so addtoList todos();      
      matchText = "";
      matchText = this.state.inputText;
      console.log("matchText");     
      console.log(matchText);        
      
      this.setTodosList();    
      //  dateTodo: (Date) this.state.todos.dateTodo
      this.setState({ inputText: '' })
      
     
    }
  }

  clearAll = () => this.setState({todos: []})

  removeTop = () =>  { this.setState({todos: this.state.todos.slice(1)}  );

  // ////TODOOOO TODO
  //////sortList()
    // this.sortList();

        // [11,2,22,1].sort((a, b) => a - b)
  // this.state.todos.sort()
  

   
  }
  
  deleteFunction = (k) => this.setState({todos: [...this.   state.todos.slice(0, k), ...this.state.todos.slice(k+1)]})

 

  // sortList() {}}
  // sortList()
  sortList = () => {

    let listL = [];
    listL = this.state.todos;
    // if (nameA < nameB) {}}
    

    //   this.setState({sortFlag: 'LATEST'  
    // });
    console.log(this.state);
    // console.log(  this.state.sortFlag=="LATEST"     );  


    //  set the Sort Flag() sort button
    // LATEST or EARLY
    this.setSortFlag();
    //     this.setState({ todos: [...this.state, 
    //   { sortFlag: 'LATEST'
    //  } ] });

    
    //  TODOMVC
    //  goto()  LATER Date first order
    if (this.state.sortFlag == "LATEST") {
      listL = listL.sort((elFirst, elLast) =>
        new Date(elLast.dateTodo)
        - new Date(elFirst.dateTodo));
      // this.setState({sortFlag: 'LATEST' });
      // console.log("listL[]");
      // console.log(listL);
    }
    ///GOTO()  early date() button
    if (this.state.sortFlag == "EARLY") {
      //       onClick=sortList()
      //  <     Button>   Sort   />
      // early date first order
      listL = listL.sort((elFirst, elLast) =>
        new Date(elFirst.dateTodo)
        - new Date(elLast.dateTodo));
      // console.log("listL[]");
      // console.log(listL);

      // this.setState({sortFlag: 'EARLY' });   
      console.log("sortFlag333");
      console.log(this.state.sortFlag);
    }
    console.log("listL[]");
    console.log(listL);

    // update to state todos list
    this.setState({ todos: listL });
    //  this.setState({ todos: [...this.state.todos, 
    //   { text: this.state.inputText , dateTodo:  new Date()  
    //  } ] });
    // this.state.todos = listL;

 


  }

   
  setSortFlag() {
     //  setSortFlag() sort button
    if ((this.state.sortFlag == "LATEST")) {
      this.setState({ sortFlag: 'EARLY' });
      console.log("sortFlag111");
      console.log(this.state.sortFlag);    
      // ;;  set  'EARLY'

    } else {
      this.setState({ sortFlag: 'LATEST' });
      // this.setState({sortFlag: 'EARLY' });
      console.log("sortFlag222");
      console.log(this.state.sortFlag);
    };
  }

  
  setTodosList() {
    /////set add() todo to on element of List and show on html view.
    // Here,set text and  show on html view.
    this.setState({ todos: [...this.state.todos, 
      { text: this.state.inputText + "    " + new Date()  
      , dateTodo:  new Date()  
     } ] });
       //  this.setState({ todos: [...this.state.todos, 
    //   { text:  "textt new Date()  "
    //  } ] });     
 
   let getList = [];
  //  getList.filter ();;
  // fromm the ProductSearch.App3   web module;
   getList =  this.state.todos ;
     /////TODOOOO TODO
     console.log(  "state.todos[] ");
    console.log( this.state.todos  );
    console.log(   Object.values(this.state.todos) );
    console.log(   Object.keys(this.state.todos) );
    console.log( getList[0] );
    // .todos.keys().next().value  );
       // this.state.dateTodo 

     

  }

  render() {
    return (
      <div>
        TODOMVC MODULE
    Enter Task 
        <input    value={this.state.inputText} onChange={this.handleInputChange}></input>
     
        <button  onClick={this.addTodo}>Add</button>      
        <button onClick={this.removeTop}>Task Complete</button>
        <p> -click "Task Item" to remove  </p>
        <p> <button  onClick={this.sortList}>Sort Date
        </button>    </p>  
        <button onClick={this.clearAll}>Clear All</button>
       
          {this.state.todos.map((todo, k) => <Todo key={k} deleteFunction={()=>this.deleteFunction(k)}
           text={todo.text}  dateTodo={todo.dateTodo}
       />)}       
         <p>
        {this.state.todos.length} items left
        </p>
        <p>

        

        </p>

        <p>
       
        </p>

      </div>
    )
  }
}

function App2() {
  return (
    <TodoList />
  );
}

export default App2;
