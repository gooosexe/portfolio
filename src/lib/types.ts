import type { ComponentType } from 'svelte';

export interface PageData {
	title: string;
	date: string;
	content?: ComponentType;
}
