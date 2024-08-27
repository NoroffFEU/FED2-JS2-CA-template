export default function router(pathname = window.location.pathname) {
  switch (pathname) {
    case "/":
      import("./views/home.js");
      break;
    case "/auth/":
      import("./views/auth.js");
      break;
    case "/auth/login/":
      import("./views/login.js");
      break;
    case "/auth/register/":
      import("./views/register.js");
      break;
    case "/post/":
      import("./views/post.js");
      break;
    case "/posts/":
      import("./views/posts.js");
      break;
    case "/post/edit/":
      import("./views/postEdit.js");
      break;
    case "/profile/":
      import("./views/profile.js");
      break;
    default:
      import("./views/notFound.js");
  }
}
