import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Publication } from '../types';

export const items: Array<Publication> = [
	{
		slug: 'family-reddit',
		name: 'The Interplay of Family Life and Digital Gaming',
		authors: ['Pedro Pais', 'Alice Smith'],
		description: 'A study on the strategies used by blind players in visual-centric games.',
		venue: 'Games: Research and Practice (in print)',
		links: [
			{ to: 'https://example.com/blind-gaming', label: 'Read Paper', newTab: true },
			{ to: 'https://example.com/blind-gaming-slides', label: 'View Slides', newTab: true }
		],
		color: 'red',
		type: 'Research',
		skills: getSkills('qualitative', 'python'),
		logo: Assets.Unknown,
		shortDescription: 'A study on the strategies used by blind players in visual-centric games.',
		period: { from: new Date(2022, 3, 1) },
		project: 'Blind Gaming',
		DOI: '10.1234/blind-gaming.2022',
		funding: 'Accessibility Research Grant'
	},
	{
		slug: 'lfcg',
		name: 'Living Framework for Understanding Cooperative Games',
		authors: ['Cheese', 'John Doe'],
		description: 'A comprehensive framework for understanding cooperative games.',
		venue: "CHI '24",
		links: [
			{ to: 'https://example.com/living-framework', label: 'Read Paper', newTab: true },
			{ to: 'https://example.com/living-framework-slides', label: 'View Slides', newTab: true }
		],
		color: 'purple',
		type: 'Research',
		skills: getSkills('ts', 'supabase', 'svelte'),
		logo: Assets.Unknown,
		shortDescription: 'A comprehensive framework for understanding cooperative games.',
		period: { from: new Date(2024, 0, 1) },
		project: 'Living Framework',
		DOI: '10.1234/lfcg.2024',
		abstract:
			'This paper presents a living framework for understanding cooperative games, providing insights into their dynamics and strategies.',
		funding: 'National Science Foundation'
	},
	{
		slug: 'family-play',
		name: 'Promoting Family Play through Asymmetric Game Design',
		authors: ['Cheese', 'Jane Doe'],
		description: 'Exploring the dynamics of asymmetric play in cooperative games.',
		venue: "CSCW '24",
		links: [
			{ to: 'https://example.com/asymmetric-play', label: 'Read Paper', newTab: true },
			{ to: 'https://example.com/asymmetric-play-slides', label: 'View Slides', newTab: true }
		],
		color: 'blue',
		type: 'Research',
		skills: getSkills('unity', 'csharp', '', 'python', 'qualitative'),
		logo: Assets.Unknown,
		shortDescription: 'Exploring the dynamics of asymmetric play in cooperative games.',
		period: { from: new Date(2023, 5, 1) },
		project: 'Asymmetric Play',
		DOI: '10.1234/asymmetric-play.2023',
		funding: 'Game Development Fund'
	},
	{
		slug: 'multiplayer-dynamics',
		name: '"My Zelda Cane": Strategies Used by Blind Players to Play Visual-Centric Digital Games',
		authors: ['Cheese', 'Alice Smith'],
		description: 'A study on the dynamics of multiplayer cooperative games.',
		venue: "CHI '23",
		links: [
			{ to: 'https://example.com/multiplayer-dynamics', label: 'Read Paper', newTab: true },
			{ to: 'https://example.com/multiplayer-dynamics-slides', label: 'View Slides', newTab: true }
		],
		color: 'green',
		type: 'Research',
		skills: getSkills('godot', 'gdscrip', 'game-design'),
		logo: Assets.Unknown,
		shortDescription: 'A study on the dynamics of multiplayer cooperative games.',
		period: { from: new Date(2022, 8, 1) },
		project: 'Multiplayer Dynamics',
		DOI: '10.1234/multiplayer-dynamics.2022',
		funding: 'Game Research Grant'
	}
];

export const title = 'Publications';
