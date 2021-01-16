export default (err) => {
  return new Promise((resolve, reject) => {
    reject(err);
  });
};
