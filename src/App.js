import React from "react";
import Header from "./component/header";
import Headline from "./component/headline/Headline";
import Counter from "./component/testing/Counter";
import Form from "./component/testing/Form";
import User from "./component/user/User";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Post" desc="Click here" tempArr={tempArr} />
      </section>
      <Counter />
      <User id={1} />
      <Form />
    </div>
  );
}

export default App;
