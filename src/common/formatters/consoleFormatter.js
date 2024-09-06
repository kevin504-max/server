class ConsoleFormatter {
    constructor () {
        // Estilos de texto
        this.reset = "\x1b[0m"; // Resetar estilo
        this.bright = "\x1b[1m"; // Texto brilhante
        this.dim = "\x1b[2m"; // Texto escurecido
        this.underscore = "\x1b[4m"; // Texto sublinhado
        this.blink = "\x1b[5m"; // Texto piscante
        this.reverse = "\x1b[7m"; // Inverter cores
        this.hidden = "\x1b[8m"; // Texto oculto

        // Cores do texto
        this.black = "\x1b[30m"; // Preto
        this.red = "\x1b[31m"; // Vermelho
        this.green = "\x1b[32m"; // Verde
        this.yellow = "\x1b[33m"; // Amarelo
        this.blue = "\x1b[34m"; // Azul
        this.magenta = "\x1b[35m"; // Magenta
        this.cyan = "\x1b[36m"; // Ciano
        this.white = "\x1b[37m"; // Branco

        // Cores de fundo
        this.bgBlack = "\x1b[40m"; // Preto
        this.bgRed = "\x1b[41m"; // Vermelho
        this.bgGreen = "\x1b[42m"; // Verde
        this.bgYellow = "\x1b[43m"; // Amarelo
        this.bgBlue = "\x1b[44m"; // Azul
        this.bgMagenta = "\x1b[45m"; // Magenta
        this.bgCyan = "\x1b[46m"; // Ciano
        this.bgWhite = "\x1b[47m"; // Branco
    }
}

module.exports = ConsoleFormatter;