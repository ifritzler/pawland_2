const showToastNotification = ({ title }, callback = null) => {
  Toastify({
    text: `${title} fue agregado!`,
    duration: 3000,
    newWindow: false,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgba(255, 208, 0, 1)",
      color: "rgba(24, 24, 24, 1)",
      fontSize: "16px",
    },
    onClick: callback ? callback : null, // Callback after click
  }).showToast();
};

const reduceTextDescription = (text, characters) => {
  return text.slice(0, characters);
};

export { showToastNotification, reduceTextDescription };
