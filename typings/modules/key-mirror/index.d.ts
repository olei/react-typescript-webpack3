declare module "key-mirror" {
	interface keymirrorface {
		(opts: Object): Object;
	}
	const keyMirror: keymirrorface;
	export = keyMirror;
}