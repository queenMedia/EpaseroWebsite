function sendForm(IDForm, message = 'Form sent successfully') {
    const form = document.getElementById(IDForm);
    const isValidForm = validateForm(form);
  
    if (!isValidForm) return;
  
    notify.success(message, 3000);
    
    setTimeout(() => {
        window.location.href = 'thank-you.html';
    }, 2000);
  }