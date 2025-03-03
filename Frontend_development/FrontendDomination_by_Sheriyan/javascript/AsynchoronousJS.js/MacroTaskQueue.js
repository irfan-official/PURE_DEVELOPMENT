function call(link) {
  return new Promise((resolve, reject) => {
    let err = false;
    if (err) {
      reject(err);
    }
    resolve(`Check this mao ${link}`);
  });
}

console.log("Hello world");

call("mao").then((data) => console.log(data));
