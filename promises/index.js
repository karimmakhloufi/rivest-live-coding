const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve({ name: "Wilder 1" });
    } else {
      reject("database on fire");
    }
  }, 300);
});

const fetchData = async () => {
  try {
    const wilders = await myPromise;
    console.log(wilders);
  } catch (err) {
    console.log("error", err);
  }
};

fetchData();
