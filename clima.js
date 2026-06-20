/* =============================================
   CLIMA.JS - Widget de Clima Agrícola (Open-Meteo, sem API key)
   ============================================= */

async function buscarClima() {
    const input = document.getElementById('input-cidade-clima');
    const cidade = input ? input.value.trim() : '';

    if (!cidade) {
        mostrarToast('Digite o nome de uma cidade.', 'info');
        return;
    }

    const painel = document.getElementById('painel-clima');
    painel.classList.remove('ativo');

    try {
        // 1. Geocodificação via Open-Meteo geocoding API
        const geoResp = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1&language=pt&format=json`
        );
        const geoData = await geoResp.json();

        if (!geoData.results || geoData.results.length === 0) {
            mostrarToast('Cidade não encontrada. Tente outro nome.', 'erro');
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Dados meteorológicos via Open-Meteo (gratuito, sem key)
        const weatherResp = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
            `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,precipitation` +
            `&daily=precipitation_sum,temperature_2m_max,temperature_2m_min` +
            `&timezone=America%2FSao_Paulo&forecast_days=1`
        );
        const weatherData = await weatherResp.json();

        const c = weatherData.current;
        const d = weatherData.daily;

        // Mapeamento de código WMO para descrição e emoji
        const descricao = wmoDescricao(c.weather_code);
        const emoji = wmoEmoji(c.weather_code);

        // Dica agrícola baseada nas condições
        const dica = dicaAgricola(c.weather_code, c.temperature_2m, c.relative_humidity_2m, d.precipitation_sum[0]);

        // Preencher painel
        document.getElementById('clima-nome-cidade').textContent = `${name}, ${country}`;
        document.getElementById('clima-data-hoje').textContent = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
        document.getElementById('clima-icone').textContent = emoji;
        document.getElementById('clima-temperatura').textContent = `${Math.round(c.temperature_2m)}°C`;
        document.getElementById('clima-descricao').textContent = descricao;
        document.getElementById('clima-umidade').textContent = `${c.relative_humidity_2m}%`;
        document.getElementById('clima-vento').textContent = `${Math.round(c.wind_speed_10m)} km/h`;
        document.getElementById('clima-chuva').textContent = `${d.precipitation_sum[0] ?? 0} mm`;
        document.getElementById('clima-max').textContent = `${Math.round(d.temperature_2m_max[0])}°C`;
        document.getElementById('clima-min').textContent = `${Math.round(d.temperature_2m_min[0])}°C`;
        document.getElementById('clima-dica-texto').innerHTML = dica;

        painel.classList.add('ativo');
        mostrarToast(`Clima de ${name} carregado! ☀️`, 'sucesso');

    } catch (err) {
        mostrarToast('Erro ao buscar clima. Verifique sua conexão.', 'erro');
        console.error(err);
    }
}

function wmoDescricao(code) {
    const mapa = {
        0: 'Céu limpo', 1: 'Principalmente limpo', 2: 'Parcialmente nublado', 3: 'Nublado',
        45: 'Névoa', 48: 'Névoa com geada', 51: 'Garoa leve', 53: 'Garoa moderada',
        55: 'Garoa densa', 61: 'Chuva leve', 63: 'Chuva moderada', 65: 'Chuva forte',
        71: 'Neve leve', 73: 'Neve moderada', 75: 'Neve forte', 77: 'Grãos de neve',
        80: 'Pancadas de chuva leves', 81: 'Pancadas moderadas', 82: 'Pancadas fortes',
        85: 'Neve leve', 86: 'Neve forte', 95: 'Trovoada', 96: 'Trovoada com granizo',
        99: 'Trovoada com granizo forte'
    };
    return mapa[code] || 'Condições variáveis';
}

function wmoEmoji(code) {
    if (code === 0) return '☀️';
    if (code <= 2) return '🌤️';
    if (code === 3) return '☁️';
    if (code <= 48) return '🌫️';
    if (code <= 55) return '🌧️';
    if (code <= 65) return '🌧️';
    if (code <= 77) return '❄️';
    if (code <= 82) return '🌦️';
    if (code <= 86) return '🌨️';
    return '⛈️';
}

function dicaAgricola(code, temp, umidade, chuva) {
    let dica = '';

    if (code >= 95) {
        dica = '<strong>⚠️ Atenção:</strong> Trovoada prevista. Evite trabalhar no campo com máquinas agrícolas e proteja as instalações.';
    } else if (code >= 61 && chuva > 10) {
        dica = '<strong>🌧️ Chuva intensa:</strong> Condições desfavoráveis para pulverização e colheita. Aproveite para planejar a próxima etapa.';
    } else if (code >= 51 && code < 61) {
        dica = '<strong>🌦️ Garoa:</strong> Solo pode estar úmido. Ideal para transplante de mudas, mas atenção ao risco de fungos.';
    } else if (temp >= 30 && umidade < 40) {
        dica = '<strong>☀️ Calor e baixa umidade:</strong> Risco de estresse hídrico. Garanta irrigação adequada e monitore as culturas.';
    } else if (temp < 10) {
        dica = '<strong>🌡️ Temperatura baixa:</strong> Risco de geada. Proteja culturas sensíveis e verifique previsões para as próximas horas.';
    } else if (umidade > 80 && temp > 20) {
        dica = '<strong>💧 Alta umidade:</strong> Condições favoráveis para desenvolvimento de doenças fúngicas. Monitore as lavouras.';
    } else {
        dica = '<strong>✅ Condições favoráveis:</strong> Bom dia para atividades no campo! Temperatura e umidade adequadas para a maioria das culturas.';
    }

    return dica;
}

// Permite buscar pressionando Enter
document.addEventListener('DOMContentLoaded', () => {
    const inputClima = document.getElementById('input-cidade-clima');
    if (inputClima) {
        inputClima.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') buscarClima();
        });
    }
});

window.buscarClima = buscarClima;
