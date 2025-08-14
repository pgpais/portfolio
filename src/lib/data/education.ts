import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'PhD in Computer Science (Interrupted)',
		description: '',
		location: 'Portugal',
		logo: Assets.Unknown,
		name: '',
		organization: 'LASIGE, Faculty of Sciences, University of Lisbon',
		period: { from: new Date(2022, 0, 1), to: new Date(2025, 0, 1) },
		shortDescription: '',
		slug: 'PhD',
		subjects: ['Unity', 'Godot', 'Game Development', 'Game Design', 'C#', 'Cooperative Games']
	},
	{
		degree: 'Integrated Masters in Computer Science',
		description: '',
		location: 'Portugal',
		logo: Assets.Unknown,
		name: '',
		organization: 'NOVA School of Science and Technology',
		period: { from: new Date(2015, 0, 1), to: new Date(2021, 5, 1) },
		shortDescription: '',
		slug: 'masters',
		subjects: [
			'C',
			'Algorithm',
			'Algebra',
			'Python',
			'Java',
			'English',
			'AI',
			'Unity',
			'Game Development',
			'Game Design',
			'C#'
		],
		grade: '15',
		thesis: {
			title: 'Asymmetric Roles in Intergenerational Games',
			grade: '18',
			url: 'http://hdl.handle.net/10362/138804'
		}
	}
];

export const title = 'Education';
