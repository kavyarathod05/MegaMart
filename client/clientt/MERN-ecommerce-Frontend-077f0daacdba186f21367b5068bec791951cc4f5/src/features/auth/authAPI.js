export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://megamart-be-02.onrender.com/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function checkUser (loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://megamart-be-02.onrender.com/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });

      if (response.ok) { // 200-299 status code
        const data = await response.json();
        resolve({ data });
      } else if (response.status === 401) { // Unauthorized
        reject({ message: "Invalid username or password" });
      } else {
        reject({ message: "Error occurred while checking user" });
      }
    } catch (error) {
      reject({ message: "Error occurred while checking user", error });
    }
  });
}
export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
