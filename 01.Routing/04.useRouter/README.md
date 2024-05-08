# useRouter

<p>'useRouter' is a built-in hook provided by the 'next/router' module. It allows you to access the nextjs router object within functional components. The router object provides the information about the current route and allows you to perform programmatic navigation.</p>

<p>Import useRouter hook and then call this hook to access the router object.</p>

```js
import { useRouter } from "next/navigation";

const router = useRouter();
```

<strong>
next/router and next/navigation both are similar and serve the same purpose.

next/router - next/router is the oldest package for navigation. It is more lightweight and built for basic routing needs. - It is useful for simple applications and applications that don't use modern features of nextJS

next/navigation - It is the newer routing package for routing. - It is a more powerful package that provides several advanced features, such as App router, Link, useRouter hook etc.
</strong>

<p>Access Route Information</p>
<ul>
    <li>pathname: The URL path of the current route.</li>
    <li>query: An object containing the query parameters of the current URL.</li>
    <li>asPath: The actual path including the query string.</li>
    <li>push(): Method to programmatically navigate to a new route.</li>
    <li>replace(): Method to replace the current route with a new route without adding it to the history stack.</li>
    <li>reload(): Method to reload the current route.</li>
    <li>back(): Method to navigate back to the previous page in the history stack.</li>
</ul>
