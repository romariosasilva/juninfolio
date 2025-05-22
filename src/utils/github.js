// INFORMACOES DO USUARIO
export async function getGithubUserInfo(userName)
{
	let request = Promise.resolve( fetch(`https://api.github.com/users/${userName}`) );

	const response = await request;
	return await response.json();
}

// INFORMACOES DOS REPOSITORIOS DO USUARIO
export async function getGithubRepos(userName)
{
	let request = Promise.resolve( fetch(`https://api.github.com/users/${userName}/repos`) );

	const response = await request;
	return await response.json();
}

// INFORMACOES DAS LINGUAGENS UTILIZADAS EM CADA REPOSITORIO
// export async function getGithubRepoLanguages(userName, repoName)
// {
// 	let request = Promise.resolve( fetch(`https://api.github.com/repos/${userName}/${repoName}/languages`) );

// 	const response = await request;
// 	return await response.json();
// }

export default {
  getGithubUserInfo,
  getGithubRepos
}
