import express from 'express';
import nunjucksPkg from 'nunjucks';
import { fileURLToPath } from 'url';
import { pageHome, pageProfile, pageWorks, pageContact } from './pages.js';

// Para compatibilidade com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuracao nunjucks (template engine)
const { configure } = nunjucksPkg;

const server = express();
configure(path.join(__dirname, 'views'), {
	express: server,
	noCache: true,
});

// Configuracao e inicializacao do servidor
server
	.use(express.urlencoded({ extended: true }))	// Recebimento dos dados do req.body
	.use(express.static("public"))					// Configuracao local dos arquivos estaticos (css, scripts, imagens)
	.get("/", pageHome)								// Rota da pagina Home
	.get("/profile", pageProfile)					// Rota da pagina Profile
	.get("/works", pageWorks)						// Rota da pagina Works
	.get("/works", pageContact);					// Rota da pagina Contact


// Exporta como função handler para Vercel
export default server;