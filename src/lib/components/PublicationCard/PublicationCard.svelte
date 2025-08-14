<script lang="ts">
	import type { Publication } from '$lib/types';
	import { computeExactDuration, getMonthName, getTimeDiff } from '$lib/utils/helpers';
	import Card from '../Card/Card.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';
	import Chip from '../Chip/Chip.svelte';
	import CardDivider from '../Card/CardDivider.svelte';

	export let publication: Publication;

	// const months = getTimeDiff(experience.period.from, experience.period.to);
	const exactDuration = computeExactDuration(publication.period.from, publication.period.to);

	const from = `${getMonthName(
		publication.period.from.getMonth()
	)} ${publication.period.from.getFullYear()}`;
	const to = publication.period.to
		? `${getMonthName(publication.period.to.getMonth())} ${publication.period.to.getFullYear()}`
		: 'Present';

	const period = `${from} - ${to}`;

	$: info = [] as const;
</script>

<Card
	margin="0px 0px 20px 0px"
	tiltDegree={2}
	href={`${base}/publications/${publication.slug}`}
	color={publication.color}
>
	<div class="col md:flex-row items-start gap-5 md:gap-1">
		<!-- <CardLogo src={getAssetURL(publication.logo)} alt={publication.journal} size={55} /> -->
		<div class="col ml-0 md:ml-[20px] gap-3 w-full">
			<div class="col">
				<h3
					class="flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"
				>
					<CardTitle title={`${publication.name}`} />
				</h3>
				<!-- <div class="row flex-wrap items-start m-b-2 gap-1 text-0.9em font-300">
					{#each info as item}
						<Chip>
							<UIcon icon={item.icon} />
							<span class="m-l-1">{item.label}</span>
						</Chip>
					{/each}
				</div> -->
			</div>
			<div class="text-[var(--text)] text-[0.9em]">
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-person" classes="text-1.25em" />
					{publication.authors}
				</div>
				<CardDivider />
				<div class="row items-center gap-2">
					<UIcon icon="i-carbon-location" classes="text-1.25em" />
					{publication.venue}
				</div>
				<CardDivider />
			</div>
			<div class="experience-description text-[0.9em]">
				{publication.shortDescription}
			</div>
			<div class="flex flex-row flex-wrap mt-5">
				{#each publication.skills as skill}
					<ChipIcon
						logo={getAssetURL(skill.logo)}
						name={skill.name}
						href={`${base}/skills/${skill.slug}`}
					/>
				{/each}
			</div>
		</div>
	</div>
</Card>
