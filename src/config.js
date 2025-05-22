import { config } from 'dotenv';

config();

// INFORMACOES CONFIGURADAS NO ARQUIVO .ENV
const envConfig = {
	username: process.env.NAME,
	theme: process.env.THEME ?? 'magenta-theme',
	navbarPosition: process.env.MENU_POSITION,
	navbarFixed: process.env.MENU_FIXED,
	link_github: process.env.LINK_GITHUB ?? "",
	link_instagram: process.env.LINK_INSTAGRAM ?? "",
	link_linkedin: process.env.LINK_LINKEDIN ?? "",
	link_twitter: process.env.LINK_TWITTER_X ?? "",
	link_youtube: process.env.LINK_YOUTUBE ?? ""
}

export default envConfig;
