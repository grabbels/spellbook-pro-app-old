import { writable } from 'svelte/store';

export const modalCall = writable('');
export const page = writable('spellbook');
export const tabBarHeight = writable(0);
export const visualViewport = writable(0);
export const quickQuery = writable('');
export const quickSearchPanelOpen = writable(false);
export const lookupSpell = writable(null)
export const scrollY = writable(0)
export const noScroll = writable(false)
export const tabPanelOpen = writable(false);
export const zoomOutModifier = writable(0);
export const addSpellsMenuOpen = writable(false);
export const horizontalSwipe = writable(0);
export const screenWidth = writable(0);
export const spellList = writable([]);
export const lookupBook = writable(null);
export const user = writable('');
export const notification = writable('');
export const headerHeight = writable(0);