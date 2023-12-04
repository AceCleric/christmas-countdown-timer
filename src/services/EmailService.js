import emailjs from '@emailjs/browser';

export const sendEmail = (templateParams) => {
  emailjs.send('service_id', 'template_id', templateParams, 'public_key')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
    }, (error) => {
      console.log('FAILED ...', error)
    })
};
