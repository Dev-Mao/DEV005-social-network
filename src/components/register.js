export function register(navigateTo) {
  // Contenedor register
  const registerContainer = document.createElement('section');
  registerContainer.classList.add('register-container');

  // Formulario
  const registerForm = document.createElement('form');
  registerForm.classList.add('register-form');

  // Título Playverse
  const nameTitle = document.createElement('h1');
  nameTitle.textContent = 'REGÍSTRATE';
  registerForm.append(nameTitle);

  // Contenedor nombre de usuario
  const userNameContainer = document.createElement('div');
  userNameContainer.classList.add('group');

  const labelUserName = document.createElement('label');
  labelUserName.classList.add('register');
  labelUserName.textContent = 'Nombre de usuario:';
  labelUserName.setAttribute('for', 'userName');

  const inputUserName = document.createElement('input');
  inputUserName.classList.add('inp-register');
  inputUserName.id = 'userName';
  inputUserName.type = 'text';
  userNameContainer.append(labelUserName, inputUserName);
  // Contenedor del correo
  const emailContainer = document.createElement('div');
  emailContainer.classList.add('group');

  const labelEmail = document.createElement('label');
  labelEmail.classList.add('register');
  labelEmail.textContent = 'Correo:';
  labelEmail.setAttribute('for', 'email');

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inp-register');
  inputEmail.id = 'email';
  inputEmail.type = 'email';

  // Añadir los elementos del  contenedor Email
  emailContainer.append(labelEmail, inputEmail);

  // Contenedor contraseña
  const passwordContainer = document.createElement('div');
  passwordContainer.classList.add('group');

  const labelPassword = document.createElement('label');
  labelPassword.classList.add('register');
  labelPassword.textContent = 'Contraseña:';
  labelPassword.setAttribute('for', 'password');

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inp-register');
  inputPassword.id = 'password';
  inputPassword.type = 'password';

  // Añadir los elementos del  contenedor Constraseña
  passwordContainer.append(labelPassword, inputPassword);

  // Mensaje de error
  const registerError = document.createElement('div');
  registerError.classList.add('link-text');
  registerError.id = 'register-error';

  // Botón Iniciar Sesión
  const btnregister = document.createElement('button');
  btnregister.classList.add('btn-register');
  btnregister.id = 'btn-register';
  btnregister.type = 'submit';
  btnregister.textContent = 'Regístrate';

  // ¡No tienes una cuenta?
  const linkContainer = document.createElement('div');
  linkContainer.classList.add('content-link');

  const linkText = document.createElement('p');
  linkText.classList.add('link-text');
  linkText.textContent = '¿Ya tienes una cuenta?';
  linkContainer.append(linkText);

  const links = document.createElement('a');
  links.classList.add('links');
  links.href = '';
  links.textContent = 'Inicia sesión';
  links.addEventListener('click', () => {
    navigateTo('/');
  });
  linkText.append(links);

  // Añadir elementos del form
  registerForm.append(
    userNameContainer,
    emailContainer,
    passwordContainer,
    registerError,
    btnregister,
    linkContainer,
  );

  // O regístrate con
  const textContainer = document.createElement('div');
  textContainer.classList.add('content-text');

  const text = document.createElement('p');
  text.classList.add('link-text');
  text.textContent = 'También puedes';
  textContainer.append(text);

  // Contenedor para el botón de continuar con google e ícono
  const googleContainer = document.createElement('div');
  googleContainer.classList.add('google-container');

  const btnGoogle = document.createElement('button');
  btnGoogle.classList.add('google-btn');
  btnGoogle.textContent = 'continuar con Google';
  googleContainer.append(btnGoogle);

  // Contenedor imagen google

  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'images/google.png';
  imgGoogle.classList.add('google-icon');
  imgGoogle.alt = 'Logo Google';
  btnGoogle.prepend(imgGoogle);

  // Añadir elementos a la section
  registerContainer.append(registerForm, textContainer, googleContainer);
  return registerContainer;
}