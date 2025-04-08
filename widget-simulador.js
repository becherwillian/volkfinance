<style>
.advisar-main-menu, .mobile-menu {display:none !important;}
  .form-container {
    background: #fff;
    padding: 20px;
    width: 100%;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  .form-container h2 {
     font-family: 'DM Serif Display', serif;
    font-weight: 300; 
    font-size: 24px;
    margin-bottom: 16px;
    color: #002B3D;
  }
  .tabs, .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 5px;
  }
  .tabs button, .options button {
    flex: 1;
    background: #0072A3;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 4px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
  }
  .tabs button.active, .options button.active {
    background: #F4F4F4;
    font-weight: bold;
    color: #0072A3;
    border: 2px solid #0072A3;
  }
  .slider-container {
    margin-bottom: 20px;
  }
  .slider-container input {
    width: 100%;
  }
  .value-display {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  .submit-btn {
    background: #0DC191;
        font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    color: white;
    border: none;
    padding: 15px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    margin-top: 15px;
  }
  .additional-fields {
    display: none;
    margin-top: 20px;
    text-align: left;
  }
  .additional-fields label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
  }
  .additional-fields input {
    width: calc(100% - 10px);
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .additional-fields .submit-btn {
    padding: 10px;
    font-size: 14px;
  }
</style>

<div class="form-container">
 <form action="https://hook.us2.make.com/u7apetgedfugjab186fhg7d9ef2s46jw" method="POST" onsubmit="return validateAndSend()">
    <h2>Selecione o que esta buscando</h2>
    <div class="tabs">
      <button type="button" onclick="selectTab(this, 'Carros')" class="active">Carros</button>
      <button type="button" onclick="selectTab(this, 'Imóveis')">Imóveis</button>
      <button type="button" onclick="selectTab(this, 'Pesados')">Pesados</button>
    </div>
    <input type="hidden" id="selectedTab" value="Carros">
    
     <h2>Deseja simular</h2>
    <div class="options">
        
       
      <button type="button" onclick="selectOption(this, 'Parcela')" class="active">Parcela</button>
      <button type="button" onclick="selectOption(this, 'Crédito')">Crédito</button>
    </div>
    <input type="hidden" id="selectedOption" value="Parcela">
    <div class="slider-container">
      <label id="slider-label">Escolha o valor da parcela:</label>
      <input type="range" id="slider" min="500" max="10000" step="1" value="500" oninput="updateValue(this.value)">
      <div class="value-display">R$ 500,00</div>
    </div>
    <button type="button" class="submit-btn" onclick="showAdditionalFields()">SIMULE AGORA</button>
    
<div class="additional-fields" id="additional-fields">
  <input type="hidden" name="tipo" id="hiddenTipo">
  <input type="hidden" name="simulacao" id="hiddenSimulacao">
  <input type="hidden" name="valor" id="hiddenValor">

  <label for="name">Nome</label>
  <input type="text" id="name" name="name" placeholder="Digite seu nome">
  <label for="email">E-mail</label>
  <input type="email" id="email" name="email" placeholder="Digite seu e-mail">
  <label for="phone">Telefone</label>
  <input type="tel" id="phone" name="phone" placeholder="Digite seu telefone">
  <button type="submit" class="submit-btn">SOLICITAR SIMULAÇÃO</button>
</div>

  </form>
</div>

<script>
function showAdditionalFields() {
  document.querySelector('.slider-container').style.display = 'none';
  document.querySelector('.options').style.display = 'none';
  document.querySelector('.tabs').style.display = 'none';
  document.querySelector('.submit-btn').style.display = 'none';
  document.querySelectorAll('.form-container h2').forEach(h2 => {
    h2.style.display = 'none';
  });
  document.getElementById('additional-fields').style.display = 'block';
}

function updateValue(value) {
  document.querySelector('.value-display').textContent = `R$ ${parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

function selectTab(button, type) {
  document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  document.getElementById('selectedTab').value = type;
  updateSlider();
}

function selectOption(button, option) {
  document.querySelectorAll('.options button').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  document.getElementById('selectedOption').value = option;
  updateSlider();
}

function updateSlider() {
  const type = document.getElementById('selectedTab').value;
  const option = document.getElementById('selectedOption').value;
  const slider = document.getElementById('slider');
  const label = document.getElementById('slider-label');

  if (option === 'Crédito') {
    if (type === 'Carros') {
      slider.min = 20000;
      slider.max = 800000;
    } else if (type === 'Imóveis') {
      slider.min = 100000;
      slider.max = 2000000;
    } else {
      slider.min = 100000;
      slider.max = 1200000;
    }
    slider.step = 10000;
    label.textContent = 'Escolha o valor do crédito:';
  } else {
    slider.min = 250;
    slider.max = 25000;
    slider.step = 100;
    label.textContent = 'Escolha o valor da parcela:';
  }

  slider.value = slider.min;
  updateValue(slider.min);
}

function validateAndSend() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  // Atualiza os campos ocultos com os valores atuais
  document.getElementById('hiddenTipo').value = document.getElementById('selectedTab').value;
  document.getElementById('hiddenSimulacao').value = document.getElementById('selectedOption').value;
  document.getElementById('hiddenValor').value = document.getElementById('slider').value;

  return true; // Permite o envio
}

// Detecta o parâmetro ?sucesso=1 na URL
window.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sucesso") === "1") {
	
	gtag('event', 'conversion', {'send_to': 'AW-16955983019/GmyPCJq2iLQaEKuJn5U_'});
  
    alert("Solicitação enviada com sucesso!");
    // Remove o parâmetro da URL sem recarregar a página (opcional)
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

</script>

