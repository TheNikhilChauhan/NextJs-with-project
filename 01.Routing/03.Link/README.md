# Link

<h2>Basic Usage</h2>
<p>Links are created using the 'Link' component from 'next/link' module. The 'Link' component is used to enable client-side navigation between pages in your Nextjs application without causing a full page reload.</p>

```js
import Link from "next/link";

const MyComponent = () => {
  return (
    <Link href="/about">
      <a>About Us</a>
    </Link>
  );
};

export default MyComponent;
```

<h2>Dynamic Routes</h2>
<p>Nextjs supports Dynamic routes, where parts of the URL are used as parameters. You can use dynamic routes with the 'Link' component by passing route parameter as part of the 'href' attribute.</p>

```js
import Link from "next/link";

const UserDetail = ({ userId }) => {
  return (
    <Link href={`/users/${userId}`}>
      <a>View Profile</a>
    </Link>
  );
};

export default UserDetail;
```

<h2>Prefetching</h2>
<p>Nextjs automatically prefetches linked pages in the background to improve performance. This means that when a user hovers over a link created with 'Link' component, nextjs will start loading the linked page in the background. We can disable it by setting the attribute to false.</p>

```js
<Link href="/about" prefetch={false}>
  <a>About Us</a>
</Link>
```
