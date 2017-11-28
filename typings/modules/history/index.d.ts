// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/createBrowserHistory.d.ts
declare module '~history/createBrowserHistory' {
import { History } from '~history/index';
import { getConfirmation } from '~history/DOMUtils';

export interface BrowserHistoryBuildOptions {
  basename?: string;
  forceRefresh?: boolean;
  getUserConfirmation?: typeof getConfirmation;
  keyLength?: number;
}

export default function createBrowserHistory(options?: BrowserHistoryBuildOptions): History;
}
declare module 'history/createBrowserHistory' {
export * from '~history/createBrowserHistory';
export { default } from '~history/createBrowserHistory';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/createHashHistory.d.ts
declare module '~history/createHashHistory' {
import { History } from '~history/index';
import { getConfirmation } from '~history/DOMUtils';

export type HashType = 'hashbang' | 'noslash' | 'slash';

export interface HashHistoryBuildOptions {
  basename?: string;
  hashType?: HashType;
  getUserConfirmation?: typeof getConfirmation;
}

export default function createHashHistory(options?: HashHistoryBuildOptions): History;
}
declare module 'history/createHashHistory' {
export * from '~history/createHashHistory';
export { default } from '~history/createHashHistory';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/DOMUtils.d.ts
declare module '~history/DOMUtils' {
export const isExtraneousPopstateEvent: boolean;
export function addEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
export function removeEventListener(node: EventTarget, event: string, listener: EventListenerOrEventListenerObject): void;
export function getConfirmation(message: string, callback: (result: boolean) => void): void;
export function supportsHistory(): boolean;
export function supportsGoWithoutReloadUsingHash(): boolean;
}
declare module 'history/DOMUtils' {
export * from '~history/DOMUtils';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/createMemoryHistory.d.ts
declare module '~history/createMemoryHistory' {
import { History, Location } from '~history/index';
import { getConfirmation } from '~history/DOMUtils';

export interface MemoryHistoryBuildOptions {
  getUserConfirmation?: typeof getConfirmation;
  initialEntries?: string[];
  initialIndex?: number;
  keyLength?: number;
}

export interface MemoryHistory extends History {
  index: number;
  entries: Location[];
  canGo(n: number): boolean;
}

export default function createMemoryHistory(options?: MemoryHistoryBuildOptions): MemoryHistory;
}
declare module 'history/createMemoryHistory' {
export * from '~history/createMemoryHistory';
export { default } from '~history/createMemoryHistory';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/LocationUtils.d.ts
declare module '~history/LocationUtils' {
import { Path, LocationState, LocationKey, Location, LocationDescriptor } from '~history/index';

export function locationsAreEqual(lv: LocationDescriptor, rv: LocationDescriptor): boolean;
export function createLocation(options: LocationDescriptor): Location;
export function createLocation(path: Path, state?: LocationState, key?: LocationKey, currentLocation?: Location): Location;
}
declare module 'history/LocationUtils' {
export * from '~history/LocationUtils';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/PathUtils.d.ts
declare module '~history/PathUtils' {
import { Path, Location, LocationDescriptor } from '~history/index';

export function addLeadingSlash(path: Path): Path;
export function stripLeadingSlash(path: Path): Path;
export function stripPrefix(path: Path, prefix: string): Path;
export function parsePath(path: Path): Location;
export function createPath(location: LocationDescriptor): Path;
}
declare module 'history/PathUtils' {
export * from '~history/PathUtils';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a1abf4fd44d411c689300f1c9fa99dc83e4de091/history/index.d.ts
declare module '~history/index' {
// Type definitions for history 4.5
// Project: https://github.com/mjackson/history
// Definitions by: Sergey Buturlakin <https://github.com/sergey-buturlakin>, Nathan Brown <https://github.com/ngbrown>, Young Rok Kim <https://github.com/rokoroku>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export as namespace History;

export type Action = 'PUSH' | 'POP' | 'REPLACE';
export type UnregisterCallback = () => void;

export interface History {
    length: number;
    action: Action;
    location: Location;
    push(path: Path, state?: LocationState): void;
    push(location: LocationDescriptorObject): void;
    replace(path: Path, state?: LocationState): void;
    replace(location: LocationDescriptorObject): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    block(prompt?: boolean): UnregisterCallback;
    listen(listener: LocationListener): UnregisterCallback;
    createHref(location: Path | LocationDescriptorObject): Href;
}

export interface Location {
    pathname: Pathname;
    search: Search;
    state: LocationState;
    hash: Hash;
    key: LocationKey;
}

export interface LocationDescriptorObject {
    pathname?: Pathname;
    search?: Search;
    state?: LocationState;
    hash?: Hash;
    key?: LocationKey;
}

export namespace History {
    export type LocationDescriptor = Path | LocationDescriptorObject;
    export type LocationKey = string;
    export type LocationListener = (location: Location, action: Action) => void;
    export type LocationState = any;
    export type Path = string;
    export type Pathname = string;
    export type Search = string;
    export type TransitionHook = (location: Location, callback: (result: any) => void) => any;
    export type Hash = string;
    export type Href = string;
}

export type LocationDescriptor = History.LocationDescriptor;
export type LocationKey = History.LocationKey;
export type LocationListener = History.LocationListener;
export type LocationState = History.LocationState;
export type Path = History.Path;
export type Pathname = History.Pathname;
export type Search = History.Search;
export type TransitionHook = History.TransitionHook;
export type Hash = History.Hash;
export type Href = History.Href;

import { default as createBrowserHistory } from '~history/createBrowserHistory';
import { default as createHashHistory } from '~history/createHashHistory';
import { default as createMemoryHistory } from '~history/createMemoryHistory';
import { createLocation, locationsAreEqual } from '~history/LocationUtils';
import { parsePath, createPath } from '~history/PathUtils';

// Global usage, without modules, needs the small trick, because lib.d.ts
// already has `history` and `History` global definitions:
// var createHistory = ((window as any).History as HistoryModule.Module).createHistory;
export interface Module {
    createBrowserHistory: typeof createBrowserHistory;
    createHashHistory: typeof createHashHistory;
    createMemoryHistory: typeof createMemoryHistory;
    createLocation: typeof createLocation;
    locationsAreEqual: typeof locationsAreEqual;
    parsePath: typeof parsePath;
    createPath: typeof createPath;
}

export * from '~history/createBrowserHistory';
export * from '~history/createHashHistory';
export * from '~history/createMemoryHistory';
export { createLocation, locationsAreEqual } from '~history/LocationUtils';
export { parsePath, createPath } from '~history/PathUtils';
export { createBrowserHistory, createHashHistory, createMemoryHistory };
}
declare module 'history/index' {
export * from '~history/index';
}
declare module 'history' {
export * from '~history/index';
}