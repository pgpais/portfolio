import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Publication } from '../types';

export const items: Array<Publication> = [
	{
		slug: 'reddit',
		name: 'The Interplay of Family Life and Digital Gaming',
		author: 'First Author',
		description:
			'Gaming has the potential to strengthen familial bonds and enrich shared experiences among families. However, a more complete understanding is needed to maximize benefits, circumvent shared play barriers, and avoid issues such as tensions created by family dynamics (e.g., parental mediation). This study explores the intricate relationship between digital gaming and familial dynamics, investigating how gaming habits within households influence and are influenced by family interactions. Leveraging a thematic analysis approach, we examine discussions on Reddit gaming communities (139 posts along with top comment) related to gaming experiences within families. It highlights how gaming experiences are affected by family life, how games are selected and gaming places are shared, the constraints for sharing gameplay, how games strengthen family member bonds, how family members experience gaming through each other and how games support interaction outside of gameplay. We discuss what games mean to families today, and highlight how some of its characteristics are by design (e.g., co-located cooperative game), while others are unintentional (e.g., relating game components to deceased family members) that we should learn from to create games that potentiate positive shared experiences.',
		venue: 'Games: Research and Practice (in print)',
		links: [],
		color: 'red',
		type: 'Research',
		skills: getSkills('qualitative', 'python'),
		logo: Assets.Unknown,
		shortDescription:
			'This study explores the intricate relationship between digital gaming and familial dynamics, investigating how gaming habits within households influence and are influenced by family interactions. Leveraging a thematic analysis approach, we examine discussions on Reddit gaming communities (139 posts along with top comment) related to gaming experiences within families.',
		period: { from: new Date(2022, 3, 1) },
		project: 'Blind Gaming',
		funding: 'Accessibility Research Grant'
	},
	{
		slug: 'family-play',
		name: 'Promoting Family Play through Asymmetric Game Design',
		author: 'First Author',
		description:
			"For families, where abilities, motivations, and availability vary widely, opportunities for intergenerational play are limited. Designing games that cater to these differences remains an open challenge. In this paper, we first identify barriers related with time and expertise. Next, we propose asymmetric game design and asynchronous play to reconcile children's and adults' requirements; and interdependent gameplay mechanics to foster real-world interactions. Following this approach, we designed a testbed game and conducted a mixed-methods remote study with six pairs of adult-child family members. Our results showcase how asymmetric, asynchronous experiences can be leveraged to create novel gaming experiences that meet the requirements of family play. We discuss how interdependent progress can be designed to promote real-world interactions, creating pervasive conversational topics that permeate the family routine.",
		venue: "CSCW '24",
		links: [
			{
				to: 'https://techandpeople.github.io/downloads/Promoting_Family_Play_through_Asymmetric_Game_Design.pdf',
				label: 'Read Paper',
				newTab: true
			}
		],
		color: 'blue',
		type: 'Research',
		skills: getSkills('unity', 'csharp', 'python', 'qualitative', 'game-design'),
		logo: Assets.Unknown,
		shortDescription:
			"We first identify barriers related with time and expertise. Next, we propose asymmetric game design and asynchronous play to reconcile children's and adults' requirements; and interdependent gameplay mechanics to foster real-world interactions. Following this approach, we designed a testbed game and conducted a mixed-methods remote study with six pairs of adult-child family members.",
		period: { from: new Date(2023, 5, 1) },
		project: 'Asymmetric Play',
		DOI: 'https://doi.org/10.1145/3637392',
		funding: 'Game Development Fund'
	},
	{
		slug: 'lfcg',
		name: 'Living Framework for Understanding Cooperative Games',
		author: 'First Author',
		description:
			'Playing cooperative games is recognised as a positive social activity. Yet, we have limited means to rigorously define or communicate the structures that govern these experiences, hindering attempts at consolidating knowledge and limiting the potential of design efforts. In this work, we introduce the Living Framework for Cooperative Games (LFCG), a framework derived from a multi-step systematic analysis of 129 cooperative games with contributions of eleven researchers. We describe how LFCG can be used as a tool for analyses and ideation, and as a shared language for describing a game’s design. LFCG is published as a web application to facilitate use and appropriation. It supports the creation, dissemination and aggregation of game reports and specifications; and enables stakeholders to extend and publish custom versions. Lastly, we discuss using a research-driven approach for formalising game structures and the advantages of community contributions for consolidation and reach.',
		venue: "CHI '24",
		links: [
			{
				to: 'https://techandpeople.github.io/downloads/2024_chi_lfcg.pdf',
				label: 'Read Paper',
				newTab: true
			}
		],
		color: 'purple',
		type: 'Research',
		skills: getSkills('ts', 'supabase', 'svelte', 'qualitative', 'python'),
		logo: Assets.Unknown,
		shortDescription:
			'We introduce the Living Framework for Cooperative Games (LFCG), a framework derived from a multi-step systematic analysis of 129 cooperative games with contributions of eleven researchers. We describe how LFCG can be used as a tool for analyses and ideation, and as a shared language for describing a game’s design.',
		period: { from: new Date(2024, 0, 1) },
		project: 'Living Framework',
		DOI: 'https://doi.org/10.1145/3613904.3641953',
		abstract:
			'Playing cooperative games is recognised as a positive social activity. Yet, we have limited means to rigorously define or communicate the structures that govern these experiences, hindering attempts at consolidating knowledge and limiting the potential of design efforts. In this work, we introduce the Living Framework for Cooperative Games (LFCG), a framework derived from a multi-step systematic analysis of 129 cooperative games with contributions of eleven researchers. We describe how LFCG can be used as a tool for analyses and ideation, and as a shared language for describing a game’s design. LFCG is published as a web application to facilitate use and appropriation. It supports the creation, dissemination and aggregation of game reports and specifications; and enables stakeholders to extend and publish custom versions. Lastly, we discuss using a research-driven approach for formalising game structures and the advantages of community contributions for consolidation and reach.',
		funding: 'National Science Foundation'
	},
	{
		slug: 'zelda-cane',
		name: '"My Zelda Cane": Strategies Used by Blind Players to Play Visual-Centric Digital Games',
		author: 'Co-Author',
		description:
			'Mainstream games are typically designed around the visual experience, with behaviors and interactions highly dependent on vision. Despite this, blind people are playing mainstream games while dealing with and overcoming inaccessible content, often together with friends and audiences. In this work, we analyze over 70 hours of YouTube videos, where blind content-creators play visual-centric games. We point out the various strategies employed by players to overcome barriers that permeate mainstream games. We reflect on ways to enable and improve blind players’ experience with these games, shedding light on the positive and negative consequences of apparently benign design choices. Our observations underline how game elements are appropriated for accessibility, the incidental consequences of audio design, and the trade-offs between accessibility, agency, and engagement.',
		venue: "CHI '23",
		links: [{ to: 'https://arxiv.org/pdf/2301.08031', label: 'Read Paper', newTab: true }],
		color: 'green',
		type: 'Research',
		skills: getSkills('qualitative'),
		logo: Assets.Unknown,
		shortDescription:
			'We analyze over 70 hours of YouTube videos, where blind content-creators play visual-centric games. We point out the various strategies employed by players to overcome barriers that permeate mainstream games.',
		period: { from: new Date(2022, 8, 1) },
		project: 'Multiplayer Dynamics',
		DOI: 'https://doi.org/10.1145/3544548.3580702',
		funding: 'Game Research Grant'
	},
	{
		slug: 'social-gaming',
		name: 'Social gaming: A systematic review',
		author: 'Co-Author',
		description:
			'Digital games often constitute a shared activity where people can spend time together, communicate and socialize. Several commercial titles place social interaction at the center of their design. Prior works have investigated the social outcomes of gaming, and factors that impact the experience. Yet, we lack a comprehensive understanding of how social gaming has been approached and explored before. In this work, we present a systematic review covering 263 publications, gathered in February 2021, that study gaming experiences involving more than one person, with a focus on the social element that emerges among partakers (players and/or spectators). We contribute with a systematized understanding of (1) how the topic is being defined and approached, (2) what facets (mainly in terms of outcomes and determinants of the experience) are being acknowledged and (3) the methodologies leveraged to examine these. Our analysis, based on mixed deductive and inductive coding, reveals relevant gaps and tendencies, including (1) the emphasis in novel technologies and unconventional games, (2) the apparent negligence of player diversity, and (3) lower ecological validity associated with totally mediated evaluations and a lack of established constructs to assess social outcomes.',
		venue: 'Computers in Human Behavior, Volume 147, 2023',
		links: [
			{
				to: 'https://www.sciencedirect.com/science/article/pii/S0747563223002029/pdf',
				label: 'Read Paper',
				newTab: true
			}
		],
		color: 'orangered',
		type: 'Research',
		skills: getSkills('qualitative'),
		logo: Assets.Unknown,
		shortDescription:
			'We present a systematic review covering 263 publications, gathered in February 2021, that study gaming experiences involving more than one person, with a focus on the social element that emerges among partakers (players and/or spectators).',
		period: { from: new Date(2022, 8, 1) },
		project: 'Multiplayer Dynamics',
		DOI: 'https://doi.org/10.1016/j.chb.2023.107851',
		funding: 'Game Research Grant'
	}
];

export const title = 'Publications';
