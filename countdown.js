document.addEventListener('DOMContentLoaded', function () {
    // Data e hora desejadas para a contagem regressiva (hora de Portugal)
    const targetDate = new Date('2024-02-14T21:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `${hours}h ${minutes}m ${seconds}s`;

            // Mostra o link quando chegar à hora desejada
            if (hours === 0 && minutes === 0 && seconds === 0) {
                document.getElementById('linkContainer').style.display = 'block';
            }
        }
    }

    // Atualiza a contagem regressiva a cada segundo
    setInterval(updateCountdown, 1000);

    // Inicializa a contagem regressiva ao carregar a página
    updateCountdown();
});
