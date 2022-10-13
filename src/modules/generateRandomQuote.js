const quotes = ["Dime una vez mas todos los crímenes que cometí, y te diré el precio de la victoria", "El amor es cruel, sin embargo, ¡vencerá!", "Esta niebla tiene sólo una cura y yo la encontraré.", "Que cosa tan pequeña y frágil es el amor.", "Mientras más negra la noche, más brillan las estrellas.", "¡Eh, mira, estoy abriendo mi caja de preocupaciones! Un momento. ¡Está vacía!", "Hay un placer en la locura que solo los locos conocen.", "A nadie se le ha prometido el mañana.", "No te conviertas en una bestia para derrotar a otra.", "Tramposo es una forma bonita de decir ganador", "La gente desperdicia mucho tiempo, y luego quieren más. Desean más horas en sus días, más días en sus años, más años en sus vidas.", "No importa cuanto tiempo tengas, sino como lo usas.", "Te regalo mi dolor.", "La piedad es un lujo y una responsabilidad de los humanos.", "Si no eres capaz de aprovechar cada momento no mereces un solo segundo mas.", "¿Tú también quieres jugar? Será divertido.", "Solo hay dos bufones en la baraja.... y me tocas tú.", "Hay errores que no puedes cometer dos veces.", "Un auténtico maestro nunca deja de aprender."];

const quoteContainer = document.querySelector("#quotes");

export const generateRandomQuote = () => {
  quoteContainer.textContent = quotes[Math.floor(Math.random() * quotes.length)];
};
