import * as React from "react";
import * as ReactDOM from "react-dom";

import User from './src/UserInterface'
var user: User = {name: 'samuel', age: 23, address: 'sasas', dob: new Date()}

ReactDOM.render(
<div>
<h1>Hello There {user.dob}</h1>
</div>,
  document.getElementById("root")
);
