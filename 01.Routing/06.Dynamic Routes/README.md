# Dynamic Route

<p>You can create dynamic routes using square brackets ([]) in the file name to denote parts of the URL that are dynamic. These dynamic segments can then be accessed as parameters in your page components.</p>

<p>In this case we have used: [user]</p>

<h2>Create page component</h2>

```js
"use client";

const User = ({ params }) => {
  return (
    <div>
      <h1>Hello there, {params.user}</h1>
    </div>
  );
};
```

<h2>Dynamic url</h2>

```markdown
`localhost/3000/userslist/chandler`

result: Hello there, chandler
```
