import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'phd-fct',
		company: 'Fundação para a Ciência e Tecnologia',
		description:
			'PhD research on cooperative games, their design structures and how they affect players, particularly in the context of families. The research is focused on understanding how different game mechanics can influence player behavior and interaction in cooperative settings. I made multiple publications in top venues, including CHI and CSCW. The main goal was to explore how cooperative games can be designed to promote positive social interactions.',
		contract: ContractType.Scholarship,
		type: 'Software Development',
		location: 'LASIGE, Faculty of Sciences, University of Lisbon',
		period: { from: new Date(2022, 8, 1), to: new Date(2025, 7, 31) },
		skills: getSkills(
			'svelte',
			'ts',
			'unity',
			'csharp',
			'godot',
			'game-design',
			'python',
			'qualitative',
			'quantitative',
			'godot'
		),
		name: 'PhD Scholarship (interrupted)',
		color: 'red',
		links: [],
		logo: Assets.FCT,
		shortDescription:
			'Research on cooperative games, their design structures, how they affect players, and how they can be designed to promote positive social interactions.'
	},
	{
		slug: 'lemon-fct',
		company: 'Fundação para a Ciência e Tecnologia',
		description:
			"A study that analyzes handwriting through a special pen called HandSpy which digitizes what we are writing. My job was to develop an Android app to show the participants a made up symbol they'd have to copy. There were other training types that implied an interaction with the app. Results of these training sessions were sent to a Firebase database for further analysis.",
		contract: ContractType.Scholarship,
		type: 'Software Development',
		location: 'LASIGE, Faculty of Sciences, University of Lisbon',
		period: { from: new Date(2021, 6, 2), to: new Date(2022, 3, 1) },
		skills: getSkills('android', 'python', 'kotlin'),
		name: 'LEMON Scholarship',
		color: 'red',
		links: [],
		logo: Assets.FCT,
		shortDescription: 'Developed Android app for handwriting analysis study; Integrated Firebase.'
	},
	{
		slug: 'ddj-workshops',
		company: 'University of Lisbon',
		description:
			'Organized and conducted  yearly workshops on game development, focusing on Unity and Godot. The goal was to teach students the basics of game development and help them get started with their own projects. The workshops were well received and helped many students to get started with game development.',
		contract: ContractType.Other,
		type: 'Teaching',
		location: 'LASIGE, Faculty of Sciences',
		period: { from: new Date(2021, 0, 1), to: new Date(2025, 0, 1) },
		skills: getSkills('unity', 'godot', 'game-design', 'csharp'),
		name: 'Game Development Workshops',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Organized and conducted yearly workshops on game development, focusing on Unity and Godot. The goal was to teach students the basics of game development and help them get started with their own projects.'
	},
	{
		slug: 'nddv',
		company: 'Núcleo de Design e Desenvolvimento de Videojogos',
		description:
			'I was responsible for managing and creating activities and resources for faculty students to learn or improve their interest in Game Development. Ultimately, the point was to create more interest in Game Development in both students and teachers. I ended up giving a workshop on Unity and we hosted semester long Game Jams (which should still be happening).',
		contract: ContractType.Other,
		type: 'Software Development',
		location: 'NOVA School of Science and Technology',
		period: { from: new Date(2020, 0, 1), to: new Date(2021, 0, 1) },
		skills: getSkills('unity', 'game-design', 'csharp'),
		name: 'President of the University Game Development group',
		color: 'red',
		links: [],
		logo: Assets.NDDV,
		shortDescription:
			'Creation and management of a Game Development group at the University. Worked on workshops and Game Jams.'
	},
	{
		slug: 'happy-code-almada',
		company: 'Happy Code',
		description:
			'Teaching children how to code in a fun and engaging way. Focused on game development with Unity and Construct.',
		contract: ContractType.Contract,
		type: 'Teaching',
		location: 'Happy Code Almada',
		period: { from: new Date(2019, 5, 1), to: new Date(2020, 2, 1) },
		skills: getSkills('unity'),
		name: 'Happy Code (Almada)',
		color: 'green',
		links: [],
		logo: Assets.HappyCode,
		shortDescription:
			'Teaching children how to code in a fun and engaging way. Focused on game development with Unity.'
	},
	{
		slug: 'happy-code-lumiar',
		company: 'Happy Code',
		description:
			'Teaching children how to code in a fun and engaging way. Focused on game development with Unity and Fusion. Also taught android development.',
		contract: ContractType.Contract,
		type: 'Teaching',
		location: 'Happy Code Lumiar',
		period: { from: new Date(2017, 8, 1), to: new Date(2018, 1, 1) },
		skills: getSkills('unity', 'fusion', 'android', 'game-design', 'csharp'),
		name: 'Happy Code (Lumiar)',
		color: 'green',
		links: [],
		logo: Assets.HappyCode,
		shortDescription:
			'Teaching children how to code in a fun and engaging way. Focused on game development with Unity and Fusion. Also taught android development.'
	}
];

export const title = 'Experience';
