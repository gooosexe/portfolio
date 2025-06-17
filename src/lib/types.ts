import type { Component } from 'svelte';

export interface PostData {
	title: string;
	subtitle: string;
	date: string;
	path: string;
	content?: Component;
}
