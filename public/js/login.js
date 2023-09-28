const logInFormHandler = async (event) => {
    console.log("click")
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log(email);
    console.log(password);

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'Post',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        if (response.ok) {
            console.log('response.ok', response.ok)
            document.location.replace('/');
        } else {
            alert('Log In Failed!');
        }
    }

};

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('#signup-form')
    .addEventListener('click', signupFormHandler);


document.querySelector('#loginbtn').addEventListener('click', logInFormHandler);