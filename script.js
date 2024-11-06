const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkEmail() {
    const mail = document.form1.email.value;
    console.log(mail);
    if(validateEmail(mail)) {
        window.alert('It`s OK !');
    } else {
        window.alert('Email incorrect !');
    }
};