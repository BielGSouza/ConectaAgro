// Consumo de APIs com fetch (Fase 7 - Domine o Front-End).
// Open-Meteo: gratuita e sem chave de API.
const URL_GEO = 'https://geocoding-api.open-meteo.com/v1/search';
const URL_PREVISAO = 'https://api.open-meteo.com/v1/forecast';

// Código WMO -> descrição e ícone
const CODIGOS = {
    0: ['Céu limpo', '☀️'],
    1: ['Poucas nuvens', '🌤️'],
    2: ['Parcialmente nublado', '⛅'],
    3: ['Nublado', '☁️'],
    45: ['Neblina', '🌫️'],
    48: ['Neblina com geada', '🌫️'],
    51: ['Garoa fraca', '🌦️'],
    53: ['Garoa', '🌦️'],
    55: ['Garoa forte', '🌦️'],
    61: ['Chuva fraca', '🌧️'],
    63: ['Chuva', '🌧️'],
    65: ['Chuva forte', '🌧️'],
    80: ['Pancadas de chuva', '🌧️'],
    81: ['Pancadas de chuva', '🌧️'],
    82: ['Pancadas fortes', '⛈️'],
    95: ['Tempestade', '⛈️'],
    96: ['Tempestade com granizo', '⛈️'],
    99: ['Tempestade com granizo', '⛈️'],
};

export function descreverCodigo(codigo) {
    return CODIGOS[codigo] ?? ['Condição variável', '🌡️'];
}

// Dica de manejo calculada a partir dos dados reais
export function gerarDica({ temperatura, umidade, vento, chuva }) {
    if (chuva >= 10) return '🌧️ Chuva forte: evite pulverizar e adie a colheita para não perder produto.';
    if (vento >= 20) return '💨 Vento forte: não aplique defensivos agora, a deriva pode atingir áreas vizinhas.';
    if (temperatura >= 34) return '🔥 Calor intenso: irrigue no início da manhã ou no fim da tarde.';
    if (umidade < 40) return '🏜️ Ar seco: monitore a irrigação e redobre a atenção com risco de incêndio.';
    if (chuva > 0) return '🌱 Chuva leve: bom momento para plantio, o solo fica úmido.';
    return '🌱 Condições estáveis: bom momento para plantio e tratos culturais.';
}

async function pedir(url) {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error('Serviço de clima fora do ar.');
    return resposta.json();
}

export async function buscarClimaPorCidade(cidade) {
    const geo = await pedir(
        `${URL_GEO}?name=${encodeURIComponent(cidade)}&count=1&language=pt&countryCode=BR`
    );
    const local = geo.results?.[0];
    if (!local) throw new Error('CIDADE_NAO_ENCONTRADA');

    const params = new URLSearchParams({
        latitude: local.latitude,
        longitude: local.longitude,
        current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code',
        daily: 'temperature_2m_max,temperature_2m_min',
        timezone: 'auto',
        forecast_days: 1,
    });
    const dados = await pedir(`${URL_PREVISAO}?${params}`);
    const atual = dados.current;
    const [descricao, icone] = descreverCodigo(atual.weather_code);

    const resultado = {
        nome: local.admin1 ? `${local.name} - ${local.admin1}` : local.name,
        data: new Date().toLocaleDateString('pt-BR'),
        temperatura: Math.round(atual.temperature_2m),
        descricao,
        icone,
        umidade: Math.round(atual.relative_humidity_2m),
        vento: `${Math.round(atual.wind_speed_10m)} km/h`,
        chuva: `${atual.precipitation} mm`,
        max: Math.round(dados.daily.temperature_2m_max[0]),
        min: Math.round(dados.daily.temperature_2m_min[0]),
    };
    resultado.dica = gerarDica({
        temperatura: atual.temperature_2m,
        umidade: atual.relative_humidity_2m,
        vento: atual.wind_speed_10m,
        chuva: atual.precipitation,
    });
    return resultado;
}

// ViaCEP: preenche o endereço a partir do CEP
export async function buscarEnderecoPorCep(cep) {
    const limpo = cep.replace(/\D/g, '');
    const dados = await pedir(`https://viacep.com.br/ws/${limpo}/json/`);
    if (dados.erro) throw new Error('CEP_NAO_ENCONTRADO');
    return { rua: dados.logradouro, bairro: dados.bairro, cidade: dados.localidade, uf: dados.uf };
}
