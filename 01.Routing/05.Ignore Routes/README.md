# Ignore route

<p>We can use parantheses in the folder name to ignore a rotue in Nextjs.
pages/
  (ignored)/
    somefile.js
Next.js will ignore the (ignored) folder and its contents, so somefile.js will not be treated as a page/route by Next.js.
</p>

<p>This feature allows you to organize your project directory without affecting the routing behavior of Next.js. You can use it to include utility files, configuration files, or any other files that you don't want to be treated as pages/routes.</p>
