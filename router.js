function route(handle, pathname) {
  //handle is passed from index to server then finally here
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === "function") {
    return handle[pathname]();
  } else {
    console.log("No request handle found for " + pathname);
    return "404 Not found";
  }
}

exports.route = route;
