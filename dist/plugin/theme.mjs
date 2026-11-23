//#region plugin/theme/plugin.js
var e = "reveal-theme", t = {
	get() {
		try {
			return localStorage.getItem(e);
		} catch {
			return null;
		}
	},
	set(t) {
		try {
			localStorage.setItem(e, t);
		} catch {}
	}
};
function n(e) {
	document.documentElement.dataset.theme = e, document.querySelectorAll("img[data-src-dark]").forEach((t) => {
		let n = t.dataset.srcLight || t.getAttribute("src");
		if (!n) return;
		t.dataset.srcLight = n;
		let r = t.dataset.srcDark || n.replace(/(\.\w+)$/, "-dark$1");
		t.src = e === "dark" ? r : n;
	});
}
function r() {
	let e = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
	n(e), t.set(e);
}
//#endregion
//#region plugin/theme/index.ts
var i = () => ({
	id: "theme",
	init(e) {
		let i = t.get() || e.getConfig().theme || "light";
		i === "auto" && (i = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), n(i), e.addKeyBinding({
			keyCode: 84,
			key: "T",
			description: "Toggle light/dark theme"
		}, r), document.addEventListener("click", (e) => {
			e.target.closest("[data-toggle-theme]") && r();
		});
	},
	toggle: r,
	setTheme: n
});
//#endregion
export { i as default };
