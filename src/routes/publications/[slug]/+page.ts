import { items } from '@data/publications';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const publication = items.find((item) => {
			return item.slug === params.slug;
		});

		return { publication };
	}
}
