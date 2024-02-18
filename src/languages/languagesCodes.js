export const Languages = [
    {
        "code": "pt_br",
        "name": "Português (Brasil)"
    },
    {
        "code": "en_us",
        "name": "English (USA)"
    },
    {
        "code": "es_es",
        "name": "Español (España)"
    },
    {
        "code": "fr_fr",
        "name": "Français (France)"
    },
    // Adicione mais línguas conforme necessário
];

// Ordenar por ordem alfabética
Languages.sort((a, b) => a.name.localeCompare(b.name));
