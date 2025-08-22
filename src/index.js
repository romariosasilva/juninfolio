import express from 'express';
import nunjucksPkg from 'nunjucks';
import { pageHome, pageProfile, pageWorks, pageContact } from './pages.js';

// Configuracao nunjucks (template engine)
const { configure } = nunjucksPkg;

const server = express();
configure('src/views', {
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