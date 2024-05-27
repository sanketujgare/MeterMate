# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

const Home = () => {
return <div>Home</div>;
};
const Book = () => {
const { id } = useParams();
return (
<div>
<h1>Book {id}</h1>
</div>
);
};
const Books = () => {
return (
<div>
<Link to={"/books/1"}>Book 1</Link>
<Link to={"/books/2"}>Book 2</Link>
<Link to={"/books/new"}>NewBook</Link>
</div>
);
};

const NewBook = () => {
return <div>NewBook</div>;
};

const NotFound = () => {
return <div>NotFound</div>;
};
const App = () => {
return (
<div>
<nav>
<ul>
<li>
<Link to={"/"}>Home</Link>
</li>
<li>
<Link to={"/about"}>About</Link>
</li>
<li>
<Link to={"/books"}>Books</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />}></Route>
{/_ <Route path="/books/:id" element={<Book />}></Route> _/}
{/_ <Route path="/books" element={<Books />}></Route> _/}
<Route path="\*" element={<NotFound />} />
<Route path="/books">
<Route index element={<Books />} />
<Route path=":id" element={<Book />} />
<Route path="new" element={<NewBook />} />
</Route>
</Routes>
</div>
);
};

export default App;
