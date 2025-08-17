import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Pedro';

export const lastName = 'Pais';

export const description =
	'Game developer specialised in cooperative and asymmetric play. Experienced in Unity and Godot with published research on game design and accessibility at top-tier conferences. Skilled in bridging technical development and design to create engaging multiplayer experiences.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.GitHub,
		link: 'https://github.com/pgpais'
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/pgpais/'
	},
	{
		platform: Platform.Email,
		link: 'pgpaisdev@gmail.com'
	}
];

export const skills = getSkills('unity', 'godot', 'csharp', 'svelte', 'ts', 'tailwind');
