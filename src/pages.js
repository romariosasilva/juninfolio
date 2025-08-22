import envConfig from './config.js';
import { getGithubUserInfo, getGithubRepos } from './utils/github.js';

export async function pageHome(req, res)
{
	try
	{
		const githubUserInfo = await getGithubUserInfo(envConfig.username);

		const userInfo = {
			user_login: githubUserInfo.login,
			user_name: githubUserInfo.name,
			// user_details: githubUserInfo.bio.replaceAll(/([\t\r\n])/g, '').trim(),
			user_details: githubUserInfo.bio,
			user_image: githubUserInfo.avatar_url,
			user_github: githubUserInfo.html_url,
			qtde_repos: githubUserInfo.public_repos,
			qtde_followers: githubUserInfo.followers,
			theme: envConfig.theme,
			social_media: [
				{
					"icon": "github",
					"data": envConfig.link_github
				},
				{
					"icon": "instagram",
					"data": envConfig.link_instagram

				},
				{
					"icon": "linkedin",
					"data": envConfig.link_linkedin
				},
				{
					"icon": "twitter",
					"data": envConfig.link_twitter
				},
				{
					"icon": "youtube",
					"data": envConfig.link_youtube
				}
			]
		};

		return res.render("index.html", { userInfo } );
	}
	catch (error)
	{
		// console.log(error);
		return res.render("404.html" );
	}
}

export function pageProfile(req, res)
{
	try
	{
		return res.render( "profile.html" );
	}
	catch (error)
	{
		// console.log(error);
		return res.render("404.html" );
	}
}

export async function pageWorks(req, res)
{
	try
	{
		const repositories = await getGithubRepos(envConfig.username);

		const newRepos = repositories.map((repo) => {
			return {
				repo_name: repo.name,
				repo_description: repo.description,
				repo_site: repo.homepage,
				repo_url: repo.html_url,
				repo_languages: repo.topics
			}
		});

		newRepos.user_name = envConfig.username;
		newRepos.theme = envConfig.theme ?? 'magenta-theme';

		return res.render( "works.html", { newRepos } );
	}
	catch (error)
	{
		// console.log(error);
		return res.render("404.html" );
	}
}

export function pageContact(req, res)
{
	try
	{
		return res.render( "contact.html" );
	}
	catch (error)
	{
		// console.log(error);
		return res.render("404.html" );
	}
}

export default
{
	pageHome,
	pageProfile,
	pageWorks,
	pageContact
}
