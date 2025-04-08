window.validateAndSend = function () {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    document.getElementById('hiddenTipo').value = document.getElementById('selectedTab').value;
    document.getElementById('hiddenSimulacao').value = document.getElementById('selectedOption').value;
    document.getElementById('hiddenValor').value = document.getElementById('slider').value;

    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16955983019/GmyPCJq2iLQaEKuJn5U_'
      });
    }

    alert("Simulação enviada com sucesso! Você será redirecionado.");
    return true;
  };
})();
