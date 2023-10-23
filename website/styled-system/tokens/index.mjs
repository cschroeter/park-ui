const tokens = {
  "animations.backdrop-in": {
    "value": "fade-in 250ms var(--easings-default)",
    "variable": "var(--animations-backdrop-in)"
  },
  "animations.backdrop-out": {
    "value": "fade-out 200ms var(--easings-default)",
    "variable": "var(--animations-backdrop-out)"
  },
  "animations.dialog-in": {
    "value": "slide-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-dialog-in)"
  },
  "animations.dialog-out": {
    "value": "slide-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-dialog-out)"
  },
  "animations.drawer-in-left": {
    "value": "slide-in-left 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-left)"
  },
  "animations.drawer-out-left": {
    "value": "slide-out-left 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-left)"
  },
  "animations.drawer-in-right": {
    "value": "slide-in-right 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-right)"
  },
  "animations.drawer-out-right": {
    "value": "slide-out-right 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-right)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--colors-black)"
  },
  "colors.black.a1": {
    "value": "rgba(0, 0, 0, 0.05)",
    "variable": "var(--colors-black-a1)"
  },
  "colors.black.a2": {
    "value": "rgba(0, 0, 0, 0.1)",
    "variable": "var(--colors-black-a2)"
  },
  "colors.black.a3": {
    "value": "rgba(0, 0, 0, 0.15)",
    "variable": "var(--colors-black-a3)"
  },
  "colors.black.a4": {
    "value": "rgba(0, 0, 0, 0.2)",
    "variable": "var(--colors-black-a4)"
  },
  "colors.black.a5": {
    "value": "rgba(0, 0, 0, 0.3)",
    "variable": "var(--colors-black-a5)"
  },
  "colors.black.a6": {
    "value": "rgba(0, 0, 0, 0.4)",
    "variable": "var(--colors-black-a6)"
  },
  "colors.black.a7": {
    "value": "rgba(0, 0, 0, 0.5)",
    "variable": "var(--colors-black-a7)"
  },
  "colors.black.a8": {
    "value": "rgba(0, 0, 0, 0.6)",
    "variable": "var(--colors-black-a8)"
  },
  "colors.black.a9": {
    "value": "rgba(0, 0, 0, 0.7)",
    "variable": "var(--colors-black-a9)"
  },
  "colors.black.a10": {
    "value": "rgba(0, 0, 0, 0.8)",
    "variable": "var(--colors-black-a10)"
  },
  "colors.black.a11": {
    "value": "rgba(0, 0, 0, 0.9)",
    "variable": "var(--colors-black-a11)"
  },
  "colors.black.a12": {
    "value": "rgba(0, 0, 0, 0.95)",
    "variable": "var(--colors-black-a12)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.white.a1": {
    "value": "rgba(255, 255, 255, 0.05)",
    "variable": "var(--colors-white-a1)"
  },
  "colors.white.a2": {
    "value": "rgba(255, 255, 255, 0.1)",
    "variable": "var(--colors-white-a2)"
  },
  "colors.white.a3": {
    "value": "rgba(255, 255, 255, 0.15)",
    "variable": "var(--colors-white-a3)"
  },
  "colors.white.a4": {
    "value": "rgba(255, 255, 255, 0.2)",
    "variable": "var(--colors-white-a4)"
  },
  "colors.white.a5": {
    "value": "rgba(255, 255, 255, 0.3)",
    "variable": "var(--colors-white-a5)"
  },
  "colors.white.a6": {
    "value": "rgba(255, 255, 255, 0.4)",
    "variable": "var(--colors-white-a6)"
  },
  "colors.white.a7": {
    "value": "rgba(255, 255, 255, 0.5)",
    "variable": "var(--colors-white-a7)"
  },
  "colors.white.a8": {
    "value": "rgba(255, 255, 255, 0.6)",
    "variable": "var(--colors-white-a8)"
  },
  "colors.white.a9": {
    "value": "rgba(255, 255, 255, 0.7)",
    "variable": "var(--colors-white-a9)"
  },
  "colors.white.a10": {
    "value": "rgba(255, 255, 255, 0.8)",
    "variable": "var(--colors-white-a10)"
  },
  "colors.white.a11": {
    "value": "rgba(255, 255, 255, 0.9)",
    "variable": "var(--colors-white-a11)"
  },
  "colors.white.a12": {
    "value": "rgba(255, 255, 255, 0.95)",
    "variable": "var(--colors-white-a12)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.amber.light.1": {
    "value": "#fefdfb",
    "variable": "var(--colors-amber-light-1)"
  },
  "colors.amber.light.2": {
    "value": "#fefbe9",
    "variable": "var(--colors-amber-light-2)"
  },
  "colors.amber.light.3": {
    "value": "#fff7c2",
    "variable": "var(--colors-amber-light-3)"
  },
  "colors.amber.light.4": {
    "value": "#ffee9c",
    "variable": "var(--colors-amber-light-4)"
  },
  "colors.amber.light.5": {
    "value": "#fbe577",
    "variable": "var(--colors-amber-light-5)"
  },
  "colors.amber.light.6": {
    "value": "#f3d673",
    "variable": "var(--colors-amber-light-6)"
  },
  "colors.amber.light.7": {
    "value": "#e9c162",
    "variable": "var(--colors-amber-light-7)"
  },
  "colors.amber.light.8": {
    "value": "#e2a336",
    "variable": "var(--colors-amber-light-8)"
  },
  "colors.amber.light.9": {
    "value": "#ffc53d",
    "variable": "var(--colors-amber-light-9)"
  },
  "colors.amber.light.10": {
    "value": "#ffba18",
    "variable": "var(--colors-amber-light-10)"
  },
  "colors.amber.light.11": {
    "value": "#ab6400",
    "variable": "var(--colors-amber-light-11)"
  },
  "colors.amber.light.12": {
    "value": "#4f3422",
    "variable": "var(--colors-amber-light-12)"
  },
  "colors.amber.light.a1": {
    "value": "#c0800004",
    "variable": "var(--colors-amber-light-a1)"
  },
  "colors.amber.light.a2": {
    "value": "#f4d10016",
    "variable": "var(--colors-amber-light-a2)"
  },
  "colors.amber.light.a3": {
    "value": "#ffde003d",
    "variable": "var(--colors-amber-light-a3)"
  },
  "colors.amber.light.a4": {
    "value": "#ffd40063",
    "variable": "var(--colors-amber-light-a4)"
  },
  "colors.amber.light.a5": {
    "value": "#f8cf0088",
    "variable": "var(--colors-amber-light-a5)"
  },
  "colors.amber.light.a6": {
    "value": "#eab5008c",
    "variable": "var(--colors-amber-light-a6)"
  },
  "colors.amber.light.a7": {
    "value": "#dc9b009d",
    "variable": "var(--colors-amber-light-a7)"
  },
  "colors.amber.light.a8": {
    "value": "#da8a00c9",
    "variable": "var(--colors-amber-light-a8)"
  },
  "colors.amber.light.a9": {
    "value": "#ffb300c2",
    "variable": "var(--colors-amber-light-a9)"
  },
  "colors.amber.light.a10": {
    "value": "#ffb300e7",
    "variable": "var(--colors-amber-light-a10)"
  },
  "colors.amber.light.a11": {
    "value": "#ab6400",
    "variable": "var(--colors-amber-light-a11)"
  },
  "colors.amber.light.a12": {
    "value": "#341500dd",
    "variable": "var(--colors-amber-light-a12)"
  },
  "colors.amber.dark.1": {
    "value": "#16120c",
    "variable": "var(--colors-amber-dark-1)"
  },
  "colors.amber.dark.2": {
    "value": "#1d180f",
    "variable": "var(--colors-amber-dark-2)"
  },
  "colors.amber.dark.3": {
    "value": "#302008",
    "variable": "var(--colors-amber-dark-3)"
  },
  "colors.amber.dark.4": {
    "value": "#3f2700",
    "variable": "var(--colors-amber-dark-4)"
  },
  "colors.amber.dark.5": {
    "value": "#4d3000",
    "variable": "var(--colors-amber-dark-5)"
  },
  "colors.amber.dark.6": {
    "value": "#5c3d05",
    "variable": "var(--colors-amber-dark-6)"
  },
  "colors.amber.dark.7": {
    "value": "#714f19",
    "variable": "var(--colors-amber-dark-7)"
  },
  "colors.amber.dark.8": {
    "value": "#8f6424",
    "variable": "var(--colors-amber-dark-8)"
  },
  "colors.amber.dark.9": {
    "value": "#ffc53d",
    "variable": "var(--colors-amber-dark-9)"
  },
  "colors.amber.dark.10": {
    "value": "#ffd60a",
    "variable": "var(--colors-amber-dark-10)"
  },
  "colors.amber.dark.11": {
    "value": "#ffca16",
    "variable": "var(--colors-amber-dark-11)"
  },
  "colors.amber.dark.12": {
    "value": "#ffe7b3",
    "variable": "var(--colors-amber-dark-12)"
  },
  "colors.amber.dark.a1": {
    "value": "#e63c0006",
    "variable": "var(--colors-amber-dark-a1)"
  },
  "colors.amber.dark.a2": {
    "value": "#fd9b000d",
    "variable": "var(--colors-amber-dark-a2)"
  },
  "colors.amber.dark.a3": {
    "value": "#fa820022",
    "variable": "var(--colors-amber-dark-a3)"
  },
  "colors.amber.dark.a4": {
    "value": "#fc820032",
    "variable": "var(--colors-amber-dark-a4)"
  },
  "colors.amber.dark.a5": {
    "value": "#fd8b0041",
    "variable": "var(--colors-amber-dark-a5)"
  },
  "colors.amber.dark.a6": {
    "value": "#fd9b0051",
    "variable": "var(--colors-amber-dark-a6)"
  },
  "colors.amber.dark.a7": {
    "value": "#ffab2567",
    "variable": "var(--colors-amber-dark-a7)"
  },
  "colors.amber.dark.a8": {
    "value": "#ffae3587",
    "variable": "var(--colors-amber-dark-a8)"
  },
  "colors.amber.dark.a9": {
    "value": "#ffc53d",
    "variable": "var(--colors-amber-dark-a9)"
  },
  "colors.amber.dark.a10": {
    "value": "#ffd60a",
    "variable": "var(--colors-amber-dark-a10)"
  },
  "colors.amber.dark.a11": {
    "value": "#ffca16",
    "variable": "var(--colors-amber-dark-a11)"
  },
  "colors.amber.dark.a12": {
    "value": "#ffe7b3",
    "variable": "var(--colors-amber-dark-a12)"
  },
  "colors.blue.light.1": {
    "value": "#fbfdff",
    "variable": "var(--colors-blue-light-1)"
  },
  "colors.blue.light.2": {
    "value": "#f4faff",
    "variable": "var(--colors-blue-light-2)"
  },
  "colors.blue.light.3": {
    "value": "#e6f4fe",
    "variable": "var(--colors-blue-light-3)"
  },
  "colors.blue.light.4": {
    "value": "#d5efff",
    "variable": "var(--colors-blue-light-4)"
  },
  "colors.blue.light.5": {
    "value": "#c2e5ff",
    "variable": "var(--colors-blue-light-5)"
  },
  "colors.blue.light.6": {
    "value": "#acd8fc",
    "variable": "var(--colors-blue-light-6)"
  },
  "colors.blue.light.7": {
    "value": "#8ec8f6",
    "variable": "var(--colors-blue-light-7)"
  },
  "colors.blue.light.8": {
    "value": "#5eb1ef",
    "variable": "var(--colors-blue-light-8)"
  },
  "colors.blue.light.9": {
    "value": "#0090ff",
    "variable": "var(--colors-blue-light-9)"
  },
  "colors.blue.light.10": {
    "value": "#0588f0",
    "variable": "var(--colors-blue-light-10)"
  },
  "colors.blue.light.11": {
    "value": "#0d74ce",
    "variable": "var(--colors-blue-light-11)"
  },
  "colors.blue.light.12": {
    "value": "#113264",
    "variable": "var(--colors-blue-light-12)"
  },
  "colors.blue.light.a1": {
    "value": "#0080ff04",
    "variable": "var(--colors-blue-light-a1)"
  },
  "colors.blue.light.a2": {
    "value": "#008cff0b",
    "variable": "var(--colors-blue-light-a2)"
  },
  "colors.blue.light.a3": {
    "value": "#008ff519",
    "variable": "var(--colors-blue-light-a3)"
  },
  "colors.blue.light.a4": {
    "value": "#009eff2a",
    "variable": "var(--colors-blue-light-a4)"
  },
  "colors.blue.light.a5": {
    "value": "#0093ff3d",
    "variable": "var(--colors-blue-light-a5)"
  },
  "colors.blue.light.a6": {
    "value": "#0088f653",
    "variable": "var(--colors-blue-light-a6)"
  },
  "colors.blue.light.a7": {
    "value": "#0083eb71",
    "variable": "var(--colors-blue-light-a7)"
  },
  "colors.blue.light.a8": {
    "value": "#0084e6a1",
    "variable": "var(--colors-blue-light-a8)"
  },
  "colors.blue.light.a9": {
    "value": "#0090ff",
    "variable": "var(--colors-blue-light-a9)"
  },
  "colors.blue.light.a10": {
    "value": "#0086f0fa",
    "variable": "var(--colors-blue-light-a10)"
  },
  "colors.blue.light.a11": {
    "value": "#006dcbf2",
    "variable": "var(--colors-blue-light-a11)"
  },
  "colors.blue.light.a12": {
    "value": "#002359ee",
    "variable": "var(--colors-blue-light-a12)"
  },
  "colors.blue.dark.1": {
    "value": "#0d1520",
    "variable": "var(--colors-blue-dark-1)"
  },
  "colors.blue.dark.2": {
    "value": "#111927",
    "variable": "var(--colors-blue-dark-2)"
  },
  "colors.blue.dark.3": {
    "value": "#0d2847",
    "variable": "var(--colors-blue-dark-3)"
  },
  "colors.blue.dark.4": {
    "value": "#003362",
    "variable": "var(--colors-blue-dark-4)"
  },
  "colors.blue.dark.5": {
    "value": "#004074",
    "variable": "var(--colors-blue-dark-5)"
  },
  "colors.blue.dark.6": {
    "value": "#104d87",
    "variable": "var(--colors-blue-dark-6)"
  },
  "colors.blue.dark.7": {
    "value": "#205d9e",
    "variable": "var(--colors-blue-dark-7)"
  },
  "colors.blue.dark.8": {
    "value": "#2870bd",
    "variable": "var(--colors-blue-dark-8)"
  },
  "colors.blue.dark.9": {
    "value": "#0090ff",
    "variable": "var(--colors-blue-dark-9)"
  },
  "colors.blue.dark.10": {
    "value": "#3b9eff",
    "variable": "var(--colors-blue-dark-10)"
  },
  "colors.blue.dark.11": {
    "value": "#70b8ff",
    "variable": "var(--colors-blue-dark-11)"
  },
  "colors.blue.dark.12": {
    "value": "#c2e6ff",
    "variable": "var(--colors-blue-dark-12)"
  },
  "colors.blue.dark.a1": {
    "value": "#004df211",
    "variable": "var(--colors-blue-dark-a1)"
  },
  "colors.blue.dark.a2": {
    "value": "#1166fb18",
    "variable": "var(--colors-blue-dark-a2)"
  },
  "colors.blue.dark.a3": {
    "value": "#0077ff3a",
    "variable": "var(--colors-blue-dark-a3)"
  },
  "colors.blue.dark.a4": {
    "value": "#0075ff57",
    "variable": "var(--colors-blue-dark-a4)"
  },
  "colors.blue.dark.a5": {
    "value": "#0081fd6b",
    "variable": "var(--colors-blue-dark-a5)"
  },
  "colors.blue.dark.a6": {
    "value": "#0f89fd7f",
    "variable": "var(--colors-blue-dark-a6)"
  },
  "colors.blue.dark.a7": {
    "value": "#2a91fe98",
    "variable": "var(--colors-blue-dark-a7)"
  },
  "colors.blue.dark.a8": {
    "value": "#3094feb9",
    "variable": "var(--colors-blue-dark-a8)"
  },
  "colors.blue.dark.a9": {
    "value": "#0090ff",
    "variable": "var(--colors-blue-dark-a9)"
  },
  "colors.blue.dark.a10": {
    "value": "#3b9eff",
    "variable": "var(--colors-blue-dark-a10)"
  },
  "colors.blue.dark.a11": {
    "value": "#70b8ff",
    "variable": "var(--colors-blue-dark-a11)"
  },
  "colors.blue.dark.a12": {
    "value": "#c2e6ff",
    "variable": "var(--colors-blue-dark-a12)"
  },
  "colors.bronze.light.1": {
    "value": "#fdfcfc",
    "variable": "var(--colors-bronze-light-1)"
  },
  "colors.bronze.light.2": {
    "value": "#fdf7f5",
    "variable": "var(--colors-bronze-light-2)"
  },
  "colors.bronze.light.3": {
    "value": "#f6edea",
    "variable": "var(--colors-bronze-light-3)"
  },
  "colors.bronze.light.4": {
    "value": "#efe4df",
    "variable": "var(--colors-bronze-light-4)"
  },
  "colors.bronze.light.5": {
    "value": "#e7d9d3",
    "variable": "var(--colors-bronze-light-5)"
  },
  "colors.bronze.light.6": {
    "value": "#dfcdc5",
    "variable": "var(--colors-bronze-light-6)"
  },
  "colors.bronze.light.7": {
    "value": "#d3bcb3",
    "variable": "var(--colors-bronze-light-7)"
  },
  "colors.bronze.light.8": {
    "value": "#c2a499",
    "variable": "var(--colors-bronze-light-8)"
  },
  "colors.bronze.light.9": {
    "value": "#a18072",
    "variable": "var(--colors-bronze-light-9)"
  },
  "colors.bronze.light.10": {
    "value": "#957468",
    "variable": "var(--colors-bronze-light-10)"
  },
  "colors.bronze.light.11": {
    "value": "#7d5e54",
    "variable": "var(--colors-bronze-light-11)"
  },
  "colors.bronze.light.12": {
    "value": "#43302b",
    "variable": "var(--colors-bronze-light-12)"
  },
  "colors.bronze.light.a1": {
    "value": "#55000003",
    "variable": "var(--colors-bronze-light-a1)"
  },
  "colors.bronze.light.a2": {
    "value": "#cc33000a",
    "variable": "var(--colors-bronze-light-a2)"
  },
  "colors.bronze.light.a3": {
    "value": "#92250015",
    "variable": "var(--colors-bronze-light-a3)"
  },
  "colors.bronze.light.a4": {
    "value": "#80280020",
    "variable": "var(--colors-bronze-light-a4)"
  },
  "colors.bronze.light.a5": {
    "value": "#7423002c",
    "variable": "var(--colors-bronze-light-a5)"
  },
  "colors.bronze.light.a6": {
    "value": "#7324003a",
    "variable": "var(--colors-bronze-light-a6)"
  },
  "colors.bronze.light.a7": {
    "value": "#6c1f004c",
    "variable": "var(--colors-bronze-light-a7)"
  },
  "colors.bronze.light.a8": {
    "value": "#671c0066",
    "variable": "var(--colors-bronze-light-a8)"
  },
  "colors.bronze.light.a9": {
    "value": "#551a008d",
    "variable": "var(--colors-bronze-light-a9)"
  },
  "colors.bronze.light.a10": {
    "value": "#4c150097",
    "variable": "var(--colors-bronze-light-a10)"
  },
  "colors.bronze.light.a11": {
    "value": "#3d0f00ab",
    "variable": "var(--colors-bronze-light-a11)"
  },
  "colors.bronze.light.a12": {
    "value": "#1d0600d4",
    "variable": "var(--colors-bronze-light-a12)"
  },
  "colors.bronze.dark.1": {
    "value": "#141110",
    "variable": "var(--colors-bronze-dark-1)"
  },
  "colors.bronze.dark.2": {
    "value": "#1c1917",
    "variable": "var(--colors-bronze-dark-2)"
  },
  "colors.bronze.dark.3": {
    "value": "#262220",
    "variable": "var(--colors-bronze-dark-3)"
  },
  "colors.bronze.dark.4": {
    "value": "#302a27",
    "variable": "var(--colors-bronze-dark-4)"
  },
  "colors.bronze.dark.5": {
    "value": "#3b3330",
    "variable": "var(--colors-bronze-dark-5)"
  },
  "colors.bronze.dark.6": {
    "value": "#493e3a",
    "variable": "var(--colors-bronze-dark-6)"
  },
  "colors.bronze.dark.7": {
    "value": "#5a4c47",
    "variable": "var(--colors-bronze-dark-7)"
  },
  "colors.bronze.dark.8": {
    "value": "#6f5f58",
    "variable": "var(--colors-bronze-dark-8)"
  },
  "colors.bronze.dark.9": {
    "value": "#a18072",
    "variable": "var(--colors-bronze-dark-9)"
  },
  "colors.bronze.dark.10": {
    "value": "#ae8c7e",
    "variable": "var(--colors-bronze-dark-10)"
  },
  "colors.bronze.dark.11": {
    "value": "#d4b3a5",
    "variable": "var(--colors-bronze-dark-11)"
  },
  "colors.bronze.dark.12": {
    "value": "#ede0d9",
    "variable": "var(--colors-bronze-dark-12)"
  },
  "colors.bronze.dark.a1": {
    "value": "#d1110004",
    "variable": "var(--colors-bronze-dark-a1)"
  },
  "colors.bronze.dark.a2": {
    "value": "#fbbc910c",
    "variable": "var(--colors-bronze-dark-a2)"
  },
  "colors.bronze.dark.a3": {
    "value": "#faceb817",
    "variable": "var(--colors-bronze-dark-a3)"
  },
  "colors.bronze.dark.a4": {
    "value": "#facdb622",
    "variable": "var(--colors-bronze-dark-a4)"
  },
  "colors.bronze.dark.a5": {
    "value": "#ffd2c12d",
    "variable": "var(--colors-bronze-dark-a5)"
  },
  "colors.bronze.dark.a6": {
    "value": "#ffd1c03c",
    "variable": "var(--colors-bronze-dark-a6)"
  },
  "colors.bronze.dark.a7": {
    "value": "#fdd0c04f",
    "variable": "var(--colors-bronze-dark-a7)"
  },
  "colors.bronze.dark.a8": {
    "value": "#ffd6c565",
    "variable": "var(--colors-bronze-dark-a8)"
  },
  "colors.bronze.dark.a9": {
    "value": "#fec7b09b",
    "variable": "var(--colors-bronze-dark-a9)"
  },
  "colors.bronze.dark.a10": {
    "value": "#fecab5a9",
    "variable": "var(--colors-bronze-dark-a10)"
  },
  "colors.bronze.dark.a11": {
    "value": "#ffd7c6d1",
    "variable": "var(--colors-bronze-dark-a11)"
  },
  "colors.bronze.dark.a12": {
    "value": "#fff1e9ec",
    "variable": "var(--colors-bronze-dark-a12)"
  },
  "colors.brown.light.1": {
    "value": "#fefdfc",
    "variable": "var(--colors-brown-light-1)"
  },
  "colors.brown.light.2": {
    "value": "#fcf9f6",
    "variable": "var(--colors-brown-light-2)"
  },
  "colors.brown.light.3": {
    "value": "#f6eee7",
    "variable": "var(--colors-brown-light-3)"
  },
  "colors.brown.light.4": {
    "value": "#f0e4d9",
    "variable": "var(--colors-brown-light-4)"
  },
  "colors.brown.light.5": {
    "value": "#ebdaca",
    "variable": "var(--colors-brown-light-5)"
  },
  "colors.brown.light.6": {
    "value": "#e4cdb7",
    "variable": "var(--colors-brown-light-6)"
  },
  "colors.brown.light.7": {
    "value": "#dcbc9f",
    "variable": "var(--colors-brown-light-7)"
  },
  "colors.brown.light.8": {
    "value": "#cea37e",
    "variable": "var(--colors-brown-light-8)"
  },
  "colors.brown.light.9": {
    "value": "#ad7f58",
    "variable": "var(--colors-brown-light-9)"
  },
  "colors.brown.light.10": {
    "value": "#a07553",
    "variable": "var(--colors-brown-light-10)"
  },
  "colors.brown.light.11": {
    "value": "#815e46",
    "variable": "var(--colors-brown-light-11)"
  },
  "colors.brown.light.12": {
    "value": "#3e332e",
    "variable": "var(--colors-brown-light-12)"
  },
  "colors.brown.light.a1": {
    "value": "#aa550003",
    "variable": "var(--colors-brown-light-a1)"
  },
  "colors.brown.light.a2": {
    "value": "#aa550009",
    "variable": "var(--colors-brown-light-a2)"
  },
  "colors.brown.light.a3": {
    "value": "#a04b0018",
    "variable": "var(--colors-brown-light-a3)"
  },
  "colors.brown.light.a4": {
    "value": "#9b4a0026",
    "variable": "var(--colors-brown-light-a4)"
  },
  "colors.brown.light.a5": {
    "value": "#9f4d0035",
    "variable": "var(--colors-brown-light-a5)"
  },
  "colors.brown.light.a6": {
    "value": "#a04e0048",
    "variable": "var(--colors-brown-light-a6)"
  },
  "colors.brown.light.a7": {
    "value": "#a34e0060",
    "variable": "var(--colors-brown-light-a7)"
  },
  "colors.brown.light.a8": {
    "value": "#9f4a0081",
    "variable": "var(--colors-brown-light-a8)"
  },
  "colors.brown.light.a9": {
    "value": "#823c00a7",
    "variable": "var(--colors-brown-light-a9)"
  },
  "colors.brown.light.a10": {
    "value": "#723300ac",
    "variable": "var(--colors-brown-light-a10)"
  },
  "colors.brown.light.a11": {
    "value": "#522100b9",
    "variable": "var(--colors-brown-light-a11)"
  },
  "colors.brown.light.a12": {
    "value": "#140600d1",
    "variable": "var(--colors-brown-light-a12)"
  },
  "colors.brown.dark.1": {
    "value": "#12110f",
    "variable": "var(--colors-brown-dark-1)"
  },
  "colors.brown.dark.2": {
    "value": "#1c1816",
    "variable": "var(--colors-brown-dark-2)"
  },
  "colors.brown.dark.3": {
    "value": "#28211d",
    "variable": "var(--colors-brown-dark-3)"
  },
  "colors.brown.dark.4": {
    "value": "#322922",
    "variable": "var(--colors-brown-dark-4)"
  },
  "colors.brown.dark.5": {
    "value": "#3e3128",
    "variable": "var(--colors-brown-dark-5)"
  },
  "colors.brown.dark.6": {
    "value": "#4d3c2f",
    "variable": "var(--colors-brown-dark-6)"
  },
  "colors.brown.dark.7": {
    "value": "#614a39",
    "variable": "var(--colors-brown-dark-7)"
  },
  "colors.brown.dark.8": {
    "value": "#7c5f46",
    "variable": "var(--colors-brown-dark-8)"
  },
  "colors.brown.dark.9": {
    "value": "#ad7f58",
    "variable": "var(--colors-brown-dark-9)"
  },
  "colors.brown.dark.10": {
    "value": "#b88c67",
    "variable": "var(--colors-brown-dark-10)"
  },
  "colors.brown.dark.11": {
    "value": "#dbb594",
    "variable": "var(--colors-brown-dark-11)"
  },
  "colors.brown.dark.12": {
    "value": "#f2e1ca",
    "variable": "var(--colors-brown-dark-12)"
  },
  "colors.brown.dark.a1": {
    "value": "#91110002",
    "variable": "var(--colors-brown-dark-a1)"
  },
  "colors.brown.dark.a2": {
    "value": "#fba67c0c",
    "variable": "var(--colors-brown-dark-a2)"
  },
  "colors.brown.dark.a3": {
    "value": "#fcb58c19",
    "variable": "var(--colors-brown-dark-a3)"
  },
  "colors.brown.dark.a4": {
    "value": "#fbbb8a24",
    "variable": "var(--colors-brown-dark-a4)"
  },
  "colors.brown.dark.a5": {
    "value": "#fcb88931",
    "variable": "var(--colors-brown-dark-a5)"
  },
  "colors.brown.dark.a6": {
    "value": "#fdba8741",
    "variable": "var(--colors-brown-dark-a6)"
  },
  "colors.brown.dark.a7": {
    "value": "#ffbb8856",
    "variable": "var(--colors-brown-dark-a7)"
  },
  "colors.brown.dark.a8": {
    "value": "#ffbe8773",
    "variable": "var(--colors-brown-dark-a8)"
  },
  "colors.brown.dark.a9": {
    "value": "#feb87da8",
    "variable": "var(--colors-brown-dark-a9)"
  },
  "colors.brown.dark.a10": {
    "value": "#ffc18cb3",
    "variable": "var(--colors-brown-dark-a10)"
  },
  "colors.brown.dark.a11": {
    "value": "#fed1aad9",
    "variable": "var(--colors-brown-dark-a11)"
  },
  "colors.brown.dark.a12": {
    "value": "#feecd4f2",
    "variable": "var(--colors-brown-dark-a12)"
  },
  "colors.crimson.light.1": {
    "value": "#fffcfd",
    "variable": "var(--colors-crimson-light-1)"
  },
  "colors.crimson.light.2": {
    "value": "#fef7f9",
    "variable": "var(--colors-crimson-light-2)"
  },
  "colors.crimson.light.3": {
    "value": "#ffe9f0",
    "variable": "var(--colors-crimson-light-3)"
  },
  "colors.crimson.light.4": {
    "value": "#fedce7",
    "variable": "var(--colors-crimson-light-4)"
  },
  "colors.crimson.light.5": {
    "value": "#facedd",
    "variable": "var(--colors-crimson-light-5)"
  },
  "colors.crimson.light.6": {
    "value": "#f3bed1",
    "variable": "var(--colors-crimson-light-6)"
  },
  "colors.crimson.light.7": {
    "value": "#eaacc3",
    "variable": "var(--colors-crimson-light-7)"
  },
  "colors.crimson.light.8": {
    "value": "#e093b2",
    "variable": "var(--colors-crimson-light-8)"
  },
  "colors.crimson.light.9": {
    "value": "#e93d82",
    "variable": "var(--colors-crimson-light-9)"
  },
  "colors.crimson.light.10": {
    "value": "#df3478",
    "variable": "var(--colors-crimson-light-10)"
  },
  "colors.crimson.light.11": {
    "value": "#cb1d63",
    "variable": "var(--colors-crimson-light-11)"
  },
  "colors.crimson.light.12": {
    "value": "#621639",
    "variable": "var(--colors-crimson-light-12)"
  },
  "colors.crimson.light.a1": {
    "value": "#ff005503",
    "variable": "var(--colors-crimson-light-a1)"
  },
  "colors.crimson.light.a2": {
    "value": "#e0004008",
    "variable": "var(--colors-crimson-light-a2)"
  },
  "colors.crimson.light.a3": {
    "value": "#ff005216",
    "variable": "var(--colors-crimson-light-a3)"
  },
  "colors.crimson.light.a4": {
    "value": "#f8005123",
    "variable": "var(--colors-crimson-light-a4)"
  },
  "colors.crimson.light.a5": {
    "value": "#e5004f31",
    "variable": "var(--colors-crimson-light-a5)"
  },
  "colors.crimson.light.a6": {
    "value": "#d0004b41",
    "variable": "var(--colors-crimson-light-a6)"
  },
  "colors.crimson.light.a7": {
    "value": "#bf004753",
    "variable": "var(--colors-crimson-light-a7)"
  },
  "colors.crimson.light.a8": {
    "value": "#b6004a6c",
    "variable": "var(--colors-crimson-light-a8)"
  },
  "colors.crimson.light.a9": {
    "value": "#e2005bc2",
    "variable": "var(--colors-crimson-light-a9)"
  },
  "colors.crimson.light.a10": {
    "value": "#d70056cb",
    "variable": "var(--colors-crimson-light-a10)"
  },
  "colors.crimson.light.a11": {
    "value": "#c4004fe2",
    "variable": "var(--colors-crimson-light-a11)"
  },
  "colors.crimson.light.a12": {
    "value": "#530026e9",
    "variable": "var(--colors-crimson-light-a12)"
  },
  "colors.crimson.dark.1": {
    "value": "#191114",
    "variable": "var(--colors-crimson-dark-1)"
  },
  "colors.crimson.dark.2": {
    "value": "#201318",
    "variable": "var(--colors-crimson-dark-2)"
  },
  "colors.crimson.dark.3": {
    "value": "#381525",
    "variable": "var(--colors-crimson-dark-3)"
  },
  "colors.crimson.dark.4": {
    "value": "#4d122f",
    "variable": "var(--colors-crimson-dark-4)"
  },
  "colors.crimson.dark.5": {
    "value": "#5c1839",
    "variable": "var(--colors-crimson-dark-5)"
  },
  "colors.crimson.dark.6": {
    "value": "#6d2545",
    "variable": "var(--colors-crimson-dark-6)"
  },
  "colors.crimson.dark.7": {
    "value": "#873356",
    "variable": "var(--colors-crimson-dark-7)"
  },
  "colors.crimson.dark.8": {
    "value": "#b0436e",
    "variable": "var(--colors-crimson-dark-8)"
  },
  "colors.crimson.dark.9": {
    "value": "#e93d82",
    "variable": "var(--colors-crimson-dark-9)"
  },
  "colors.crimson.dark.10": {
    "value": "#ee518a",
    "variable": "var(--colors-crimson-dark-10)"
  },
  "colors.crimson.dark.11": {
    "value": "#ff92ad",
    "variable": "var(--colors-crimson-dark-11)"
  },
  "colors.crimson.dark.12": {
    "value": "#fdd3e8",
    "variable": "var(--colors-crimson-dark-12)"
  },
  "colors.crimson.dark.a1": {
    "value": "#f4126709",
    "variable": "var(--colors-crimson-dark-a1)"
  },
  "colors.crimson.dark.a2": {
    "value": "#f22f7a11",
    "variable": "var(--colors-crimson-dark-a2)"
  },
  "colors.crimson.dark.a3": {
    "value": "#fe2a8b2a",
    "variable": "var(--colors-crimson-dark-a3)"
  },
  "colors.crimson.dark.a4": {
    "value": "#fd158741",
    "variable": "var(--colors-crimson-dark-a4)"
  },
  "colors.crimson.dark.a5": {
    "value": "#fd278f51",
    "variable": "var(--colors-crimson-dark-a5)"
  },
  "colors.crimson.dark.a6": {
    "value": "#fe459763",
    "variable": "var(--colors-crimson-dark-a6)"
  },
  "colors.crimson.dark.a7": {
    "value": "#fd559b7f",
    "variable": "var(--colors-crimson-dark-a7)"
  },
  "colors.crimson.dark.a8": {
    "value": "#fe5b9bab",
    "variable": "var(--colors-crimson-dark-a8)"
  },
  "colors.crimson.dark.a9": {
    "value": "#fe418de8",
    "variable": "var(--colors-crimson-dark-a9)"
  },
  "colors.crimson.dark.a10": {
    "value": "#ff5693ed",
    "variable": "var(--colors-crimson-dark-a10)"
  },
  "colors.crimson.dark.a11": {
    "value": "#ff92ad",
    "variable": "var(--colors-crimson-dark-a11)"
  },
  "colors.crimson.dark.a12": {
    "value": "#ffd5eafd",
    "variable": "var(--colors-crimson-dark-a12)"
  },
  "colors.cyan.light.1": {
    "value": "#fafdfe",
    "variable": "var(--colors-cyan-light-1)"
  },
  "colors.cyan.light.2": {
    "value": "#f2fafb",
    "variable": "var(--colors-cyan-light-2)"
  },
  "colors.cyan.light.3": {
    "value": "#def7f9",
    "variable": "var(--colors-cyan-light-3)"
  },
  "colors.cyan.light.4": {
    "value": "#caf1f6",
    "variable": "var(--colors-cyan-light-4)"
  },
  "colors.cyan.light.5": {
    "value": "#b5e9f0",
    "variable": "var(--colors-cyan-light-5)"
  },
  "colors.cyan.light.6": {
    "value": "#9ddde7",
    "variable": "var(--colors-cyan-light-6)"
  },
  "colors.cyan.light.7": {
    "value": "#7dcedc",
    "variable": "var(--colors-cyan-light-7)"
  },
  "colors.cyan.light.8": {
    "value": "#3db9cf",
    "variable": "var(--colors-cyan-light-8)"
  },
  "colors.cyan.light.9": {
    "value": "#00a2c7",
    "variable": "var(--colors-cyan-light-9)"
  },
  "colors.cyan.light.10": {
    "value": "#0797b9",
    "variable": "var(--colors-cyan-light-10)"
  },
  "colors.cyan.light.11": {
    "value": "#107d98",
    "variable": "var(--colors-cyan-light-11)"
  },
  "colors.cyan.light.12": {
    "value": "#0d3c48",
    "variable": "var(--colors-cyan-light-12)"
  },
  "colors.cyan.light.a1": {
    "value": "#0099cc05",
    "variable": "var(--colors-cyan-light-a1)"
  },
  "colors.cyan.light.a2": {
    "value": "#009db10d",
    "variable": "var(--colors-cyan-light-a2)"
  },
  "colors.cyan.light.a3": {
    "value": "#00c2d121",
    "variable": "var(--colors-cyan-light-a3)"
  },
  "colors.cyan.light.a4": {
    "value": "#00bcd435",
    "variable": "var(--colors-cyan-light-a4)"
  },
  "colors.cyan.light.a5": {
    "value": "#01b4cc4a",
    "variable": "var(--colors-cyan-light-a5)"
  },
  "colors.cyan.light.a6": {
    "value": "#00a7c162",
    "variable": "var(--colors-cyan-light-a6)"
  },
  "colors.cyan.light.a7": {
    "value": "#009fbb82",
    "variable": "var(--colors-cyan-light-a7)"
  },
  "colors.cyan.light.a8": {
    "value": "#00a3c0c2",
    "variable": "var(--colors-cyan-light-a8)"
  },
  "colors.cyan.light.a9": {
    "value": "#00a2c7",
    "variable": "var(--colors-cyan-light-a9)"
  },
  "colors.cyan.light.a10": {
    "value": "#0094b7f8",
    "variable": "var(--colors-cyan-light-a10)"
  },
  "colors.cyan.light.a11": {
    "value": "#007491ef",
    "variable": "var(--colors-cyan-light-a11)"
  },
  "colors.cyan.light.a12": {
    "value": "#00323ef2",
    "variable": "var(--colors-cyan-light-a12)"
  },
  "colors.cyan.dark.1": {
    "value": "#0b161a",
    "variable": "var(--colors-cyan-dark-1)"
  },
  "colors.cyan.dark.2": {
    "value": "#101b20",
    "variable": "var(--colors-cyan-dark-2)"
  },
  "colors.cyan.dark.3": {
    "value": "#082c36",
    "variable": "var(--colors-cyan-dark-3)"
  },
  "colors.cyan.dark.4": {
    "value": "#003848",
    "variable": "var(--colors-cyan-dark-4)"
  },
  "colors.cyan.dark.5": {
    "value": "#004558",
    "variable": "var(--colors-cyan-dark-5)"
  },
  "colors.cyan.dark.6": {
    "value": "#045468",
    "variable": "var(--colors-cyan-dark-6)"
  },
  "colors.cyan.dark.7": {
    "value": "#12677e",
    "variable": "var(--colors-cyan-dark-7)"
  },
  "colors.cyan.dark.8": {
    "value": "#11809c",
    "variable": "var(--colors-cyan-dark-8)"
  },
  "colors.cyan.dark.9": {
    "value": "#00a2c7",
    "variable": "var(--colors-cyan-dark-9)"
  },
  "colors.cyan.dark.10": {
    "value": "#23afd0",
    "variable": "var(--colors-cyan-dark-10)"
  },
  "colors.cyan.dark.11": {
    "value": "#4ccce6",
    "variable": "var(--colors-cyan-dark-11)"
  },
  "colors.cyan.dark.12": {
    "value": "#b6ecf7",
    "variable": "var(--colors-cyan-dark-12)"
  },
  "colors.cyan.dark.a1": {
    "value": "#0091f70a",
    "variable": "var(--colors-cyan-dark-a1)"
  },
  "colors.cyan.dark.a2": {
    "value": "#02a7f211",
    "variable": "var(--colors-cyan-dark-a2)"
  },
  "colors.cyan.dark.a3": {
    "value": "#00befd28",
    "variable": "var(--colors-cyan-dark-a3)"
  },
  "colors.cyan.dark.a4": {
    "value": "#00baff3b",
    "variable": "var(--colors-cyan-dark-a4)"
  },
  "colors.cyan.dark.a5": {
    "value": "#00befd4d",
    "variable": "var(--colors-cyan-dark-a5)"
  },
  "colors.cyan.dark.a6": {
    "value": "#00c7fd5e",
    "variable": "var(--colors-cyan-dark-a6)"
  },
  "colors.cyan.dark.a7": {
    "value": "#14cdff75",
    "variable": "var(--colors-cyan-dark-a7)"
  },
  "colors.cyan.dark.a8": {
    "value": "#11cfff95",
    "variable": "var(--colors-cyan-dark-a8)"
  },
  "colors.cyan.dark.a9": {
    "value": "#00cfffc3",
    "variable": "var(--colors-cyan-dark-a9)"
  },
  "colors.cyan.dark.a10": {
    "value": "#28d6ffcd",
    "variable": "var(--colors-cyan-dark-a10)"
  },
  "colors.cyan.dark.a11": {
    "value": "#52e1fee5",
    "variable": "var(--colors-cyan-dark-a11)"
  },
  "colors.cyan.dark.a12": {
    "value": "#bbf3fef7",
    "variable": "var(--colors-cyan-dark-a12)"
  },
  "colors.gold.light.1": {
    "value": "#fdfdfc",
    "variable": "var(--colors-gold-light-1)"
  },
  "colors.gold.light.2": {
    "value": "#faf9f2",
    "variable": "var(--colors-gold-light-2)"
  },
  "colors.gold.light.3": {
    "value": "#f2f0e7",
    "variable": "var(--colors-gold-light-3)"
  },
  "colors.gold.light.4": {
    "value": "#eae6db",
    "variable": "var(--colors-gold-light-4)"
  },
  "colors.gold.light.5": {
    "value": "#e1dccf",
    "variable": "var(--colors-gold-light-5)"
  },
  "colors.gold.light.6": {
    "value": "#d8d0bf",
    "variable": "var(--colors-gold-light-6)"
  },
  "colors.gold.light.7": {
    "value": "#cbc0aa",
    "variable": "var(--colors-gold-light-7)"
  },
  "colors.gold.light.8": {
    "value": "#b9a88d",
    "variable": "var(--colors-gold-light-8)"
  },
  "colors.gold.light.9": {
    "value": "#978365",
    "variable": "var(--colors-gold-light-9)"
  },
  "colors.gold.light.10": {
    "value": "#8c7a5e",
    "variable": "var(--colors-gold-light-10)"
  },
  "colors.gold.light.11": {
    "value": "#71624b",
    "variable": "var(--colors-gold-light-11)"
  },
  "colors.gold.light.12": {
    "value": "#3b352b",
    "variable": "var(--colors-gold-light-12)"
  },
  "colors.gold.light.a1": {
    "value": "#55550003",
    "variable": "var(--colors-gold-light-a1)"
  },
  "colors.gold.light.a2": {
    "value": "#9d8a000d",
    "variable": "var(--colors-gold-light-a2)"
  },
  "colors.gold.light.a3": {
    "value": "#75600018",
    "variable": "var(--colors-gold-light-a3)"
  },
  "colors.gold.light.a4": {
    "value": "#6b4e0024",
    "variable": "var(--colors-gold-light-a4)"
  },
  "colors.gold.light.a5": {
    "value": "#60460030",
    "variable": "var(--colors-gold-light-a5)"
  },
  "colors.gold.light.a6": {
    "value": "#64440040",
    "variable": "var(--colors-gold-light-a6)"
  },
  "colors.gold.light.a7": {
    "value": "#63420055",
    "variable": "var(--colors-gold-light-a7)"
  },
  "colors.gold.light.a8": {
    "value": "#633d0072",
    "variable": "var(--colors-gold-light-a8)"
  },
  "colors.gold.light.a9": {
    "value": "#5332009a",
    "variable": "var(--colors-gold-light-a9)"
  },
  "colors.gold.light.a10": {
    "value": "#492d00a1",
    "variable": "var(--colors-gold-light-a10)"
  },
  "colors.gold.light.a11": {
    "value": "#362100b4",
    "variable": "var(--colors-gold-light-a11)"
  },
  "colors.gold.light.a12": {
    "value": "#130c00d4",
    "variable": "var(--colors-gold-light-a12)"
  },
  "colors.gold.dark.1": {
    "value": "#121211",
    "variable": "var(--colors-gold-dark-1)"
  },
  "colors.gold.dark.2": {
    "value": "#1b1a17",
    "variable": "var(--colors-gold-dark-2)"
  },
  "colors.gold.dark.3": {
    "value": "#24231f",
    "variable": "var(--colors-gold-dark-3)"
  },
  "colors.gold.dark.4": {
    "value": "#2d2b26",
    "variable": "var(--colors-gold-dark-4)"
  },
  "colors.gold.dark.5": {
    "value": "#38352e",
    "variable": "var(--colors-gold-dark-5)"
  },
  "colors.gold.dark.6": {
    "value": "#444039",
    "variable": "var(--colors-gold-dark-6)"
  },
  "colors.gold.dark.7": {
    "value": "#544f46",
    "variable": "var(--colors-gold-dark-7)"
  },
  "colors.gold.dark.8": {
    "value": "#696256",
    "variable": "var(--colors-gold-dark-8)"
  },
  "colors.gold.dark.9": {
    "value": "#978365",
    "variable": "var(--colors-gold-dark-9)"
  },
  "colors.gold.dark.10": {
    "value": "#a39073",
    "variable": "var(--colors-gold-dark-10)"
  },
  "colors.gold.dark.11": {
    "value": "#cbb99f",
    "variable": "var(--colors-gold-dark-11)"
  },
  "colors.gold.dark.12": {
    "value": "#e8e2d9",
    "variable": "var(--colors-gold-dark-12)"
  },
  "colors.gold.dark.a1": {
    "value": "#91911102",
    "variable": "var(--colors-gold-dark-a1)"
  },
  "colors.gold.dark.a2": {
    "value": "#f9e29d0b",
    "variable": "var(--colors-gold-dark-a2)"
  },
  "colors.gold.dark.a3": {
    "value": "#f8ecbb15",
    "variable": "var(--colors-gold-dark-a3)"
  },
  "colors.gold.dark.a4": {
    "value": "#ffeec41e",
    "variable": "var(--colors-gold-dark-a4)"
  },
  "colors.gold.dark.a5": {
    "value": "#feecc22a",
    "variable": "var(--colors-gold-dark-a5)"
  },
  "colors.gold.dark.a6": {
    "value": "#feebcb37",
    "variable": "var(--colors-gold-dark-a6)"
  },
  "colors.gold.dark.a7": {
    "value": "#ffedcd48",
    "variable": "var(--colors-gold-dark-a7)"
  },
  "colors.gold.dark.a8": {
    "value": "#fdeaca5f",
    "variable": "var(--colors-gold-dark-a8)"
  },
  "colors.gold.dark.a9": {
    "value": "#ffdba690",
    "variable": "var(--colors-gold-dark-a9)"
  },
  "colors.gold.dark.a10": {
    "value": "#fedfb09d",
    "variable": "var(--colors-gold-dark-a10)"
  },
  "colors.gold.dark.a11": {
    "value": "#fee7c6c8",
    "variable": "var(--colors-gold-dark-a11)"
  },
  "colors.gold.dark.a12": {
    "value": "#fef7ede7",
    "variable": "var(--colors-gold-dark-a12)"
  },
  "colors.grass.light.1": {
    "value": "#fbfefb",
    "variable": "var(--colors-grass-light-1)"
  },
  "colors.grass.light.2": {
    "value": "#f5fbf5",
    "variable": "var(--colors-grass-light-2)"
  },
  "colors.grass.light.3": {
    "value": "#e9f6e9",
    "variable": "var(--colors-grass-light-3)"
  },
  "colors.grass.light.4": {
    "value": "#daf1db",
    "variable": "var(--colors-grass-light-4)"
  },
  "colors.grass.light.5": {
    "value": "#c9e8ca",
    "variable": "var(--colors-grass-light-5)"
  },
  "colors.grass.light.6": {
    "value": "#b2ddb5",
    "variable": "var(--colors-grass-light-6)"
  },
  "colors.grass.light.7": {
    "value": "#94ce9a",
    "variable": "var(--colors-grass-light-7)"
  },
  "colors.grass.light.8": {
    "value": "#65ba74",
    "variable": "var(--colors-grass-light-8)"
  },
  "colors.grass.light.9": {
    "value": "#46a758",
    "variable": "var(--colors-grass-light-9)"
  },
  "colors.grass.light.10": {
    "value": "#3e9b4f",
    "variable": "var(--colors-grass-light-10)"
  },
  "colors.grass.light.11": {
    "value": "#2a7e3b",
    "variable": "var(--colors-grass-light-11)"
  },
  "colors.grass.light.12": {
    "value": "#203c25",
    "variable": "var(--colors-grass-light-12)"
  },
  "colors.grass.light.a1": {
    "value": "#00c00004",
    "variable": "var(--colors-grass-light-a1)"
  },
  "colors.grass.light.a2": {
    "value": "#0099000a",
    "variable": "var(--colors-grass-light-a2)"
  },
  "colors.grass.light.a3": {
    "value": "#00970016",
    "variable": "var(--colors-grass-light-a3)"
  },
  "colors.grass.light.a4": {
    "value": "#009f0725",
    "variable": "var(--colors-grass-light-a4)"
  },
  "colors.grass.light.a5": {
    "value": "#00930536",
    "variable": "var(--colors-grass-light-a5)"
  },
  "colors.grass.light.a6": {
    "value": "#008f0a4d",
    "variable": "var(--colors-grass-light-a6)"
  },
  "colors.grass.light.a7": {
    "value": "#018b0f6b",
    "variable": "var(--colors-grass-light-a7)"
  },
  "colors.grass.light.a8": {
    "value": "#008d199a",
    "variable": "var(--colors-grass-light-a8)"
  },
  "colors.grass.light.a9": {
    "value": "#008619b9",
    "variable": "var(--colors-grass-light-a9)"
  },
  "colors.grass.light.a10": {
    "value": "#007b17c1",
    "variable": "var(--colors-grass-light-a10)"
  },
  "colors.grass.light.a11": {
    "value": "#006514d5",
    "variable": "var(--colors-grass-light-a11)"
  },
  "colors.grass.light.a12": {
    "value": "#002006df",
    "variable": "var(--colors-grass-light-a12)"
  },
  "colors.grass.dark.1": {
    "value": "#0e1511",
    "variable": "var(--colors-grass-dark-1)"
  },
  "colors.grass.dark.2": {
    "value": "#141a15",
    "variable": "var(--colors-grass-dark-2)"
  },
  "colors.grass.dark.3": {
    "value": "#1b2a1e",
    "variable": "var(--colors-grass-dark-3)"
  },
  "colors.grass.dark.4": {
    "value": "#1d3a24",
    "variable": "var(--colors-grass-dark-4)"
  },
  "colors.grass.dark.5": {
    "value": "#25482d",
    "variable": "var(--colors-grass-dark-5)"
  },
  "colors.grass.dark.6": {
    "value": "#2d5736",
    "variable": "var(--colors-grass-dark-6)"
  },
  "colors.grass.dark.7": {
    "value": "#366740",
    "variable": "var(--colors-grass-dark-7)"
  },
  "colors.grass.dark.8": {
    "value": "#3e7949",
    "variable": "var(--colors-grass-dark-8)"
  },
  "colors.grass.dark.9": {
    "value": "#46a758",
    "variable": "var(--colors-grass-dark-9)"
  },
  "colors.grass.dark.10": {
    "value": "#53b365",
    "variable": "var(--colors-grass-dark-10)"
  },
  "colors.grass.dark.11": {
    "value": "#71d083",
    "variable": "var(--colors-grass-dark-11)"
  },
  "colors.grass.dark.12": {
    "value": "#c2f0c2",
    "variable": "var(--colors-grass-dark-12)"
  },
  "colors.grass.dark.a1": {
    "value": "#00de1205",
    "variable": "var(--colors-grass-dark-a1)"
  },
  "colors.grass.dark.a2": {
    "value": "#5ef7780a",
    "variable": "var(--colors-grass-dark-a2)"
  },
  "colors.grass.dark.a3": {
    "value": "#70fe8c1b",
    "variable": "var(--colors-grass-dark-a3)"
  },
  "colors.grass.dark.a4": {
    "value": "#57ff802c",
    "variable": "var(--colors-grass-dark-a4)"
  },
  "colors.grass.dark.a5": {
    "value": "#68ff8b3b",
    "variable": "var(--colors-grass-dark-a5)"
  },
  "colors.grass.dark.a6": {
    "value": "#71ff8f4b",
    "variable": "var(--colors-grass-dark-a6)"
  },
  "colors.grass.dark.a7": {
    "value": "#77fd925d",
    "variable": "var(--colors-grass-dark-a7)"
  },
  "colors.grass.dark.a8": {
    "value": "#77fd9070",
    "variable": "var(--colors-grass-dark-a8)"
  },
  "colors.grass.dark.a9": {
    "value": "#65ff82a1",
    "variable": "var(--colors-grass-dark-a9)"
  },
  "colors.grass.dark.a10": {
    "value": "#72ff8dae",
    "variable": "var(--colors-grass-dark-a10)"
  },
  "colors.grass.dark.a11": {
    "value": "#89ff9fcd",
    "variable": "var(--colors-grass-dark-a11)"
  },
  "colors.grass.dark.a12": {
    "value": "#ceffceef",
    "variable": "var(--colors-grass-dark-a12)"
  },
  "colors.gray.light.1": {
    "value": "#fcfcfc",
    "variable": "var(--colors-gray-light-1)"
  },
  "colors.gray.light.2": {
    "value": "#f9f9f9",
    "variable": "var(--colors-gray-light-2)"
  },
  "colors.gray.light.3": {
    "value": "#f0f0f0",
    "variable": "var(--colors-gray-light-3)"
  },
  "colors.gray.light.4": {
    "value": "#e8e8e8",
    "variable": "var(--colors-gray-light-4)"
  },
  "colors.gray.light.5": {
    "value": "#e0e0e0",
    "variable": "var(--colors-gray-light-5)"
  },
  "colors.gray.light.6": {
    "value": "#d9d9d9",
    "variable": "var(--colors-gray-light-6)"
  },
  "colors.gray.light.7": {
    "value": "#cecece",
    "variable": "var(--colors-gray-light-7)"
  },
  "colors.gray.light.8": {
    "value": "#bbbbbb",
    "variable": "var(--colors-gray-light-8)"
  },
  "colors.gray.light.9": {
    "value": "#8d8d8d",
    "variable": "var(--colors-gray-light-9)"
  },
  "colors.gray.light.10": {
    "value": "#838383",
    "variable": "var(--colors-gray-light-10)"
  },
  "colors.gray.light.11": {
    "value": "#646464",
    "variable": "var(--colors-gray-light-11)"
  },
  "colors.gray.light.12": {
    "value": "#202020",
    "variable": "var(--colors-gray-light-12)"
  },
  "colors.gray.light.a1": {
    "value": "#00000003",
    "variable": "var(--colors-gray-light-a1)"
  },
  "colors.gray.light.a2": {
    "value": "#00000006",
    "variable": "var(--colors-gray-light-a2)"
  },
  "colors.gray.light.a3": {
    "value": "#0000000f",
    "variable": "var(--colors-gray-light-a3)"
  },
  "colors.gray.light.a4": {
    "value": "#00000017",
    "variable": "var(--colors-gray-light-a4)"
  },
  "colors.gray.light.a5": {
    "value": "#0000001f",
    "variable": "var(--colors-gray-light-a5)"
  },
  "colors.gray.light.a6": {
    "value": "#00000026",
    "variable": "var(--colors-gray-light-a6)"
  },
  "colors.gray.light.a7": {
    "value": "#00000031",
    "variable": "var(--colors-gray-light-a7)"
  },
  "colors.gray.light.a8": {
    "value": "#00000044",
    "variable": "var(--colors-gray-light-a8)"
  },
  "colors.gray.light.a9": {
    "value": "#00000072",
    "variable": "var(--colors-gray-light-a9)"
  },
  "colors.gray.light.a10": {
    "value": "#0000007c",
    "variable": "var(--colors-gray-light-a10)"
  },
  "colors.gray.light.a11": {
    "value": "#0000009b",
    "variable": "var(--colors-gray-light-a11)"
  },
  "colors.gray.light.a12": {
    "value": "#000000df",
    "variable": "var(--colors-gray-light-a12)"
  },
  "colors.gray.dark.1": {
    "value": "#111111",
    "variable": "var(--colors-gray-dark-1)"
  },
  "colors.gray.dark.2": {
    "value": "#191919",
    "variable": "var(--colors-gray-dark-2)"
  },
  "colors.gray.dark.3": {
    "value": "#222222",
    "variable": "var(--colors-gray-dark-3)"
  },
  "colors.gray.dark.4": {
    "value": "#2a2a2a",
    "variable": "var(--colors-gray-dark-4)"
  },
  "colors.gray.dark.5": {
    "value": "#313131",
    "variable": "var(--colors-gray-dark-5)"
  },
  "colors.gray.dark.6": {
    "value": "#3a3a3a",
    "variable": "var(--colors-gray-dark-6)"
  },
  "colors.gray.dark.7": {
    "value": "#484848",
    "variable": "var(--colors-gray-dark-7)"
  },
  "colors.gray.dark.8": {
    "value": "#606060",
    "variable": "var(--colors-gray-dark-8)"
  },
  "colors.gray.dark.9": {
    "value": "#6e6e6e",
    "variable": "var(--colors-gray-dark-9)"
  },
  "colors.gray.dark.10": {
    "value": "#7b7b7b",
    "variable": "var(--colors-gray-dark-10)"
  },
  "colors.gray.dark.11": {
    "value": "#b4b4b4",
    "variable": "var(--colors-gray-dark-11)"
  },
  "colors.gray.dark.12": {
    "value": "#eeeeee",
    "variable": "var(--colors-gray-dark-12)"
  },
  "colors.gray.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-gray-dark-a1)"
  },
  "colors.gray.dark.a2": {
    "value": "#ffffff09",
    "variable": "var(--colors-gray-dark-a2)"
  },
  "colors.gray.dark.a3": {
    "value": "#ffffff12",
    "variable": "var(--colors-gray-dark-a3)"
  },
  "colors.gray.dark.a4": {
    "value": "#ffffff1b",
    "variable": "var(--colors-gray-dark-a4)"
  },
  "colors.gray.dark.a5": {
    "value": "#ffffff22",
    "variable": "var(--colors-gray-dark-a5)"
  },
  "colors.gray.dark.a6": {
    "value": "#ffffff2c",
    "variable": "var(--colors-gray-dark-a6)"
  },
  "colors.gray.dark.a7": {
    "value": "#ffffff3b",
    "variable": "var(--colors-gray-dark-a7)"
  },
  "colors.gray.dark.a8": {
    "value": "#ffffff55",
    "variable": "var(--colors-gray-dark-a8)"
  },
  "colors.gray.dark.a9": {
    "value": "#ffffff64",
    "variable": "var(--colors-gray-dark-a9)"
  },
  "colors.gray.dark.a10": {
    "value": "#ffffff72",
    "variable": "var(--colors-gray-dark-a10)"
  },
  "colors.gray.dark.a11": {
    "value": "#ffffffaf",
    "variable": "var(--colors-gray-dark-a11)"
  },
  "colors.gray.dark.a12": {
    "value": "#ffffffed",
    "variable": "var(--colors-gray-dark-a12)"
  },
  "colors.green.light.1": {
    "value": "#fbfefc",
    "variable": "var(--colors-green-light-1)"
  },
  "colors.green.light.2": {
    "value": "#f4fbf6",
    "variable": "var(--colors-green-light-2)"
  },
  "colors.green.light.3": {
    "value": "#e6f6eb",
    "variable": "var(--colors-green-light-3)"
  },
  "colors.green.light.4": {
    "value": "#d6f1df",
    "variable": "var(--colors-green-light-4)"
  },
  "colors.green.light.5": {
    "value": "#c4e8d1",
    "variable": "var(--colors-green-light-5)"
  },
  "colors.green.light.6": {
    "value": "#adddc0",
    "variable": "var(--colors-green-light-6)"
  },
  "colors.green.light.7": {
    "value": "#8eceaa",
    "variable": "var(--colors-green-light-7)"
  },
  "colors.green.light.8": {
    "value": "#5bb98b",
    "variable": "var(--colors-green-light-8)"
  },
  "colors.green.light.9": {
    "value": "#30a46c",
    "variable": "var(--colors-green-light-9)"
  },
  "colors.green.light.10": {
    "value": "#2b9a66",
    "variable": "var(--colors-green-light-10)"
  },
  "colors.green.light.11": {
    "value": "#218358",
    "variable": "var(--colors-green-light-11)"
  },
  "colors.green.light.12": {
    "value": "#193b2d",
    "variable": "var(--colors-green-light-12)"
  },
  "colors.green.light.a1": {
    "value": "#00c04004",
    "variable": "var(--colors-green-light-a1)"
  },
  "colors.green.light.a2": {
    "value": "#00a32f0b",
    "variable": "var(--colors-green-light-a2)"
  },
  "colors.green.light.a3": {
    "value": "#00a43319",
    "variable": "var(--colors-green-light-a3)"
  },
  "colors.green.light.a4": {
    "value": "#00a83829",
    "variable": "var(--colors-green-light-a4)"
  },
  "colors.green.light.a5": {
    "value": "#019c393b",
    "variable": "var(--colors-green-light-a5)"
  },
  "colors.green.light.a6": {
    "value": "#00963c52",
    "variable": "var(--colors-green-light-a6)"
  },
  "colors.green.light.a7": {
    "value": "#00914071",
    "variable": "var(--colors-green-light-a7)"
  },
  "colors.green.light.a8": {
    "value": "#00924ba4",
    "variable": "var(--colors-green-light-a8)"
  },
  "colors.green.light.a9": {
    "value": "#008f4acf",
    "variable": "var(--colors-green-light-a9)"
  },
  "colors.green.light.a10": {
    "value": "#008647d4",
    "variable": "var(--colors-green-light-a10)"
  },
  "colors.green.light.a11": {
    "value": "#00713fde",
    "variable": "var(--colors-green-light-a11)"
  },
  "colors.green.light.a12": {
    "value": "#002616e6",
    "variable": "var(--colors-green-light-a12)"
  },
  "colors.green.dark.1": {
    "value": "#0e1512",
    "variable": "var(--colors-green-dark-1)"
  },
  "colors.green.dark.2": {
    "value": "#121b17",
    "variable": "var(--colors-green-dark-2)"
  },
  "colors.green.dark.3": {
    "value": "#132d21",
    "variable": "var(--colors-green-dark-3)"
  },
  "colors.green.dark.4": {
    "value": "#113b29",
    "variable": "var(--colors-green-dark-4)"
  },
  "colors.green.dark.5": {
    "value": "#174933",
    "variable": "var(--colors-green-dark-5)"
  },
  "colors.green.dark.6": {
    "value": "#20573e",
    "variable": "var(--colors-green-dark-6)"
  },
  "colors.green.dark.7": {
    "value": "#28684a",
    "variable": "var(--colors-green-dark-7)"
  },
  "colors.green.dark.8": {
    "value": "#2f7c57",
    "variable": "var(--colors-green-dark-8)"
  },
  "colors.green.dark.9": {
    "value": "#30a46c",
    "variable": "var(--colors-green-dark-9)"
  },
  "colors.green.dark.10": {
    "value": "#33b074",
    "variable": "var(--colors-green-dark-10)"
  },
  "colors.green.dark.11": {
    "value": "#3dd68c",
    "variable": "var(--colors-green-dark-11)"
  },
  "colors.green.dark.12": {
    "value": "#b1f1cb",
    "variable": "var(--colors-green-dark-12)"
  },
  "colors.green.dark.a1": {
    "value": "#00de4505",
    "variable": "var(--colors-green-dark-a1)"
  },
  "colors.green.dark.a2": {
    "value": "#29f99d0b",
    "variable": "var(--colors-green-dark-a2)"
  },
  "colors.green.dark.a3": {
    "value": "#22ff991e",
    "variable": "var(--colors-green-dark-a3)"
  },
  "colors.green.dark.a4": {
    "value": "#11ff992d",
    "variable": "var(--colors-green-dark-a4)"
  },
  "colors.green.dark.a5": {
    "value": "#2bffa23c",
    "variable": "var(--colors-green-dark-a5)"
  },
  "colors.green.dark.a6": {
    "value": "#44ffaa4b",
    "variable": "var(--colors-green-dark-a6)"
  },
  "colors.green.dark.a7": {
    "value": "#50fdac5e",
    "variable": "var(--colors-green-dark-a7)"
  },
  "colors.green.dark.a8": {
    "value": "#54ffad73",
    "variable": "var(--colors-green-dark-a8)"
  },
  "colors.green.dark.a9": {
    "value": "#44ffa49e",
    "variable": "var(--colors-green-dark-a9)"
  },
  "colors.green.dark.a10": {
    "value": "#43fea4ab",
    "variable": "var(--colors-green-dark-a10)"
  },
  "colors.green.dark.a11": {
    "value": "#46fea5d4",
    "variable": "var(--colors-green-dark-a11)"
  },
  "colors.green.dark.a12": {
    "value": "#bbffd7f0",
    "variable": "var(--colors-green-dark-a12)"
  },
  "colors.indigo.light.1": {
    "value": "#fdfdfe",
    "variable": "var(--colors-indigo-light-1)"
  },
  "colors.indigo.light.2": {
    "value": "#f7f9ff",
    "variable": "var(--colors-indigo-light-2)"
  },
  "colors.indigo.light.3": {
    "value": "#edf2fe",
    "variable": "var(--colors-indigo-light-3)"
  },
  "colors.indigo.light.4": {
    "value": "#e1e9ff",
    "variable": "var(--colors-indigo-light-4)"
  },
  "colors.indigo.light.5": {
    "value": "#d2deff",
    "variable": "var(--colors-indigo-light-5)"
  },
  "colors.indigo.light.6": {
    "value": "#c1d0ff",
    "variable": "var(--colors-indigo-light-6)"
  },
  "colors.indigo.light.7": {
    "value": "#abbdf9",
    "variable": "var(--colors-indigo-light-7)"
  },
  "colors.indigo.light.8": {
    "value": "#8da4ef",
    "variable": "var(--colors-indigo-light-8)"
  },
  "colors.indigo.light.9": {
    "value": "#3e63dd",
    "variable": "var(--colors-indigo-light-9)"
  },
  "colors.indigo.light.10": {
    "value": "#3358d4",
    "variable": "var(--colors-indigo-light-10)"
  },
  "colors.indigo.light.11": {
    "value": "#3a5bc7",
    "variable": "var(--colors-indigo-light-11)"
  },
  "colors.indigo.light.12": {
    "value": "#1f2d5c",
    "variable": "var(--colors-indigo-light-12)"
  },
  "colors.indigo.light.a1": {
    "value": "#00008002",
    "variable": "var(--colors-indigo-light-a1)"
  },
  "colors.indigo.light.a2": {
    "value": "#0040ff08",
    "variable": "var(--colors-indigo-light-a2)"
  },
  "colors.indigo.light.a3": {
    "value": "#0047f112",
    "variable": "var(--colors-indigo-light-a3)"
  },
  "colors.indigo.light.a4": {
    "value": "#0044ff1e",
    "variable": "var(--colors-indigo-light-a4)"
  },
  "colors.indigo.light.a5": {
    "value": "#0044ff2d",
    "variable": "var(--colors-indigo-light-a5)"
  },
  "colors.indigo.light.a6": {
    "value": "#003eff3e",
    "variable": "var(--colors-indigo-light-a6)"
  },
  "colors.indigo.light.a7": {
    "value": "#0037ed54",
    "variable": "var(--colors-indigo-light-a7)"
  },
  "colors.indigo.light.a8": {
    "value": "#0034dc72",
    "variable": "var(--colors-indigo-light-a8)"
  },
  "colors.indigo.light.a9": {
    "value": "#0031d2c1",
    "variable": "var(--colors-indigo-light-a9)"
  },
  "colors.indigo.light.a10": {
    "value": "#002ec9cc",
    "variable": "var(--colors-indigo-light-a10)"
  },
  "colors.indigo.light.a11": {
    "value": "#002bb7c5",
    "variable": "var(--colors-indigo-light-a11)"
  },
  "colors.indigo.light.a12": {
    "value": "#001046e0",
    "variable": "var(--colors-indigo-light-a12)"
  },
  "colors.indigo.dark.1": {
    "value": "#11131f",
    "variable": "var(--colors-indigo-dark-1)"
  },
  "colors.indigo.dark.2": {
    "value": "#141726",
    "variable": "var(--colors-indigo-dark-2)"
  },
  "colors.indigo.dark.3": {
    "value": "#182449",
    "variable": "var(--colors-indigo-dark-3)"
  },
  "colors.indigo.dark.4": {
    "value": "#1d2e62",
    "variable": "var(--colors-indigo-dark-4)"
  },
  "colors.indigo.dark.5": {
    "value": "#253974",
    "variable": "var(--colors-indigo-dark-5)"
  },
  "colors.indigo.dark.6": {
    "value": "#304384",
    "variable": "var(--colors-indigo-dark-6)"
  },
  "colors.indigo.dark.7": {
    "value": "#3a4f97",
    "variable": "var(--colors-indigo-dark-7)"
  },
  "colors.indigo.dark.8": {
    "value": "#435db1",
    "variable": "var(--colors-indigo-dark-8)"
  },
  "colors.indigo.dark.9": {
    "value": "#3e63dd",
    "variable": "var(--colors-indigo-dark-9)"
  },
  "colors.indigo.dark.10": {
    "value": "#5472e4",
    "variable": "var(--colors-indigo-dark-10)"
  },
  "colors.indigo.dark.11": {
    "value": "#9eb1ff",
    "variable": "var(--colors-indigo-dark-11)"
  },
  "colors.indigo.dark.12": {
    "value": "#d6e1ff",
    "variable": "var(--colors-indigo-dark-12)"
  },
  "colors.indigo.dark.a1": {
    "value": "#1133ff0f",
    "variable": "var(--colors-indigo-dark-a1)"
  },
  "colors.indigo.dark.a2": {
    "value": "#3354fa17",
    "variable": "var(--colors-indigo-dark-a2)"
  },
  "colors.indigo.dark.a3": {
    "value": "#2f62ff3c",
    "variable": "var(--colors-indigo-dark-a3)"
  },
  "colors.indigo.dark.a4": {
    "value": "#3566ff57",
    "variable": "var(--colors-indigo-dark-a4)"
  },
  "colors.indigo.dark.a5": {
    "value": "#4171fd6b",
    "variable": "var(--colors-indigo-dark-a5)"
  },
  "colors.indigo.dark.a6": {
    "value": "#5178fd7c",
    "variable": "var(--colors-indigo-dark-a6)"
  },
  "colors.indigo.dark.a7": {
    "value": "#5a7fff90",
    "variable": "var(--colors-indigo-dark-a7)"
  },
  "colors.indigo.dark.a8": {
    "value": "#5b81feac",
    "variable": "var(--colors-indigo-dark-a8)"
  },
  "colors.indigo.dark.a9": {
    "value": "#4671ffdb",
    "variable": "var(--colors-indigo-dark-a9)"
  },
  "colors.indigo.dark.a10": {
    "value": "#5c7efee3",
    "variable": "var(--colors-indigo-dark-a10)"
  },
  "colors.indigo.dark.a11": {
    "value": "#9eb1ff",
    "variable": "var(--colors-indigo-dark-a11)"
  },
  "colors.indigo.dark.a12": {
    "value": "#d6e1ff",
    "variable": "var(--colors-indigo-dark-a12)"
  },
  "colors.iris.light.1": {
    "value": "#fdfdff",
    "variable": "var(--colors-iris-light-1)"
  },
  "colors.iris.light.2": {
    "value": "#f8f8ff",
    "variable": "var(--colors-iris-light-2)"
  },
  "colors.iris.light.3": {
    "value": "#f0f1fe",
    "variable": "var(--colors-iris-light-3)"
  },
  "colors.iris.light.4": {
    "value": "#e6e7ff",
    "variable": "var(--colors-iris-light-4)"
  },
  "colors.iris.light.5": {
    "value": "#dadcff",
    "variable": "var(--colors-iris-light-5)"
  },
  "colors.iris.light.6": {
    "value": "#cbcdff",
    "variable": "var(--colors-iris-light-6)"
  },
  "colors.iris.light.7": {
    "value": "#b8baf8",
    "variable": "var(--colors-iris-light-7)"
  },
  "colors.iris.light.8": {
    "value": "#9b9ef0",
    "variable": "var(--colors-iris-light-8)"
  },
  "colors.iris.light.9": {
    "value": "#5b5bd6",
    "variable": "var(--colors-iris-light-9)"
  },
  "colors.iris.light.10": {
    "value": "#5151cd",
    "variable": "var(--colors-iris-light-10)"
  },
  "colors.iris.light.11": {
    "value": "#5753c6",
    "variable": "var(--colors-iris-light-11)"
  },
  "colors.iris.light.12": {
    "value": "#272962",
    "variable": "var(--colors-iris-light-12)"
  },
  "colors.iris.light.a1": {
    "value": "#0000ff02",
    "variable": "var(--colors-iris-light-a1)"
  },
  "colors.iris.light.a2": {
    "value": "#0000ff07",
    "variable": "var(--colors-iris-light-a2)"
  },
  "colors.iris.light.a3": {
    "value": "#0011ee0f",
    "variable": "var(--colors-iris-light-a3)"
  },
  "colors.iris.light.a4": {
    "value": "#000bff19",
    "variable": "var(--colors-iris-light-a4)"
  },
  "colors.iris.light.a5": {
    "value": "#000eff25",
    "variable": "var(--colors-iris-light-a5)"
  },
  "colors.iris.light.a6": {
    "value": "#000aff34",
    "variable": "var(--colors-iris-light-a6)"
  },
  "colors.iris.light.a7": {
    "value": "#0008e647",
    "variable": "var(--colors-iris-light-a7)"
  },
  "colors.iris.light.a8": {
    "value": "#0008d964",
    "variable": "var(--colors-iris-light-a8)"
  },
  "colors.iris.light.a9": {
    "value": "#0000c0a4",
    "variable": "var(--colors-iris-light-a9)"
  },
  "colors.iris.light.a10": {
    "value": "#0000b6ae",
    "variable": "var(--colors-iris-light-a10)"
  },
  "colors.iris.light.a11": {
    "value": "#0600abac",
    "variable": "var(--colors-iris-light-a11)"
  },
  "colors.iris.light.a12": {
    "value": "#000246d8",
    "variable": "var(--colors-iris-light-a12)"
  },
  "colors.iris.dark.1": {
    "value": "#13131e",
    "variable": "var(--colors-iris-dark-1)"
  },
  "colors.iris.dark.2": {
    "value": "#171625",
    "variable": "var(--colors-iris-dark-2)"
  },
  "colors.iris.dark.3": {
    "value": "#202248",
    "variable": "var(--colors-iris-dark-3)"
  },
  "colors.iris.dark.4": {
    "value": "#262a65",
    "variable": "var(--colors-iris-dark-4)"
  },
  "colors.iris.dark.5": {
    "value": "#303374",
    "variable": "var(--colors-iris-dark-5)"
  },
  "colors.iris.dark.6": {
    "value": "#3d3e82",
    "variable": "var(--colors-iris-dark-6)"
  },
  "colors.iris.dark.7": {
    "value": "#4a4a95",
    "variable": "var(--colors-iris-dark-7)"
  },
  "colors.iris.dark.8": {
    "value": "#5958b1",
    "variable": "var(--colors-iris-dark-8)"
  },
  "colors.iris.dark.9": {
    "value": "#5b5bd6",
    "variable": "var(--colors-iris-dark-9)"
  },
  "colors.iris.dark.10": {
    "value": "#6e6ade",
    "variable": "var(--colors-iris-dark-10)"
  },
  "colors.iris.dark.11": {
    "value": "#b1a9ff",
    "variable": "var(--colors-iris-dark-11)"
  },
  "colors.iris.dark.12": {
    "value": "#e0dffe",
    "variable": "var(--colors-iris-dark-12)"
  },
  "colors.iris.dark.a1": {
    "value": "#3636fe0e",
    "variable": "var(--colors-iris-dark-a1)"
  },
  "colors.iris.dark.a2": {
    "value": "#564bf916",
    "variable": "var(--colors-iris-dark-a2)"
  },
  "colors.iris.dark.a3": {
    "value": "#525bff3b",
    "variable": "var(--colors-iris-dark-a3)"
  },
  "colors.iris.dark.a4": {
    "value": "#4d58ff5a",
    "variable": "var(--colors-iris-dark-a4)"
  },
  "colors.iris.dark.a5": {
    "value": "#5b62fd6b",
    "variable": "var(--colors-iris-dark-a5)"
  },
  "colors.iris.dark.a6": {
    "value": "#6d6ffd7a",
    "variable": "var(--colors-iris-dark-a6)"
  },
  "colors.iris.dark.a7": {
    "value": "#7777fe8e",
    "variable": "var(--colors-iris-dark-a7)"
  },
  "colors.iris.dark.a8": {
    "value": "#7b7afeac",
    "variable": "var(--colors-iris-dark-a8)"
  },
  "colors.iris.dark.a9": {
    "value": "#6a6afed4",
    "variable": "var(--colors-iris-dark-a9)"
  },
  "colors.iris.dark.a10": {
    "value": "#7d79ffdc",
    "variable": "var(--colors-iris-dark-a10)"
  },
  "colors.iris.dark.a11": {
    "value": "#b1a9ff",
    "variable": "var(--colors-iris-dark-a11)"
  },
  "colors.iris.dark.a12": {
    "value": "#e1e0fffe",
    "variable": "var(--colors-iris-dark-a12)"
  },
  "colors.jade.light.1": {
    "value": "#fbfefd",
    "variable": "var(--colors-jade-light-1)"
  },
  "colors.jade.light.2": {
    "value": "#f4fbf7",
    "variable": "var(--colors-jade-light-2)"
  },
  "colors.jade.light.3": {
    "value": "#e6f7ed",
    "variable": "var(--colors-jade-light-3)"
  },
  "colors.jade.light.4": {
    "value": "#d6f1e3",
    "variable": "var(--colors-jade-light-4)"
  },
  "colors.jade.light.5": {
    "value": "#c3e9d7",
    "variable": "var(--colors-jade-light-5)"
  },
  "colors.jade.light.6": {
    "value": "#acdec8",
    "variable": "var(--colors-jade-light-6)"
  },
  "colors.jade.light.7": {
    "value": "#8bceb6",
    "variable": "var(--colors-jade-light-7)"
  },
  "colors.jade.light.8": {
    "value": "#56ba9f",
    "variable": "var(--colors-jade-light-8)"
  },
  "colors.jade.light.9": {
    "value": "#29a383",
    "variable": "var(--colors-jade-light-9)"
  },
  "colors.jade.light.10": {
    "value": "#26997b",
    "variable": "var(--colors-jade-light-10)"
  },
  "colors.jade.light.11": {
    "value": "#208368",
    "variable": "var(--colors-jade-light-11)"
  },
  "colors.jade.light.12": {
    "value": "#1d3b31",
    "variable": "var(--colors-jade-light-12)"
  },
  "colors.jade.light.a1": {
    "value": "#00c08004",
    "variable": "var(--colors-jade-light-a1)"
  },
  "colors.jade.light.a2": {
    "value": "#00a3460b",
    "variable": "var(--colors-jade-light-a2)"
  },
  "colors.jade.light.a3": {
    "value": "#00ae4819",
    "variable": "var(--colors-jade-light-a3)"
  },
  "colors.jade.light.a4": {
    "value": "#00a85129",
    "variable": "var(--colors-jade-light-a4)"
  },
  "colors.jade.light.a5": {
    "value": "#00a2553c",
    "variable": "var(--colors-jade-light-a5)"
  },
  "colors.jade.light.a6": {
    "value": "#009a5753",
    "variable": "var(--colors-jade-light-a6)"
  },
  "colors.jade.light.a7": {
    "value": "#00945f74",
    "variable": "var(--colors-jade-light-a7)"
  },
  "colors.jade.light.a8": {
    "value": "#00976ea9",
    "variable": "var(--colors-jade-light-a8)"
  },
  "colors.jade.light.a9": {
    "value": "#00916bd6",
    "variable": "var(--colors-jade-light-a9)"
  },
  "colors.jade.light.a10": {
    "value": "#008764d9",
    "variable": "var(--colors-jade-light-a10)"
  },
  "colors.jade.light.a11": {
    "value": "#007152df",
    "variable": "var(--colors-jade-light-a11)"
  },
  "colors.jade.light.a12": {
    "value": "#002217e2",
    "variable": "var(--colors-jade-light-a12)"
  },
  "colors.jade.dark.1": {
    "value": "#0d1512",
    "variable": "var(--colors-jade-dark-1)"
  },
  "colors.jade.dark.2": {
    "value": "#121c18",
    "variable": "var(--colors-jade-dark-2)"
  },
  "colors.jade.dark.3": {
    "value": "#0f2e22",
    "variable": "var(--colors-jade-dark-3)"
  },
  "colors.jade.dark.4": {
    "value": "#0b3b2c",
    "variable": "var(--colors-jade-dark-4)"
  },
  "colors.jade.dark.5": {
    "value": "#114837",
    "variable": "var(--colors-jade-dark-5)"
  },
  "colors.jade.dark.6": {
    "value": "#1b5745",
    "variable": "var(--colors-jade-dark-6)"
  },
  "colors.jade.dark.7": {
    "value": "#246854",
    "variable": "var(--colors-jade-dark-7)"
  },
  "colors.jade.dark.8": {
    "value": "#2a7e68",
    "variable": "var(--colors-jade-dark-8)"
  },
  "colors.jade.dark.9": {
    "value": "#29a383",
    "variable": "var(--colors-jade-dark-9)"
  },
  "colors.jade.dark.10": {
    "value": "#27b08b",
    "variable": "var(--colors-jade-dark-10)"
  },
  "colors.jade.dark.11": {
    "value": "#1fd8a4",
    "variable": "var(--colors-jade-dark-11)"
  },
  "colors.jade.dark.12": {
    "value": "#adf0d4",
    "variable": "var(--colors-jade-dark-12)"
  },
  "colors.jade.dark.a1": {
    "value": "#00de4505",
    "variable": "var(--colors-jade-dark-a1)"
  },
  "colors.jade.dark.a2": {
    "value": "#27fba60c",
    "variable": "var(--colors-jade-dark-a2)"
  },
  "colors.jade.dark.a3": {
    "value": "#02f99920",
    "variable": "var(--colors-jade-dark-a3)"
  },
  "colors.jade.dark.a4": {
    "value": "#00ffaa2d",
    "variable": "var(--colors-jade-dark-a4)"
  },
  "colors.jade.dark.a5": {
    "value": "#11ffb63b",
    "variable": "var(--colors-jade-dark-a5)"
  },
  "colors.jade.dark.a6": {
    "value": "#34ffc24b",
    "variable": "var(--colors-jade-dark-a6)"
  },
  "colors.jade.dark.a7": {
    "value": "#45fdc75e",
    "variable": "var(--colors-jade-dark-a7)"
  },
  "colors.jade.dark.a8": {
    "value": "#48ffcf75",
    "variable": "var(--colors-jade-dark-a8)"
  },
  "colors.jade.dark.a9": {
    "value": "#38feca9d",
    "variable": "var(--colors-jade-dark-a9)"
  },
  "colors.jade.dark.a10": {
    "value": "#31fec7ab",
    "variable": "var(--colors-jade-dark-a10)"
  },
  "colors.jade.dark.a11": {
    "value": "#21fec0d6",
    "variable": "var(--colors-jade-dark-a11)"
  },
  "colors.jade.dark.a12": {
    "value": "#b8ffe1ef",
    "variable": "var(--colors-jade-dark-a12)"
  },
  "colors.lime.light.1": {
    "value": "#fcfdfa",
    "variable": "var(--colors-lime-light-1)"
  },
  "colors.lime.light.2": {
    "value": "#f8faf3",
    "variable": "var(--colors-lime-light-2)"
  },
  "colors.lime.light.3": {
    "value": "#eef6d6",
    "variable": "var(--colors-lime-light-3)"
  },
  "colors.lime.light.4": {
    "value": "#e2f0bd",
    "variable": "var(--colors-lime-light-4)"
  },
  "colors.lime.light.5": {
    "value": "#d3e7a6",
    "variable": "var(--colors-lime-light-5)"
  },
  "colors.lime.light.6": {
    "value": "#c2da91",
    "variable": "var(--colors-lime-light-6)"
  },
  "colors.lime.light.7": {
    "value": "#abc978",
    "variable": "var(--colors-lime-light-7)"
  },
  "colors.lime.light.8": {
    "value": "#8db654",
    "variable": "var(--colors-lime-light-8)"
  },
  "colors.lime.light.9": {
    "value": "#bdee63",
    "variable": "var(--colors-lime-light-9)"
  },
  "colors.lime.light.10": {
    "value": "#b0e64c",
    "variable": "var(--colors-lime-light-10)"
  },
  "colors.lime.light.11": {
    "value": "#5c7c2f",
    "variable": "var(--colors-lime-light-11)"
  },
  "colors.lime.light.12": {
    "value": "#37401c",
    "variable": "var(--colors-lime-light-12)"
  },
  "colors.lime.light.a1": {
    "value": "#66990005",
    "variable": "var(--colors-lime-light-a1)"
  },
  "colors.lime.light.a2": {
    "value": "#6b95000c",
    "variable": "var(--colors-lime-light-a2)"
  },
  "colors.lime.light.a3": {
    "value": "#96c80029",
    "variable": "var(--colors-lime-light-a3)"
  },
  "colors.lime.light.a4": {
    "value": "#8fc60042",
    "variable": "var(--colors-lime-light-a4)"
  },
  "colors.lime.light.a5": {
    "value": "#81bb0059",
    "variable": "var(--colors-lime-light-a5)"
  },
  "colors.lime.light.a6": {
    "value": "#72aa006e",
    "variable": "var(--colors-lime-light-a6)"
  },
  "colors.lime.light.a7": {
    "value": "#61990087",
    "variable": "var(--colors-lime-light-a7)"
  },
  "colors.lime.light.a8": {
    "value": "#559200ab",
    "variable": "var(--colors-lime-light-a8)"
  },
  "colors.lime.light.a9": {
    "value": "#93e4009c",
    "variable": "var(--colors-lime-light-a9)"
  },
  "colors.lime.light.a10": {
    "value": "#8fdc00b3",
    "variable": "var(--colors-lime-light-a10)"
  },
  "colors.lime.light.a11": {
    "value": "#375f00d0",
    "variable": "var(--colors-lime-light-a11)"
  },
  "colors.lime.light.a12": {
    "value": "#1e2900e3",
    "variable": "var(--colors-lime-light-a12)"
  },
  "colors.lime.dark.1": {
    "value": "#11130c",
    "variable": "var(--colors-lime-dark-1)"
  },
  "colors.lime.dark.2": {
    "value": "#151a10",
    "variable": "var(--colors-lime-dark-2)"
  },
  "colors.lime.dark.3": {
    "value": "#1f2917",
    "variable": "var(--colors-lime-dark-3)"
  },
  "colors.lime.dark.4": {
    "value": "#29371d",
    "variable": "var(--colors-lime-dark-4)"
  },
  "colors.lime.dark.5": {
    "value": "#334423",
    "variable": "var(--colors-lime-dark-5)"
  },
  "colors.lime.dark.6": {
    "value": "#3d522a",
    "variable": "var(--colors-lime-dark-6)"
  },
  "colors.lime.dark.7": {
    "value": "#496231",
    "variable": "var(--colors-lime-dark-7)"
  },
  "colors.lime.dark.8": {
    "value": "#577538",
    "variable": "var(--colors-lime-dark-8)"
  },
  "colors.lime.dark.9": {
    "value": "#bdee63",
    "variable": "var(--colors-lime-dark-9)"
  },
  "colors.lime.dark.10": {
    "value": "#d4ff70",
    "variable": "var(--colors-lime-dark-10)"
  },
  "colors.lime.dark.11": {
    "value": "#bde56c",
    "variable": "var(--colors-lime-dark-11)"
  },
  "colors.lime.dark.12": {
    "value": "#e3f7ba",
    "variable": "var(--colors-lime-dark-12)"
  },
  "colors.lime.dark.a1": {
    "value": "#11bb0003",
    "variable": "var(--colors-lime-dark-a1)"
  },
  "colors.lime.dark.a2": {
    "value": "#78f7000a",
    "variable": "var(--colors-lime-dark-a2)"
  },
  "colors.lime.dark.a3": {
    "value": "#9bfd4c1a",
    "variable": "var(--colors-lime-dark-a3)"
  },
  "colors.lime.dark.a4": {
    "value": "#a7fe5c29",
    "variable": "var(--colors-lime-dark-a4)"
  },
  "colors.lime.dark.a5": {
    "value": "#affe6537",
    "variable": "var(--colors-lime-dark-a5)"
  },
  "colors.lime.dark.a6": {
    "value": "#b2fe6d46",
    "variable": "var(--colors-lime-dark-a6)"
  },
  "colors.lime.dark.a7": {
    "value": "#b6ff6f57",
    "variable": "var(--colors-lime-dark-a7)"
  },
  "colors.lime.dark.a8": {
    "value": "#b6fd6d6c",
    "variable": "var(--colors-lime-dark-a8)"
  },
  "colors.lime.dark.a9": {
    "value": "#caff69ed",
    "variable": "var(--colors-lime-dark-a9)"
  },
  "colors.lime.dark.a10": {
    "value": "#d4ff70",
    "variable": "var(--colors-lime-dark-a10)"
  },
  "colors.lime.dark.a11": {
    "value": "#d1fe77e4",
    "variable": "var(--colors-lime-dark-a11)"
  },
  "colors.lime.dark.a12": {
    "value": "#e9febff7",
    "variable": "var(--colors-lime-dark-a12)"
  },
  "colors.mauve.light.1": {
    "value": "#fdfcfd",
    "variable": "var(--colors-mauve-light-1)"
  },
  "colors.mauve.light.2": {
    "value": "#faf9fb",
    "variable": "var(--colors-mauve-light-2)"
  },
  "colors.mauve.light.3": {
    "value": "#f2eff3",
    "variable": "var(--colors-mauve-light-3)"
  },
  "colors.mauve.light.4": {
    "value": "#eae7ec",
    "variable": "var(--colors-mauve-light-4)"
  },
  "colors.mauve.light.5": {
    "value": "#e3dfe6",
    "variable": "var(--colors-mauve-light-5)"
  },
  "colors.mauve.light.6": {
    "value": "#dbd8e0",
    "variable": "var(--colors-mauve-light-6)"
  },
  "colors.mauve.light.7": {
    "value": "#d0cdd7",
    "variable": "var(--colors-mauve-light-7)"
  },
  "colors.mauve.light.8": {
    "value": "#bcbac7",
    "variable": "var(--colors-mauve-light-8)"
  },
  "colors.mauve.light.9": {
    "value": "#8e8c99",
    "variable": "var(--colors-mauve-light-9)"
  },
  "colors.mauve.light.10": {
    "value": "#84828e",
    "variable": "var(--colors-mauve-light-10)"
  },
  "colors.mauve.light.11": {
    "value": "#65636d",
    "variable": "var(--colors-mauve-light-11)"
  },
  "colors.mauve.light.12": {
    "value": "#211f26",
    "variable": "var(--colors-mauve-light-12)"
  },
  "colors.mauve.light.a1": {
    "value": "#55005503",
    "variable": "var(--colors-mauve-light-a1)"
  },
  "colors.mauve.light.a2": {
    "value": "#2b005506",
    "variable": "var(--colors-mauve-light-a2)"
  },
  "colors.mauve.light.a3": {
    "value": "#30004010",
    "variable": "var(--colors-mauve-light-a3)"
  },
  "colors.mauve.light.a4": {
    "value": "#20003618",
    "variable": "var(--colors-mauve-light-a4)"
  },
  "colors.mauve.light.a5": {
    "value": "#20003820",
    "variable": "var(--colors-mauve-light-a5)"
  },
  "colors.mauve.light.a6": {
    "value": "#14003527",
    "variable": "var(--colors-mauve-light-a6)"
  },
  "colors.mauve.light.a7": {
    "value": "#10003332",
    "variable": "var(--colors-mauve-light-a7)"
  },
  "colors.mauve.light.a8": {
    "value": "#08003145",
    "variable": "var(--colors-mauve-light-a8)"
  },
  "colors.mauve.light.a9": {
    "value": "#05001d73",
    "variable": "var(--colors-mauve-light-a9)"
  },
  "colors.mauve.light.a10": {
    "value": "#0500197d",
    "variable": "var(--colors-mauve-light-a10)"
  },
  "colors.mauve.light.a11": {
    "value": "#0400119c",
    "variable": "var(--colors-mauve-light-a11)"
  },
  "colors.mauve.light.a12": {
    "value": "#020008e0",
    "variable": "var(--colors-mauve-light-a12)"
  },
  "colors.mauve.dark.1": {
    "value": "#121113",
    "variable": "var(--colors-mauve-dark-1)"
  },
  "colors.mauve.dark.2": {
    "value": "#1a191b",
    "variable": "var(--colors-mauve-dark-2)"
  },
  "colors.mauve.dark.3": {
    "value": "#232225",
    "variable": "var(--colors-mauve-dark-3)"
  },
  "colors.mauve.dark.4": {
    "value": "#2b292d",
    "variable": "var(--colors-mauve-dark-4)"
  },
  "colors.mauve.dark.5": {
    "value": "#323035",
    "variable": "var(--colors-mauve-dark-5)"
  },
  "colors.mauve.dark.6": {
    "value": "#3c393f",
    "variable": "var(--colors-mauve-dark-6)"
  },
  "colors.mauve.dark.7": {
    "value": "#49474e",
    "variable": "var(--colors-mauve-dark-7)"
  },
  "colors.mauve.dark.8": {
    "value": "#625f69",
    "variable": "var(--colors-mauve-dark-8)"
  },
  "colors.mauve.dark.9": {
    "value": "#6f6d78",
    "variable": "var(--colors-mauve-dark-9)"
  },
  "colors.mauve.dark.10": {
    "value": "#7c7a85",
    "variable": "var(--colors-mauve-dark-10)"
  },
  "colors.mauve.dark.11": {
    "value": "#b5b2bc",
    "variable": "var(--colors-mauve-dark-11)"
  },
  "colors.mauve.dark.12": {
    "value": "#eeeef0",
    "variable": "var(--colors-mauve-dark-12)"
  },
  "colors.mauve.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-mauve-dark-a1)"
  },
  "colors.mauve.dark.a2": {
    "value": "#f5f4f609",
    "variable": "var(--colors-mauve-dark-a2)"
  },
  "colors.mauve.dark.a3": {
    "value": "#ebeaf814",
    "variable": "var(--colors-mauve-dark-a3)"
  },
  "colors.mauve.dark.a4": {
    "value": "#eee5f81d",
    "variable": "var(--colors-mauve-dark-a4)"
  },
  "colors.mauve.dark.a5": {
    "value": "#efe6fe25",
    "variable": "var(--colors-mauve-dark-a5)"
  },
  "colors.mauve.dark.a6": {
    "value": "#f1e6fd30",
    "variable": "var(--colors-mauve-dark-a6)"
  },
  "colors.mauve.dark.a7": {
    "value": "#eee9ff40",
    "variable": "var(--colors-mauve-dark-a7)"
  },
  "colors.mauve.dark.a8": {
    "value": "#eee7ff5d",
    "variable": "var(--colors-mauve-dark-a8)"
  },
  "colors.mauve.dark.a9": {
    "value": "#eae6fd6e",
    "variable": "var(--colors-mauve-dark-a9)"
  },
  "colors.mauve.dark.a10": {
    "value": "#ece9fd7c",
    "variable": "var(--colors-mauve-dark-a10)"
  },
  "colors.mauve.dark.a11": {
    "value": "#f5f1ffb7",
    "variable": "var(--colors-mauve-dark-a11)"
  },
  "colors.mauve.dark.a12": {
    "value": "#fdfdffef",
    "variable": "var(--colors-mauve-dark-a12)"
  },
  "colors.mint.light.1": {
    "value": "#f9fefd",
    "variable": "var(--colors-mint-light-1)"
  },
  "colors.mint.light.2": {
    "value": "#f2fbf9",
    "variable": "var(--colors-mint-light-2)"
  },
  "colors.mint.light.3": {
    "value": "#ddf9f2",
    "variable": "var(--colors-mint-light-3)"
  },
  "colors.mint.light.4": {
    "value": "#c8f4e9",
    "variable": "var(--colors-mint-light-4)"
  },
  "colors.mint.light.5": {
    "value": "#b3ecde",
    "variable": "var(--colors-mint-light-5)"
  },
  "colors.mint.light.6": {
    "value": "#9ce0d0",
    "variable": "var(--colors-mint-light-6)"
  },
  "colors.mint.light.7": {
    "value": "#7ecfbd",
    "variable": "var(--colors-mint-light-7)"
  },
  "colors.mint.light.8": {
    "value": "#4cbba5",
    "variable": "var(--colors-mint-light-8)"
  },
  "colors.mint.light.9": {
    "value": "#86ead4",
    "variable": "var(--colors-mint-light-9)"
  },
  "colors.mint.light.10": {
    "value": "#7de0cb",
    "variable": "var(--colors-mint-light-10)"
  },
  "colors.mint.light.11": {
    "value": "#027864",
    "variable": "var(--colors-mint-light-11)"
  },
  "colors.mint.light.12": {
    "value": "#16433c",
    "variable": "var(--colors-mint-light-12)"
  },
  "colors.mint.light.a1": {
    "value": "#00d5aa06",
    "variable": "var(--colors-mint-light-a1)"
  },
  "colors.mint.light.a2": {
    "value": "#00b18a0d",
    "variable": "var(--colors-mint-light-a2)"
  },
  "colors.mint.light.a3": {
    "value": "#00d29e22",
    "variable": "var(--colors-mint-light-a3)"
  },
  "colors.mint.light.a4": {
    "value": "#00cc9937",
    "variable": "var(--colors-mint-light-a4)"
  },
  "colors.mint.light.a5": {
    "value": "#00c0914c",
    "variable": "var(--colors-mint-light-a5)"
  },
  "colors.mint.light.a6": {
    "value": "#00b08663",
    "variable": "var(--colors-mint-light-a6)"
  },
  "colors.mint.light.a7": {
    "value": "#00a17d81",
    "variable": "var(--colors-mint-light-a7)"
  },
  "colors.mint.light.a8": {
    "value": "#009e7fb3",
    "variable": "var(--colors-mint-light-a8)"
  },
  "colors.mint.light.a9": {
    "value": "#00d3a579",
    "variable": "var(--colors-mint-light-a9)"
  },
  "colors.mint.light.a10": {
    "value": "#00c39982",
    "variable": "var(--colors-mint-light-a10)"
  },
  "colors.mint.light.a11": {
    "value": "#007763fd",
    "variable": "var(--colors-mint-light-a11)"
  },
  "colors.mint.light.a12": {
    "value": "#00312ae9",
    "variable": "var(--colors-mint-light-a12)"
  },
  "colors.mint.dark.1": {
    "value": "#0e1515",
    "variable": "var(--colors-mint-dark-1)"
  },
  "colors.mint.dark.2": {
    "value": "#0f1b1b",
    "variable": "var(--colors-mint-dark-2)"
  },
  "colors.mint.dark.3": {
    "value": "#092c2b",
    "variable": "var(--colors-mint-dark-3)"
  },
  "colors.mint.dark.4": {
    "value": "#003a38",
    "variable": "var(--colors-mint-dark-4)"
  },
  "colors.mint.dark.5": {
    "value": "#004744",
    "variable": "var(--colors-mint-dark-5)"
  },
  "colors.mint.dark.6": {
    "value": "#105650",
    "variable": "var(--colors-mint-dark-6)"
  },
  "colors.mint.dark.7": {
    "value": "#1e685f",
    "variable": "var(--colors-mint-dark-7)"
  },
  "colors.mint.dark.8": {
    "value": "#277f70",
    "variable": "var(--colors-mint-dark-8)"
  },
  "colors.mint.dark.9": {
    "value": "#86ead4",
    "variable": "var(--colors-mint-dark-9)"
  },
  "colors.mint.dark.10": {
    "value": "#a8f5e5",
    "variable": "var(--colors-mint-dark-10)"
  },
  "colors.mint.dark.11": {
    "value": "#58d5ba",
    "variable": "var(--colors-mint-dark-11)"
  },
  "colors.mint.dark.12": {
    "value": "#c4f5e1",
    "variable": "var(--colors-mint-dark-12)"
  },
  "colors.mint.dark.a1": {
    "value": "#00dede05",
    "variable": "var(--colors-mint-dark-a1)"
  },
  "colors.mint.dark.a2": {
    "value": "#00f9f90b",
    "variable": "var(--colors-mint-dark-a2)"
  },
  "colors.mint.dark.a3": {
    "value": "#00fff61d",
    "variable": "var(--colors-mint-dark-a3)"
  },
  "colors.mint.dark.a4": {
    "value": "#00fff42c",
    "variable": "var(--colors-mint-dark-a4)"
  },
  "colors.mint.dark.a5": {
    "value": "#00fff23a",
    "variable": "var(--colors-mint-dark-a5)"
  },
  "colors.mint.dark.a6": {
    "value": "#0effeb4a",
    "variable": "var(--colors-mint-dark-a6)"
  },
  "colors.mint.dark.a7": {
    "value": "#34fde55e",
    "variable": "var(--colors-mint-dark-a7)"
  },
  "colors.mint.dark.a8": {
    "value": "#41ffdf76",
    "variable": "var(--colors-mint-dark-a8)"
  },
  "colors.mint.dark.a9": {
    "value": "#92ffe7e9",
    "variable": "var(--colors-mint-dark-a9)"
  },
  "colors.mint.dark.a10": {
    "value": "#aefeedf5",
    "variable": "var(--colors-mint-dark-a10)"
  },
  "colors.mint.dark.a11": {
    "value": "#67ffded2",
    "variable": "var(--colors-mint-dark-a11)"
  },
  "colors.mint.dark.a12": {
    "value": "#cbfee9f5",
    "variable": "var(--colors-mint-dark-a12)"
  },
  "colors.olive.light.1": {
    "value": "#fcfdfc",
    "variable": "var(--colors-olive-light-1)"
  },
  "colors.olive.light.2": {
    "value": "#f8faf8",
    "variable": "var(--colors-olive-light-2)"
  },
  "colors.olive.light.3": {
    "value": "#eff1ef",
    "variable": "var(--colors-olive-light-3)"
  },
  "colors.olive.light.4": {
    "value": "#e7e9e7",
    "variable": "var(--colors-olive-light-4)"
  },
  "colors.olive.light.5": {
    "value": "#dfe2df",
    "variable": "var(--colors-olive-light-5)"
  },
  "colors.olive.light.6": {
    "value": "#d7dad7",
    "variable": "var(--colors-olive-light-6)"
  },
  "colors.olive.light.7": {
    "value": "#cccfcc",
    "variable": "var(--colors-olive-light-7)"
  },
  "colors.olive.light.8": {
    "value": "#b9bcb8",
    "variable": "var(--colors-olive-light-8)"
  },
  "colors.olive.light.9": {
    "value": "#898e87",
    "variable": "var(--colors-olive-light-9)"
  },
  "colors.olive.light.10": {
    "value": "#7f847d",
    "variable": "var(--colors-olive-light-10)"
  },
  "colors.olive.light.11": {
    "value": "#60655f",
    "variable": "var(--colors-olive-light-11)"
  },
  "colors.olive.light.12": {
    "value": "#1d211c",
    "variable": "var(--colors-olive-light-12)"
  },
  "colors.olive.light.a1": {
    "value": "#00550003",
    "variable": "var(--colors-olive-light-a1)"
  },
  "colors.olive.light.a2": {
    "value": "#00490007",
    "variable": "var(--colors-olive-light-a2)"
  },
  "colors.olive.light.a3": {
    "value": "#00200010",
    "variable": "var(--colors-olive-light-a3)"
  },
  "colors.olive.light.a4": {
    "value": "#00160018",
    "variable": "var(--colors-olive-light-a4)"
  },
  "colors.olive.light.a5": {
    "value": "#00180020",
    "variable": "var(--colors-olive-light-a5)"
  },
  "colors.olive.light.a6": {
    "value": "#00140028",
    "variable": "var(--colors-olive-light-a6)"
  },
  "colors.olive.light.a7": {
    "value": "#000f0033",
    "variable": "var(--colors-olive-light-a7)"
  },
  "colors.olive.light.a8": {
    "value": "#040f0047",
    "variable": "var(--colors-olive-light-a8)"
  },
  "colors.olive.light.a9": {
    "value": "#050f0078",
    "variable": "var(--colors-olive-light-a9)"
  },
  "colors.olive.light.a10": {
    "value": "#040e0082",
    "variable": "var(--colors-olive-light-a10)"
  },
  "colors.olive.light.a11": {
    "value": "#020a00a0",
    "variable": "var(--colors-olive-light-a11)"
  },
  "colors.olive.light.a12": {
    "value": "#010600e3",
    "variable": "var(--colors-olive-light-a12)"
  },
  "colors.olive.dark.1": {
    "value": "#111210",
    "variable": "var(--colors-olive-dark-1)"
  },
  "colors.olive.dark.2": {
    "value": "#181917",
    "variable": "var(--colors-olive-dark-2)"
  },
  "colors.olive.dark.3": {
    "value": "#212220",
    "variable": "var(--colors-olive-dark-3)"
  },
  "colors.olive.dark.4": {
    "value": "#282a27",
    "variable": "var(--colors-olive-dark-4)"
  },
  "colors.olive.dark.5": {
    "value": "#2f312e",
    "variable": "var(--colors-olive-dark-5)"
  },
  "colors.olive.dark.6": {
    "value": "#383a36",
    "variable": "var(--colors-olive-dark-6)"
  },
  "colors.olive.dark.7": {
    "value": "#454843",
    "variable": "var(--colors-olive-dark-7)"
  },
  "colors.olive.dark.8": {
    "value": "#5c625b",
    "variable": "var(--colors-olive-dark-8)"
  },
  "colors.olive.dark.9": {
    "value": "#687066",
    "variable": "var(--colors-olive-dark-9)"
  },
  "colors.olive.dark.10": {
    "value": "#767d74",
    "variable": "var(--colors-olive-dark-10)"
  },
  "colors.olive.dark.11": {
    "value": "#afb5ad",
    "variable": "var(--colors-olive-dark-11)"
  },
  "colors.olive.dark.12": {
    "value": "#eceeec",
    "variable": "var(--colors-olive-dark-12)"
  },
  "colors.olive.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-olive-dark-a1)"
  },
  "colors.olive.dark.a2": {
    "value": "#f1f2f008",
    "variable": "var(--colors-olive-dark-a2)"
  },
  "colors.olive.dark.a3": {
    "value": "#f4f5f312",
    "variable": "var(--colors-olive-dark-a3)"
  },
  "colors.olive.dark.a4": {
    "value": "#f3fef21a",
    "variable": "var(--colors-olive-dark-a4)"
  },
  "colors.olive.dark.a5": {
    "value": "#f2fbf122",
    "variable": "var(--colors-olive-dark-a5)"
  },
  "colors.olive.dark.a6": {
    "value": "#f4faed2c",
    "variable": "var(--colors-olive-dark-a6)"
  },
  "colors.olive.dark.a7": {
    "value": "#f2fced3b",
    "variable": "var(--colors-olive-dark-a7)"
  },
  "colors.olive.dark.a8": {
    "value": "#edfdeb57",
    "variable": "var(--colors-olive-dark-a8)"
  },
  "colors.olive.dark.a9": {
    "value": "#ebfde766",
    "variable": "var(--colors-olive-dark-a9)"
  },
  "colors.olive.dark.a10": {
    "value": "#f0fdec74",
    "variable": "var(--colors-olive-dark-a10)"
  },
  "colors.olive.dark.a11": {
    "value": "#f6fef4b0",
    "variable": "var(--colors-olive-dark-a11)"
  },
  "colors.olive.dark.a12": {
    "value": "#fdfffded",
    "variable": "var(--colors-olive-dark-a12)"
  },
  "colors.orange.light.1": {
    "value": "#fefcfb",
    "variable": "var(--colors-orange-light-1)"
  },
  "colors.orange.light.2": {
    "value": "#fff7ed",
    "variable": "var(--colors-orange-light-2)"
  },
  "colors.orange.light.3": {
    "value": "#ffefd6",
    "variable": "var(--colors-orange-light-3)"
  },
  "colors.orange.light.4": {
    "value": "#ffdfb5",
    "variable": "var(--colors-orange-light-4)"
  },
  "colors.orange.light.5": {
    "value": "#ffd19a",
    "variable": "var(--colors-orange-light-5)"
  },
  "colors.orange.light.6": {
    "value": "#ffc182",
    "variable": "var(--colors-orange-light-6)"
  },
  "colors.orange.light.7": {
    "value": "#f5ae73",
    "variable": "var(--colors-orange-light-7)"
  },
  "colors.orange.light.8": {
    "value": "#ec9455",
    "variable": "var(--colors-orange-light-8)"
  },
  "colors.orange.light.9": {
    "value": "#f76b15",
    "variable": "var(--colors-orange-light-9)"
  },
  "colors.orange.light.10": {
    "value": "#ef5f00",
    "variable": "var(--colors-orange-light-10)"
  },
  "colors.orange.light.11": {
    "value": "#cc4e00",
    "variable": "var(--colors-orange-light-11)"
  },
  "colors.orange.light.12": {
    "value": "#582d1d",
    "variable": "var(--colors-orange-light-12)"
  },
  "colors.orange.light.a1": {
    "value": "#c0400004",
    "variable": "var(--colors-orange-light-a1)"
  },
  "colors.orange.light.a2": {
    "value": "#ff8e0012",
    "variable": "var(--colors-orange-light-a2)"
  },
  "colors.orange.light.a3": {
    "value": "#ff9c0029",
    "variable": "var(--colors-orange-light-a3)"
  },
  "colors.orange.light.a4": {
    "value": "#ff91014a",
    "variable": "var(--colors-orange-light-a4)"
  },
  "colors.orange.light.a5": {
    "value": "#ff8b0065",
    "variable": "var(--colors-orange-light-a5)"
  },
  "colors.orange.light.a6": {
    "value": "#ff81007d",
    "variable": "var(--colors-orange-light-a6)"
  },
  "colors.orange.light.a7": {
    "value": "#ed6c008c",
    "variable": "var(--colors-orange-light-a7)"
  },
  "colors.orange.light.a8": {
    "value": "#e35f00aa",
    "variable": "var(--colors-orange-light-a8)"
  },
  "colors.orange.light.a9": {
    "value": "#f65e00ea",
    "variable": "var(--colors-orange-light-a9)"
  },
  "colors.orange.light.a10": {
    "value": "#ef5f00",
    "variable": "var(--colors-orange-light-a10)"
  },
  "colors.orange.light.a11": {
    "value": "#cc4e00",
    "variable": "var(--colors-orange-light-a11)"
  },
  "colors.orange.light.a12": {
    "value": "#431200e2",
    "variable": "var(--colors-orange-light-a12)"
  },
  "colors.orange.dark.1": {
    "value": "#17120e",
    "variable": "var(--colors-orange-dark-1)"
  },
  "colors.orange.dark.2": {
    "value": "#1e160f",
    "variable": "var(--colors-orange-dark-2)"
  },
  "colors.orange.dark.3": {
    "value": "#331e0b",
    "variable": "var(--colors-orange-dark-3)"
  },
  "colors.orange.dark.4": {
    "value": "#462100",
    "variable": "var(--colors-orange-dark-4)"
  },
  "colors.orange.dark.5": {
    "value": "#562800",
    "variable": "var(--colors-orange-dark-5)"
  },
  "colors.orange.dark.6": {
    "value": "#66350c",
    "variable": "var(--colors-orange-dark-6)"
  },
  "colors.orange.dark.7": {
    "value": "#7e451d",
    "variable": "var(--colors-orange-dark-7)"
  },
  "colors.orange.dark.8": {
    "value": "#a35829",
    "variable": "var(--colors-orange-dark-8)"
  },
  "colors.orange.dark.9": {
    "value": "#f76b15",
    "variable": "var(--colors-orange-dark-9)"
  },
  "colors.orange.dark.10": {
    "value": "#ff801f",
    "variable": "var(--colors-orange-dark-10)"
  },
  "colors.orange.dark.11": {
    "value": "#ffa057",
    "variable": "var(--colors-orange-dark-11)"
  },
  "colors.orange.dark.12": {
    "value": "#ffe0c2",
    "variable": "var(--colors-orange-dark-12)"
  },
  "colors.orange.dark.a1": {
    "value": "#ec360007",
    "variable": "var(--colors-orange-dark-a1)"
  },
  "colors.orange.dark.a2": {
    "value": "#fe6d000e",
    "variable": "var(--colors-orange-dark-a2)"
  },
  "colors.orange.dark.a3": {
    "value": "#fb6a0025",
    "variable": "var(--colors-orange-dark-a3)"
  },
  "colors.orange.dark.a4": {
    "value": "#ff590039",
    "variable": "var(--colors-orange-dark-a4)"
  },
  "colors.orange.dark.a5": {
    "value": "#ff61004a",
    "variable": "var(--colors-orange-dark-a5)"
  },
  "colors.orange.dark.a6": {
    "value": "#fd75045c",
    "variable": "var(--colors-orange-dark-a6)"
  },
  "colors.orange.dark.a7": {
    "value": "#ff832c75",
    "variable": "var(--colors-orange-dark-a7)"
  },
  "colors.orange.dark.a8": {
    "value": "#fe84389d",
    "variable": "var(--colors-orange-dark-a8)"
  },
  "colors.orange.dark.a9": {
    "value": "#fe6d15f7",
    "variable": "var(--colors-orange-dark-a9)"
  },
  "colors.orange.dark.a10": {
    "value": "#ff801f",
    "variable": "var(--colors-orange-dark-a10)"
  },
  "colors.orange.dark.a11": {
    "value": "#ffa057",
    "variable": "var(--colors-orange-dark-a11)"
  },
  "colors.orange.dark.a12": {
    "value": "#ffe0c2",
    "variable": "var(--colors-orange-dark-a12)"
  },
  "colors.pink.light.1": {
    "value": "#fffcfe",
    "variable": "var(--colors-pink-light-1)"
  },
  "colors.pink.light.2": {
    "value": "#fef7fb",
    "variable": "var(--colors-pink-light-2)"
  },
  "colors.pink.light.3": {
    "value": "#fee9f5",
    "variable": "var(--colors-pink-light-3)"
  },
  "colors.pink.light.4": {
    "value": "#fbdcef",
    "variable": "var(--colors-pink-light-4)"
  },
  "colors.pink.light.5": {
    "value": "#f6cee7",
    "variable": "var(--colors-pink-light-5)"
  },
  "colors.pink.light.6": {
    "value": "#efbfdd",
    "variable": "var(--colors-pink-light-6)"
  },
  "colors.pink.light.7": {
    "value": "#e7acd0",
    "variable": "var(--colors-pink-light-7)"
  },
  "colors.pink.light.8": {
    "value": "#dd93c2",
    "variable": "var(--colors-pink-light-8)"
  },
  "colors.pink.light.9": {
    "value": "#d6409f",
    "variable": "var(--colors-pink-light-9)"
  },
  "colors.pink.light.10": {
    "value": "#cf3897",
    "variable": "var(--colors-pink-light-10)"
  },
  "colors.pink.light.11": {
    "value": "#c2298a",
    "variable": "var(--colors-pink-light-11)"
  },
  "colors.pink.light.12": {
    "value": "#651249",
    "variable": "var(--colors-pink-light-12)"
  },
  "colors.pink.light.a1": {
    "value": "#ff00aa03",
    "variable": "var(--colors-pink-light-a1)"
  },
  "colors.pink.light.a2": {
    "value": "#e0008008",
    "variable": "var(--colors-pink-light-a2)"
  },
  "colors.pink.light.a3": {
    "value": "#f4008c16",
    "variable": "var(--colors-pink-light-a3)"
  },
  "colors.pink.light.a4": {
    "value": "#e2008b23",
    "variable": "var(--colors-pink-light-a4)"
  },
  "colors.pink.light.a5": {
    "value": "#d1008331",
    "variable": "var(--colors-pink-light-a5)"
  },
  "colors.pink.light.a6": {
    "value": "#c0007840",
    "variable": "var(--colors-pink-light-a6)"
  },
  "colors.pink.light.a7": {
    "value": "#b6006f53",
    "variable": "var(--colors-pink-light-a7)"
  },
  "colors.pink.light.a8": {
    "value": "#af006f6c",
    "variable": "var(--colors-pink-light-a8)"
  },
  "colors.pink.light.a9": {
    "value": "#c8007fbf",
    "variable": "var(--colors-pink-light-a9)"
  },
  "colors.pink.light.a10": {
    "value": "#c2007ac7",
    "variable": "var(--colors-pink-light-a10)"
  },
  "colors.pink.light.a11": {
    "value": "#b60074d6",
    "variable": "var(--colors-pink-light-a11)"
  },
  "colors.pink.light.a12": {
    "value": "#59003bed",
    "variable": "var(--colors-pink-light-a12)"
  },
  "colors.pink.dark.1": {
    "value": "#191117",
    "variable": "var(--colors-pink-dark-1)"
  },
  "colors.pink.dark.2": {
    "value": "#21121d",
    "variable": "var(--colors-pink-dark-2)"
  },
  "colors.pink.dark.3": {
    "value": "#37172f",
    "variable": "var(--colors-pink-dark-3)"
  },
  "colors.pink.dark.4": {
    "value": "#4b143d",
    "variable": "var(--colors-pink-dark-4)"
  },
  "colors.pink.dark.5": {
    "value": "#591c47",
    "variable": "var(--colors-pink-dark-5)"
  },
  "colors.pink.dark.6": {
    "value": "#692955",
    "variable": "var(--colors-pink-dark-6)"
  },
  "colors.pink.dark.7": {
    "value": "#833869",
    "variable": "var(--colors-pink-dark-7)"
  },
  "colors.pink.dark.8": {
    "value": "#a84885",
    "variable": "var(--colors-pink-dark-8)"
  },
  "colors.pink.dark.9": {
    "value": "#d6409f",
    "variable": "var(--colors-pink-dark-9)"
  },
  "colors.pink.dark.10": {
    "value": "#de51a8",
    "variable": "var(--colors-pink-dark-10)"
  },
  "colors.pink.dark.11": {
    "value": "#ff8dcc",
    "variable": "var(--colors-pink-dark-11)"
  },
  "colors.pink.dark.12": {
    "value": "#fdd1ea",
    "variable": "var(--colors-pink-dark-12)"
  },
  "colors.pink.dark.a1": {
    "value": "#f412bc09",
    "variable": "var(--colors-pink-dark-a1)"
  },
  "colors.pink.dark.a2": {
    "value": "#f420bb12",
    "variable": "var(--colors-pink-dark-a2)"
  },
  "colors.pink.dark.a3": {
    "value": "#fe37cc29",
    "variable": "var(--colors-pink-dark-a3)"
  },
  "colors.pink.dark.a4": {
    "value": "#fc1ec43f",
    "variable": "var(--colors-pink-dark-a4)"
  },
  "colors.pink.dark.a5": {
    "value": "#fd35c24e",
    "variable": "var(--colors-pink-dark-a5)"
  },
  "colors.pink.dark.a6": {
    "value": "#fd51c75f",
    "variable": "var(--colors-pink-dark-a6)"
  },
  "colors.pink.dark.a7": {
    "value": "#fd62c87b",
    "variable": "var(--colors-pink-dark-a7)"
  },
  "colors.pink.dark.a8": {
    "value": "#ff68c8a2",
    "variable": "var(--colors-pink-dark-a8)"
  },
  "colors.pink.dark.a9": {
    "value": "#fe49bcd4",
    "variable": "var(--colors-pink-dark-a9)"
  },
  "colors.pink.dark.a10": {
    "value": "#ff5cc0dc",
    "variable": "var(--colors-pink-dark-a10)"
  },
  "colors.pink.dark.a11": {
    "value": "#ff8dcc",
    "variable": "var(--colors-pink-dark-a11)"
  },
  "colors.pink.dark.a12": {
    "value": "#ffd3ecfd",
    "variable": "var(--colors-pink-dark-a12)"
  },
  "colors.plum.light.1": {
    "value": "#fefcff",
    "variable": "var(--colors-plum-light-1)"
  },
  "colors.plum.light.2": {
    "value": "#fdf7fd",
    "variable": "var(--colors-plum-light-2)"
  },
  "colors.plum.light.3": {
    "value": "#fbebfb",
    "variable": "var(--colors-plum-light-3)"
  },
  "colors.plum.light.4": {
    "value": "#f7def8",
    "variable": "var(--colors-plum-light-4)"
  },
  "colors.plum.light.5": {
    "value": "#f2d1f3",
    "variable": "var(--colors-plum-light-5)"
  },
  "colors.plum.light.6": {
    "value": "#e9c2ec",
    "variable": "var(--colors-plum-light-6)"
  },
  "colors.plum.light.7": {
    "value": "#deade3",
    "variable": "var(--colors-plum-light-7)"
  },
  "colors.plum.light.8": {
    "value": "#cf91d8",
    "variable": "var(--colors-plum-light-8)"
  },
  "colors.plum.light.9": {
    "value": "#ab4aba",
    "variable": "var(--colors-plum-light-9)"
  },
  "colors.plum.light.10": {
    "value": "#a144af",
    "variable": "var(--colors-plum-light-10)"
  },
  "colors.plum.light.11": {
    "value": "#953ea3",
    "variable": "var(--colors-plum-light-11)"
  },
  "colors.plum.light.12": {
    "value": "#53195d",
    "variable": "var(--colors-plum-light-12)"
  },
  "colors.plum.light.a1": {
    "value": "#aa00ff03",
    "variable": "var(--colors-plum-light-a1)"
  },
  "colors.plum.light.a2": {
    "value": "#c000c008",
    "variable": "var(--colors-plum-light-a2)"
  },
  "colors.plum.light.a3": {
    "value": "#cc00cc14",
    "variable": "var(--colors-plum-light-a3)"
  },
  "colors.plum.light.a4": {
    "value": "#c200c921",
    "variable": "var(--colors-plum-light-a4)"
  },
  "colors.plum.light.a5": {
    "value": "#b700bd2e",
    "variable": "var(--colors-plum-light-a5)"
  },
  "colors.plum.light.a6": {
    "value": "#a400b03d",
    "variable": "var(--colors-plum-light-a6)"
  },
  "colors.plum.light.a7": {
    "value": "#9900a852",
    "variable": "var(--colors-plum-light-a7)"
  },
  "colors.plum.light.a8": {
    "value": "#9000a56e",
    "variable": "var(--colors-plum-light-a8)"
  },
  "colors.plum.light.a9": {
    "value": "#89009eb5",
    "variable": "var(--colors-plum-light-a9)"
  },
  "colors.plum.light.a10": {
    "value": "#7f0092bb",
    "variable": "var(--colors-plum-light-a10)"
  },
  "colors.plum.light.a11": {
    "value": "#730086c1",
    "variable": "var(--colors-plum-light-a11)"
  },
  "colors.plum.light.a12": {
    "value": "#40004be6",
    "variable": "var(--colors-plum-light-a12)"
  },
  "colors.plum.dark.1": {
    "value": "#181118",
    "variable": "var(--colors-plum-dark-1)"
  },
  "colors.plum.dark.2": {
    "value": "#201320",
    "variable": "var(--colors-plum-dark-2)"
  },
  "colors.plum.dark.3": {
    "value": "#351a35",
    "variable": "var(--colors-plum-dark-3)"
  },
  "colors.plum.dark.4": {
    "value": "#451d47",
    "variable": "var(--colors-plum-dark-4)"
  },
  "colors.plum.dark.5": {
    "value": "#512454",
    "variable": "var(--colors-plum-dark-5)"
  },
  "colors.plum.dark.6": {
    "value": "#5e3061",
    "variable": "var(--colors-plum-dark-6)"
  },
  "colors.plum.dark.7": {
    "value": "#734079",
    "variable": "var(--colors-plum-dark-7)"
  },
  "colors.plum.dark.8": {
    "value": "#92549c",
    "variable": "var(--colors-plum-dark-8)"
  },
  "colors.plum.dark.9": {
    "value": "#ab4aba",
    "variable": "var(--colors-plum-dark-9)"
  },
  "colors.plum.dark.10": {
    "value": "#b658c4",
    "variable": "var(--colors-plum-dark-10)"
  },
  "colors.plum.dark.11": {
    "value": "#e796f3",
    "variable": "var(--colors-plum-dark-11)"
  },
  "colors.plum.dark.12": {
    "value": "#f4d4f4",
    "variable": "var(--colors-plum-dark-12)"
  },
  "colors.plum.dark.a1": {
    "value": "#f112f108",
    "variable": "var(--colors-plum-dark-a1)"
  },
  "colors.plum.dark.a2": {
    "value": "#f22ff211",
    "variable": "var(--colors-plum-dark-a2)"
  },
  "colors.plum.dark.a3": {
    "value": "#fd4cfd27",
    "variable": "var(--colors-plum-dark-a3)"
  },
  "colors.plum.dark.a4": {
    "value": "#f646ff3a",
    "variable": "var(--colors-plum-dark-a4)"
  },
  "colors.plum.dark.a5": {
    "value": "#f455ff48",
    "variable": "var(--colors-plum-dark-a5)"
  },
  "colors.plum.dark.a6": {
    "value": "#f66dff56",
    "variable": "var(--colors-plum-dark-a6)"
  },
  "colors.plum.dark.a7": {
    "value": "#f07cfd70",
    "variable": "var(--colors-plum-dark-a7)"
  },
  "colors.plum.dark.a8": {
    "value": "#ee84ff95",
    "variable": "var(--colors-plum-dark-a8)"
  },
  "colors.plum.dark.a9": {
    "value": "#e961feb6",
    "variable": "var(--colors-plum-dark-a9)"
  },
  "colors.plum.dark.a10": {
    "value": "#ed70ffc0",
    "variable": "var(--colors-plum-dark-a10)"
  },
  "colors.plum.dark.a11": {
    "value": "#f19cfef3",
    "variable": "var(--colors-plum-dark-a11)"
  },
  "colors.plum.dark.a12": {
    "value": "#feddfef4",
    "variable": "var(--colors-plum-dark-a12)"
  },
  "colors.purple.light.1": {
    "value": "#fefcfe",
    "variable": "var(--colors-purple-light-1)"
  },
  "colors.purple.light.2": {
    "value": "#fbf7fe",
    "variable": "var(--colors-purple-light-2)"
  },
  "colors.purple.light.3": {
    "value": "#f7edfe",
    "variable": "var(--colors-purple-light-3)"
  },
  "colors.purple.light.4": {
    "value": "#f2e2fc",
    "variable": "var(--colors-purple-light-4)"
  },
  "colors.purple.light.5": {
    "value": "#ead5f9",
    "variable": "var(--colors-purple-light-5)"
  },
  "colors.purple.light.6": {
    "value": "#e0c4f4",
    "variable": "var(--colors-purple-light-6)"
  },
  "colors.purple.light.7": {
    "value": "#d1afec",
    "variable": "var(--colors-purple-light-7)"
  },
  "colors.purple.light.8": {
    "value": "#be93e4",
    "variable": "var(--colors-purple-light-8)"
  },
  "colors.purple.light.9": {
    "value": "#8e4ec6",
    "variable": "var(--colors-purple-light-9)"
  },
  "colors.purple.light.10": {
    "value": "#8347b9",
    "variable": "var(--colors-purple-light-10)"
  },
  "colors.purple.light.11": {
    "value": "#8145b5",
    "variable": "var(--colors-purple-light-11)"
  },
  "colors.purple.light.12": {
    "value": "#402060",
    "variable": "var(--colors-purple-light-12)"
  },
  "colors.purple.light.a1": {
    "value": "#aa00aa03",
    "variable": "var(--colors-purple-light-a1)"
  },
  "colors.purple.light.a2": {
    "value": "#8000e008",
    "variable": "var(--colors-purple-light-a2)"
  },
  "colors.purple.light.a3": {
    "value": "#8e00f112",
    "variable": "var(--colors-purple-light-a3)"
  },
  "colors.purple.light.a4": {
    "value": "#8d00e51d",
    "variable": "var(--colors-purple-light-a4)"
  },
  "colors.purple.light.a5": {
    "value": "#8000db2a",
    "variable": "var(--colors-purple-light-a5)"
  },
  "colors.purple.light.a6": {
    "value": "#7a01d03b",
    "variable": "var(--colors-purple-light-a6)"
  },
  "colors.purple.light.a7": {
    "value": "#6d00c350",
    "variable": "var(--colors-purple-light-a7)"
  },
  "colors.purple.light.a8": {
    "value": "#6600c06c",
    "variable": "var(--colors-purple-light-a8)"
  },
  "colors.purple.light.a9": {
    "value": "#5c00adb1",
    "variable": "var(--colors-purple-light-a9)"
  },
  "colors.purple.light.a10": {
    "value": "#53009eb8",
    "variable": "var(--colors-purple-light-a10)"
  },
  "colors.purple.light.a11": {
    "value": "#52009aba",
    "variable": "var(--colors-purple-light-a11)"
  },
  "colors.purple.light.a12": {
    "value": "#250049df",
    "variable": "var(--colors-purple-light-a12)"
  },
  "colors.purple.dark.1": {
    "value": "#18111b",
    "variable": "var(--colors-purple-dark-1)"
  },
  "colors.purple.dark.2": {
    "value": "#1e1523",
    "variable": "var(--colors-purple-dark-2)"
  },
  "colors.purple.dark.3": {
    "value": "#301c3b",
    "variable": "var(--colors-purple-dark-3)"
  },
  "colors.purple.dark.4": {
    "value": "#3d224e",
    "variable": "var(--colors-purple-dark-4)"
  },
  "colors.purple.dark.5": {
    "value": "#48295c",
    "variable": "var(--colors-purple-dark-5)"
  },
  "colors.purple.dark.6": {
    "value": "#54346b",
    "variable": "var(--colors-purple-dark-6)"
  },
  "colors.purple.dark.7": {
    "value": "#664282",
    "variable": "var(--colors-purple-dark-7)"
  },
  "colors.purple.dark.8": {
    "value": "#8457aa",
    "variable": "var(--colors-purple-dark-8)"
  },
  "colors.purple.dark.9": {
    "value": "#8e4ec6",
    "variable": "var(--colors-purple-dark-9)"
  },
  "colors.purple.dark.10": {
    "value": "#9a5cd0",
    "variable": "var(--colors-purple-dark-10)"
  },
  "colors.purple.dark.11": {
    "value": "#d19dff",
    "variable": "var(--colors-purple-dark-11)"
  },
  "colors.purple.dark.12": {
    "value": "#ecd9fa",
    "variable": "var(--colors-purple-dark-12)"
  },
  "colors.purple.dark.a1": {
    "value": "#b412f90b",
    "variable": "var(--colors-purple-dark-a1)"
  },
  "colors.purple.dark.a2": {
    "value": "#b744f714",
    "variable": "var(--colors-purple-dark-a2)"
  },
  "colors.purple.dark.a3": {
    "value": "#c150ff2d",
    "variable": "var(--colors-purple-dark-a3)"
  },
  "colors.purple.dark.a4": {
    "value": "#bb53fd42",
    "variable": "var(--colors-purple-dark-a4)"
  },
  "colors.purple.dark.a5": {
    "value": "#be5cfd51",
    "variable": "var(--colors-purple-dark-a5)"
  },
  "colors.purple.dark.a6": {
    "value": "#c16dfd61",
    "variable": "var(--colors-purple-dark-a6)"
  },
  "colors.purple.dark.a7": {
    "value": "#c378fd7a",
    "variable": "var(--colors-purple-dark-a7)"
  },
  "colors.purple.dark.a8": {
    "value": "#c47effa4",
    "variable": "var(--colors-purple-dark-a8)"
  },
  "colors.purple.dark.a9": {
    "value": "#b661ffc2",
    "variable": "var(--colors-purple-dark-a9)"
  },
  "colors.purple.dark.a10": {
    "value": "#bc6fffcd",
    "variable": "var(--colors-purple-dark-a10)"
  },
  "colors.purple.dark.a11": {
    "value": "#d19dff",
    "variable": "var(--colors-purple-dark-a11)"
  },
  "colors.purple.dark.a12": {
    "value": "#f1ddfffa",
    "variable": "var(--colors-purple-dark-a12)"
  },
  "colors.red.light.1": {
    "value": "#fffcfc",
    "variable": "var(--colors-red-light-1)"
  },
  "colors.red.light.2": {
    "value": "#fff7f7",
    "variable": "var(--colors-red-light-2)"
  },
  "colors.red.light.3": {
    "value": "#feebec",
    "variable": "var(--colors-red-light-3)"
  },
  "colors.red.light.4": {
    "value": "#ffdbdc",
    "variable": "var(--colors-red-light-4)"
  },
  "colors.red.light.5": {
    "value": "#ffcdce",
    "variable": "var(--colors-red-light-5)"
  },
  "colors.red.light.6": {
    "value": "#fdbdbe",
    "variable": "var(--colors-red-light-6)"
  },
  "colors.red.light.7": {
    "value": "#f4a9aa",
    "variable": "var(--colors-red-light-7)"
  },
  "colors.red.light.8": {
    "value": "#eb8e90",
    "variable": "var(--colors-red-light-8)"
  },
  "colors.red.light.9": {
    "value": "#e5484d",
    "variable": "var(--colors-red-light-9)"
  },
  "colors.red.light.10": {
    "value": "#dc3e42",
    "variable": "var(--colors-red-light-10)"
  },
  "colors.red.light.11": {
    "value": "#ce2c31",
    "variable": "var(--colors-red-light-11)"
  },
  "colors.red.light.12": {
    "value": "#641723",
    "variable": "var(--colors-red-light-12)"
  },
  "colors.red.light.a1": {
    "value": "#ff000003",
    "variable": "var(--colors-red-light-a1)"
  },
  "colors.red.light.a2": {
    "value": "#ff000008",
    "variable": "var(--colors-red-light-a2)"
  },
  "colors.red.light.a3": {
    "value": "#f3000d14",
    "variable": "var(--colors-red-light-a3)"
  },
  "colors.red.light.a4": {
    "value": "#ff000824",
    "variable": "var(--colors-red-light-a4)"
  },
  "colors.red.light.a5": {
    "value": "#ff000632",
    "variable": "var(--colors-red-light-a5)"
  },
  "colors.red.light.a6": {
    "value": "#f8000442",
    "variable": "var(--colors-red-light-a6)"
  },
  "colors.red.light.a7": {
    "value": "#df000356",
    "variable": "var(--colors-red-light-a7)"
  },
  "colors.red.light.a8": {
    "value": "#d2000571",
    "variable": "var(--colors-red-light-a8)"
  },
  "colors.red.light.a9": {
    "value": "#db0007b7",
    "variable": "var(--colors-red-light-a9)"
  },
  "colors.red.light.a10": {
    "value": "#d10005c1",
    "variable": "var(--colors-red-light-a10)"
  },
  "colors.red.light.a11": {
    "value": "#c40006d3",
    "variable": "var(--colors-red-light-a11)"
  },
  "colors.red.light.a12": {
    "value": "#55000de8",
    "variable": "var(--colors-red-light-a12)"
  },
  "colors.red.dark.1": {
    "value": "#191111",
    "variable": "var(--colors-red-dark-1)"
  },
  "colors.red.dark.2": {
    "value": "#201314",
    "variable": "var(--colors-red-dark-2)"
  },
  "colors.red.dark.3": {
    "value": "#3b1219",
    "variable": "var(--colors-red-dark-3)"
  },
  "colors.red.dark.4": {
    "value": "#500f1c",
    "variable": "var(--colors-red-dark-4)"
  },
  "colors.red.dark.5": {
    "value": "#611623",
    "variable": "var(--colors-red-dark-5)"
  },
  "colors.red.dark.6": {
    "value": "#72232d",
    "variable": "var(--colors-red-dark-6)"
  },
  "colors.red.dark.7": {
    "value": "#8c333a",
    "variable": "var(--colors-red-dark-7)"
  },
  "colors.red.dark.8": {
    "value": "#b54548",
    "variable": "var(--colors-red-dark-8)"
  },
  "colors.red.dark.9": {
    "value": "#e5484d",
    "variable": "var(--colors-red-dark-9)"
  },
  "colors.red.dark.10": {
    "value": "#ec5d5e",
    "variable": "var(--colors-red-dark-10)"
  },
  "colors.red.dark.11": {
    "value": "#ff9592",
    "variable": "var(--colors-red-dark-11)"
  },
  "colors.red.dark.12": {
    "value": "#ffd1d9",
    "variable": "var(--colors-red-dark-12)"
  },
  "colors.red.dark.a1": {
    "value": "#f4121209",
    "variable": "var(--colors-red-dark-a1)"
  },
  "colors.red.dark.a2": {
    "value": "#f22f3e11",
    "variable": "var(--colors-red-dark-a2)"
  },
  "colors.red.dark.a3": {
    "value": "#ff173f2d",
    "variable": "var(--colors-red-dark-a3)"
  },
  "colors.red.dark.a4": {
    "value": "#fe0a3b44",
    "variable": "var(--colors-red-dark-a4)"
  },
  "colors.red.dark.a5": {
    "value": "#ff204756",
    "variable": "var(--colors-red-dark-a5)"
  },
  "colors.red.dark.a6": {
    "value": "#ff3e5668",
    "variable": "var(--colors-red-dark-a6)"
  },
  "colors.red.dark.a7": {
    "value": "#ff536184",
    "variable": "var(--colors-red-dark-a7)"
  },
  "colors.red.dark.a8": {
    "value": "#ff5d61b0",
    "variable": "var(--colors-red-dark-a8)"
  },
  "colors.red.dark.a9": {
    "value": "#fe4e54e4",
    "variable": "var(--colors-red-dark-a9)"
  },
  "colors.red.dark.a10": {
    "value": "#ff6465eb",
    "variable": "var(--colors-red-dark-a10)"
  },
  "colors.red.dark.a11": {
    "value": "#ff9592",
    "variable": "var(--colors-red-dark-a11)"
  },
  "colors.red.dark.a12": {
    "value": "#ffd1d9",
    "variable": "var(--colors-red-dark-a12)"
  },
  "colors.ruby.light.1": {
    "value": "#fffcfd",
    "variable": "var(--colors-ruby-light-1)"
  },
  "colors.ruby.light.2": {
    "value": "#fff7f8",
    "variable": "var(--colors-ruby-light-2)"
  },
  "colors.ruby.light.3": {
    "value": "#feeaed",
    "variable": "var(--colors-ruby-light-3)"
  },
  "colors.ruby.light.4": {
    "value": "#ffdce1",
    "variable": "var(--colors-ruby-light-4)"
  },
  "colors.ruby.light.5": {
    "value": "#ffced6",
    "variable": "var(--colors-ruby-light-5)"
  },
  "colors.ruby.light.6": {
    "value": "#f8bfc8",
    "variable": "var(--colors-ruby-light-6)"
  },
  "colors.ruby.light.7": {
    "value": "#efacb8",
    "variable": "var(--colors-ruby-light-7)"
  },
  "colors.ruby.light.8": {
    "value": "#e592a3",
    "variable": "var(--colors-ruby-light-8)"
  },
  "colors.ruby.light.9": {
    "value": "#e54666",
    "variable": "var(--colors-ruby-light-9)"
  },
  "colors.ruby.light.10": {
    "value": "#dc3b5d",
    "variable": "var(--colors-ruby-light-10)"
  },
  "colors.ruby.light.11": {
    "value": "#ca244d",
    "variable": "var(--colors-ruby-light-11)"
  },
  "colors.ruby.light.12": {
    "value": "#64172b",
    "variable": "var(--colors-ruby-light-12)"
  },
  "colors.ruby.light.a1": {
    "value": "#ff005503",
    "variable": "var(--colors-ruby-light-a1)"
  },
  "colors.ruby.light.a2": {
    "value": "#ff002008",
    "variable": "var(--colors-ruby-light-a2)"
  },
  "colors.ruby.light.a3": {
    "value": "#f3002515",
    "variable": "var(--colors-ruby-light-a3)"
  },
  "colors.ruby.light.a4": {
    "value": "#ff002523",
    "variable": "var(--colors-ruby-light-a4)"
  },
  "colors.ruby.light.a5": {
    "value": "#ff002a31",
    "variable": "var(--colors-ruby-light-a5)"
  },
  "colors.ruby.light.a6": {
    "value": "#e4002440",
    "variable": "var(--colors-ruby-light-a6)"
  },
  "colors.ruby.light.a7": {
    "value": "#ce002553",
    "variable": "var(--colors-ruby-light-a7)"
  },
  "colors.ruby.light.a8": {
    "value": "#c300286d",
    "variable": "var(--colors-ruby-light-a8)"
  },
  "colors.ruby.light.a9": {
    "value": "#db002cb9",
    "variable": "var(--colors-ruby-light-a9)"
  },
  "colors.ruby.light.a10": {
    "value": "#d2002cc4",
    "variable": "var(--colors-ruby-light-a10)"
  },
  "colors.ruby.light.a11": {
    "value": "#c10030db",
    "variable": "var(--colors-ruby-light-a11)"
  },
  "colors.ruby.light.a12": {
    "value": "#550016e8",
    "variable": "var(--colors-ruby-light-a12)"
  },
  "colors.ruby.dark.1": {
    "value": "#191113",
    "variable": "var(--colors-ruby-dark-1)"
  },
  "colors.ruby.dark.2": {
    "value": "#1e1517",
    "variable": "var(--colors-ruby-dark-2)"
  },
  "colors.ruby.dark.3": {
    "value": "#3a141e",
    "variable": "var(--colors-ruby-dark-3)"
  },
  "colors.ruby.dark.4": {
    "value": "#4e1325",
    "variable": "var(--colors-ruby-dark-4)"
  },
  "colors.ruby.dark.5": {
    "value": "#5e1a2e",
    "variable": "var(--colors-ruby-dark-5)"
  },
  "colors.ruby.dark.6": {
    "value": "#6f2539",
    "variable": "var(--colors-ruby-dark-6)"
  },
  "colors.ruby.dark.7": {
    "value": "#883447",
    "variable": "var(--colors-ruby-dark-7)"
  },
  "colors.ruby.dark.8": {
    "value": "#b3445a",
    "variable": "var(--colors-ruby-dark-8)"
  },
  "colors.ruby.dark.9": {
    "value": "#e54666",
    "variable": "var(--colors-ruby-dark-9)"
  },
  "colors.ruby.dark.10": {
    "value": "#ec5a72",
    "variable": "var(--colors-ruby-dark-10)"
  },
  "colors.ruby.dark.11": {
    "value": "#ff949d",
    "variable": "var(--colors-ruby-dark-11)"
  },
  "colors.ruby.dark.12": {
    "value": "#fed2e1",
    "variable": "var(--colors-ruby-dark-12)"
  },
  "colors.ruby.dark.a1": {
    "value": "#f4124a09",
    "variable": "var(--colors-ruby-dark-a1)"
  },
  "colors.ruby.dark.a2": {
    "value": "#fe5a7f0e",
    "variable": "var(--colors-ruby-dark-a2)"
  },
  "colors.ruby.dark.a3": {
    "value": "#ff235d2c",
    "variable": "var(--colors-ruby-dark-a3)"
  },
  "colors.ruby.dark.a4": {
    "value": "#fd195e42",
    "variable": "var(--colors-ruby-dark-a4)"
  },
  "colors.ruby.dark.a5": {
    "value": "#fe2d6b53",
    "variable": "var(--colors-ruby-dark-a5)"
  },
  "colors.ruby.dark.a6": {
    "value": "#ff447665",
    "variable": "var(--colors-ruby-dark-a6)"
  },
  "colors.ruby.dark.a7": {
    "value": "#ff577d80",
    "variable": "var(--colors-ruby-dark-a7)"
  },
  "colors.ruby.dark.a8": {
    "value": "#ff5c7cae",
    "variable": "var(--colors-ruby-dark-a8)"
  },
  "colors.ruby.dark.a9": {
    "value": "#fe4c70e4",
    "variable": "var(--colors-ruby-dark-a9)"
  },
  "colors.ruby.dark.a10": {
    "value": "#ff617beb",
    "variable": "var(--colors-ruby-dark-a10)"
  },
  "colors.ruby.dark.a11": {
    "value": "#ff949d",
    "variable": "var(--colors-ruby-dark-a11)"
  },
  "colors.ruby.dark.a12": {
    "value": "#ffd3e2fe",
    "variable": "var(--colors-ruby-dark-a12)"
  },
  "colors.sage.light.1": {
    "value": "#fbfdfc",
    "variable": "var(--colors-sage-light-1)"
  },
  "colors.sage.light.2": {
    "value": "#f7f9f8",
    "variable": "var(--colors-sage-light-2)"
  },
  "colors.sage.light.3": {
    "value": "#eef1f0",
    "variable": "var(--colors-sage-light-3)"
  },
  "colors.sage.light.4": {
    "value": "#e6e9e8",
    "variable": "var(--colors-sage-light-4)"
  },
  "colors.sage.light.5": {
    "value": "#dfe2e0",
    "variable": "var(--colors-sage-light-5)"
  },
  "colors.sage.light.6": {
    "value": "#d7dad9",
    "variable": "var(--colors-sage-light-6)"
  },
  "colors.sage.light.7": {
    "value": "#cbcfcd",
    "variable": "var(--colors-sage-light-7)"
  },
  "colors.sage.light.8": {
    "value": "#b8bcba",
    "variable": "var(--colors-sage-light-8)"
  },
  "colors.sage.light.9": {
    "value": "#868e8b",
    "variable": "var(--colors-sage-light-9)"
  },
  "colors.sage.light.10": {
    "value": "#7c8481",
    "variable": "var(--colors-sage-light-10)"
  },
  "colors.sage.light.11": {
    "value": "#5f6563",
    "variable": "var(--colors-sage-light-11)"
  },
  "colors.sage.light.12": {
    "value": "#1a211e",
    "variable": "var(--colors-sage-light-12)"
  },
  "colors.sage.light.a1": {
    "value": "#00804004",
    "variable": "var(--colors-sage-light-a1)"
  },
  "colors.sage.light.a2": {
    "value": "#00402008",
    "variable": "var(--colors-sage-light-a2)"
  },
  "colors.sage.light.a3": {
    "value": "#002d1e11",
    "variable": "var(--colors-sage-light-a3)"
  },
  "colors.sage.light.a4": {
    "value": "#001f1519",
    "variable": "var(--colors-sage-light-a4)"
  },
  "colors.sage.light.a5": {
    "value": "#00180820",
    "variable": "var(--colors-sage-light-a5)"
  },
  "colors.sage.light.a6": {
    "value": "#00140d28",
    "variable": "var(--colors-sage-light-a6)"
  },
  "colors.sage.light.a7": {
    "value": "#00140a34",
    "variable": "var(--colors-sage-light-a7)"
  },
  "colors.sage.light.a8": {
    "value": "#000f0847",
    "variable": "var(--colors-sage-light-a8)"
  },
  "colors.sage.light.a9": {
    "value": "#00110b79",
    "variable": "var(--colors-sage-light-a9)"
  },
  "colors.sage.light.a10": {
    "value": "#00100a83",
    "variable": "var(--colors-sage-light-a10)"
  },
  "colors.sage.light.a11": {
    "value": "#000a07a0",
    "variable": "var(--colors-sage-light-a11)"
  },
  "colors.sage.light.a12": {
    "value": "#000805e5",
    "variable": "var(--colors-sage-light-a12)"
  },
  "colors.sage.dark.1": {
    "value": "#101211",
    "variable": "var(--colors-sage-dark-1)"
  },
  "colors.sage.dark.2": {
    "value": "#171918",
    "variable": "var(--colors-sage-dark-2)"
  },
  "colors.sage.dark.3": {
    "value": "#202221",
    "variable": "var(--colors-sage-dark-3)"
  },
  "colors.sage.dark.4": {
    "value": "#272a29",
    "variable": "var(--colors-sage-dark-4)"
  },
  "colors.sage.dark.5": {
    "value": "#2e3130",
    "variable": "var(--colors-sage-dark-5)"
  },
  "colors.sage.dark.6": {
    "value": "#373b39",
    "variable": "var(--colors-sage-dark-6)"
  },
  "colors.sage.dark.7": {
    "value": "#444947",
    "variable": "var(--colors-sage-dark-7)"
  },
  "colors.sage.dark.8": {
    "value": "#5b625f",
    "variable": "var(--colors-sage-dark-8)"
  },
  "colors.sage.dark.9": {
    "value": "#63706b",
    "variable": "var(--colors-sage-dark-9)"
  },
  "colors.sage.dark.10": {
    "value": "#717d79",
    "variable": "var(--colors-sage-dark-10)"
  },
  "colors.sage.dark.11": {
    "value": "#adb5b2",
    "variable": "var(--colors-sage-dark-11)"
  },
  "colors.sage.dark.12": {
    "value": "#eceeed",
    "variable": "var(--colors-sage-dark-12)"
  },
  "colors.sage.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-sage-dark-a1)"
  },
  "colors.sage.dark.a2": {
    "value": "#f0f2f108",
    "variable": "var(--colors-sage-dark-a2)"
  },
  "colors.sage.dark.a3": {
    "value": "#f3f5f412",
    "variable": "var(--colors-sage-dark-a3)"
  },
  "colors.sage.dark.a4": {
    "value": "#f2fefd1a",
    "variable": "var(--colors-sage-dark-a4)"
  },
  "colors.sage.dark.a5": {
    "value": "#f1fbfa22",
    "variable": "var(--colors-sage-dark-a5)"
  },
  "colors.sage.dark.a6": {
    "value": "#edfbf42d",
    "variable": "var(--colors-sage-dark-a6)"
  },
  "colors.sage.dark.a7": {
    "value": "#edfcf73c",
    "variable": "var(--colors-sage-dark-a7)"
  },
  "colors.sage.dark.a8": {
    "value": "#ebfdf657",
    "variable": "var(--colors-sage-dark-a8)"
  },
  "colors.sage.dark.a9": {
    "value": "#dffdf266",
    "variable": "var(--colors-sage-dark-a9)"
  },
  "colors.sage.dark.a10": {
    "value": "#e5fdf674",
    "variable": "var(--colors-sage-dark-a10)"
  },
  "colors.sage.dark.a11": {
    "value": "#f4fefbb0",
    "variable": "var(--colors-sage-dark-a11)"
  },
  "colors.sage.dark.a12": {
    "value": "#fdfffeed",
    "variable": "var(--colors-sage-dark-a12)"
  },
  "colors.sand.light.1": {
    "value": "#fdfdfc",
    "variable": "var(--colors-sand-light-1)"
  },
  "colors.sand.light.2": {
    "value": "#f9f9f8",
    "variable": "var(--colors-sand-light-2)"
  },
  "colors.sand.light.3": {
    "value": "#f1f0ef",
    "variable": "var(--colors-sand-light-3)"
  },
  "colors.sand.light.4": {
    "value": "#e9e8e6",
    "variable": "var(--colors-sand-light-4)"
  },
  "colors.sand.light.5": {
    "value": "#e2e1de",
    "variable": "var(--colors-sand-light-5)"
  },
  "colors.sand.light.6": {
    "value": "#dad9d6",
    "variable": "var(--colors-sand-light-6)"
  },
  "colors.sand.light.7": {
    "value": "#cfceca",
    "variable": "var(--colors-sand-light-7)"
  },
  "colors.sand.light.8": {
    "value": "#bcbbb5",
    "variable": "var(--colors-sand-light-8)"
  },
  "colors.sand.light.9": {
    "value": "#8d8d86",
    "variable": "var(--colors-sand-light-9)"
  },
  "colors.sand.light.10": {
    "value": "#82827c",
    "variable": "var(--colors-sand-light-10)"
  },
  "colors.sand.light.11": {
    "value": "#63635e",
    "variable": "var(--colors-sand-light-11)"
  },
  "colors.sand.light.12": {
    "value": "#21201c",
    "variable": "var(--colors-sand-light-12)"
  },
  "colors.sand.light.a1": {
    "value": "#55550003",
    "variable": "var(--colors-sand-light-a1)"
  },
  "colors.sand.light.a2": {
    "value": "#25250007",
    "variable": "var(--colors-sand-light-a2)"
  },
  "colors.sand.light.a3": {
    "value": "#20100010",
    "variable": "var(--colors-sand-light-a3)"
  },
  "colors.sand.light.a4": {
    "value": "#1f150019",
    "variable": "var(--colors-sand-light-a4)"
  },
  "colors.sand.light.a5": {
    "value": "#1f180021",
    "variable": "var(--colors-sand-light-a5)"
  },
  "colors.sand.light.a6": {
    "value": "#19130029",
    "variable": "var(--colors-sand-light-a6)"
  },
  "colors.sand.light.a7": {
    "value": "#19140035",
    "variable": "var(--colors-sand-light-a7)"
  },
  "colors.sand.light.a8": {
    "value": "#1915014a",
    "variable": "var(--colors-sand-light-a8)"
  },
  "colors.sand.light.a9": {
    "value": "#0f0f0079",
    "variable": "var(--colors-sand-light-a9)"
  },
  "colors.sand.light.a10": {
    "value": "#0c0c0083",
    "variable": "var(--colors-sand-light-a10)"
  },
  "colors.sand.light.a11": {
    "value": "#080800a1",
    "variable": "var(--colors-sand-light-a11)"
  },
  "colors.sand.light.a12": {
    "value": "#060500e3",
    "variable": "var(--colors-sand-light-a12)"
  },
  "colors.sand.dark.1": {
    "value": "#111110",
    "variable": "var(--colors-sand-dark-1)"
  },
  "colors.sand.dark.2": {
    "value": "#191918",
    "variable": "var(--colors-sand-dark-2)"
  },
  "colors.sand.dark.3": {
    "value": "#222221",
    "variable": "var(--colors-sand-dark-3)"
  },
  "colors.sand.dark.4": {
    "value": "#2a2a28",
    "variable": "var(--colors-sand-dark-4)"
  },
  "colors.sand.dark.5": {
    "value": "#31312e",
    "variable": "var(--colors-sand-dark-5)"
  },
  "colors.sand.dark.6": {
    "value": "#3b3a37",
    "variable": "var(--colors-sand-dark-6)"
  },
  "colors.sand.dark.7": {
    "value": "#494844",
    "variable": "var(--colors-sand-dark-7)"
  },
  "colors.sand.dark.8": {
    "value": "#62605b",
    "variable": "var(--colors-sand-dark-8)"
  },
  "colors.sand.dark.9": {
    "value": "#6f6d66",
    "variable": "var(--colors-sand-dark-9)"
  },
  "colors.sand.dark.10": {
    "value": "#7c7b74",
    "variable": "var(--colors-sand-dark-10)"
  },
  "colors.sand.dark.11": {
    "value": "#b5b3ad",
    "variable": "var(--colors-sand-dark-11)"
  },
  "colors.sand.dark.12": {
    "value": "#eeeeec",
    "variable": "var(--colors-sand-dark-12)"
  },
  "colors.sand.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-sand-dark-a1)"
  },
  "colors.sand.dark.a2": {
    "value": "#f4f4f309",
    "variable": "var(--colors-sand-dark-a2)"
  },
  "colors.sand.dark.a3": {
    "value": "#f6f6f513",
    "variable": "var(--colors-sand-dark-a3)"
  },
  "colors.sand.dark.a4": {
    "value": "#fefef31b",
    "variable": "var(--colors-sand-dark-a4)"
  },
  "colors.sand.dark.a5": {
    "value": "#fbfbeb23",
    "variable": "var(--colors-sand-dark-a5)"
  },
  "colors.sand.dark.a6": {
    "value": "#fffaed2d",
    "variable": "var(--colors-sand-dark-a6)"
  },
  "colors.sand.dark.a7": {
    "value": "#fffbed3c",
    "variable": "var(--colors-sand-dark-a7)"
  },
  "colors.sand.dark.a8": {
    "value": "#fff9eb57",
    "variable": "var(--colors-sand-dark-a8)"
  },
  "colors.sand.dark.a9": {
    "value": "#fffae965",
    "variable": "var(--colors-sand-dark-a9)"
  },
  "colors.sand.dark.a10": {
    "value": "#fffdee73",
    "variable": "var(--colors-sand-dark-a10)"
  },
  "colors.sand.dark.a11": {
    "value": "#fffcf4b0",
    "variable": "var(--colors-sand-dark-a11)"
  },
  "colors.sand.dark.a12": {
    "value": "#fffffded",
    "variable": "var(--colors-sand-dark-a12)"
  },
  "colors.sky.light.1": {
    "value": "#f9feff",
    "variable": "var(--colors-sky-light-1)"
  },
  "colors.sky.light.2": {
    "value": "#f1fafd",
    "variable": "var(--colors-sky-light-2)"
  },
  "colors.sky.light.3": {
    "value": "#e1f6fd",
    "variable": "var(--colors-sky-light-3)"
  },
  "colors.sky.light.4": {
    "value": "#d1f0fa",
    "variable": "var(--colors-sky-light-4)"
  },
  "colors.sky.light.5": {
    "value": "#bee7f5",
    "variable": "var(--colors-sky-light-5)"
  },
  "colors.sky.light.6": {
    "value": "#a9daed",
    "variable": "var(--colors-sky-light-6)"
  },
  "colors.sky.light.7": {
    "value": "#8dcae3",
    "variable": "var(--colors-sky-light-7)"
  },
  "colors.sky.light.8": {
    "value": "#60b3d7",
    "variable": "var(--colors-sky-light-8)"
  },
  "colors.sky.light.9": {
    "value": "#7ce2fe",
    "variable": "var(--colors-sky-light-9)"
  },
  "colors.sky.light.10": {
    "value": "#74daf8",
    "variable": "var(--colors-sky-light-10)"
  },
  "colors.sky.light.11": {
    "value": "#00749e",
    "variable": "var(--colors-sky-light-11)"
  },
  "colors.sky.light.12": {
    "value": "#1d3e56",
    "variable": "var(--colors-sky-light-12)"
  },
  "colors.sky.light.a1": {
    "value": "#00d5ff06",
    "variable": "var(--colors-sky-light-a1)"
  },
  "colors.sky.light.a2": {
    "value": "#00a4db0e",
    "variable": "var(--colors-sky-light-a2)"
  },
  "colors.sky.light.a3": {
    "value": "#00b3ee1e",
    "variable": "var(--colors-sky-light-a3)"
  },
  "colors.sky.light.a4": {
    "value": "#00ace42e",
    "variable": "var(--colors-sky-light-a4)"
  },
  "colors.sky.light.a5": {
    "value": "#00a1d841",
    "variable": "var(--colors-sky-light-a5)"
  },
  "colors.sky.light.a6": {
    "value": "#0092ca56",
    "variable": "var(--colors-sky-light-a6)"
  },
  "colors.sky.light.a7": {
    "value": "#0089c172",
    "variable": "var(--colors-sky-light-a7)"
  },
  "colors.sky.light.a8": {
    "value": "#0085bf9f",
    "variable": "var(--colors-sky-light-a8)"
  },
  "colors.sky.light.a9": {
    "value": "#00c7fe83",
    "variable": "var(--colors-sky-light-a9)"
  },
  "colors.sky.light.a10": {
    "value": "#00bcf38b",
    "variable": "var(--colors-sky-light-a10)"
  },
  "colors.sky.light.a11": {
    "value": "#00749e",
    "variable": "var(--colors-sky-light-a11)"
  },
  "colors.sky.light.a12": {
    "value": "#002540e2",
    "variable": "var(--colors-sky-light-a12)"
  },
  "colors.sky.dark.1": {
    "value": "#0d141f",
    "variable": "var(--colors-sky-dark-1)"
  },
  "colors.sky.dark.2": {
    "value": "#111a27",
    "variable": "var(--colors-sky-dark-2)"
  },
  "colors.sky.dark.3": {
    "value": "#112840",
    "variable": "var(--colors-sky-dark-3)"
  },
  "colors.sky.dark.4": {
    "value": "#113555",
    "variable": "var(--colors-sky-dark-4)"
  },
  "colors.sky.dark.5": {
    "value": "#154467",
    "variable": "var(--colors-sky-dark-5)"
  },
  "colors.sky.dark.6": {
    "value": "#1b537b",
    "variable": "var(--colors-sky-dark-6)"
  },
  "colors.sky.dark.7": {
    "value": "#1f6692",
    "variable": "var(--colors-sky-dark-7)"
  },
  "colors.sky.dark.8": {
    "value": "#197cae",
    "variable": "var(--colors-sky-dark-8)"
  },
  "colors.sky.dark.9": {
    "value": "#7ce2fe",
    "variable": "var(--colors-sky-dark-9)"
  },
  "colors.sky.dark.10": {
    "value": "#a8eeff",
    "variable": "var(--colors-sky-dark-10)"
  },
  "colors.sky.dark.11": {
    "value": "#75c7f0",
    "variable": "var(--colors-sky-dark-11)"
  },
  "colors.sky.dark.12": {
    "value": "#c2f3ff",
    "variable": "var(--colors-sky-dark-12)"
  },
  "colors.sky.dark.a1": {
    "value": "#0044ff0f",
    "variable": "var(--colors-sky-dark-a1)"
  },
  "colors.sky.dark.a2": {
    "value": "#1171fb18",
    "variable": "var(--colors-sky-dark-a2)"
  },
  "colors.sky.dark.a3": {
    "value": "#1184fc33",
    "variable": "var(--colors-sky-dark-a3)"
  },
  "colors.sky.dark.a4": {
    "value": "#128fff49",
    "variable": "var(--colors-sky-dark-a4)"
  },
  "colors.sky.dark.a5": {
    "value": "#1c9dfd5d",
    "variable": "var(--colors-sky-dark-a5)"
  },
  "colors.sky.dark.a6": {
    "value": "#28a5ff72",
    "variable": "var(--colors-sky-dark-a6)"
  },
  "colors.sky.dark.a7": {
    "value": "#2badfe8b",
    "variable": "var(--colors-sky-dark-a7)"
  },
  "colors.sky.dark.a8": {
    "value": "#1db2fea9",
    "variable": "var(--colors-sky-dark-a8)"
  },
  "colors.sky.dark.a9": {
    "value": "#7ce3fffe",
    "variable": "var(--colors-sky-dark-a9)"
  },
  "colors.sky.dark.a10": {
    "value": "#a8eeff",
    "variable": "var(--colors-sky-dark-a10)"
  },
  "colors.sky.dark.a11": {
    "value": "#7cd3ffef",
    "variable": "var(--colors-sky-dark-a11)"
  },
  "colors.sky.dark.a12": {
    "value": "#c2f3ff",
    "variable": "var(--colors-sky-dark-a12)"
  },
  "colors.slate.light.1": {
    "value": "#fcfcfd",
    "variable": "var(--colors-slate-light-1)"
  },
  "colors.slate.light.2": {
    "value": "#f9f9fb",
    "variable": "var(--colors-slate-light-2)"
  },
  "colors.slate.light.3": {
    "value": "#f0f0f3",
    "variable": "var(--colors-slate-light-3)"
  },
  "colors.slate.light.4": {
    "value": "#e8e8ec",
    "variable": "var(--colors-slate-light-4)"
  },
  "colors.slate.light.5": {
    "value": "#e0e1e6",
    "variable": "var(--colors-slate-light-5)"
  },
  "colors.slate.light.6": {
    "value": "#d9d9e0",
    "variable": "var(--colors-slate-light-6)"
  },
  "colors.slate.light.7": {
    "value": "#cdced6",
    "variable": "var(--colors-slate-light-7)"
  },
  "colors.slate.light.8": {
    "value": "#b9bbc6",
    "variable": "var(--colors-slate-light-8)"
  },
  "colors.slate.light.9": {
    "value": "#8b8d98",
    "variable": "var(--colors-slate-light-9)"
  },
  "colors.slate.light.10": {
    "value": "#80838d",
    "variable": "var(--colors-slate-light-10)"
  },
  "colors.slate.light.11": {
    "value": "#60646c",
    "variable": "var(--colors-slate-light-11)"
  },
  "colors.slate.light.12": {
    "value": "#1c2024",
    "variable": "var(--colors-slate-light-12)"
  },
  "colors.slate.light.a1": {
    "value": "#00005503",
    "variable": "var(--colors-slate-light-a1)"
  },
  "colors.slate.light.a2": {
    "value": "#00005506",
    "variable": "var(--colors-slate-light-a2)"
  },
  "colors.slate.light.a3": {
    "value": "#0000330f",
    "variable": "var(--colors-slate-light-a3)"
  },
  "colors.slate.light.a4": {
    "value": "#00002d17",
    "variable": "var(--colors-slate-light-a4)"
  },
  "colors.slate.light.a5": {
    "value": "#0009321f",
    "variable": "var(--colors-slate-light-a5)"
  },
  "colors.slate.light.a6": {
    "value": "#00002f26",
    "variable": "var(--colors-slate-light-a6)"
  },
  "colors.slate.light.a7": {
    "value": "#00062e32",
    "variable": "var(--colors-slate-light-a7)"
  },
  "colors.slate.light.a8": {
    "value": "#00083046",
    "variable": "var(--colors-slate-light-a8)"
  },
  "colors.slate.light.a9": {
    "value": "#00051d74",
    "variable": "var(--colors-slate-light-a9)"
  },
  "colors.slate.light.a10": {
    "value": "#00071b7f",
    "variable": "var(--colors-slate-light-a10)"
  },
  "colors.slate.light.a11": {
    "value": "#0007149f",
    "variable": "var(--colors-slate-light-a11)"
  },
  "colors.slate.light.a12": {
    "value": "#000509e3",
    "variable": "var(--colors-slate-light-a12)"
  },
  "colors.slate.dark.1": {
    "value": "#111113",
    "variable": "var(--colors-slate-dark-1)"
  },
  "colors.slate.dark.2": {
    "value": "#18191b",
    "variable": "var(--colors-slate-dark-2)"
  },
  "colors.slate.dark.3": {
    "value": "#212225",
    "variable": "var(--colors-slate-dark-3)"
  },
  "colors.slate.dark.4": {
    "value": "#272a2d",
    "variable": "var(--colors-slate-dark-4)"
  },
  "colors.slate.dark.5": {
    "value": "#2e3135",
    "variable": "var(--colors-slate-dark-5)"
  },
  "colors.slate.dark.6": {
    "value": "#363a3f",
    "variable": "var(--colors-slate-dark-6)"
  },
  "colors.slate.dark.7": {
    "value": "#43484e",
    "variable": "var(--colors-slate-dark-7)"
  },
  "colors.slate.dark.8": {
    "value": "#5a6169",
    "variable": "var(--colors-slate-dark-8)"
  },
  "colors.slate.dark.9": {
    "value": "#696e77",
    "variable": "var(--colors-slate-dark-9)"
  },
  "colors.slate.dark.10": {
    "value": "#777b84",
    "variable": "var(--colors-slate-dark-10)"
  },
  "colors.slate.dark.11": {
    "value": "#b0b4ba",
    "variable": "var(--colors-slate-dark-11)"
  },
  "colors.slate.dark.12": {
    "value": "#edeef0",
    "variable": "var(--colors-slate-dark-12)"
  },
  "colors.slate.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-slate-dark-a1)"
  },
  "colors.slate.dark.a2": {
    "value": "#d8f4f609",
    "variable": "var(--colors-slate-dark-a2)"
  },
  "colors.slate.dark.a3": {
    "value": "#ddeaf814",
    "variable": "var(--colors-slate-dark-a3)"
  },
  "colors.slate.dark.a4": {
    "value": "#d3edf81d",
    "variable": "var(--colors-slate-dark-a4)"
  },
  "colors.slate.dark.a5": {
    "value": "#d9edfe25",
    "variable": "var(--colors-slate-dark-a5)"
  },
  "colors.slate.dark.a6": {
    "value": "#d6ebfd30",
    "variable": "var(--colors-slate-dark-a6)"
  },
  "colors.slate.dark.a7": {
    "value": "#d9edff40",
    "variable": "var(--colors-slate-dark-a7)"
  },
  "colors.slate.dark.a8": {
    "value": "#d9edff5d",
    "variable": "var(--colors-slate-dark-a8)"
  },
  "colors.slate.dark.a9": {
    "value": "#dfebfd6d",
    "variable": "var(--colors-slate-dark-a9)"
  },
  "colors.slate.dark.a10": {
    "value": "#e5edfd7b",
    "variable": "var(--colors-slate-dark-a10)"
  },
  "colors.slate.dark.a11": {
    "value": "#f1f7feb5",
    "variable": "var(--colors-slate-dark-a11)"
  },
  "colors.slate.dark.a12": {
    "value": "#fcfdffef",
    "variable": "var(--colors-slate-dark-a12)"
  },
  "colors.teal.light.1": {
    "value": "#fafefd",
    "variable": "var(--colors-teal-light-1)"
  },
  "colors.teal.light.2": {
    "value": "#f3fbf9",
    "variable": "var(--colors-teal-light-2)"
  },
  "colors.teal.light.3": {
    "value": "#e0f8f3",
    "variable": "var(--colors-teal-light-3)"
  },
  "colors.teal.light.4": {
    "value": "#ccf3ea",
    "variable": "var(--colors-teal-light-4)"
  },
  "colors.teal.light.5": {
    "value": "#b8eae0",
    "variable": "var(--colors-teal-light-5)"
  },
  "colors.teal.light.6": {
    "value": "#a1ded2",
    "variable": "var(--colors-teal-light-6)"
  },
  "colors.teal.light.7": {
    "value": "#83cdc1",
    "variable": "var(--colors-teal-light-7)"
  },
  "colors.teal.light.8": {
    "value": "#53b9ab",
    "variable": "var(--colors-teal-light-8)"
  },
  "colors.teal.light.9": {
    "value": "#12a594",
    "variable": "var(--colors-teal-light-9)"
  },
  "colors.teal.light.10": {
    "value": "#0d9b8a",
    "variable": "var(--colors-teal-light-10)"
  },
  "colors.teal.light.11": {
    "value": "#008573",
    "variable": "var(--colors-teal-light-11)"
  },
  "colors.teal.light.12": {
    "value": "#0d3d38",
    "variable": "var(--colors-teal-light-12)"
  },
  "colors.teal.light.a1": {
    "value": "#00cc9905",
    "variable": "var(--colors-teal-light-a1)"
  },
  "colors.teal.light.a2": {
    "value": "#00aa800c",
    "variable": "var(--colors-teal-light-a2)"
  },
  "colors.teal.light.a3": {
    "value": "#00c69d1f",
    "variable": "var(--colors-teal-light-a3)"
  },
  "colors.teal.light.a4": {
    "value": "#00c39633",
    "variable": "var(--colors-teal-light-a4)"
  },
  "colors.teal.light.a5": {
    "value": "#00b49047",
    "variable": "var(--colors-teal-light-a5)"
  },
  "colors.teal.light.a6": {
    "value": "#00a6855e",
    "variable": "var(--colors-teal-light-a6)"
  },
  "colors.teal.light.a7": {
    "value": "#0099807c",
    "variable": "var(--colors-teal-light-a7)"
  },
  "colors.teal.light.a8": {
    "value": "#009783ac",
    "variable": "var(--colors-teal-light-a8)"
  },
  "colors.teal.light.a9": {
    "value": "#009e8ced",
    "variable": "var(--colors-teal-light-a9)"
  },
  "colors.teal.light.a10": {
    "value": "#009684f2",
    "variable": "var(--colors-teal-light-a10)"
  },
  "colors.teal.light.a11": {
    "value": "#008573",
    "variable": "var(--colors-teal-light-a11)"
  },
  "colors.teal.light.a12": {
    "value": "#00332df2",
    "variable": "var(--colors-teal-light-a12)"
  },
  "colors.teal.dark.1": {
    "value": "#0d1514",
    "variable": "var(--colors-teal-dark-1)"
  },
  "colors.teal.dark.2": {
    "value": "#111c1b",
    "variable": "var(--colors-teal-dark-2)"
  },
  "colors.teal.dark.3": {
    "value": "#0d2d2a",
    "variable": "var(--colors-teal-dark-3)"
  },
  "colors.teal.dark.4": {
    "value": "#023b37",
    "variable": "var(--colors-teal-dark-4)"
  },
  "colors.teal.dark.5": {
    "value": "#084843",
    "variable": "var(--colors-teal-dark-5)"
  },
  "colors.teal.dark.6": {
    "value": "#145750",
    "variable": "var(--colors-teal-dark-6)"
  },
  "colors.teal.dark.7": {
    "value": "#1c6961",
    "variable": "var(--colors-teal-dark-7)"
  },
  "colors.teal.dark.8": {
    "value": "#207e73",
    "variable": "var(--colors-teal-dark-8)"
  },
  "colors.teal.dark.9": {
    "value": "#12a594",
    "variable": "var(--colors-teal-dark-9)"
  },
  "colors.teal.dark.10": {
    "value": "#0eb39e",
    "variable": "var(--colors-teal-dark-10)"
  },
  "colors.teal.dark.11": {
    "value": "#0bd8b6",
    "variable": "var(--colors-teal-dark-11)"
  },
  "colors.teal.dark.12": {
    "value": "#adf0dd",
    "variable": "var(--colors-teal-dark-12)"
  },
  "colors.teal.dark.a1": {
    "value": "#00deab05",
    "variable": "var(--colors-teal-dark-a1)"
  },
  "colors.teal.dark.a2": {
    "value": "#12fbe60c",
    "variable": "var(--colors-teal-dark-a2)"
  },
  "colors.teal.dark.a3": {
    "value": "#00ffe61e",
    "variable": "var(--colors-teal-dark-a3)"
  },
  "colors.teal.dark.a4": {
    "value": "#00ffe92d",
    "variable": "var(--colors-teal-dark-a4)"
  },
  "colors.teal.dark.a5": {
    "value": "#00ffea3b",
    "variable": "var(--colors-teal-dark-a5)"
  },
  "colors.teal.dark.a6": {
    "value": "#1cffe84b",
    "variable": "var(--colors-teal-dark-a6)"
  },
  "colors.teal.dark.a7": {
    "value": "#2efde85f",
    "variable": "var(--colors-teal-dark-a7)"
  },
  "colors.teal.dark.a8": {
    "value": "#32ffe775",
    "variable": "var(--colors-teal-dark-a8)"
  },
  "colors.teal.dark.a9": {
    "value": "#13ffe49f",
    "variable": "var(--colors-teal-dark-a9)"
  },
  "colors.teal.dark.a10": {
    "value": "#0dffe0ae",
    "variable": "var(--colors-teal-dark-a10)"
  },
  "colors.teal.dark.a11": {
    "value": "#0afed5d6",
    "variable": "var(--colors-teal-dark-a11)"
  },
  "colors.teal.dark.a12": {
    "value": "#b8ffebef",
    "variable": "var(--colors-teal-dark-a12)"
  },
  "colors.tomato.light.1": {
    "value": "#fffcfc",
    "variable": "var(--colors-tomato-light-1)"
  },
  "colors.tomato.light.2": {
    "value": "#fff8f7",
    "variable": "var(--colors-tomato-light-2)"
  },
  "colors.tomato.light.3": {
    "value": "#feebe7",
    "variable": "var(--colors-tomato-light-3)"
  },
  "colors.tomato.light.4": {
    "value": "#ffdcd3",
    "variable": "var(--colors-tomato-light-4)"
  },
  "colors.tomato.light.5": {
    "value": "#ffcdc2",
    "variable": "var(--colors-tomato-light-5)"
  },
  "colors.tomato.light.6": {
    "value": "#fdbdaf",
    "variable": "var(--colors-tomato-light-6)"
  },
  "colors.tomato.light.7": {
    "value": "#f5a898",
    "variable": "var(--colors-tomato-light-7)"
  },
  "colors.tomato.light.8": {
    "value": "#ec8e7b",
    "variable": "var(--colors-tomato-light-8)"
  },
  "colors.tomato.light.9": {
    "value": "#e54d2e",
    "variable": "var(--colors-tomato-light-9)"
  },
  "colors.tomato.light.10": {
    "value": "#dd4425",
    "variable": "var(--colors-tomato-light-10)"
  },
  "colors.tomato.light.11": {
    "value": "#d13415",
    "variable": "var(--colors-tomato-light-11)"
  },
  "colors.tomato.light.12": {
    "value": "#5c271f",
    "variable": "var(--colors-tomato-light-12)"
  },
  "colors.tomato.light.a1": {
    "value": "#ff000003",
    "variable": "var(--colors-tomato-light-a1)"
  },
  "colors.tomato.light.a2": {
    "value": "#ff200008",
    "variable": "var(--colors-tomato-light-a2)"
  },
  "colors.tomato.light.a3": {
    "value": "#f52b0018",
    "variable": "var(--colors-tomato-light-a3)"
  },
  "colors.tomato.light.a4": {
    "value": "#ff35002c",
    "variable": "var(--colors-tomato-light-a4)"
  },
  "colors.tomato.light.a5": {
    "value": "#ff2e003d",
    "variable": "var(--colors-tomato-light-a5)"
  },
  "colors.tomato.light.a6": {
    "value": "#f92d0050",
    "variable": "var(--colors-tomato-light-a6)"
  },
  "colors.tomato.light.a7": {
    "value": "#e7280067",
    "variable": "var(--colors-tomato-light-a7)"
  },
  "colors.tomato.light.a8": {
    "value": "#db250084",
    "variable": "var(--colors-tomato-light-a8)"
  },
  "colors.tomato.light.a9": {
    "value": "#df2600d1",
    "variable": "var(--colors-tomato-light-a9)"
  },
  "colors.tomato.light.a10": {
    "value": "#d72400da",
    "variable": "var(--colors-tomato-light-a10)"
  },
  "colors.tomato.light.a11": {
    "value": "#cd2200ea",
    "variable": "var(--colors-tomato-light-a11)"
  },
  "colors.tomato.light.a12": {
    "value": "#460900e0",
    "variable": "var(--colors-tomato-light-a12)"
  },
  "colors.tomato.dark.1": {
    "value": "#181111",
    "variable": "var(--colors-tomato-dark-1)"
  },
  "colors.tomato.dark.2": {
    "value": "#1f1513",
    "variable": "var(--colors-tomato-dark-2)"
  },
  "colors.tomato.dark.3": {
    "value": "#391714",
    "variable": "var(--colors-tomato-dark-3)"
  },
  "colors.tomato.dark.4": {
    "value": "#4e1511",
    "variable": "var(--colors-tomato-dark-4)"
  },
  "colors.tomato.dark.5": {
    "value": "#5e1c16",
    "variable": "var(--colors-tomato-dark-5)"
  },
  "colors.tomato.dark.6": {
    "value": "#6e2920",
    "variable": "var(--colors-tomato-dark-6)"
  },
  "colors.tomato.dark.7": {
    "value": "#853a2d",
    "variable": "var(--colors-tomato-dark-7)"
  },
  "colors.tomato.dark.8": {
    "value": "#ac4d39",
    "variable": "var(--colors-tomato-dark-8)"
  },
  "colors.tomato.dark.9": {
    "value": "#e54d2e",
    "variable": "var(--colors-tomato-dark-9)"
  },
  "colors.tomato.dark.10": {
    "value": "#ec6142",
    "variable": "var(--colors-tomato-dark-10)"
  },
  "colors.tomato.dark.11": {
    "value": "#ff977d",
    "variable": "var(--colors-tomato-dark-11)"
  },
  "colors.tomato.dark.12": {
    "value": "#fbd3cb",
    "variable": "var(--colors-tomato-dark-12)"
  },
  "colors.tomato.dark.a1": {
    "value": "#f1121208",
    "variable": "var(--colors-tomato-dark-a1)"
  },
  "colors.tomato.dark.a2": {
    "value": "#ff55330f",
    "variable": "var(--colors-tomato-dark-a2)"
  },
  "colors.tomato.dark.a3": {
    "value": "#ff35232b",
    "variable": "var(--colors-tomato-dark-a3)"
  },
  "colors.tomato.dark.a4": {
    "value": "#fd201142",
    "variable": "var(--colors-tomato-dark-a4)"
  },
  "colors.tomato.dark.a5": {
    "value": "#fe332153",
    "variable": "var(--colors-tomato-dark-a5)"
  },
  "colors.tomato.dark.a6": {
    "value": "#ff4f3864",
    "variable": "var(--colors-tomato-dark-a6)"
  },
  "colors.tomato.dark.a7": {
    "value": "#fd644a7d",
    "variable": "var(--colors-tomato-dark-a7)"
  },
  "colors.tomato.dark.a8": {
    "value": "#fe6d4ea7",
    "variable": "var(--colors-tomato-dark-a8)"
  },
  "colors.tomato.dark.a9": {
    "value": "#fe5431e4",
    "variable": "var(--colors-tomato-dark-a9)"
  },
  "colors.tomato.dark.a10": {
    "value": "#ff6847eb",
    "variable": "var(--colors-tomato-dark-a10)"
  },
  "colors.tomato.dark.a11": {
    "value": "#ff977d",
    "variable": "var(--colors-tomato-dark-a11)"
  },
  "colors.tomato.dark.a12": {
    "value": "#ffd6cefb",
    "variable": "var(--colors-tomato-dark-a12)"
  },
  "colors.violet.light.1": {
    "value": "#fdfcfe",
    "variable": "var(--colors-violet-light-1)"
  },
  "colors.violet.light.2": {
    "value": "#faf8ff",
    "variable": "var(--colors-violet-light-2)"
  },
  "colors.violet.light.3": {
    "value": "#f4f0fe",
    "variable": "var(--colors-violet-light-3)"
  },
  "colors.violet.light.4": {
    "value": "#ebe4ff",
    "variable": "var(--colors-violet-light-4)"
  },
  "colors.violet.light.5": {
    "value": "#e1d9ff",
    "variable": "var(--colors-violet-light-5)"
  },
  "colors.violet.light.6": {
    "value": "#d4cafe",
    "variable": "var(--colors-violet-light-6)"
  },
  "colors.violet.light.7": {
    "value": "#c2b5f5",
    "variable": "var(--colors-violet-light-7)"
  },
  "colors.violet.light.8": {
    "value": "#aa99ec",
    "variable": "var(--colors-violet-light-8)"
  },
  "colors.violet.light.9": {
    "value": "#6e56cf",
    "variable": "var(--colors-violet-light-9)"
  },
  "colors.violet.light.10": {
    "value": "#654dc4",
    "variable": "var(--colors-violet-light-10)"
  },
  "colors.violet.light.11": {
    "value": "#6550b9",
    "variable": "var(--colors-violet-light-11)"
  },
  "colors.violet.light.12": {
    "value": "#2f265f",
    "variable": "var(--colors-violet-light-12)"
  },
  "colors.violet.light.a1": {
    "value": "#5500aa03",
    "variable": "var(--colors-violet-light-a1)"
  },
  "colors.violet.light.a2": {
    "value": "#4900ff07",
    "variable": "var(--colors-violet-light-a2)"
  },
  "colors.violet.light.a3": {
    "value": "#4400ee0f",
    "variable": "var(--colors-violet-light-a3)"
  },
  "colors.violet.light.a4": {
    "value": "#4300ff1b",
    "variable": "var(--colors-violet-light-a4)"
  },
  "colors.violet.light.a5": {
    "value": "#3600ff26",
    "variable": "var(--colors-violet-light-a5)"
  },
  "colors.violet.light.a6": {
    "value": "#3100fb35",
    "variable": "var(--colors-violet-light-a6)"
  },
  "colors.violet.light.a7": {
    "value": "#2d01dd4a",
    "variable": "var(--colors-violet-light-a7)"
  },
  "colors.violet.light.a8": {
    "value": "#2b00d066",
    "variable": "var(--colors-violet-light-a8)"
  },
  "colors.violet.light.a9": {
    "value": "#2400b7a9",
    "variable": "var(--colors-violet-light-a9)"
  },
  "colors.violet.light.a10": {
    "value": "#2300abb2",
    "variable": "var(--colors-violet-light-a10)"
  },
  "colors.violet.light.a11": {
    "value": "#1f0099af",
    "variable": "var(--colors-violet-light-a11)"
  },
  "colors.violet.light.a12": {
    "value": "#0b0043d9",
    "variable": "var(--colors-violet-light-a12)"
  },
  "colors.violet.dark.1": {
    "value": "#14121f",
    "variable": "var(--colors-violet-dark-1)"
  },
  "colors.violet.dark.2": {
    "value": "#1b1525",
    "variable": "var(--colors-violet-dark-2)"
  },
  "colors.violet.dark.3": {
    "value": "#291f43",
    "variable": "var(--colors-violet-dark-3)"
  },
  "colors.violet.dark.4": {
    "value": "#33255b",
    "variable": "var(--colors-violet-dark-4)"
  },
  "colors.violet.dark.5": {
    "value": "#3c2e69",
    "variable": "var(--colors-violet-dark-5)"
  },
  "colors.violet.dark.6": {
    "value": "#473876",
    "variable": "var(--colors-violet-dark-6)"
  },
  "colors.violet.dark.7": {
    "value": "#56468b",
    "variable": "var(--colors-violet-dark-7)"
  },
  "colors.violet.dark.8": {
    "value": "#6958ad",
    "variable": "var(--colors-violet-dark-8)"
  },
  "colors.violet.dark.9": {
    "value": "#6e56cf",
    "variable": "var(--colors-violet-dark-9)"
  },
  "colors.violet.dark.10": {
    "value": "#7d66d9",
    "variable": "var(--colors-violet-dark-10)"
  },
  "colors.violet.dark.11": {
    "value": "#baa7ff",
    "variable": "var(--colors-violet-dark-11)"
  },
  "colors.violet.dark.12": {
    "value": "#e2ddfe",
    "variable": "var(--colors-violet-dark-12)"
  },
  "colors.violet.dark.a1": {
    "value": "#4422ff0f",
    "variable": "var(--colors-violet-dark-a1)"
  },
  "colors.violet.dark.a2": {
    "value": "#853ff916",
    "variable": "var(--colors-violet-dark-a2)"
  },
  "colors.violet.dark.a3": {
    "value": "#8354fe36",
    "variable": "var(--colors-violet-dark-a3)"
  },
  "colors.violet.dark.a4": {
    "value": "#7d51fd50",
    "variable": "var(--colors-violet-dark-a4)"
  },
  "colors.violet.dark.a5": {
    "value": "#845ffd5f",
    "variable": "var(--colors-violet-dark-a5)"
  },
  "colors.violet.dark.a6": {
    "value": "#8f6cfd6d",
    "variable": "var(--colors-violet-dark-a6)"
  },
  "colors.violet.dark.a7": {
    "value": "#9879ff83",
    "variable": "var(--colors-violet-dark-a7)"
  },
  "colors.violet.dark.a8": {
    "value": "#977dfea8",
    "variable": "var(--colors-violet-dark-a8)"
  },
  "colors.violet.dark.a9": {
    "value": "#8668ffcc",
    "variable": "var(--colors-violet-dark-a9)"
  },
  "colors.violet.dark.a10": {
    "value": "#9176fed7",
    "variable": "var(--colors-violet-dark-a10)"
  },
  "colors.violet.dark.a11": {
    "value": "#baa7ff",
    "variable": "var(--colors-violet-dark-a11)"
  },
  "colors.violet.dark.a12": {
    "value": "#e3defffe",
    "variable": "var(--colors-violet-dark-a12)"
  },
  "colors.yellow.light.1": {
    "value": "#fdfdf9",
    "variable": "var(--colors-yellow-light-1)"
  },
  "colors.yellow.light.2": {
    "value": "#fefce9",
    "variable": "var(--colors-yellow-light-2)"
  },
  "colors.yellow.light.3": {
    "value": "#fffab8",
    "variable": "var(--colors-yellow-light-3)"
  },
  "colors.yellow.light.4": {
    "value": "#fff394",
    "variable": "var(--colors-yellow-light-4)"
  },
  "colors.yellow.light.5": {
    "value": "#ffe770",
    "variable": "var(--colors-yellow-light-5)"
  },
  "colors.yellow.light.6": {
    "value": "#f3d768",
    "variable": "var(--colors-yellow-light-6)"
  },
  "colors.yellow.light.7": {
    "value": "#e4c767",
    "variable": "var(--colors-yellow-light-7)"
  },
  "colors.yellow.light.8": {
    "value": "#d5ae39",
    "variable": "var(--colors-yellow-light-8)"
  },
  "colors.yellow.light.9": {
    "value": "#ffe629",
    "variable": "var(--colors-yellow-light-9)"
  },
  "colors.yellow.light.10": {
    "value": "#ffdc00",
    "variable": "var(--colors-yellow-light-10)"
  },
  "colors.yellow.light.11": {
    "value": "#9e6c00",
    "variable": "var(--colors-yellow-light-11)"
  },
  "colors.yellow.light.12": {
    "value": "#473b1f",
    "variable": "var(--colors-yellow-light-12)"
  },
  "colors.yellow.light.a1": {
    "value": "#aaaa0006",
    "variable": "var(--colors-yellow-light-a1)"
  },
  "colors.yellow.light.a2": {
    "value": "#f4dd0016",
    "variable": "var(--colors-yellow-light-a2)"
  },
  "colors.yellow.light.a3": {
    "value": "#ffee0047",
    "variable": "var(--colors-yellow-light-a3)"
  },
  "colors.yellow.light.a4": {
    "value": "#ffe3016b",
    "variable": "var(--colors-yellow-light-a4)"
  },
  "colors.yellow.light.a5": {
    "value": "#ffd5008f",
    "variable": "var(--colors-yellow-light-a5)"
  },
  "colors.yellow.light.a6": {
    "value": "#ebbc0097",
    "variable": "var(--colors-yellow-light-a6)"
  },
  "colors.yellow.light.a7": {
    "value": "#d2a10098",
    "variable": "var(--colors-yellow-light-a7)"
  },
  "colors.yellow.light.a8": {
    "value": "#c99700c6",
    "variable": "var(--colors-yellow-light-a8)"
  },
  "colors.yellow.light.a9": {
    "value": "#ffe100d6",
    "variable": "var(--colors-yellow-light-a9)"
  },
  "colors.yellow.light.a10": {
    "value": "#ffdc00",
    "variable": "var(--colors-yellow-light-a10)"
  },
  "colors.yellow.light.a11": {
    "value": "#9e6c00",
    "variable": "var(--colors-yellow-light-a11)"
  },
  "colors.yellow.light.a12": {
    "value": "#2e2000e0",
    "variable": "var(--colors-yellow-light-a12)"
  },
  "colors.yellow.dark.1": {
    "value": "#14120b",
    "variable": "var(--colors-yellow-dark-1)"
  },
  "colors.yellow.dark.2": {
    "value": "#1b180f",
    "variable": "var(--colors-yellow-dark-2)"
  },
  "colors.yellow.dark.3": {
    "value": "#2d2305",
    "variable": "var(--colors-yellow-dark-3)"
  },
  "colors.yellow.dark.4": {
    "value": "#362b00",
    "variable": "var(--colors-yellow-dark-4)"
  },
  "colors.yellow.dark.5": {
    "value": "#433500",
    "variable": "var(--colors-yellow-dark-5)"
  },
  "colors.yellow.dark.6": {
    "value": "#524202",
    "variable": "var(--colors-yellow-dark-6)"
  },
  "colors.yellow.dark.7": {
    "value": "#665417",
    "variable": "var(--colors-yellow-dark-7)"
  },
  "colors.yellow.dark.8": {
    "value": "#836a21",
    "variable": "var(--colors-yellow-dark-8)"
  },
  "colors.yellow.dark.9": {
    "value": "#ffe629",
    "variable": "var(--colors-yellow-dark-9)"
  },
  "colors.yellow.dark.10": {
    "value": "#ffff57",
    "variable": "var(--colors-yellow-dark-10)"
  },
  "colors.yellow.dark.11": {
    "value": "#f5e147",
    "variable": "var(--colors-yellow-dark-11)"
  },
  "colors.yellow.dark.12": {
    "value": "#f6eeb4",
    "variable": "var(--colors-yellow-dark-12)"
  },
  "colors.yellow.dark.a1": {
    "value": "#d1510004",
    "variable": "var(--colors-yellow-dark-a1)"
  },
  "colors.yellow.dark.a2": {
    "value": "#f9b4000b",
    "variable": "var(--colors-yellow-dark-a2)"
  },
  "colors.yellow.dark.a3": {
    "value": "#ffaa001e",
    "variable": "var(--colors-yellow-dark-a3)"
  },
  "colors.yellow.dark.a4": {
    "value": "#fdb70028",
    "variable": "var(--colors-yellow-dark-a4)"
  },
  "colors.yellow.dark.a5": {
    "value": "#febb0036",
    "variable": "var(--colors-yellow-dark-a5)"
  },
  "colors.yellow.dark.a6": {
    "value": "#fec40046",
    "variable": "var(--colors-yellow-dark-a6)"
  },
  "colors.yellow.dark.a7": {
    "value": "#fdcb225c",
    "variable": "var(--colors-yellow-dark-a7)"
  },
  "colors.yellow.dark.a8": {
    "value": "#fdca327b",
    "variable": "var(--colors-yellow-dark-a8)"
  },
  "colors.yellow.dark.a9": {
    "value": "#ffe629",
    "variable": "var(--colors-yellow-dark-a9)"
  },
  "colors.yellow.dark.a10": {
    "value": "#ffff57",
    "variable": "var(--colors-yellow-dark-a10)"
  },
  "colors.yellow.dark.a11": {
    "value": "#fee949f5",
    "variable": "var(--colors-yellow-dark-a11)"
  },
  "colors.yellow.dark.a12": {
    "value": "#fef6baf6",
    "variable": "var(--colors-yellow-dark-a12)"
  },
  "colors.neutral.light.1": {
    "value": "#fcfcfc",
    "variable": "var(--colors-neutral-light-1)"
  },
  "colors.neutral.light.2": {
    "value": "#f9f9f9",
    "variable": "var(--colors-neutral-light-2)"
  },
  "colors.neutral.light.3": {
    "value": "#f0f0f0",
    "variable": "var(--colors-neutral-light-3)"
  },
  "colors.neutral.light.4": {
    "value": "#e8e8e8",
    "variable": "var(--colors-neutral-light-4)"
  },
  "colors.neutral.light.5": {
    "value": "#e0e0e0",
    "variable": "var(--colors-neutral-light-5)"
  },
  "colors.neutral.light.6": {
    "value": "#d9d9d9",
    "variable": "var(--colors-neutral-light-6)"
  },
  "colors.neutral.light.7": {
    "value": "#cecece",
    "variable": "var(--colors-neutral-light-7)"
  },
  "colors.neutral.light.8": {
    "value": "#bbbbbb",
    "variable": "var(--colors-neutral-light-8)"
  },
  "colors.neutral.light.9": {
    "value": "#8d8d8d",
    "variable": "var(--colors-neutral-light-9)"
  },
  "colors.neutral.light.10": {
    "value": "#838383",
    "variable": "var(--colors-neutral-light-10)"
  },
  "colors.neutral.light.11": {
    "value": "#646464",
    "variable": "var(--colors-neutral-light-11)"
  },
  "colors.neutral.light.12": {
    "value": "#202020",
    "variable": "var(--colors-neutral-light-12)"
  },
  "colors.neutral.light.a1": {
    "value": "#00000003",
    "variable": "var(--colors-neutral-light-a1)"
  },
  "colors.neutral.light.a2": {
    "value": "#00000006",
    "variable": "var(--colors-neutral-light-a2)"
  },
  "colors.neutral.light.a3": {
    "value": "#0000000f",
    "variable": "var(--colors-neutral-light-a3)"
  },
  "colors.neutral.light.a4": {
    "value": "#00000017",
    "variable": "var(--colors-neutral-light-a4)"
  },
  "colors.neutral.light.a5": {
    "value": "#0000001f",
    "variable": "var(--colors-neutral-light-a5)"
  },
  "colors.neutral.light.a6": {
    "value": "#00000026",
    "variable": "var(--colors-neutral-light-a6)"
  },
  "colors.neutral.light.a7": {
    "value": "#00000031",
    "variable": "var(--colors-neutral-light-a7)"
  },
  "colors.neutral.light.a8": {
    "value": "#00000044",
    "variable": "var(--colors-neutral-light-a8)"
  },
  "colors.neutral.light.a9": {
    "value": "#00000072",
    "variable": "var(--colors-neutral-light-a9)"
  },
  "colors.neutral.light.a10": {
    "value": "#0000007c",
    "variable": "var(--colors-neutral-light-a10)"
  },
  "colors.neutral.light.a11": {
    "value": "#0000009b",
    "variable": "var(--colors-neutral-light-a11)"
  },
  "colors.neutral.light.a12": {
    "value": "#000000df",
    "variable": "var(--colors-neutral-light-a12)"
  },
  "colors.neutral.dark.1": {
    "value": "#111111",
    "variable": "var(--colors-neutral-dark-1)"
  },
  "colors.neutral.dark.2": {
    "value": "#191919",
    "variable": "var(--colors-neutral-dark-2)"
  },
  "colors.neutral.dark.3": {
    "value": "#222222",
    "variable": "var(--colors-neutral-dark-3)"
  },
  "colors.neutral.dark.4": {
    "value": "#2a2a2a",
    "variable": "var(--colors-neutral-dark-4)"
  },
  "colors.neutral.dark.5": {
    "value": "#313131",
    "variable": "var(--colors-neutral-dark-5)"
  },
  "colors.neutral.dark.6": {
    "value": "#3a3a3a",
    "variable": "var(--colors-neutral-dark-6)"
  },
  "colors.neutral.dark.7": {
    "value": "#484848",
    "variable": "var(--colors-neutral-dark-7)"
  },
  "colors.neutral.dark.8": {
    "value": "#606060",
    "variable": "var(--colors-neutral-dark-8)"
  },
  "colors.neutral.dark.9": {
    "value": "#6e6e6e",
    "variable": "var(--colors-neutral-dark-9)"
  },
  "colors.neutral.dark.10": {
    "value": "#7b7b7b",
    "variable": "var(--colors-neutral-dark-10)"
  },
  "colors.neutral.dark.11": {
    "value": "#b4b4b4",
    "variable": "var(--colors-neutral-dark-11)"
  },
  "colors.neutral.dark.12": {
    "value": "#eeeeee",
    "variable": "var(--colors-neutral-dark-12)"
  },
  "colors.neutral.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-neutral-dark-a1)"
  },
  "colors.neutral.dark.a2": {
    "value": "#ffffff09",
    "variable": "var(--colors-neutral-dark-a2)"
  },
  "colors.neutral.dark.a3": {
    "value": "#ffffff12",
    "variable": "var(--colors-neutral-dark-a3)"
  },
  "colors.neutral.dark.a4": {
    "value": "#ffffff1b",
    "variable": "var(--colors-neutral-dark-a4)"
  },
  "colors.neutral.dark.a5": {
    "value": "#ffffff22",
    "variable": "var(--colors-neutral-dark-a5)"
  },
  "colors.neutral.dark.a6": {
    "value": "#ffffff2c",
    "variable": "var(--colors-neutral-dark-a6)"
  },
  "colors.neutral.dark.a7": {
    "value": "#ffffff3b",
    "variable": "var(--colors-neutral-dark-a7)"
  },
  "colors.neutral.dark.a8": {
    "value": "#ffffff55",
    "variable": "var(--colors-neutral-dark-a8)"
  },
  "colors.neutral.dark.a9": {
    "value": "#ffffff64",
    "variable": "var(--colors-neutral-dark-a9)"
  },
  "colors.neutral.dark.a10": {
    "value": "#ffffff72",
    "variable": "var(--colors-neutral-dark-a10)"
  },
  "colors.neutral.dark.a11": {
    "value": "#ffffffaf",
    "variable": "var(--colors-neutral-dark-a11)"
  },
  "colors.neutral.dark.a12": {
    "value": "#ffffffed",
    "variable": "var(--colors-neutral-dark-a12)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.2, 0.0, 0, 1.0)",
    "variable": "var(--easings-default)"
  },
  "easings.emphasized-in": {
    "value": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    "variable": "var(--easings-emphasized-in)"
  },
  "easings.emphasized-out": {
    "value": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    "variable": "var(--easings-emphasized-out)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.75",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "radii.none": {
    "value": "0",
    "variable": "var(--radii-none)"
  },
  "radii.2xs": {
    "value": "0.0625rem",
    "variable": "var(--radii-2xs)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.4.5": {
    "value": "1.125rem",
    "variable": "var(--sizes-4\\.5)"
  },
  "sizes.2xs": {
    "value": "16rem",
    "variable": "var(--sizes-2xs)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.4.5": {
    "value": "1.125rem",
    "variable": "var(--spacing-4\\.5)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.skipLink": {
    "value": 1600,
    "variable": "var(--z-index-skip-link)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--z-index-tooltip)"
  },
  "fonts.sans": {
    "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "fonts.body": {
    "value": "var(--fonts-body)",
    "variable": "var(--fonts-body)"
  },
  "fonts.code": {
    "value": "var(--font-roboto-mono), monospace",
    "variable": "var(--fonts-code)"
  },
  "fonts.inter": {
    "value": "var(--font-inter), sans-serif",
    "variable": "var(--fonts-inter)"
  },
  "fonts.jakarta": {
    "value": "var(--font-jakarta), sans-serif",
    "variable": "var(--fonts-jakarta)"
  },
  "fonts.outfit": {
    "value": "var(--font-outfit), sans-serif",
    "variable": "var(--fonts-outfit)"
  },
  "fonts.raleway": {
    "value": "var(--font-raleway), sans-serif",
    "variable": "var(--fonts-raleway)"
  },
  "fonts.robotoMono": {
    "value": "var(--font-roboto-mono), monospace",
    "variable": "var(--fonts-roboto-mono)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "shadows.accent": {
    "value": "var(--shadows-accent)",
    "variable": "var(--shadows-accent)"
  },
  "shadows.outline": {
    "value": "var(--shadows-outline)",
    "variable": "var(--shadows-outline)"
  },
  "shadows.xs": {
    "value": "var(--shadows-xs)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--shadows-xl)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "var(--shadows-2xl)",
    "variable": "var(--shadows-2xl)"
  },
  "radii.l1": {
    "value": "var(--radii-l1)",
    "variable": "var(--radii-l1)"
  },
  "radii.l2": {
    "value": "var(--radii-l2)",
    "variable": "var(--radii-l2)"
  },
  "radii.l3": {
    "value": "var(--radii-l3)",
    "variable": "var(--radii-l3)"
  },
  "colors.amber.1": {
    "value": "var(--colors-amber-1)",
    "variable": "var(--colors-amber-1)"
  },
  "colors.amber.2": {
    "value": "var(--colors-amber-2)",
    "variable": "var(--colors-amber-2)"
  },
  "colors.amber.3": {
    "value": "var(--colors-amber-3)",
    "variable": "var(--colors-amber-3)"
  },
  "colors.amber.4": {
    "value": "var(--colors-amber-4)",
    "variable": "var(--colors-amber-4)"
  },
  "colors.amber.5": {
    "value": "var(--colors-amber-5)",
    "variable": "var(--colors-amber-5)"
  },
  "colors.amber.6": {
    "value": "var(--colors-amber-6)",
    "variable": "var(--colors-amber-6)"
  },
  "colors.amber.7": {
    "value": "var(--colors-amber-7)",
    "variable": "var(--colors-amber-7)"
  },
  "colors.amber.8": {
    "value": "var(--colors-amber-8)",
    "variable": "var(--colors-amber-8)"
  },
  "colors.amber.9": {
    "value": "var(--colors-amber-9)",
    "variable": "var(--colors-amber-9)"
  },
  "colors.amber.10": {
    "value": "var(--colors-amber-10)",
    "variable": "var(--colors-amber-10)"
  },
  "colors.amber.11": {
    "value": "var(--colors-amber-11)",
    "variable": "var(--colors-amber-11)"
  },
  "colors.amber.12": {
    "value": "var(--colors-amber-12)",
    "variable": "var(--colors-amber-12)"
  },
  "colors.amber.a1": {
    "value": "var(--colors-amber-a1)",
    "variable": "var(--colors-amber-a1)"
  },
  "colors.amber.a2": {
    "value": "var(--colors-amber-a2)",
    "variable": "var(--colors-amber-a2)"
  },
  "colors.amber.a3": {
    "value": "var(--colors-amber-a3)",
    "variable": "var(--colors-amber-a3)"
  },
  "colors.amber.a4": {
    "value": "var(--colors-amber-a4)",
    "variable": "var(--colors-amber-a4)"
  },
  "colors.amber.a5": {
    "value": "var(--colors-amber-a5)",
    "variable": "var(--colors-amber-a5)"
  },
  "colors.amber.a6": {
    "value": "var(--colors-amber-a6)",
    "variable": "var(--colors-amber-a6)"
  },
  "colors.amber.a7": {
    "value": "var(--colors-amber-a7)",
    "variable": "var(--colors-amber-a7)"
  },
  "colors.amber.a8": {
    "value": "var(--colors-amber-a8)",
    "variable": "var(--colors-amber-a8)"
  },
  "colors.amber.a9": {
    "value": "var(--colors-amber-a9)",
    "variable": "var(--colors-amber-a9)"
  },
  "colors.amber.a10": {
    "value": "var(--colors-amber-a10)",
    "variable": "var(--colors-amber-a10)"
  },
  "colors.amber.a11": {
    "value": "var(--colors-amber-a11)",
    "variable": "var(--colors-amber-a11)"
  },
  "colors.amber.a12": {
    "value": "var(--colors-amber-a12)",
    "variable": "var(--colors-amber-a12)"
  },
  "colors.blue.1": {
    "value": "var(--colors-blue-1)",
    "variable": "var(--colors-blue-1)"
  },
  "colors.blue.2": {
    "value": "var(--colors-blue-2)",
    "variable": "var(--colors-blue-2)"
  },
  "colors.blue.3": {
    "value": "var(--colors-blue-3)",
    "variable": "var(--colors-blue-3)"
  },
  "colors.blue.4": {
    "value": "var(--colors-blue-4)",
    "variable": "var(--colors-blue-4)"
  },
  "colors.blue.5": {
    "value": "var(--colors-blue-5)",
    "variable": "var(--colors-blue-5)"
  },
  "colors.blue.6": {
    "value": "var(--colors-blue-6)",
    "variable": "var(--colors-blue-6)"
  },
  "colors.blue.7": {
    "value": "var(--colors-blue-7)",
    "variable": "var(--colors-blue-7)"
  },
  "colors.blue.8": {
    "value": "var(--colors-blue-8)",
    "variable": "var(--colors-blue-8)"
  },
  "colors.blue.9": {
    "value": "var(--colors-blue-9)",
    "variable": "var(--colors-blue-9)"
  },
  "colors.blue.10": {
    "value": "var(--colors-blue-10)",
    "variable": "var(--colors-blue-10)"
  },
  "colors.blue.11": {
    "value": "var(--colors-blue-11)",
    "variable": "var(--colors-blue-11)"
  },
  "colors.blue.12": {
    "value": "var(--colors-blue-12)",
    "variable": "var(--colors-blue-12)"
  },
  "colors.blue.a1": {
    "value": "var(--colors-blue-a1)",
    "variable": "var(--colors-blue-a1)"
  },
  "colors.blue.a2": {
    "value": "var(--colors-blue-a2)",
    "variable": "var(--colors-blue-a2)"
  },
  "colors.blue.a3": {
    "value": "var(--colors-blue-a3)",
    "variable": "var(--colors-blue-a3)"
  },
  "colors.blue.a4": {
    "value": "var(--colors-blue-a4)",
    "variable": "var(--colors-blue-a4)"
  },
  "colors.blue.a5": {
    "value": "var(--colors-blue-a5)",
    "variable": "var(--colors-blue-a5)"
  },
  "colors.blue.a6": {
    "value": "var(--colors-blue-a6)",
    "variable": "var(--colors-blue-a6)"
  },
  "colors.blue.a7": {
    "value": "var(--colors-blue-a7)",
    "variable": "var(--colors-blue-a7)"
  },
  "colors.blue.a8": {
    "value": "var(--colors-blue-a8)",
    "variable": "var(--colors-blue-a8)"
  },
  "colors.blue.a9": {
    "value": "var(--colors-blue-a9)",
    "variable": "var(--colors-blue-a9)"
  },
  "colors.blue.a10": {
    "value": "var(--colors-blue-a10)",
    "variable": "var(--colors-blue-a10)"
  },
  "colors.blue.a11": {
    "value": "var(--colors-blue-a11)",
    "variable": "var(--colors-blue-a11)"
  },
  "colors.blue.a12": {
    "value": "var(--colors-blue-a12)",
    "variable": "var(--colors-blue-a12)"
  },
  "colors.bronze.1": {
    "value": "var(--colors-bronze-1)",
    "variable": "var(--colors-bronze-1)"
  },
  "colors.bronze.2": {
    "value": "var(--colors-bronze-2)",
    "variable": "var(--colors-bronze-2)"
  },
  "colors.bronze.3": {
    "value": "var(--colors-bronze-3)",
    "variable": "var(--colors-bronze-3)"
  },
  "colors.bronze.4": {
    "value": "var(--colors-bronze-4)",
    "variable": "var(--colors-bronze-4)"
  },
  "colors.bronze.5": {
    "value": "var(--colors-bronze-5)",
    "variable": "var(--colors-bronze-5)"
  },
  "colors.bronze.6": {
    "value": "var(--colors-bronze-6)",
    "variable": "var(--colors-bronze-6)"
  },
  "colors.bronze.7": {
    "value": "var(--colors-bronze-7)",
    "variable": "var(--colors-bronze-7)"
  },
  "colors.bronze.8": {
    "value": "var(--colors-bronze-8)",
    "variable": "var(--colors-bronze-8)"
  },
  "colors.bronze.9": {
    "value": "var(--colors-bronze-9)",
    "variable": "var(--colors-bronze-9)"
  },
  "colors.bronze.10": {
    "value": "var(--colors-bronze-10)",
    "variable": "var(--colors-bronze-10)"
  },
  "colors.bronze.11": {
    "value": "var(--colors-bronze-11)",
    "variable": "var(--colors-bronze-11)"
  },
  "colors.bronze.12": {
    "value": "var(--colors-bronze-12)",
    "variable": "var(--colors-bronze-12)"
  },
  "colors.bronze.a1": {
    "value": "var(--colors-bronze-a1)",
    "variable": "var(--colors-bronze-a1)"
  },
  "colors.bronze.a2": {
    "value": "var(--colors-bronze-a2)",
    "variable": "var(--colors-bronze-a2)"
  },
  "colors.bronze.a3": {
    "value": "var(--colors-bronze-a3)",
    "variable": "var(--colors-bronze-a3)"
  },
  "colors.bronze.a4": {
    "value": "var(--colors-bronze-a4)",
    "variable": "var(--colors-bronze-a4)"
  },
  "colors.bronze.a5": {
    "value": "var(--colors-bronze-a5)",
    "variable": "var(--colors-bronze-a5)"
  },
  "colors.bronze.a6": {
    "value": "var(--colors-bronze-a6)",
    "variable": "var(--colors-bronze-a6)"
  },
  "colors.bronze.a7": {
    "value": "var(--colors-bronze-a7)",
    "variable": "var(--colors-bronze-a7)"
  },
  "colors.bronze.a8": {
    "value": "var(--colors-bronze-a8)",
    "variable": "var(--colors-bronze-a8)"
  },
  "colors.bronze.a9": {
    "value": "var(--colors-bronze-a9)",
    "variable": "var(--colors-bronze-a9)"
  },
  "colors.bronze.a10": {
    "value": "var(--colors-bronze-a10)",
    "variable": "var(--colors-bronze-a10)"
  },
  "colors.bronze.a11": {
    "value": "var(--colors-bronze-a11)",
    "variable": "var(--colors-bronze-a11)"
  },
  "colors.bronze.a12": {
    "value": "var(--colors-bronze-a12)",
    "variable": "var(--colors-bronze-a12)"
  },
  "colors.brown.1": {
    "value": "var(--colors-brown-1)",
    "variable": "var(--colors-brown-1)"
  },
  "colors.brown.2": {
    "value": "var(--colors-brown-2)",
    "variable": "var(--colors-brown-2)"
  },
  "colors.brown.3": {
    "value": "var(--colors-brown-3)",
    "variable": "var(--colors-brown-3)"
  },
  "colors.brown.4": {
    "value": "var(--colors-brown-4)",
    "variable": "var(--colors-brown-4)"
  },
  "colors.brown.5": {
    "value": "var(--colors-brown-5)",
    "variable": "var(--colors-brown-5)"
  },
  "colors.brown.6": {
    "value": "var(--colors-brown-6)",
    "variable": "var(--colors-brown-6)"
  },
  "colors.brown.7": {
    "value": "var(--colors-brown-7)",
    "variable": "var(--colors-brown-7)"
  },
  "colors.brown.8": {
    "value": "var(--colors-brown-8)",
    "variable": "var(--colors-brown-8)"
  },
  "colors.brown.9": {
    "value": "var(--colors-brown-9)",
    "variable": "var(--colors-brown-9)"
  },
  "colors.brown.10": {
    "value": "var(--colors-brown-10)",
    "variable": "var(--colors-brown-10)"
  },
  "colors.brown.11": {
    "value": "var(--colors-brown-11)",
    "variable": "var(--colors-brown-11)"
  },
  "colors.brown.12": {
    "value": "var(--colors-brown-12)",
    "variable": "var(--colors-brown-12)"
  },
  "colors.brown.a1": {
    "value": "var(--colors-brown-a1)",
    "variable": "var(--colors-brown-a1)"
  },
  "colors.brown.a2": {
    "value": "var(--colors-brown-a2)",
    "variable": "var(--colors-brown-a2)"
  },
  "colors.brown.a3": {
    "value": "var(--colors-brown-a3)",
    "variable": "var(--colors-brown-a3)"
  },
  "colors.brown.a4": {
    "value": "var(--colors-brown-a4)",
    "variable": "var(--colors-brown-a4)"
  },
  "colors.brown.a5": {
    "value": "var(--colors-brown-a5)",
    "variable": "var(--colors-brown-a5)"
  },
  "colors.brown.a6": {
    "value": "var(--colors-brown-a6)",
    "variable": "var(--colors-brown-a6)"
  },
  "colors.brown.a7": {
    "value": "var(--colors-brown-a7)",
    "variable": "var(--colors-brown-a7)"
  },
  "colors.brown.a8": {
    "value": "var(--colors-brown-a8)",
    "variable": "var(--colors-brown-a8)"
  },
  "colors.brown.a9": {
    "value": "var(--colors-brown-a9)",
    "variable": "var(--colors-brown-a9)"
  },
  "colors.brown.a10": {
    "value": "var(--colors-brown-a10)",
    "variable": "var(--colors-brown-a10)"
  },
  "colors.brown.a11": {
    "value": "var(--colors-brown-a11)",
    "variable": "var(--colors-brown-a11)"
  },
  "colors.brown.a12": {
    "value": "var(--colors-brown-a12)",
    "variable": "var(--colors-brown-a12)"
  },
  "colors.crimson.1": {
    "value": "var(--colors-crimson-1)",
    "variable": "var(--colors-crimson-1)"
  },
  "colors.crimson.2": {
    "value": "var(--colors-crimson-2)",
    "variable": "var(--colors-crimson-2)"
  },
  "colors.crimson.3": {
    "value": "var(--colors-crimson-3)",
    "variable": "var(--colors-crimson-3)"
  },
  "colors.crimson.4": {
    "value": "var(--colors-crimson-4)",
    "variable": "var(--colors-crimson-4)"
  },
  "colors.crimson.5": {
    "value": "var(--colors-crimson-5)",
    "variable": "var(--colors-crimson-5)"
  },
  "colors.crimson.6": {
    "value": "var(--colors-crimson-6)",
    "variable": "var(--colors-crimson-6)"
  },
  "colors.crimson.7": {
    "value": "var(--colors-crimson-7)",
    "variable": "var(--colors-crimson-7)"
  },
  "colors.crimson.8": {
    "value": "var(--colors-crimson-8)",
    "variable": "var(--colors-crimson-8)"
  },
  "colors.crimson.9": {
    "value": "var(--colors-crimson-9)",
    "variable": "var(--colors-crimson-9)"
  },
  "colors.crimson.10": {
    "value": "var(--colors-crimson-10)",
    "variable": "var(--colors-crimson-10)"
  },
  "colors.crimson.11": {
    "value": "var(--colors-crimson-11)",
    "variable": "var(--colors-crimson-11)"
  },
  "colors.crimson.12": {
    "value": "var(--colors-crimson-12)",
    "variable": "var(--colors-crimson-12)"
  },
  "colors.crimson.a1": {
    "value": "var(--colors-crimson-a1)",
    "variable": "var(--colors-crimson-a1)"
  },
  "colors.crimson.a2": {
    "value": "var(--colors-crimson-a2)",
    "variable": "var(--colors-crimson-a2)"
  },
  "colors.crimson.a3": {
    "value": "var(--colors-crimson-a3)",
    "variable": "var(--colors-crimson-a3)"
  },
  "colors.crimson.a4": {
    "value": "var(--colors-crimson-a4)",
    "variable": "var(--colors-crimson-a4)"
  },
  "colors.crimson.a5": {
    "value": "var(--colors-crimson-a5)",
    "variable": "var(--colors-crimson-a5)"
  },
  "colors.crimson.a6": {
    "value": "var(--colors-crimson-a6)",
    "variable": "var(--colors-crimson-a6)"
  },
  "colors.crimson.a7": {
    "value": "var(--colors-crimson-a7)",
    "variable": "var(--colors-crimson-a7)"
  },
  "colors.crimson.a8": {
    "value": "var(--colors-crimson-a8)",
    "variable": "var(--colors-crimson-a8)"
  },
  "colors.crimson.a9": {
    "value": "var(--colors-crimson-a9)",
    "variable": "var(--colors-crimson-a9)"
  },
  "colors.crimson.a10": {
    "value": "var(--colors-crimson-a10)",
    "variable": "var(--colors-crimson-a10)"
  },
  "colors.crimson.a11": {
    "value": "var(--colors-crimson-a11)",
    "variable": "var(--colors-crimson-a11)"
  },
  "colors.crimson.a12": {
    "value": "var(--colors-crimson-a12)",
    "variable": "var(--colors-crimson-a12)"
  },
  "colors.cyan.1": {
    "value": "var(--colors-cyan-1)",
    "variable": "var(--colors-cyan-1)"
  },
  "colors.cyan.2": {
    "value": "var(--colors-cyan-2)",
    "variable": "var(--colors-cyan-2)"
  },
  "colors.cyan.3": {
    "value": "var(--colors-cyan-3)",
    "variable": "var(--colors-cyan-3)"
  },
  "colors.cyan.4": {
    "value": "var(--colors-cyan-4)",
    "variable": "var(--colors-cyan-4)"
  },
  "colors.cyan.5": {
    "value": "var(--colors-cyan-5)",
    "variable": "var(--colors-cyan-5)"
  },
  "colors.cyan.6": {
    "value": "var(--colors-cyan-6)",
    "variable": "var(--colors-cyan-6)"
  },
  "colors.cyan.7": {
    "value": "var(--colors-cyan-7)",
    "variable": "var(--colors-cyan-7)"
  },
  "colors.cyan.8": {
    "value": "var(--colors-cyan-8)",
    "variable": "var(--colors-cyan-8)"
  },
  "colors.cyan.9": {
    "value": "var(--colors-cyan-9)",
    "variable": "var(--colors-cyan-9)"
  },
  "colors.cyan.10": {
    "value": "var(--colors-cyan-10)",
    "variable": "var(--colors-cyan-10)"
  },
  "colors.cyan.11": {
    "value": "var(--colors-cyan-11)",
    "variable": "var(--colors-cyan-11)"
  },
  "colors.cyan.12": {
    "value": "var(--colors-cyan-12)",
    "variable": "var(--colors-cyan-12)"
  },
  "colors.cyan.a1": {
    "value": "var(--colors-cyan-a1)",
    "variable": "var(--colors-cyan-a1)"
  },
  "colors.cyan.a2": {
    "value": "var(--colors-cyan-a2)",
    "variable": "var(--colors-cyan-a2)"
  },
  "colors.cyan.a3": {
    "value": "var(--colors-cyan-a3)",
    "variable": "var(--colors-cyan-a3)"
  },
  "colors.cyan.a4": {
    "value": "var(--colors-cyan-a4)",
    "variable": "var(--colors-cyan-a4)"
  },
  "colors.cyan.a5": {
    "value": "var(--colors-cyan-a5)",
    "variable": "var(--colors-cyan-a5)"
  },
  "colors.cyan.a6": {
    "value": "var(--colors-cyan-a6)",
    "variable": "var(--colors-cyan-a6)"
  },
  "colors.cyan.a7": {
    "value": "var(--colors-cyan-a7)",
    "variable": "var(--colors-cyan-a7)"
  },
  "colors.cyan.a8": {
    "value": "var(--colors-cyan-a8)",
    "variable": "var(--colors-cyan-a8)"
  },
  "colors.cyan.a9": {
    "value": "var(--colors-cyan-a9)",
    "variable": "var(--colors-cyan-a9)"
  },
  "colors.cyan.a10": {
    "value": "var(--colors-cyan-a10)",
    "variable": "var(--colors-cyan-a10)"
  },
  "colors.cyan.a11": {
    "value": "var(--colors-cyan-a11)",
    "variable": "var(--colors-cyan-a11)"
  },
  "colors.cyan.a12": {
    "value": "var(--colors-cyan-a12)",
    "variable": "var(--colors-cyan-a12)"
  },
  "colors.gold.1": {
    "value": "var(--colors-gold-1)",
    "variable": "var(--colors-gold-1)"
  },
  "colors.gold.2": {
    "value": "var(--colors-gold-2)",
    "variable": "var(--colors-gold-2)"
  },
  "colors.gold.3": {
    "value": "var(--colors-gold-3)",
    "variable": "var(--colors-gold-3)"
  },
  "colors.gold.4": {
    "value": "var(--colors-gold-4)",
    "variable": "var(--colors-gold-4)"
  },
  "colors.gold.5": {
    "value": "var(--colors-gold-5)",
    "variable": "var(--colors-gold-5)"
  },
  "colors.gold.6": {
    "value": "var(--colors-gold-6)",
    "variable": "var(--colors-gold-6)"
  },
  "colors.gold.7": {
    "value": "var(--colors-gold-7)",
    "variable": "var(--colors-gold-7)"
  },
  "colors.gold.8": {
    "value": "var(--colors-gold-8)",
    "variable": "var(--colors-gold-8)"
  },
  "colors.gold.9": {
    "value": "var(--colors-gold-9)",
    "variable": "var(--colors-gold-9)"
  },
  "colors.gold.10": {
    "value": "var(--colors-gold-10)",
    "variable": "var(--colors-gold-10)"
  },
  "colors.gold.11": {
    "value": "var(--colors-gold-11)",
    "variable": "var(--colors-gold-11)"
  },
  "colors.gold.12": {
    "value": "var(--colors-gold-12)",
    "variable": "var(--colors-gold-12)"
  },
  "colors.gold.a1": {
    "value": "var(--colors-gold-a1)",
    "variable": "var(--colors-gold-a1)"
  },
  "colors.gold.a2": {
    "value": "var(--colors-gold-a2)",
    "variable": "var(--colors-gold-a2)"
  },
  "colors.gold.a3": {
    "value": "var(--colors-gold-a3)",
    "variable": "var(--colors-gold-a3)"
  },
  "colors.gold.a4": {
    "value": "var(--colors-gold-a4)",
    "variable": "var(--colors-gold-a4)"
  },
  "colors.gold.a5": {
    "value": "var(--colors-gold-a5)",
    "variable": "var(--colors-gold-a5)"
  },
  "colors.gold.a6": {
    "value": "var(--colors-gold-a6)",
    "variable": "var(--colors-gold-a6)"
  },
  "colors.gold.a7": {
    "value": "var(--colors-gold-a7)",
    "variable": "var(--colors-gold-a7)"
  },
  "colors.gold.a8": {
    "value": "var(--colors-gold-a8)",
    "variable": "var(--colors-gold-a8)"
  },
  "colors.gold.a9": {
    "value": "var(--colors-gold-a9)",
    "variable": "var(--colors-gold-a9)"
  },
  "colors.gold.a10": {
    "value": "var(--colors-gold-a10)",
    "variable": "var(--colors-gold-a10)"
  },
  "colors.gold.a11": {
    "value": "var(--colors-gold-a11)",
    "variable": "var(--colors-gold-a11)"
  },
  "colors.gold.a12": {
    "value": "var(--colors-gold-a12)",
    "variable": "var(--colors-gold-a12)"
  },
  "colors.grass.1": {
    "value": "var(--colors-grass-1)",
    "variable": "var(--colors-grass-1)"
  },
  "colors.grass.2": {
    "value": "var(--colors-grass-2)",
    "variable": "var(--colors-grass-2)"
  },
  "colors.grass.3": {
    "value": "var(--colors-grass-3)",
    "variable": "var(--colors-grass-3)"
  },
  "colors.grass.4": {
    "value": "var(--colors-grass-4)",
    "variable": "var(--colors-grass-4)"
  },
  "colors.grass.5": {
    "value": "var(--colors-grass-5)",
    "variable": "var(--colors-grass-5)"
  },
  "colors.grass.6": {
    "value": "var(--colors-grass-6)",
    "variable": "var(--colors-grass-6)"
  },
  "colors.grass.7": {
    "value": "var(--colors-grass-7)",
    "variable": "var(--colors-grass-7)"
  },
  "colors.grass.8": {
    "value": "var(--colors-grass-8)",
    "variable": "var(--colors-grass-8)"
  },
  "colors.grass.9": {
    "value": "var(--colors-grass-9)",
    "variable": "var(--colors-grass-9)"
  },
  "colors.grass.10": {
    "value": "var(--colors-grass-10)",
    "variable": "var(--colors-grass-10)"
  },
  "colors.grass.11": {
    "value": "var(--colors-grass-11)",
    "variable": "var(--colors-grass-11)"
  },
  "colors.grass.12": {
    "value": "var(--colors-grass-12)",
    "variable": "var(--colors-grass-12)"
  },
  "colors.grass.a1": {
    "value": "var(--colors-grass-a1)",
    "variable": "var(--colors-grass-a1)"
  },
  "colors.grass.a2": {
    "value": "var(--colors-grass-a2)",
    "variable": "var(--colors-grass-a2)"
  },
  "colors.grass.a3": {
    "value": "var(--colors-grass-a3)",
    "variable": "var(--colors-grass-a3)"
  },
  "colors.grass.a4": {
    "value": "var(--colors-grass-a4)",
    "variable": "var(--colors-grass-a4)"
  },
  "colors.grass.a5": {
    "value": "var(--colors-grass-a5)",
    "variable": "var(--colors-grass-a5)"
  },
  "colors.grass.a6": {
    "value": "var(--colors-grass-a6)",
    "variable": "var(--colors-grass-a6)"
  },
  "colors.grass.a7": {
    "value": "var(--colors-grass-a7)",
    "variable": "var(--colors-grass-a7)"
  },
  "colors.grass.a8": {
    "value": "var(--colors-grass-a8)",
    "variable": "var(--colors-grass-a8)"
  },
  "colors.grass.a9": {
    "value": "var(--colors-grass-a9)",
    "variable": "var(--colors-grass-a9)"
  },
  "colors.grass.a10": {
    "value": "var(--colors-grass-a10)",
    "variable": "var(--colors-grass-a10)"
  },
  "colors.grass.a11": {
    "value": "var(--colors-grass-a11)",
    "variable": "var(--colors-grass-a11)"
  },
  "colors.grass.a12": {
    "value": "var(--colors-grass-a12)",
    "variable": "var(--colors-grass-a12)"
  },
  "colors.green.1": {
    "value": "var(--colors-green-1)",
    "variable": "var(--colors-green-1)"
  },
  "colors.green.2": {
    "value": "var(--colors-green-2)",
    "variable": "var(--colors-green-2)"
  },
  "colors.green.3": {
    "value": "var(--colors-green-3)",
    "variable": "var(--colors-green-3)"
  },
  "colors.green.4": {
    "value": "var(--colors-green-4)",
    "variable": "var(--colors-green-4)"
  },
  "colors.green.5": {
    "value": "var(--colors-green-5)",
    "variable": "var(--colors-green-5)"
  },
  "colors.green.6": {
    "value": "var(--colors-green-6)",
    "variable": "var(--colors-green-6)"
  },
  "colors.green.7": {
    "value": "var(--colors-green-7)",
    "variable": "var(--colors-green-7)"
  },
  "colors.green.8": {
    "value": "var(--colors-green-8)",
    "variable": "var(--colors-green-8)"
  },
  "colors.green.9": {
    "value": "var(--colors-green-9)",
    "variable": "var(--colors-green-9)"
  },
  "colors.green.10": {
    "value": "var(--colors-green-10)",
    "variable": "var(--colors-green-10)"
  },
  "colors.green.11": {
    "value": "var(--colors-green-11)",
    "variable": "var(--colors-green-11)"
  },
  "colors.green.12": {
    "value": "var(--colors-green-12)",
    "variable": "var(--colors-green-12)"
  },
  "colors.green.a1": {
    "value": "var(--colors-green-a1)",
    "variable": "var(--colors-green-a1)"
  },
  "colors.green.a2": {
    "value": "var(--colors-green-a2)",
    "variable": "var(--colors-green-a2)"
  },
  "colors.green.a3": {
    "value": "var(--colors-green-a3)",
    "variable": "var(--colors-green-a3)"
  },
  "colors.green.a4": {
    "value": "var(--colors-green-a4)",
    "variable": "var(--colors-green-a4)"
  },
  "colors.green.a5": {
    "value": "var(--colors-green-a5)",
    "variable": "var(--colors-green-a5)"
  },
  "colors.green.a6": {
    "value": "var(--colors-green-a6)",
    "variable": "var(--colors-green-a6)"
  },
  "colors.green.a7": {
    "value": "var(--colors-green-a7)",
    "variable": "var(--colors-green-a7)"
  },
  "colors.green.a8": {
    "value": "var(--colors-green-a8)",
    "variable": "var(--colors-green-a8)"
  },
  "colors.green.a9": {
    "value": "var(--colors-green-a9)",
    "variable": "var(--colors-green-a9)"
  },
  "colors.green.a10": {
    "value": "var(--colors-green-a10)",
    "variable": "var(--colors-green-a10)"
  },
  "colors.green.a11": {
    "value": "var(--colors-green-a11)",
    "variable": "var(--colors-green-a11)"
  },
  "colors.green.a12": {
    "value": "var(--colors-green-a12)",
    "variable": "var(--colors-green-a12)"
  },
  "colors.indigo.1": {
    "value": "var(--colors-indigo-1)",
    "variable": "var(--colors-indigo-1)"
  },
  "colors.indigo.2": {
    "value": "var(--colors-indigo-2)",
    "variable": "var(--colors-indigo-2)"
  },
  "colors.indigo.3": {
    "value": "var(--colors-indigo-3)",
    "variable": "var(--colors-indigo-3)"
  },
  "colors.indigo.4": {
    "value": "var(--colors-indigo-4)",
    "variable": "var(--colors-indigo-4)"
  },
  "colors.indigo.5": {
    "value": "var(--colors-indigo-5)",
    "variable": "var(--colors-indigo-5)"
  },
  "colors.indigo.6": {
    "value": "var(--colors-indigo-6)",
    "variable": "var(--colors-indigo-6)"
  },
  "colors.indigo.7": {
    "value": "var(--colors-indigo-7)",
    "variable": "var(--colors-indigo-7)"
  },
  "colors.indigo.8": {
    "value": "var(--colors-indigo-8)",
    "variable": "var(--colors-indigo-8)"
  },
  "colors.indigo.9": {
    "value": "var(--colors-indigo-9)",
    "variable": "var(--colors-indigo-9)"
  },
  "colors.indigo.10": {
    "value": "var(--colors-indigo-10)",
    "variable": "var(--colors-indigo-10)"
  },
  "colors.indigo.11": {
    "value": "var(--colors-indigo-11)",
    "variable": "var(--colors-indigo-11)"
  },
  "colors.indigo.12": {
    "value": "var(--colors-indigo-12)",
    "variable": "var(--colors-indigo-12)"
  },
  "colors.indigo.a1": {
    "value": "var(--colors-indigo-a1)",
    "variable": "var(--colors-indigo-a1)"
  },
  "colors.indigo.a2": {
    "value": "var(--colors-indigo-a2)",
    "variable": "var(--colors-indigo-a2)"
  },
  "colors.indigo.a3": {
    "value": "var(--colors-indigo-a3)",
    "variable": "var(--colors-indigo-a3)"
  },
  "colors.indigo.a4": {
    "value": "var(--colors-indigo-a4)",
    "variable": "var(--colors-indigo-a4)"
  },
  "colors.indigo.a5": {
    "value": "var(--colors-indigo-a5)",
    "variable": "var(--colors-indigo-a5)"
  },
  "colors.indigo.a6": {
    "value": "var(--colors-indigo-a6)",
    "variable": "var(--colors-indigo-a6)"
  },
  "colors.indigo.a7": {
    "value": "var(--colors-indigo-a7)",
    "variable": "var(--colors-indigo-a7)"
  },
  "colors.indigo.a8": {
    "value": "var(--colors-indigo-a8)",
    "variable": "var(--colors-indigo-a8)"
  },
  "colors.indigo.a9": {
    "value": "var(--colors-indigo-a9)",
    "variable": "var(--colors-indigo-a9)"
  },
  "colors.indigo.a10": {
    "value": "var(--colors-indigo-a10)",
    "variable": "var(--colors-indigo-a10)"
  },
  "colors.indigo.a11": {
    "value": "var(--colors-indigo-a11)",
    "variable": "var(--colors-indigo-a11)"
  },
  "colors.indigo.a12": {
    "value": "var(--colors-indigo-a12)",
    "variable": "var(--colors-indigo-a12)"
  },
  "colors.iris.1": {
    "value": "var(--colors-iris-1)",
    "variable": "var(--colors-iris-1)"
  },
  "colors.iris.2": {
    "value": "var(--colors-iris-2)",
    "variable": "var(--colors-iris-2)"
  },
  "colors.iris.3": {
    "value": "var(--colors-iris-3)",
    "variable": "var(--colors-iris-3)"
  },
  "colors.iris.4": {
    "value": "var(--colors-iris-4)",
    "variable": "var(--colors-iris-4)"
  },
  "colors.iris.5": {
    "value": "var(--colors-iris-5)",
    "variable": "var(--colors-iris-5)"
  },
  "colors.iris.6": {
    "value": "var(--colors-iris-6)",
    "variable": "var(--colors-iris-6)"
  },
  "colors.iris.7": {
    "value": "var(--colors-iris-7)",
    "variable": "var(--colors-iris-7)"
  },
  "colors.iris.8": {
    "value": "var(--colors-iris-8)",
    "variable": "var(--colors-iris-8)"
  },
  "colors.iris.9": {
    "value": "var(--colors-iris-9)",
    "variable": "var(--colors-iris-9)"
  },
  "colors.iris.10": {
    "value": "var(--colors-iris-10)",
    "variable": "var(--colors-iris-10)"
  },
  "colors.iris.11": {
    "value": "var(--colors-iris-11)",
    "variable": "var(--colors-iris-11)"
  },
  "colors.iris.12": {
    "value": "var(--colors-iris-12)",
    "variable": "var(--colors-iris-12)"
  },
  "colors.iris.a1": {
    "value": "var(--colors-iris-a1)",
    "variable": "var(--colors-iris-a1)"
  },
  "colors.iris.a2": {
    "value": "var(--colors-iris-a2)",
    "variable": "var(--colors-iris-a2)"
  },
  "colors.iris.a3": {
    "value": "var(--colors-iris-a3)",
    "variable": "var(--colors-iris-a3)"
  },
  "colors.iris.a4": {
    "value": "var(--colors-iris-a4)",
    "variable": "var(--colors-iris-a4)"
  },
  "colors.iris.a5": {
    "value": "var(--colors-iris-a5)",
    "variable": "var(--colors-iris-a5)"
  },
  "colors.iris.a6": {
    "value": "var(--colors-iris-a6)",
    "variable": "var(--colors-iris-a6)"
  },
  "colors.iris.a7": {
    "value": "var(--colors-iris-a7)",
    "variable": "var(--colors-iris-a7)"
  },
  "colors.iris.a8": {
    "value": "var(--colors-iris-a8)",
    "variable": "var(--colors-iris-a8)"
  },
  "colors.iris.a9": {
    "value": "var(--colors-iris-a9)",
    "variable": "var(--colors-iris-a9)"
  },
  "colors.iris.a10": {
    "value": "var(--colors-iris-a10)",
    "variable": "var(--colors-iris-a10)"
  },
  "colors.iris.a11": {
    "value": "var(--colors-iris-a11)",
    "variable": "var(--colors-iris-a11)"
  },
  "colors.iris.a12": {
    "value": "var(--colors-iris-a12)",
    "variable": "var(--colors-iris-a12)"
  },
  "colors.jade.1": {
    "value": "var(--colors-jade-1)",
    "variable": "var(--colors-jade-1)"
  },
  "colors.jade.2": {
    "value": "var(--colors-jade-2)",
    "variable": "var(--colors-jade-2)"
  },
  "colors.jade.3": {
    "value": "var(--colors-jade-3)",
    "variable": "var(--colors-jade-3)"
  },
  "colors.jade.4": {
    "value": "var(--colors-jade-4)",
    "variable": "var(--colors-jade-4)"
  },
  "colors.jade.5": {
    "value": "var(--colors-jade-5)",
    "variable": "var(--colors-jade-5)"
  },
  "colors.jade.6": {
    "value": "var(--colors-jade-6)",
    "variable": "var(--colors-jade-6)"
  },
  "colors.jade.7": {
    "value": "var(--colors-jade-7)",
    "variable": "var(--colors-jade-7)"
  },
  "colors.jade.8": {
    "value": "var(--colors-jade-8)",
    "variable": "var(--colors-jade-8)"
  },
  "colors.jade.9": {
    "value": "var(--colors-jade-9)",
    "variable": "var(--colors-jade-9)"
  },
  "colors.jade.10": {
    "value": "var(--colors-jade-10)",
    "variable": "var(--colors-jade-10)"
  },
  "colors.jade.11": {
    "value": "var(--colors-jade-11)",
    "variable": "var(--colors-jade-11)"
  },
  "colors.jade.12": {
    "value": "var(--colors-jade-12)",
    "variable": "var(--colors-jade-12)"
  },
  "colors.jade.a1": {
    "value": "var(--colors-jade-a1)",
    "variable": "var(--colors-jade-a1)"
  },
  "colors.jade.a2": {
    "value": "var(--colors-jade-a2)",
    "variable": "var(--colors-jade-a2)"
  },
  "colors.jade.a3": {
    "value": "var(--colors-jade-a3)",
    "variable": "var(--colors-jade-a3)"
  },
  "colors.jade.a4": {
    "value": "var(--colors-jade-a4)",
    "variable": "var(--colors-jade-a4)"
  },
  "colors.jade.a5": {
    "value": "var(--colors-jade-a5)",
    "variable": "var(--colors-jade-a5)"
  },
  "colors.jade.a6": {
    "value": "var(--colors-jade-a6)",
    "variable": "var(--colors-jade-a6)"
  },
  "colors.jade.a7": {
    "value": "var(--colors-jade-a7)",
    "variable": "var(--colors-jade-a7)"
  },
  "colors.jade.a8": {
    "value": "var(--colors-jade-a8)",
    "variable": "var(--colors-jade-a8)"
  },
  "colors.jade.a9": {
    "value": "var(--colors-jade-a9)",
    "variable": "var(--colors-jade-a9)"
  },
  "colors.jade.a10": {
    "value": "var(--colors-jade-a10)",
    "variable": "var(--colors-jade-a10)"
  },
  "colors.jade.a11": {
    "value": "var(--colors-jade-a11)",
    "variable": "var(--colors-jade-a11)"
  },
  "colors.jade.a12": {
    "value": "var(--colors-jade-a12)",
    "variable": "var(--colors-jade-a12)"
  },
  "colors.lime.1": {
    "value": "var(--colors-lime-1)",
    "variable": "var(--colors-lime-1)"
  },
  "colors.lime.2": {
    "value": "var(--colors-lime-2)",
    "variable": "var(--colors-lime-2)"
  },
  "colors.lime.3": {
    "value": "var(--colors-lime-3)",
    "variable": "var(--colors-lime-3)"
  },
  "colors.lime.4": {
    "value": "var(--colors-lime-4)",
    "variable": "var(--colors-lime-4)"
  },
  "colors.lime.5": {
    "value": "var(--colors-lime-5)",
    "variable": "var(--colors-lime-5)"
  },
  "colors.lime.6": {
    "value": "var(--colors-lime-6)",
    "variable": "var(--colors-lime-6)"
  },
  "colors.lime.7": {
    "value": "var(--colors-lime-7)",
    "variable": "var(--colors-lime-7)"
  },
  "colors.lime.8": {
    "value": "var(--colors-lime-8)",
    "variable": "var(--colors-lime-8)"
  },
  "colors.lime.9": {
    "value": "var(--colors-lime-9)",
    "variable": "var(--colors-lime-9)"
  },
  "colors.lime.10": {
    "value": "var(--colors-lime-10)",
    "variable": "var(--colors-lime-10)"
  },
  "colors.lime.11": {
    "value": "var(--colors-lime-11)",
    "variable": "var(--colors-lime-11)"
  },
  "colors.lime.12": {
    "value": "var(--colors-lime-12)",
    "variable": "var(--colors-lime-12)"
  },
  "colors.lime.a1": {
    "value": "var(--colors-lime-a1)",
    "variable": "var(--colors-lime-a1)"
  },
  "colors.lime.a2": {
    "value": "var(--colors-lime-a2)",
    "variable": "var(--colors-lime-a2)"
  },
  "colors.lime.a3": {
    "value": "var(--colors-lime-a3)",
    "variable": "var(--colors-lime-a3)"
  },
  "colors.lime.a4": {
    "value": "var(--colors-lime-a4)",
    "variable": "var(--colors-lime-a4)"
  },
  "colors.lime.a5": {
    "value": "var(--colors-lime-a5)",
    "variable": "var(--colors-lime-a5)"
  },
  "colors.lime.a6": {
    "value": "var(--colors-lime-a6)",
    "variable": "var(--colors-lime-a6)"
  },
  "colors.lime.a7": {
    "value": "var(--colors-lime-a7)",
    "variable": "var(--colors-lime-a7)"
  },
  "colors.lime.a8": {
    "value": "var(--colors-lime-a8)",
    "variable": "var(--colors-lime-a8)"
  },
  "colors.lime.a9": {
    "value": "var(--colors-lime-a9)",
    "variable": "var(--colors-lime-a9)"
  },
  "colors.lime.a10": {
    "value": "var(--colors-lime-a10)",
    "variable": "var(--colors-lime-a10)"
  },
  "colors.lime.a11": {
    "value": "var(--colors-lime-a11)",
    "variable": "var(--colors-lime-a11)"
  },
  "colors.lime.a12": {
    "value": "var(--colors-lime-a12)",
    "variable": "var(--colors-lime-a12)"
  },
  "colors.mauve.1": {
    "value": "var(--colors-mauve-1)",
    "variable": "var(--colors-mauve-1)"
  },
  "colors.mauve.2": {
    "value": "var(--colors-mauve-2)",
    "variable": "var(--colors-mauve-2)"
  },
  "colors.mauve.3": {
    "value": "var(--colors-mauve-3)",
    "variable": "var(--colors-mauve-3)"
  },
  "colors.mauve.4": {
    "value": "var(--colors-mauve-4)",
    "variable": "var(--colors-mauve-4)"
  },
  "colors.mauve.5": {
    "value": "var(--colors-mauve-5)",
    "variable": "var(--colors-mauve-5)"
  },
  "colors.mauve.6": {
    "value": "var(--colors-mauve-6)",
    "variable": "var(--colors-mauve-6)"
  },
  "colors.mauve.7": {
    "value": "var(--colors-mauve-7)",
    "variable": "var(--colors-mauve-7)"
  },
  "colors.mauve.8": {
    "value": "var(--colors-mauve-8)",
    "variable": "var(--colors-mauve-8)"
  },
  "colors.mauve.9": {
    "value": "var(--colors-mauve-9)",
    "variable": "var(--colors-mauve-9)"
  },
  "colors.mauve.10": {
    "value": "var(--colors-mauve-10)",
    "variable": "var(--colors-mauve-10)"
  },
  "colors.mauve.11": {
    "value": "var(--colors-mauve-11)",
    "variable": "var(--colors-mauve-11)"
  },
  "colors.mauve.12": {
    "value": "var(--colors-mauve-12)",
    "variable": "var(--colors-mauve-12)"
  },
  "colors.mauve.a1": {
    "value": "var(--colors-mauve-a1)",
    "variable": "var(--colors-mauve-a1)"
  },
  "colors.mauve.a2": {
    "value": "var(--colors-mauve-a2)",
    "variable": "var(--colors-mauve-a2)"
  },
  "colors.mauve.a3": {
    "value": "var(--colors-mauve-a3)",
    "variable": "var(--colors-mauve-a3)"
  },
  "colors.mauve.a4": {
    "value": "var(--colors-mauve-a4)",
    "variable": "var(--colors-mauve-a4)"
  },
  "colors.mauve.a5": {
    "value": "var(--colors-mauve-a5)",
    "variable": "var(--colors-mauve-a5)"
  },
  "colors.mauve.a6": {
    "value": "var(--colors-mauve-a6)",
    "variable": "var(--colors-mauve-a6)"
  },
  "colors.mauve.a7": {
    "value": "var(--colors-mauve-a7)",
    "variable": "var(--colors-mauve-a7)"
  },
  "colors.mauve.a8": {
    "value": "var(--colors-mauve-a8)",
    "variable": "var(--colors-mauve-a8)"
  },
  "colors.mauve.a9": {
    "value": "var(--colors-mauve-a9)",
    "variable": "var(--colors-mauve-a9)"
  },
  "colors.mauve.a10": {
    "value": "var(--colors-mauve-a10)",
    "variable": "var(--colors-mauve-a10)"
  },
  "colors.mauve.a11": {
    "value": "var(--colors-mauve-a11)",
    "variable": "var(--colors-mauve-a11)"
  },
  "colors.mauve.a12": {
    "value": "var(--colors-mauve-a12)",
    "variable": "var(--colors-mauve-a12)"
  },
  "colors.mint.1": {
    "value": "var(--colors-mint-1)",
    "variable": "var(--colors-mint-1)"
  },
  "colors.mint.2": {
    "value": "var(--colors-mint-2)",
    "variable": "var(--colors-mint-2)"
  },
  "colors.mint.3": {
    "value": "var(--colors-mint-3)",
    "variable": "var(--colors-mint-3)"
  },
  "colors.mint.4": {
    "value": "var(--colors-mint-4)",
    "variable": "var(--colors-mint-4)"
  },
  "colors.mint.5": {
    "value": "var(--colors-mint-5)",
    "variable": "var(--colors-mint-5)"
  },
  "colors.mint.6": {
    "value": "var(--colors-mint-6)",
    "variable": "var(--colors-mint-6)"
  },
  "colors.mint.7": {
    "value": "var(--colors-mint-7)",
    "variable": "var(--colors-mint-7)"
  },
  "colors.mint.8": {
    "value": "var(--colors-mint-8)",
    "variable": "var(--colors-mint-8)"
  },
  "colors.mint.9": {
    "value": "var(--colors-mint-9)",
    "variable": "var(--colors-mint-9)"
  },
  "colors.mint.10": {
    "value": "var(--colors-mint-10)",
    "variable": "var(--colors-mint-10)"
  },
  "colors.mint.11": {
    "value": "var(--colors-mint-11)",
    "variable": "var(--colors-mint-11)"
  },
  "colors.mint.12": {
    "value": "var(--colors-mint-12)",
    "variable": "var(--colors-mint-12)"
  },
  "colors.mint.a1": {
    "value": "var(--colors-mint-a1)",
    "variable": "var(--colors-mint-a1)"
  },
  "colors.mint.a2": {
    "value": "var(--colors-mint-a2)",
    "variable": "var(--colors-mint-a2)"
  },
  "colors.mint.a3": {
    "value": "var(--colors-mint-a3)",
    "variable": "var(--colors-mint-a3)"
  },
  "colors.mint.a4": {
    "value": "var(--colors-mint-a4)",
    "variable": "var(--colors-mint-a4)"
  },
  "colors.mint.a5": {
    "value": "var(--colors-mint-a5)",
    "variable": "var(--colors-mint-a5)"
  },
  "colors.mint.a6": {
    "value": "var(--colors-mint-a6)",
    "variable": "var(--colors-mint-a6)"
  },
  "colors.mint.a7": {
    "value": "var(--colors-mint-a7)",
    "variable": "var(--colors-mint-a7)"
  },
  "colors.mint.a8": {
    "value": "var(--colors-mint-a8)",
    "variable": "var(--colors-mint-a8)"
  },
  "colors.mint.a9": {
    "value": "var(--colors-mint-a9)",
    "variable": "var(--colors-mint-a9)"
  },
  "colors.mint.a10": {
    "value": "var(--colors-mint-a10)",
    "variable": "var(--colors-mint-a10)"
  },
  "colors.mint.a11": {
    "value": "var(--colors-mint-a11)",
    "variable": "var(--colors-mint-a11)"
  },
  "colors.mint.a12": {
    "value": "var(--colors-mint-a12)",
    "variable": "var(--colors-mint-a12)"
  },
  "colors.neutral.1": {
    "value": "var(--colors-neutral-1)",
    "variable": "var(--colors-neutral-1)"
  },
  "colors.neutral.2": {
    "value": "var(--colors-neutral-2)",
    "variable": "var(--colors-neutral-2)"
  },
  "colors.neutral.3": {
    "value": "var(--colors-neutral-3)",
    "variable": "var(--colors-neutral-3)"
  },
  "colors.neutral.4": {
    "value": "var(--colors-neutral-4)",
    "variable": "var(--colors-neutral-4)"
  },
  "colors.neutral.5": {
    "value": "var(--colors-neutral-5)",
    "variable": "var(--colors-neutral-5)"
  },
  "colors.neutral.6": {
    "value": "var(--colors-neutral-6)",
    "variable": "var(--colors-neutral-6)"
  },
  "colors.neutral.7": {
    "value": "var(--colors-neutral-7)",
    "variable": "var(--colors-neutral-7)"
  },
  "colors.neutral.8": {
    "value": "var(--colors-neutral-8)",
    "variable": "var(--colors-neutral-8)"
  },
  "colors.neutral.9": {
    "value": "var(--colors-neutral-9)",
    "variable": "var(--colors-neutral-9)"
  },
  "colors.neutral.10": {
    "value": "var(--colors-neutral-10)",
    "variable": "var(--colors-neutral-10)"
  },
  "colors.neutral.11": {
    "value": "var(--colors-neutral-11)",
    "variable": "var(--colors-neutral-11)"
  },
  "colors.neutral.12": {
    "value": "var(--colors-neutral-12)",
    "variable": "var(--colors-neutral-12)"
  },
  "colors.neutral.a1": {
    "value": "var(--colors-neutral-a1)",
    "variable": "var(--colors-neutral-a1)"
  },
  "colors.neutral.a2": {
    "value": "var(--colors-neutral-a2)",
    "variable": "var(--colors-neutral-a2)"
  },
  "colors.neutral.a3": {
    "value": "var(--colors-neutral-a3)",
    "variable": "var(--colors-neutral-a3)"
  },
  "colors.neutral.a4": {
    "value": "var(--colors-neutral-a4)",
    "variable": "var(--colors-neutral-a4)"
  },
  "colors.neutral.a5": {
    "value": "var(--colors-neutral-a5)",
    "variable": "var(--colors-neutral-a5)"
  },
  "colors.neutral.a6": {
    "value": "var(--colors-neutral-a6)",
    "variable": "var(--colors-neutral-a6)"
  },
  "colors.neutral.a7": {
    "value": "var(--colors-neutral-a7)",
    "variable": "var(--colors-neutral-a7)"
  },
  "colors.neutral.a8": {
    "value": "var(--colors-neutral-a8)",
    "variable": "var(--colors-neutral-a8)"
  },
  "colors.neutral.a9": {
    "value": "var(--colors-neutral-a9)",
    "variable": "var(--colors-neutral-a9)"
  },
  "colors.neutral.a10": {
    "value": "var(--colors-neutral-a10)",
    "variable": "var(--colors-neutral-a10)"
  },
  "colors.neutral.a11": {
    "value": "var(--colors-neutral-a11)",
    "variable": "var(--colors-neutral-a11)"
  },
  "colors.neutral.a12": {
    "value": "var(--colors-neutral-a12)",
    "variable": "var(--colors-neutral-a12)"
  },
  "colors.olive.1": {
    "value": "var(--colors-olive-1)",
    "variable": "var(--colors-olive-1)"
  },
  "colors.olive.2": {
    "value": "var(--colors-olive-2)",
    "variable": "var(--colors-olive-2)"
  },
  "colors.olive.3": {
    "value": "var(--colors-olive-3)",
    "variable": "var(--colors-olive-3)"
  },
  "colors.olive.4": {
    "value": "var(--colors-olive-4)",
    "variable": "var(--colors-olive-4)"
  },
  "colors.olive.5": {
    "value": "var(--colors-olive-5)",
    "variable": "var(--colors-olive-5)"
  },
  "colors.olive.6": {
    "value": "var(--colors-olive-6)",
    "variable": "var(--colors-olive-6)"
  },
  "colors.olive.7": {
    "value": "var(--colors-olive-7)",
    "variable": "var(--colors-olive-7)"
  },
  "colors.olive.8": {
    "value": "var(--colors-olive-8)",
    "variable": "var(--colors-olive-8)"
  },
  "colors.olive.9": {
    "value": "var(--colors-olive-9)",
    "variable": "var(--colors-olive-9)"
  },
  "colors.olive.10": {
    "value": "var(--colors-olive-10)",
    "variable": "var(--colors-olive-10)"
  },
  "colors.olive.11": {
    "value": "var(--colors-olive-11)",
    "variable": "var(--colors-olive-11)"
  },
  "colors.olive.12": {
    "value": "var(--colors-olive-12)",
    "variable": "var(--colors-olive-12)"
  },
  "colors.olive.a1": {
    "value": "var(--colors-olive-a1)",
    "variable": "var(--colors-olive-a1)"
  },
  "colors.olive.a2": {
    "value": "var(--colors-olive-a2)",
    "variable": "var(--colors-olive-a2)"
  },
  "colors.olive.a3": {
    "value": "var(--colors-olive-a3)",
    "variable": "var(--colors-olive-a3)"
  },
  "colors.olive.a4": {
    "value": "var(--colors-olive-a4)",
    "variable": "var(--colors-olive-a4)"
  },
  "colors.olive.a5": {
    "value": "var(--colors-olive-a5)",
    "variable": "var(--colors-olive-a5)"
  },
  "colors.olive.a6": {
    "value": "var(--colors-olive-a6)",
    "variable": "var(--colors-olive-a6)"
  },
  "colors.olive.a7": {
    "value": "var(--colors-olive-a7)",
    "variable": "var(--colors-olive-a7)"
  },
  "colors.olive.a8": {
    "value": "var(--colors-olive-a8)",
    "variable": "var(--colors-olive-a8)"
  },
  "colors.olive.a9": {
    "value": "var(--colors-olive-a9)",
    "variable": "var(--colors-olive-a9)"
  },
  "colors.olive.a10": {
    "value": "var(--colors-olive-a10)",
    "variable": "var(--colors-olive-a10)"
  },
  "colors.olive.a11": {
    "value": "var(--colors-olive-a11)",
    "variable": "var(--colors-olive-a11)"
  },
  "colors.olive.a12": {
    "value": "var(--colors-olive-a12)",
    "variable": "var(--colors-olive-a12)"
  },
  "colors.orange.1": {
    "value": "var(--colors-orange-1)",
    "variable": "var(--colors-orange-1)"
  },
  "colors.orange.2": {
    "value": "var(--colors-orange-2)",
    "variable": "var(--colors-orange-2)"
  },
  "colors.orange.3": {
    "value": "var(--colors-orange-3)",
    "variable": "var(--colors-orange-3)"
  },
  "colors.orange.4": {
    "value": "var(--colors-orange-4)",
    "variable": "var(--colors-orange-4)"
  },
  "colors.orange.5": {
    "value": "var(--colors-orange-5)",
    "variable": "var(--colors-orange-5)"
  },
  "colors.orange.6": {
    "value": "var(--colors-orange-6)",
    "variable": "var(--colors-orange-6)"
  },
  "colors.orange.7": {
    "value": "var(--colors-orange-7)",
    "variable": "var(--colors-orange-7)"
  },
  "colors.orange.8": {
    "value": "var(--colors-orange-8)",
    "variable": "var(--colors-orange-8)"
  },
  "colors.orange.9": {
    "value": "var(--colors-orange-9)",
    "variable": "var(--colors-orange-9)"
  },
  "colors.orange.10": {
    "value": "var(--colors-orange-10)",
    "variable": "var(--colors-orange-10)"
  },
  "colors.orange.11": {
    "value": "var(--colors-orange-11)",
    "variable": "var(--colors-orange-11)"
  },
  "colors.orange.12": {
    "value": "var(--colors-orange-12)",
    "variable": "var(--colors-orange-12)"
  },
  "colors.orange.a1": {
    "value": "var(--colors-orange-a1)",
    "variable": "var(--colors-orange-a1)"
  },
  "colors.orange.a2": {
    "value": "var(--colors-orange-a2)",
    "variable": "var(--colors-orange-a2)"
  },
  "colors.orange.a3": {
    "value": "var(--colors-orange-a3)",
    "variable": "var(--colors-orange-a3)"
  },
  "colors.orange.a4": {
    "value": "var(--colors-orange-a4)",
    "variable": "var(--colors-orange-a4)"
  },
  "colors.orange.a5": {
    "value": "var(--colors-orange-a5)",
    "variable": "var(--colors-orange-a5)"
  },
  "colors.orange.a6": {
    "value": "var(--colors-orange-a6)",
    "variable": "var(--colors-orange-a6)"
  },
  "colors.orange.a7": {
    "value": "var(--colors-orange-a7)",
    "variable": "var(--colors-orange-a7)"
  },
  "colors.orange.a8": {
    "value": "var(--colors-orange-a8)",
    "variable": "var(--colors-orange-a8)"
  },
  "colors.orange.a9": {
    "value": "var(--colors-orange-a9)",
    "variable": "var(--colors-orange-a9)"
  },
  "colors.orange.a10": {
    "value": "var(--colors-orange-a10)",
    "variable": "var(--colors-orange-a10)"
  },
  "colors.orange.a11": {
    "value": "var(--colors-orange-a11)",
    "variable": "var(--colors-orange-a11)"
  },
  "colors.orange.a12": {
    "value": "var(--colors-orange-a12)",
    "variable": "var(--colors-orange-a12)"
  },
  "colors.pink.1": {
    "value": "var(--colors-pink-1)",
    "variable": "var(--colors-pink-1)"
  },
  "colors.pink.2": {
    "value": "var(--colors-pink-2)",
    "variable": "var(--colors-pink-2)"
  },
  "colors.pink.3": {
    "value": "var(--colors-pink-3)",
    "variable": "var(--colors-pink-3)"
  },
  "colors.pink.4": {
    "value": "var(--colors-pink-4)",
    "variable": "var(--colors-pink-4)"
  },
  "colors.pink.5": {
    "value": "var(--colors-pink-5)",
    "variable": "var(--colors-pink-5)"
  },
  "colors.pink.6": {
    "value": "var(--colors-pink-6)",
    "variable": "var(--colors-pink-6)"
  },
  "colors.pink.7": {
    "value": "var(--colors-pink-7)",
    "variable": "var(--colors-pink-7)"
  },
  "colors.pink.8": {
    "value": "var(--colors-pink-8)",
    "variable": "var(--colors-pink-8)"
  },
  "colors.pink.9": {
    "value": "var(--colors-pink-9)",
    "variable": "var(--colors-pink-9)"
  },
  "colors.pink.10": {
    "value": "var(--colors-pink-10)",
    "variable": "var(--colors-pink-10)"
  },
  "colors.pink.11": {
    "value": "var(--colors-pink-11)",
    "variable": "var(--colors-pink-11)"
  },
  "colors.pink.12": {
    "value": "var(--colors-pink-12)",
    "variable": "var(--colors-pink-12)"
  },
  "colors.pink.a1": {
    "value": "var(--colors-pink-a1)",
    "variable": "var(--colors-pink-a1)"
  },
  "colors.pink.a2": {
    "value": "var(--colors-pink-a2)",
    "variable": "var(--colors-pink-a2)"
  },
  "colors.pink.a3": {
    "value": "var(--colors-pink-a3)",
    "variable": "var(--colors-pink-a3)"
  },
  "colors.pink.a4": {
    "value": "var(--colors-pink-a4)",
    "variable": "var(--colors-pink-a4)"
  },
  "colors.pink.a5": {
    "value": "var(--colors-pink-a5)",
    "variable": "var(--colors-pink-a5)"
  },
  "colors.pink.a6": {
    "value": "var(--colors-pink-a6)",
    "variable": "var(--colors-pink-a6)"
  },
  "colors.pink.a7": {
    "value": "var(--colors-pink-a7)",
    "variable": "var(--colors-pink-a7)"
  },
  "colors.pink.a8": {
    "value": "var(--colors-pink-a8)",
    "variable": "var(--colors-pink-a8)"
  },
  "colors.pink.a9": {
    "value": "var(--colors-pink-a9)",
    "variable": "var(--colors-pink-a9)"
  },
  "colors.pink.a10": {
    "value": "var(--colors-pink-a10)",
    "variable": "var(--colors-pink-a10)"
  },
  "colors.pink.a11": {
    "value": "var(--colors-pink-a11)",
    "variable": "var(--colors-pink-a11)"
  },
  "colors.pink.a12": {
    "value": "var(--colors-pink-a12)",
    "variable": "var(--colors-pink-a12)"
  },
  "colors.plum.1": {
    "value": "var(--colors-plum-1)",
    "variable": "var(--colors-plum-1)"
  },
  "colors.plum.2": {
    "value": "var(--colors-plum-2)",
    "variable": "var(--colors-plum-2)"
  },
  "colors.plum.3": {
    "value": "var(--colors-plum-3)",
    "variable": "var(--colors-plum-3)"
  },
  "colors.plum.4": {
    "value": "var(--colors-plum-4)",
    "variable": "var(--colors-plum-4)"
  },
  "colors.plum.5": {
    "value": "var(--colors-plum-5)",
    "variable": "var(--colors-plum-5)"
  },
  "colors.plum.6": {
    "value": "var(--colors-plum-6)",
    "variable": "var(--colors-plum-6)"
  },
  "colors.plum.7": {
    "value": "var(--colors-plum-7)",
    "variable": "var(--colors-plum-7)"
  },
  "colors.plum.8": {
    "value": "var(--colors-plum-8)",
    "variable": "var(--colors-plum-8)"
  },
  "colors.plum.9": {
    "value": "var(--colors-plum-9)",
    "variable": "var(--colors-plum-9)"
  },
  "colors.plum.10": {
    "value": "var(--colors-plum-10)",
    "variable": "var(--colors-plum-10)"
  },
  "colors.plum.11": {
    "value": "var(--colors-plum-11)",
    "variable": "var(--colors-plum-11)"
  },
  "colors.plum.12": {
    "value": "var(--colors-plum-12)",
    "variable": "var(--colors-plum-12)"
  },
  "colors.plum.a1": {
    "value": "var(--colors-plum-a1)",
    "variable": "var(--colors-plum-a1)"
  },
  "colors.plum.a2": {
    "value": "var(--colors-plum-a2)",
    "variable": "var(--colors-plum-a2)"
  },
  "colors.plum.a3": {
    "value": "var(--colors-plum-a3)",
    "variable": "var(--colors-plum-a3)"
  },
  "colors.plum.a4": {
    "value": "var(--colors-plum-a4)",
    "variable": "var(--colors-plum-a4)"
  },
  "colors.plum.a5": {
    "value": "var(--colors-plum-a5)",
    "variable": "var(--colors-plum-a5)"
  },
  "colors.plum.a6": {
    "value": "var(--colors-plum-a6)",
    "variable": "var(--colors-plum-a6)"
  },
  "colors.plum.a7": {
    "value": "var(--colors-plum-a7)",
    "variable": "var(--colors-plum-a7)"
  },
  "colors.plum.a8": {
    "value": "var(--colors-plum-a8)",
    "variable": "var(--colors-plum-a8)"
  },
  "colors.plum.a9": {
    "value": "var(--colors-plum-a9)",
    "variable": "var(--colors-plum-a9)"
  },
  "colors.plum.a10": {
    "value": "var(--colors-plum-a10)",
    "variable": "var(--colors-plum-a10)"
  },
  "colors.plum.a11": {
    "value": "var(--colors-plum-a11)",
    "variable": "var(--colors-plum-a11)"
  },
  "colors.plum.a12": {
    "value": "var(--colors-plum-a12)",
    "variable": "var(--colors-plum-a12)"
  },
  "colors.purple.1": {
    "value": "var(--colors-purple-1)",
    "variable": "var(--colors-purple-1)"
  },
  "colors.purple.2": {
    "value": "var(--colors-purple-2)",
    "variable": "var(--colors-purple-2)"
  },
  "colors.purple.3": {
    "value": "var(--colors-purple-3)",
    "variable": "var(--colors-purple-3)"
  },
  "colors.purple.4": {
    "value": "var(--colors-purple-4)",
    "variable": "var(--colors-purple-4)"
  },
  "colors.purple.5": {
    "value": "var(--colors-purple-5)",
    "variable": "var(--colors-purple-5)"
  },
  "colors.purple.6": {
    "value": "var(--colors-purple-6)",
    "variable": "var(--colors-purple-6)"
  },
  "colors.purple.7": {
    "value": "var(--colors-purple-7)",
    "variable": "var(--colors-purple-7)"
  },
  "colors.purple.8": {
    "value": "var(--colors-purple-8)",
    "variable": "var(--colors-purple-8)"
  },
  "colors.purple.9": {
    "value": "var(--colors-purple-9)",
    "variable": "var(--colors-purple-9)"
  },
  "colors.purple.10": {
    "value": "var(--colors-purple-10)",
    "variable": "var(--colors-purple-10)"
  },
  "colors.purple.11": {
    "value": "var(--colors-purple-11)",
    "variable": "var(--colors-purple-11)"
  },
  "colors.purple.12": {
    "value": "var(--colors-purple-12)",
    "variable": "var(--colors-purple-12)"
  },
  "colors.purple.a1": {
    "value": "var(--colors-purple-a1)",
    "variable": "var(--colors-purple-a1)"
  },
  "colors.purple.a2": {
    "value": "var(--colors-purple-a2)",
    "variable": "var(--colors-purple-a2)"
  },
  "colors.purple.a3": {
    "value": "var(--colors-purple-a3)",
    "variable": "var(--colors-purple-a3)"
  },
  "colors.purple.a4": {
    "value": "var(--colors-purple-a4)",
    "variable": "var(--colors-purple-a4)"
  },
  "colors.purple.a5": {
    "value": "var(--colors-purple-a5)",
    "variable": "var(--colors-purple-a5)"
  },
  "colors.purple.a6": {
    "value": "var(--colors-purple-a6)",
    "variable": "var(--colors-purple-a6)"
  },
  "colors.purple.a7": {
    "value": "var(--colors-purple-a7)",
    "variable": "var(--colors-purple-a7)"
  },
  "colors.purple.a8": {
    "value": "var(--colors-purple-a8)",
    "variable": "var(--colors-purple-a8)"
  },
  "colors.purple.a9": {
    "value": "var(--colors-purple-a9)",
    "variable": "var(--colors-purple-a9)"
  },
  "colors.purple.a10": {
    "value": "var(--colors-purple-a10)",
    "variable": "var(--colors-purple-a10)"
  },
  "colors.purple.a11": {
    "value": "var(--colors-purple-a11)",
    "variable": "var(--colors-purple-a11)"
  },
  "colors.purple.a12": {
    "value": "var(--colors-purple-a12)",
    "variable": "var(--colors-purple-a12)"
  },
  "colors.red.1": {
    "value": "var(--colors-red-1)",
    "variable": "var(--colors-red-1)"
  },
  "colors.red.2": {
    "value": "var(--colors-red-2)",
    "variable": "var(--colors-red-2)"
  },
  "colors.red.3": {
    "value": "var(--colors-red-3)",
    "variable": "var(--colors-red-3)"
  },
  "colors.red.4": {
    "value": "var(--colors-red-4)",
    "variable": "var(--colors-red-4)"
  },
  "colors.red.5": {
    "value": "var(--colors-red-5)",
    "variable": "var(--colors-red-5)"
  },
  "colors.red.6": {
    "value": "var(--colors-red-6)",
    "variable": "var(--colors-red-6)"
  },
  "colors.red.7": {
    "value": "var(--colors-red-7)",
    "variable": "var(--colors-red-7)"
  },
  "colors.red.8": {
    "value": "var(--colors-red-8)",
    "variable": "var(--colors-red-8)"
  },
  "colors.red.9": {
    "value": "var(--colors-red-9)",
    "variable": "var(--colors-red-9)"
  },
  "colors.red.10": {
    "value": "var(--colors-red-10)",
    "variable": "var(--colors-red-10)"
  },
  "colors.red.11": {
    "value": "var(--colors-red-11)",
    "variable": "var(--colors-red-11)"
  },
  "colors.red.12": {
    "value": "var(--colors-red-12)",
    "variable": "var(--colors-red-12)"
  },
  "colors.red.a1": {
    "value": "var(--colors-red-a1)",
    "variable": "var(--colors-red-a1)"
  },
  "colors.red.a2": {
    "value": "var(--colors-red-a2)",
    "variable": "var(--colors-red-a2)"
  },
  "colors.red.a3": {
    "value": "var(--colors-red-a3)",
    "variable": "var(--colors-red-a3)"
  },
  "colors.red.a4": {
    "value": "var(--colors-red-a4)",
    "variable": "var(--colors-red-a4)"
  },
  "colors.red.a5": {
    "value": "var(--colors-red-a5)",
    "variable": "var(--colors-red-a5)"
  },
  "colors.red.a6": {
    "value": "var(--colors-red-a6)",
    "variable": "var(--colors-red-a6)"
  },
  "colors.red.a7": {
    "value": "var(--colors-red-a7)",
    "variable": "var(--colors-red-a7)"
  },
  "colors.red.a8": {
    "value": "var(--colors-red-a8)",
    "variable": "var(--colors-red-a8)"
  },
  "colors.red.a9": {
    "value": "var(--colors-red-a9)",
    "variable": "var(--colors-red-a9)"
  },
  "colors.red.a10": {
    "value": "var(--colors-red-a10)",
    "variable": "var(--colors-red-a10)"
  },
  "colors.red.a11": {
    "value": "var(--colors-red-a11)",
    "variable": "var(--colors-red-a11)"
  },
  "colors.red.a12": {
    "value": "var(--colors-red-a12)",
    "variable": "var(--colors-red-a12)"
  },
  "colors.ruby.1": {
    "value": "var(--colors-ruby-1)",
    "variable": "var(--colors-ruby-1)"
  },
  "colors.ruby.2": {
    "value": "var(--colors-ruby-2)",
    "variable": "var(--colors-ruby-2)"
  },
  "colors.ruby.3": {
    "value": "var(--colors-ruby-3)",
    "variable": "var(--colors-ruby-3)"
  },
  "colors.ruby.4": {
    "value": "var(--colors-ruby-4)",
    "variable": "var(--colors-ruby-4)"
  },
  "colors.ruby.5": {
    "value": "var(--colors-ruby-5)",
    "variable": "var(--colors-ruby-5)"
  },
  "colors.ruby.6": {
    "value": "var(--colors-ruby-6)",
    "variable": "var(--colors-ruby-6)"
  },
  "colors.ruby.7": {
    "value": "var(--colors-ruby-7)",
    "variable": "var(--colors-ruby-7)"
  },
  "colors.ruby.8": {
    "value": "var(--colors-ruby-8)",
    "variable": "var(--colors-ruby-8)"
  },
  "colors.ruby.9": {
    "value": "var(--colors-ruby-9)",
    "variable": "var(--colors-ruby-9)"
  },
  "colors.ruby.10": {
    "value": "var(--colors-ruby-10)",
    "variable": "var(--colors-ruby-10)"
  },
  "colors.ruby.11": {
    "value": "var(--colors-ruby-11)",
    "variable": "var(--colors-ruby-11)"
  },
  "colors.ruby.12": {
    "value": "var(--colors-ruby-12)",
    "variable": "var(--colors-ruby-12)"
  },
  "colors.ruby.a1": {
    "value": "var(--colors-ruby-a1)",
    "variable": "var(--colors-ruby-a1)"
  },
  "colors.ruby.a2": {
    "value": "var(--colors-ruby-a2)",
    "variable": "var(--colors-ruby-a2)"
  },
  "colors.ruby.a3": {
    "value": "var(--colors-ruby-a3)",
    "variable": "var(--colors-ruby-a3)"
  },
  "colors.ruby.a4": {
    "value": "var(--colors-ruby-a4)",
    "variable": "var(--colors-ruby-a4)"
  },
  "colors.ruby.a5": {
    "value": "var(--colors-ruby-a5)",
    "variable": "var(--colors-ruby-a5)"
  },
  "colors.ruby.a6": {
    "value": "var(--colors-ruby-a6)",
    "variable": "var(--colors-ruby-a6)"
  },
  "colors.ruby.a7": {
    "value": "var(--colors-ruby-a7)",
    "variable": "var(--colors-ruby-a7)"
  },
  "colors.ruby.a8": {
    "value": "var(--colors-ruby-a8)",
    "variable": "var(--colors-ruby-a8)"
  },
  "colors.ruby.a9": {
    "value": "var(--colors-ruby-a9)",
    "variable": "var(--colors-ruby-a9)"
  },
  "colors.ruby.a10": {
    "value": "var(--colors-ruby-a10)",
    "variable": "var(--colors-ruby-a10)"
  },
  "colors.ruby.a11": {
    "value": "var(--colors-ruby-a11)",
    "variable": "var(--colors-ruby-a11)"
  },
  "colors.ruby.a12": {
    "value": "var(--colors-ruby-a12)",
    "variable": "var(--colors-ruby-a12)"
  },
  "colors.sage.1": {
    "value": "var(--colors-sage-1)",
    "variable": "var(--colors-sage-1)"
  },
  "colors.sage.2": {
    "value": "var(--colors-sage-2)",
    "variable": "var(--colors-sage-2)"
  },
  "colors.sage.3": {
    "value": "var(--colors-sage-3)",
    "variable": "var(--colors-sage-3)"
  },
  "colors.sage.4": {
    "value": "var(--colors-sage-4)",
    "variable": "var(--colors-sage-4)"
  },
  "colors.sage.5": {
    "value": "var(--colors-sage-5)",
    "variable": "var(--colors-sage-5)"
  },
  "colors.sage.6": {
    "value": "var(--colors-sage-6)",
    "variable": "var(--colors-sage-6)"
  },
  "colors.sage.7": {
    "value": "var(--colors-sage-7)",
    "variable": "var(--colors-sage-7)"
  },
  "colors.sage.8": {
    "value": "var(--colors-sage-8)",
    "variable": "var(--colors-sage-8)"
  },
  "colors.sage.9": {
    "value": "var(--colors-sage-9)",
    "variable": "var(--colors-sage-9)"
  },
  "colors.sage.10": {
    "value": "var(--colors-sage-10)",
    "variable": "var(--colors-sage-10)"
  },
  "colors.sage.11": {
    "value": "var(--colors-sage-11)",
    "variable": "var(--colors-sage-11)"
  },
  "colors.sage.12": {
    "value": "var(--colors-sage-12)",
    "variable": "var(--colors-sage-12)"
  },
  "colors.sage.a1": {
    "value": "var(--colors-sage-a1)",
    "variable": "var(--colors-sage-a1)"
  },
  "colors.sage.a2": {
    "value": "var(--colors-sage-a2)",
    "variable": "var(--colors-sage-a2)"
  },
  "colors.sage.a3": {
    "value": "var(--colors-sage-a3)",
    "variable": "var(--colors-sage-a3)"
  },
  "colors.sage.a4": {
    "value": "var(--colors-sage-a4)",
    "variable": "var(--colors-sage-a4)"
  },
  "colors.sage.a5": {
    "value": "var(--colors-sage-a5)",
    "variable": "var(--colors-sage-a5)"
  },
  "colors.sage.a6": {
    "value": "var(--colors-sage-a6)",
    "variable": "var(--colors-sage-a6)"
  },
  "colors.sage.a7": {
    "value": "var(--colors-sage-a7)",
    "variable": "var(--colors-sage-a7)"
  },
  "colors.sage.a8": {
    "value": "var(--colors-sage-a8)",
    "variable": "var(--colors-sage-a8)"
  },
  "colors.sage.a9": {
    "value": "var(--colors-sage-a9)",
    "variable": "var(--colors-sage-a9)"
  },
  "colors.sage.a10": {
    "value": "var(--colors-sage-a10)",
    "variable": "var(--colors-sage-a10)"
  },
  "colors.sage.a11": {
    "value": "var(--colors-sage-a11)",
    "variable": "var(--colors-sage-a11)"
  },
  "colors.sage.a12": {
    "value": "var(--colors-sage-a12)",
    "variable": "var(--colors-sage-a12)"
  },
  "colors.sand.1": {
    "value": "var(--colors-sand-1)",
    "variable": "var(--colors-sand-1)"
  },
  "colors.sand.2": {
    "value": "var(--colors-sand-2)",
    "variable": "var(--colors-sand-2)"
  },
  "colors.sand.3": {
    "value": "var(--colors-sand-3)",
    "variable": "var(--colors-sand-3)"
  },
  "colors.sand.4": {
    "value": "var(--colors-sand-4)",
    "variable": "var(--colors-sand-4)"
  },
  "colors.sand.5": {
    "value": "var(--colors-sand-5)",
    "variable": "var(--colors-sand-5)"
  },
  "colors.sand.6": {
    "value": "var(--colors-sand-6)",
    "variable": "var(--colors-sand-6)"
  },
  "colors.sand.7": {
    "value": "var(--colors-sand-7)",
    "variable": "var(--colors-sand-7)"
  },
  "colors.sand.8": {
    "value": "var(--colors-sand-8)",
    "variable": "var(--colors-sand-8)"
  },
  "colors.sand.9": {
    "value": "var(--colors-sand-9)",
    "variable": "var(--colors-sand-9)"
  },
  "colors.sand.10": {
    "value": "var(--colors-sand-10)",
    "variable": "var(--colors-sand-10)"
  },
  "colors.sand.11": {
    "value": "var(--colors-sand-11)",
    "variable": "var(--colors-sand-11)"
  },
  "colors.sand.12": {
    "value": "var(--colors-sand-12)",
    "variable": "var(--colors-sand-12)"
  },
  "colors.sand.a1": {
    "value": "var(--colors-sand-a1)",
    "variable": "var(--colors-sand-a1)"
  },
  "colors.sand.a2": {
    "value": "var(--colors-sand-a2)",
    "variable": "var(--colors-sand-a2)"
  },
  "colors.sand.a3": {
    "value": "var(--colors-sand-a3)",
    "variable": "var(--colors-sand-a3)"
  },
  "colors.sand.a4": {
    "value": "var(--colors-sand-a4)",
    "variable": "var(--colors-sand-a4)"
  },
  "colors.sand.a5": {
    "value": "var(--colors-sand-a5)",
    "variable": "var(--colors-sand-a5)"
  },
  "colors.sand.a6": {
    "value": "var(--colors-sand-a6)",
    "variable": "var(--colors-sand-a6)"
  },
  "colors.sand.a7": {
    "value": "var(--colors-sand-a7)",
    "variable": "var(--colors-sand-a7)"
  },
  "colors.sand.a8": {
    "value": "var(--colors-sand-a8)",
    "variable": "var(--colors-sand-a8)"
  },
  "colors.sand.a9": {
    "value": "var(--colors-sand-a9)",
    "variable": "var(--colors-sand-a9)"
  },
  "colors.sand.a10": {
    "value": "var(--colors-sand-a10)",
    "variable": "var(--colors-sand-a10)"
  },
  "colors.sand.a11": {
    "value": "var(--colors-sand-a11)",
    "variable": "var(--colors-sand-a11)"
  },
  "colors.sand.a12": {
    "value": "var(--colors-sand-a12)",
    "variable": "var(--colors-sand-a12)"
  },
  "colors.sky.1": {
    "value": "var(--colors-sky-1)",
    "variable": "var(--colors-sky-1)"
  },
  "colors.sky.2": {
    "value": "var(--colors-sky-2)",
    "variable": "var(--colors-sky-2)"
  },
  "colors.sky.3": {
    "value": "var(--colors-sky-3)",
    "variable": "var(--colors-sky-3)"
  },
  "colors.sky.4": {
    "value": "var(--colors-sky-4)",
    "variable": "var(--colors-sky-4)"
  },
  "colors.sky.5": {
    "value": "var(--colors-sky-5)",
    "variable": "var(--colors-sky-5)"
  },
  "colors.sky.6": {
    "value": "var(--colors-sky-6)",
    "variable": "var(--colors-sky-6)"
  },
  "colors.sky.7": {
    "value": "var(--colors-sky-7)",
    "variable": "var(--colors-sky-7)"
  },
  "colors.sky.8": {
    "value": "var(--colors-sky-8)",
    "variable": "var(--colors-sky-8)"
  },
  "colors.sky.9": {
    "value": "var(--colors-sky-9)",
    "variable": "var(--colors-sky-9)"
  },
  "colors.sky.10": {
    "value": "var(--colors-sky-10)",
    "variable": "var(--colors-sky-10)"
  },
  "colors.sky.11": {
    "value": "var(--colors-sky-11)",
    "variable": "var(--colors-sky-11)"
  },
  "colors.sky.12": {
    "value": "var(--colors-sky-12)",
    "variable": "var(--colors-sky-12)"
  },
  "colors.sky.a1": {
    "value": "var(--colors-sky-a1)",
    "variable": "var(--colors-sky-a1)"
  },
  "colors.sky.a2": {
    "value": "var(--colors-sky-a2)",
    "variable": "var(--colors-sky-a2)"
  },
  "colors.sky.a3": {
    "value": "var(--colors-sky-a3)",
    "variable": "var(--colors-sky-a3)"
  },
  "colors.sky.a4": {
    "value": "var(--colors-sky-a4)",
    "variable": "var(--colors-sky-a4)"
  },
  "colors.sky.a5": {
    "value": "var(--colors-sky-a5)",
    "variable": "var(--colors-sky-a5)"
  },
  "colors.sky.a6": {
    "value": "var(--colors-sky-a6)",
    "variable": "var(--colors-sky-a6)"
  },
  "colors.sky.a7": {
    "value": "var(--colors-sky-a7)",
    "variable": "var(--colors-sky-a7)"
  },
  "colors.sky.a8": {
    "value": "var(--colors-sky-a8)",
    "variable": "var(--colors-sky-a8)"
  },
  "colors.sky.a9": {
    "value": "var(--colors-sky-a9)",
    "variable": "var(--colors-sky-a9)"
  },
  "colors.sky.a10": {
    "value": "var(--colors-sky-a10)",
    "variable": "var(--colors-sky-a10)"
  },
  "colors.sky.a11": {
    "value": "var(--colors-sky-a11)",
    "variable": "var(--colors-sky-a11)"
  },
  "colors.sky.a12": {
    "value": "var(--colors-sky-a12)",
    "variable": "var(--colors-sky-a12)"
  },
  "colors.slate.1": {
    "value": "var(--colors-slate-1)",
    "variable": "var(--colors-slate-1)"
  },
  "colors.slate.2": {
    "value": "var(--colors-slate-2)",
    "variable": "var(--colors-slate-2)"
  },
  "colors.slate.3": {
    "value": "var(--colors-slate-3)",
    "variable": "var(--colors-slate-3)"
  },
  "colors.slate.4": {
    "value": "var(--colors-slate-4)",
    "variable": "var(--colors-slate-4)"
  },
  "colors.slate.5": {
    "value": "var(--colors-slate-5)",
    "variable": "var(--colors-slate-5)"
  },
  "colors.slate.6": {
    "value": "var(--colors-slate-6)",
    "variable": "var(--colors-slate-6)"
  },
  "colors.slate.7": {
    "value": "var(--colors-slate-7)",
    "variable": "var(--colors-slate-7)"
  },
  "colors.slate.8": {
    "value": "var(--colors-slate-8)",
    "variable": "var(--colors-slate-8)"
  },
  "colors.slate.9": {
    "value": "var(--colors-slate-9)",
    "variable": "var(--colors-slate-9)"
  },
  "colors.slate.10": {
    "value": "var(--colors-slate-10)",
    "variable": "var(--colors-slate-10)"
  },
  "colors.slate.11": {
    "value": "var(--colors-slate-11)",
    "variable": "var(--colors-slate-11)"
  },
  "colors.slate.12": {
    "value": "var(--colors-slate-12)",
    "variable": "var(--colors-slate-12)"
  },
  "colors.slate.a1": {
    "value": "var(--colors-slate-a1)",
    "variable": "var(--colors-slate-a1)"
  },
  "colors.slate.a2": {
    "value": "var(--colors-slate-a2)",
    "variable": "var(--colors-slate-a2)"
  },
  "colors.slate.a3": {
    "value": "var(--colors-slate-a3)",
    "variable": "var(--colors-slate-a3)"
  },
  "colors.slate.a4": {
    "value": "var(--colors-slate-a4)",
    "variable": "var(--colors-slate-a4)"
  },
  "colors.slate.a5": {
    "value": "var(--colors-slate-a5)",
    "variable": "var(--colors-slate-a5)"
  },
  "colors.slate.a6": {
    "value": "var(--colors-slate-a6)",
    "variable": "var(--colors-slate-a6)"
  },
  "colors.slate.a7": {
    "value": "var(--colors-slate-a7)",
    "variable": "var(--colors-slate-a7)"
  },
  "colors.slate.a8": {
    "value": "var(--colors-slate-a8)",
    "variable": "var(--colors-slate-a8)"
  },
  "colors.slate.a9": {
    "value": "var(--colors-slate-a9)",
    "variable": "var(--colors-slate-a9)"
  },
  "colors.slate.a10": {
    "value": "var(--colors-slate-a10)",
    "variable": "var(--colors-slate-a10)"
  },
  "colors.slate.a11": {
    "value": "var(--colors-slate-a11)",
    "variable": "var(--colors-slate-a11)"
  },
  "colors.slate.a12": {
    "value": "var(--colors-slate-a12)",
    "variable": "var(--colors-slate-a12)"
  },
  "colors.teal.1": {
    "value": "var(--colors-teal-1)",
    "variable": "var(--colors-teal-1)"
  },
  "colors.teal.2": {
    "value": "var(--colors-teal-2)",
    "variable": "var(--colors-teal-2)"
  },
  "colors.teal.3": {
    "value": "var(--colors-teal-3)",
    "variable": "var(--colors-teal-3)"
  },
  "colors.teal.4": {
    "value": "var(--colors-teal-4)",
    "variable": "var(--colors-teal-4)"
  },
  "colors.teal.5": {
    "value": "var(--colors-teal-5)",
    "variable": "var(--colors-teal-5)"
  },
  "colors.teal.6": {
    "value": "var(--colors-teal-6)",
    "variable": "var(--colors-teal-6)"
  },
  "colors.teal.7": {
    "value": "var(--colors-teal-7)",
    "variable": "var(--colors-teal-7)"
  },
  "colors.teal.8": {
    "value": "var(--colors-teal-8)",
    "variable": "var(--colors-teal-8)"
  },
  "colors.teal.9": {
    "value": "var(--colors-teal-9)",
    "variable": "var(--colors-teal-9)"
  },
  "colors.teal.10": {
    "value": "var(--colors-teal-10)",
    "variable": "var(--colors-teal-10)"
  },
  "colors.teal.11": {
    "value": "var(--colors-teal-11)",
    "variable": "var(--colors-teal-11)"
  },
  "colors.teal.12": {
    "value": "var(--colors-teal-12)",
    "variable": "var(--colors-teal-12)"
  },
  "colors.teal.a1": {
    "value": "var(--colors-teal-a1)",
    "variable": "var(--colors-teal-a1)"
  },
  "colors.teal.a2": {
    "value": "var(--colors-teal-a2)",
    "variable": "var(--colors-teal-a2)"
  },
  "colors.teal.a3": {
    "value": "var(--colors-teal-a3)",
    "variable": "var(--colors-teal-a3)"
  },
  "colors.teal.a4": {
    "value": "var(--colors-teal-a4)",
    "variable": "var(--colors-teal-a4)"
  },
  "colors.teal.a5": {
    "value": "var(--colors-teal-a5)",
    "variable": "var(--colors-teal-a5)"
  },
  "colors.teal.a6": {
    "value": "var(--colors-teal-a6)",
    "variable": "var(--colors-teal-a6)"
  },
  "colors.teal.a7": {
    "value": "var(--colors-teal-a7)",
    "variable": "var(--colors-teal-a7)"
  },
  "colors.teal.a8": {
    "value": "var(--colors-teal-a8)",
    "variable": "var(--colors-teal-a8)"
  },
  "colors.teal.a9": {
    "value": "var(--colors-teal-a9)",
    "variable": "var(--colors-teal-a9)"
  },
  "colors.teal.a10": {
    "value": "var(--colors-teal-a10)",
    "variable": "var(--colors-teal-a10)"
  },
  "colors.teal.a11": {
    "value": "var(--colors-teal-a11)",
    "variable": "var(--colors-teal-a11)"
  },
  "colors.teal.a12": {
    "value": "var(--colors-teal-a12)",
    "variable": "var(--colors-teal-a12)"
  },
  "colors.tomato.1": {
    "value": "var(--colors-tomato-1)",
    "variable": "var(--colors-tomato-1)"
  },
  "colors.tomato.2": {
    "value": "var(--colors-tomato-2)",
    "variable": "var(--colors-tomato-2)"
  },
  "colors.tomato.3": {
    "value": "var(--colors-tomato-3)",
    "variable": "var(--colors-tomato-3)"
  },
  "colors.tomato.4": {
    "value": "var(--colors-tomato-4)",
    "variable": "var(--colors-tomato-4)"
  },
  "colors.tomato.5": {
    "value": "var(--colors-tomato-5)",
    "variable": "var(--colors-tomato-5)"
  },
  "colors.tomato.6": {
    "value": "var(--colors-tomato-6)",
    "variable": "var(--colors-tomato-6)"
  },
  "colors.tomato.7": {
    "value": "var(--colors-tomato-7)",
    "variable": "var(--colors-tomato-7)"
  },
  "colors.tomato.8": {
    "value": "var(--colors-tomato-8)",
    "variable": "var(--colors-tomato-8)"
  },
  "colors.tomato.9": {
    "value": "var(--colors-tomato-9)",
    "variable": "var(--colors-tomato-9)"
  },
  "colors.tomato.10": {
    "value": "var(--colors-tomato-10)",
    "variable": "var(--colors-tomato-10)"
  },
  "colors.tomato.11": {
    "value": "var(--colors-tomato-11)",
    "variable": "var(--colors-tomato-11)"
  },
  "colors.tomato.12": {
    "value": "var(--colors-tomato-12)",
    "variable": "var(--colors-tomato-12)"
  },
  "colors.tomato.a1": {
    "value": "var(--colors-tomato-a1)",
    "variable": "var(--colors-tomato-a1)"
  },
  "colors.tomato.a2": {
    "value": "var(--colors-tomato-a2)",
    "variable": "var(--colors-tomato-a2)"
  },
  "colors.tomato.a3": {
    "value": "var(--colors-tomato-a3)",
    "variable": "var(--colors-tomato-a3)"
  },
  "colors.tomato.a4": {
    "value": "var(--colors-tomato-a4)",
    "variable": "var(--colors-tomato-a4)"
  },
  "colors.tomato.a5": {
    "value": "var(--colors-tomato-a5)",
    "variable": "var(--colors-tomato-a5)"
  },
  "colors.tomato.a6": {
    "value": "var(--colors-tomato-a6)",
    "variable": "var(--colors-tomato-a6)"
  },
  "colors.tomato.a7": {
    "value": "var(--colors-tomato-a7)",
    "variable": "var(--colors-tomato-a7)"
  },
  "colors.tomato.a8": {
    "value": "var(--colors-tomato-a8)",
    "variable": "var(--colors-tomato-a8)"
  },
  "colors.tomato.a9": {
    "value": "var(--colors-tomato-a9)",
    "variable": "var(--colors-tomato-a9)"
  },
  "colors.tomato.a10": {
    "value": "var(--colors-tomato-a10)",
    "variable": "var(--colors-tomato-a10)"
  },
  "colors.tomato.a11": {
    "value": "var(--colors-tomato-a11)",
    "variable": "var(--colors-tomato-a11)"
  },
  "colors.tomato.a12": {
    "value": "var(--colors-tomato-a12)",
    "variable": "var(--colors-tomato-a12)"
  },
  "colors.violet.1": {
    "value": "var(--colors-violet-1)",
    "variable": "var(--colors-violet-1)"
  },
  "colors.violet.2": {
    "value": "var(--colors-violet-2)",
    "variable": "var(--colors-violet-2)"
  },
  "colors.violet.3": {
    "value": "var(--colors-violet-3)",
    "variable": "var(--colors-violet-3)"
  },
  "colors.violet.4": {
    "value": "var(--colors-violet-4)",
    "variable": "var(--colors-violet-4)"
  },
  "colors.violet.5": {
    "value": "var(--colors-violet-5)",
    "variable": "var(--colors-violet-5)"
  },
  "colors.violet.6": {
    "value": "var(--colors-violet-6)",
    "variable": "var(--colors-violet-6)"
  },
  "colors.violet.7": {
    "value": "var(--colors-violet-7)",
    "variable": "var(--colors-violet-7)"
  },
  "colors.violet.8": {
    "value": "var(--colors-violet-8)",
    "variable": "var(--colors-violet-8)"
  },
  "colors.violet.9": {
    "value": "var(--colors-violet-9)",
    "variable": "var(--colors-violet-9)"
  },
  "colors.violet.10": {
    "value": "var(--colors-violet-10)",
    "variable": "var(--colors-violet-10)"
  },
  "colors.violet.11": {
    "value": "var(--colors-violet-11)",
    "variable": "var(--colors-violet-11)"
  },
  "colors.violet.12": {
    "value": "var(--colors-violet-12)",
    "variable": "var(--colors-violet-12)"
  },
  "colors.violet.a1": {
    "value": "var(--colors-violet-a1)",
    "variable": "var(--colors-violet-a1)"
  },
  "colors.violet.a2": {
    "value": "var(--colors-violet-a2)",
    "variable": "var(--colors-violet-a2)"
  },
  "colors.violet.a3": {
    "value": "var(--colors-violet-a3)",
    "variable": "var(--colors-violet-a3)"
  },
  "colors.violet.a4": {
    "value": "var(--colors-violet-a4)",
    "variable": "var(--colors-violet-a4)"
  },
  "colors.violet.a5": {
    "value": "var(--colors-violet-a5)",
    "variable": "var(--colors-violet-a5)"
  },
  "colors.violet.a6": {
    "value": "var(--colors-violet-a6)",
    "variable": "var(--colors-violet-a6)"
  },
  "colors.violet.a7": {
    "value": "var(--colors-violet-a7)",
    "variable": "var(--colors-violet-a7)"
  },
  "colors.violet.a8": {
    "value": "var(--colors-violet-a8)",
    "variable": "var(--colors-violet-a8)"
  },
  "colors.violet.a9": {
    "value": "var(--colors-violet-a9)",
    "variable": "var(--colors-violet-a9)"
  },
  "colors.violet.a10": {
    "value": "var(--colors-violet-a10)",
    "variable": "var(--colors-violet-a10)"
  },
  "colors.violet.a11": {
    "value": "var(--colors-violet-a11)",
    "variable": "var(--colors-violet-a11)"
  },
  "colors.violet.a12": {
    "value": "var(--colors-violet-a12)",
    "variable": "var(--colors-violet-a12)"
  },
  "colors.yellow.1": {
    "value": "var(--colors-yellow-1)",
    "variable": "var(--colors-yellow-1)"
  },
  "colors.yellow.2": {
    "value": "var(--colors-yellow-2)",
    "variable": "var(--colors-yellow-2)"
  },
  "colors.yellow.3": {
    "value": "var(--colors-yellow-3)",
    "variable": "var(--colors-yellow-3)"
  },
  "colors.yellow.4": {
    "value": "var(--colors-yellow-4)",
    "variable": "var(--colors-yellow-4)"
  },
  "colors.yellow.5": {
    "value": "var(--colors-yellow-5)",
    "variable": "var(--colors-yellow-5)"
  },
  "colors.yellow.6": {
    "value": "var(--colors-yellow-6)",
    "variable": "var(--colors-yellow-6)"
  },
  "colors.yellow.7": {
    "value": "var(--colors-yellow-7)",
    "variable": "var(--colors-yellow-7)"
  },
  "colors.yellow.8": {
    "value": "var(--colors-yellow-8)",
    "variable": "var(--colors-yellow-8)"
  },
  "colors.yellow.9": {
    "value": "var(--colors-yellow-9)",
    "variable": "var(--colors-yellow-9)"
  },
  "colors.yellow.10": {
    "value": "var(--colors-yellow-10)",
    "variable": "var(--colors-yellow-10)"
  },
  "colors.yellow.11": {
    "value": "var(--colors-yellow-11)",
    "variable": "var(--colors-yellow-11)"
  },
  "colors.yellow.12": {
    "value": "var(--colors-yellow-12)",
    "variable": "var(--colors-yellow-12)"
  },
  "colors.yellow.a1": {
    "value": "var(--colors-yellow-a1)",
    "variable": "var(--colors-yellow-a1)"
  },
  "colors.yellow.a2": {
    "value": "var(--colors-yellow-a2)",
    "variable": "var(--colors-yellow-a2)"
  },
  "colors.yellow.a3": {
    "value": "var(--colors-yellow-a3)",
    "variable": "var(--colors-yellow-a3)"
  },
  "colors.yellow.a4": {
    "value": "var(--colors-yellow-a4)",
    "variable": "var(--colors-yellow-a4)"
  },
  "colors.yellow.a5": {
    "value": "var(--colors-yellow-a5)",
    "variable": "var(--colors-yellow-a5)"
  },
  "colors.yellow.a6": {
    "value": "var(--colors-yellow-a6)",
    "variable": "var(--colors-yellow-a6)"
  },
  "colors.yellow.a7": {
    "value": "var(--colors-yellow-a7)",
    "variable": "var(--colors-yellow-a7)"
  },
  "colors.yellow.a8": {
    "value": "var(--colors-yellow-a8)",
    "variable": "var(--colors-yellow-a8)"
  },
  "colors.yellow.a9": {
    "value": "var(--colors-yellow-a9)",
    "variable": "var(--colors-yellow-a9)"
  },
  "colors.yellow.a10": {
    "value": "var(--colors-yellow-a10)",
    "variable": "var(--colors-yellow-a10)"
  },
  "colors.yellow.a11": {
    "value": "var(--colors-yellow-a11)",
    "variable": "var(--colors-yellow-a11)"
  },
  "colors.yellow.a12": {
    "value": "var(--colors-yellow-a12)",
    "variable": "var(--colors-yellow-a12)"
  },
  "colors.gray.1": {
    "value": "var(--colors-gray-1)",
    "variable": "var(--colors-gray-1)"
  },
  "colors.gray.2": {
    "value": "var(--colors-gray-2)",
    "variable": "var(--colors-gray-2)"
  },
  "colors.gray.3": {
    "value": "var(--colors-gray-3)",
    "variable": "var(--colors-gray-3)"
  },
  "colors.gray.4": {
    "value": "var(--colors-gray-4)",
    "variable": "var(--colors-gray-4)"
  },
  "colors.gray.5": {
    "value": "var(--colors-gray-5)",
    "variable": "var(--colors-gray-5)"
  },
  "colors.gray.6": {
    "value": "var(--colors-gray-6)",
    "variable": "var(--colors-gray-6)"
  },
  "colors.gray.7": {
    "value": "var(--colors-gray-7)",
    "variable": "var(--colors-gray-7)"
  },
  "colors.gray.8": {
    "value": "var(--colors-gray-8)",
    "variable": "var(--colors-gray-8)"
  },
  "colors.gray.9": {
    "value": "var(--colors-gray-9)",
    "variable": "var(--colors-gray-9)"
  },
  "colors.gray.10": {
    "value": "var(--colors-gray-10)",
    "variable": "var(--colors-gray-10)"
  },
  "colors.gray.11": {
    "value": "var(--colors-gray-11)",
    "variable": "var(--colors-gray-11)"
  },
  "colors.gray.12": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-gray-12)"
  },
  "colors.gray.a1": {
    "value": "var(--colors-gray-a1)",
    "variable": "var(--colors-gray-a1)"
  },
  "colors.gray.a2": {
    "value": "var(--colors-gray-a2)",
    "variable": "var(--colors-gray-a2)"
  },
  "colors.gray.a3": {
    "value": "var(--colors-gray-a3)",
    "variable": "var(--colors-gray-a3)"
  },
  "colors.gray.a4": {
    "value": "var(--colors-gray-a4)",
    "variable": "var(--colors-gray-a4)"
  },
  "colors.gray.a5": {
    "value": "var(--colors-gray-a5)",
    "variable": "var(--colors-gray-a5)"
  },
  "colors.gray.a6": {
    "value": "var(--colors-gray-a6)",
    "variable": "var(--colors-gray-a6)"
  },
  "colors.gray.a7": {
    "value": "var(--colors-gray-a7)",
    "variable": "var(--colors-gray-a7)"
  },
  "colors.gray.a8": {
    "value": "var(--colors-gray-a8)",
    "variable": "var(--colors-gray-a8)"
  },
  "colors.gray.a9": {
    "value": "var(--colors-gray-a9)",
    "variable": "var(--colors-gray-a9)"
  },
  "colors.gray.a10": {
    "value": "var(--colors-gray-a10)",
    "variable": "var(--colors-gray-a10)"
  },
  "colors.gray.a11": {
    "value": "var(--colors-gray-a11)",
    "variable": "var(--colors-gray-a11)"
  },
  "colors.gray.a12": {
    "value": "var(--colors-gray-a12)",
    "variable": "var(--colors-gray-a12)"
  },
  "colors.accent.1": {
    "value": "var(--colors-accent-1)",
    "variable": "var(--colors-accent-1)"
  },
  "colors.accent.2": {
    "value": "var(--colors-accent-2)",
    "variable": "var(--colors-accent-2)"
  },
  "colors.accent.3": {
    "value": "var(--colors-accent-3)",
    "variable": "var(--colors-accent-3)"
  },
  "colors.accent.4": {
    "value": "var(--colors-accent-4)",
    "variable": "var(--colors-accent-4)"
  },
  "colors.accent.5": {
    "value": "var(--colors-accent-5)",
    "variable": "var(--colors-accent-5)"
  },
  "colors.accent.6": {
    "value": "var(--colors-accent-6)",
    "variable": "var(--colors-accent-6)"
  },
  "colors.accent.7": {
    "value": "var(--colors-accent-7)",
    "variable": "var(--colors-accent-7)"
  },
  "colors.accent.8": {
    "value": "var(--colors-accent-8)",
    "variable": "var(--colors-accent-8)"
  },
  "colors.accent.9": {
    "value": "var(--colors-accent-9)",
    "variable": "var(--colors-accent-9)"
  },
  "colors.accent.10": {
    "value": "var(--colors-accent-10)",
    "variable": "var(--colors-accent-10)"
  },
  "colors.accent.11": {
    "value": "var(--colors-accent-11)",
    "variable": "var(--colors-accent-11)"
  },
  "colors.accent.12": {
    "value": "var(--colors-accent-12)",
    "variable": "var(--colors-accent-12)"
  },
  "colors.accent.a1": {
    "value": "var(--colors-accent-a1)",
    "variable": "var(--colors-accent-a1)"
  },
  "colors.accent.a2": {
    "value": "var(--colors-accent-a2)",
    "variable": "var(--colors-accent-a2)"
  },
  "colors.accent.a3": {
    "value": "var(--colors-accent-a3)",
    "variable": "var(--colors-accent-a3)"
  },
  "colors.accent.a4": {
    "value": "var(--colors-accent-a4)",
    "variable": "var(--colors-accent-a4)"
  },
  "colors.accent.a5": {
    "value": "var(--colors-accent-a5)",
    "variable": "var(--colors-accent-a5)"
  },
  "colors.accent.a6": {
    "value": "var(--colors-accent-a6)",
    "variable": "var(--colors-accent-a6)"
  },
  "colors.accent.a7": {
    "value": "var(--colors-accent-a7)",
    "variable": "var(--colors-accent-a7)"
  },
  "colors.accent.a8": {
    "value": "var(--colors-accent-a8)",
    "variable": "var(--colors-accent-a8)"
  },
  "colors.accent.a9": {
    "value": "var(--colors-accent-a9)",
    "variable": "var(--colors-accent-a9)"
  },
  "colors.accent.a10": {
    "value": "var(--colors-accent-a10)",
    "variable": "var(--colors-accent-a10)"
  },
  "colors.accent.a11": {
    "value": "var(--colors-accent-a11)",
    "variable": "var(--colors-accent-a11)"
  },
  "colors.accent.a12": {
    "value": "var(--colors-accent-a12)",
    "variable": "var(--colors-accent-a12)"
  },
  "colors.accent.fg": {
    "value": "var(--colors-accent-fg)",
    "variable": "var(--colors-accent-fg)"
  },
  "colors.accent.default": {
    "value": "var(--colors-accent-default)",
    "variable": "var(--colors-accent-default)"
  },
  "colors.accent.emphasized": {
    "value": "var(--colors-accent-emphasized)",
    "variable": "var(--colors-accent-emphasized)"
  },
  "colors.fg.default": {
    "value": "var(--colors-fg-default)",
    "variable": "var(--colors-fg-default)"
  },
  "colors.fg.muted": {
    "value": "var(--colors-fg-muted)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fg.subtle": {
    "value": "var(--colors-fg-subtle)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fg.disabled": {
    "value": "var(--colors-fg-disabled)",
    "variable": "var(--colors-fg-disabled)"
  },
  "colors.border.default": {
    "value": "var(--colors-border-default)",
    "variable": "var(--colors-border-default)"
  },
  "colors.border.muted": {
    "value": "var(--colors-border-muted)",
    "variable": "var(--colors-border-muted)"
  },
  "colors.border.subtle": {
    "value": "var(--colors-border-subtle)",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.border.disabled": {
    "value": "var(--colors-border-disabled)",
    "variable": "var(--colors-border-disabled)"
  },
  "colors.border.outline": {
    "value": "var(--colors-border-outline)",
    "variable": "var(--colors-border-outline)"
  },
  "colors.border.accent": {
    "value": "var(--colors-border-accent)",
    "variable": "var(--colors-border-accent)"
  },
  "colors.prose.body": {
    "value": "var(--colors-prose-body)",
    "variable": "var(--colors-prose-body)"
  },
  "colors.prose.heading": {
    "value": "var(--colors-prose-heading)",
    "variable": "var(--colors-prose-heading)"
  },
  "colors.prose.lead": {
    "value": "var(--colors-prose-lead)",
    "variable": "var(--colors-prose-lead)"
  },
  "colors.prose.link": {
    "value": "var(--colors-prose-link)",
    "variable": "var(--colors-prose-link)"
  },
  "colors.prose.bold": {
    "value": "var(--colors-prose-bold)",
    "variable": "var(--colors-prose-bold)"
  },
  "colors.prose.counter": {
    "value": "var(--colors-prose-counter)",
    "variable": "var(--colors-prose-counter)"
  },
  "colors.prose.bullet": {
    "value": "var(--colors-prose-bullet)",
    "variable": "var(--colors-prose-bullet)"
  },
  "colors.prose.hrBorder": {
    "value": "var(--colors-prose-hr-border)",
    "variable": "var(--colors-prose-hr-border)"
  },
  "colors.prose.quote": {
    "value": "var(--colors-prose-quote)",
    "variable": "var(--colors-prose-quote)"
  },
  "colors.prose.quoteBorder": {
    "value": "var(--colors-prose-quote-border)",
    "variable": "var(--colors-prose-quote-border)"
  },
  "colors.prose.caption": {
    "value": "var(--colors-prose-caption)",
    "variable": "var(--colors-prose-caption)"
  },
  "colors.prose.kbd": {
    "value": "var(--colors-prose-kbd)",
    "variable": "var(--colors-prose-kbd)"
  },
  "colors.prose.kbdShadow": {
    "value": "var(--colors-prose-kbd-shadow)",
    "variable": "var(--colors-prose-kbd-shadow)"
  },
  "colors.prose.code": {
    "value": "var(--colors-prose-code)",
    "variable": "var(--colors-prose-code)"
  },
  "colors.prose.preCode": {
    "value": "var(--colors-prose-pre-code)",
    "variable": "var(--colors-prose-pre-code)"
  },
  "colors.prose.preBg": {
    "value": "var(--colors-prose-pre-bg)",
    "variable": "var(--colors-prose-pre-bg)"
  },
  "colors.prose.thBorder": {
    "value": "var(--colors-prose-th-border)",
    "variable": "var(--colors-prose-th-border)"
  },
  "colors.prose.tdBorder": {
    "value": "var(--colors-prose-td-border)",
    "variable": "var(--colors-prose-td-border)"
  },
  "colors.bg.canvas": {
    "value": "var(--colors-bg-canvas)",
    "variable": "var(--colors-bg-canvas)"
  },
  "colors.bg.default": {
    "value": "var(--colors-bg-default)",
    "variable": "var(--colors-bg-default)"
  },
  "colors.bg.subtle": {
    "value": "var(--colors-bg-subtle)",
    "variable": "var(--colors-bg-subtle)"
  },
  "colors.bg.muted": {
    "value": "var(--colors-bg-muted)",
    "variable": "var(--colors-bg-muted)"
  },
  "colors.bg.emphasized": {
    "value": "var(--colors-bg-emphasized)",
    "variable": "var(--colors-bg-emphasized)"
  },
  "colors.bg.disabled": {
    "value": "var(--colors-bg-disabled)",
    "variable": "var(--colors-bg-disabled)"
  },
  "colors.bg.surface": {
    "value": "var(--colors-bg-surface)",
    "variable": "var(--colors-bg-surface)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.-4.5": {
    "value": "calc(var(--spacing-4\\.5) * -1)",
    "variable": "var(--spacing-4\\.5)"
  },
  "colors.colorPalette.a1": {
    "value": "var(--colors-color-palette-a1)",
    "variable": "var(--colors-color-palette-a1)"
  },
  "colors.colorPalette.a2": {
    "value": "var(--colors-color-palette-a2)",
    "variable": "var(--colors-color-palette-a2)"
  },
  "colors.colorPalette.a3": {
    "value": "var(--colors-color-palette-a3)",
    "variable": "var(--colors-color-palette-a3)"
  },
  "colors.colorPalette.a4": {
    "value": "var(--colors-color-palette-a4)",
    "variable": "var(--colors-color-palette-a4)"
  },
  "colors.colorPalette.a5": {
    "value": "var(--colors-color-palette-a5)",
    "variable": "var(--colors-color-palette-a5)"
  },
  "colors.colorPalette.a6": {
    "value": "var(--colors-color-palette-a6)",
    "variable": "var(--colors-color-palette-a6)"
  },
  "colors.colorPalette.a7": {
    "value": "var(--colors-color-palette-a7)",
    "variable": "var(--colors-color-palette-a7)"
  },
  "colors.colorPalette.a8": {
    "value": "var(--colors-color-palette-a8)",
    "variable": "var(--colors-color-palette-a8)"
  },
  "colors.colorPalette.a9": {
    "value": "var(--colors-color-palette-a9)",
    "variable": "var(--colors-color-palette-a9)"
  },
  "colors.colorPalette.a10": {
    "value": "var(--colors-color-palette-a10)",
    "variable": "var(--colors-color-palette-a10)"
  },
  "colors.colorPalette.a11": {
    "value": "var(--colors-color-palette-a11)",
    "variable": "var(--colors-color-palette-a11)"
  },
  "colors.colorPalette.a12": {
    "value": "var(--colors-color-palette-a12)",
    "variable": "var(--colors-color-palette-a12)"
  },
  "colors.colorPalette.light.1": {
    "value": "var(--colors-color-palette-light-1)",
    "variable": "var(--colors-color-palette-light-1)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.light.2": {
    "value": "var(--colors-color-palette-light-2)",
    "variable": "var(--colors-color-palette-light-2)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.light.3": {
    "value": "var(--colors-color-palette-light-3)",
    "variable": "var(--colors-color-palette-light-3)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.light.4": {
    "value": "var(--colors-color-palette-light-4)",
    "variable": "var(--colors-color-palette-light-4)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.light.5": {
    "value": "var(--colors-color-palette-light-5)",
    "variable": "var(--colors-color-palette-light-5)"
  },
  "colors.colorPalette.5": {
    "value": "var(--colors-color-palette-5)",
    "variable": "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.light.6": {
    "value": "var(--colors-color-palette-light-6)",
    "variable": "var(--colors-color-palette-light-6)"
  },
  "colors.colorPalette.6": {
    "value": "var(--colors-color-palette-6)",
    "variable": "var(--colors-color-palette-6)"
  },
  "colors.colorPalette.light.7": {
    "value": "var(--colors-color-palette-light-7)",
    "variable": "var(--colors-color-palette-light-7)"
  },
  "colors.colorPalette.7": {
    "value": "var(--colors-color-palette-7)",
    "variable": "var(--colors-color-palette-7)"
  },
  "colors.colorPalette.light.8": {
    "value": "var(--colors-color-palette-light-8)",
    "variable": "var(--colors-color-palette-light-8)"
  },
  "colors.colorPalette.8": {
    "value": "var(--colors-color-palette-8)",
    "variable": "var(--colors-color-palette-8)"
  },
  "colors.colorPalette.light.9": {
    "value": "var(--colors-color-palette-light-9)",
    "variable": "var(--colors-color-palette-light-9)"
  },
  "colors.colorPalette.9": {
    "value": "var(--colors-color-palette-9)",
    "variable": "var(--colors-color-palette-9)"
  },
  "colors.colorPalette.light.10": {
    "value": "var(--colors-color-palette-light-10)",
    "variable": "var(--colors-color-palette-light-10)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.light.11": {
    "value": "var(--colors-color-palette-light-11)",
    "variable": "var(--colors-color-palette-light-11)"
  },
  "colors.colorPalette.11": {
    "value": "var(--colors-color-palette-11)",
    "variable": "var(--colors-color-palette-11)"
  },
  "colors.colorPalette.light.12": {
    "value": "var(--colors-color-palette-light-12)",
    "variable": "var(--colors-color-palette-light-12)"
  },
  "colors.colorPalette.12": {
    "value": "var(--colors-color-palette-12)",
    "variable": "var(--colors-color-palette-12)"
  },
  "colors.colorPalette.light.a1": {
    "value": "var(--colors-color-palette-light-a1)",
    "variable": "var(--colors-color-palette-light-a1)"
  },
  "colors.colorPalette.light.a2": {
    "value": "var(--colors-color-palette-light-a2)",
    "variable": "var(--colors-color-palette-light-a2)"
  },
  "colors.colorPalette.light.a3": {
    "value": "var(--colors-color-palette-light-a3)",
    "variable": "var(--colors-color-palette-light-a3)"
  },
  "colors.colorPalette.light.a4": {
    "value": "var(--colors-color-palette-light-a4)",
    "variable": "var(--colors-color-palette-light-a4)"
  },
  "colors.colorPalette.light.a5": {
    "value": "var(--colors-color-palette-light-a5)",
    "variable": "var(--colors-color-palette-light-a5)"
  },
  "colors.colorPalette.light.a6": {
    "value": "var(--colors-color-palette-light-a6)",
    "variable": "var(--colors-color-palette-light-a6)"
  },
  "colors.colorPalette.light.a7": {
    "value": "var(--colors-color-palette-light-a7)",
    "variable": "var(--colors-color-palette-light-a7)"
  },
  "colors.colorPalette.light.a8": {
    "value": "var(--colors-color-palette-light-a8)",
    "variable": "var(--colors-color-palette-light-a8)"
  },
  "colors.colorPalette.light.a9": {
    "value": "var(--colors-color-palette-light-a9)",
    "variable": "var(--colors-color-palette-light-a9)"
  },
  "colors.colorPalette.light.a10": {
    "value": "var(--colors-color-palette-light-a10)",
    "variable": "var(--colors-color-palette-light-a10)"
  },
  "colors.colorPalette.light.a11": {
    "value": "var(--colors-color-palette-light-a11)",
    "variable": "var(--colors-color-palette-light-a11)"
  },
  "colors.colorPalette.light.a12": {
    "value": "var(--colors-color-palette-light-a12)",
    "variable": "var(--colors-color-palette-light-a12)"
  },
  "colors.colorPalette.dark.1": {
    "value": "var(--colors-color-palette-dark-1)",
    "variable": "var(--colors-color-palette-dark-1)"
  },
  "colors.colorPalette.dark.2": {
    "value": "var(--colors-color-palette-dark-2)",
    "variable": "var(--colors-color-palette-dark-2)"
  },
  "colors.colorPalette.dark.3": {
    "value": "var(--colors-color-palette-dark-3)",
    "variable": "var(--colors-color-palette-dark-3)"
  },
  "colors.colorPalette.dark.4": {
    "value": "var(--colors-color-palette-dark-4)",
    "variable": "var(--colors-color-palette-dark-4)"
  },
  "colors.colorPalette.dark.5": {
    "value": "var(--colors-color-palette-dark-5)",
    "variable": "var(--colors-color-palette-dark-5)"
  },
  "colors.colorPalette.dark.6": {
    "value": "var(--colors-color-palette-dark-6)",
    "variable": "var(--colors-color-palette-dark-6)"
  },
  "colors.colorPalette.dark.7": {
    "value": "var(--colors-color-palette-dark-7)",
    "variable": "var(--colors-color-palette-dark-7)"
  },
  "colors.colorPalette.dark.8": {
    "value": "var(--colors-color-palette-dark-8)",
    "variable": "var(--colors-color-palette-dark-8)"
  },
  "colors.colorPalette.dark.9": {
    "value": "var(--colors-color-palette-dark-9)",
    "variable": "var(--colors-color-palette-dark-9)"
  },
  "colors.colorPalette.dark.10": {
    "value": "var(--colors-color-palette-dark-10)",
    "variable": "var(--colors-color-palette-dark-10)"
  },
  "colors.colorPalette.dark.11": {
    "value": "var(--colors-color-palette-dark-11)",
    "variable": "var(--colors-color-palette-dark-11)"
  },
  "colors.colorPalette.dark.12": {
    "value": "var(--colors-color-palette-dark-12)",
    "variable": "var(--colors-color-palette-dark-12)"
  },
  "colors.colorPalette.dark.a1": {
    "value": "var(--colors-color-palette-dark-a1)",
    "variable": "var(--colors-color-palette-dark-a1)"
  },
  "colors.colorPalette.dark.a2": {
    "value": "var(--colors-color-palette-dark-a2)",
    "variable": "var(--colors-color-palette-dark-a2)"
  },
  "colors.colorPalette.dark.a3": {
    "value": "var(--colors-color-palette-dark-a3)",
    "variable": "var(--colors-color-palette-dark-a3)"
  },
  "colors.colorPalette.dark.a4": {
    "value": "var(--colors-color-palette-dark-a4)",
    "variable": "var(--colors-color-palette-dark-a4)"
  },
  "colors.colorPalette.dark.a5": {
    "value": "var(--colors-color-palette-dark-a5)",
    "variable": "var(--colors-color-palette-dark-a5)"
  },
  "colors.colorPalette.dark.a6": {
    "value": "var(--colors-color-palette-dark-a6)",
    "variable": "var(--colors-color-palette-dark-a6)"
  },
  "colors.colorPalette.dark.a7": {
    "value": "var(--colors-color-palette-dark-a7)",
    "variable": "var(--colors-color-palette-dark-a7)"
  },
  "colors.colorPalette.dark.a8": {
    "value": "var(--colors-color-palette-dark-a8)",
    "variable": "var(--colors-color-palette-dark-a8)"
  },
  "colors.colorPalette.dark.a9": {
    "value": "var(--colors-color-palette-dark-a9)",
    "variable": "var(--colors-color-palette-dark-a9)"
  },
  "colors.colorPalette.dark.a10": {
    "value": "var(--colors-color-palette-dark-a10)",
    "variable": "var(--colors-color-palette-dark-a10)"
  },
  "colors.colorPalette.dark.a11": {
    "value": "var(--colors-color-palette-dark-a11)",
    "variable": "var(--colors-color-palette-dark-a11)"
  },
  "colors.colorPalette.dark.a12": {
    "value": "var(--colors-color-palette-dark-a12)",
    "variable": "var(--colors-color-palette-dark-a12)"
  },
  "colors.colorPalette.fg": {
    "value": "var(--colors-color-palette-fg)",
    "variable": "var(--colors-color-palette-fg)"
  },
  "colors.colorPalette.default": {
    "value": "var(--colors-color-palette-default)",
    "variable": "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.emphasized": {
    "value": "var(--colors-color-palette-emphasized)",
    "variable": "var(--colors-color-palette-emphasized)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--colors-color-palette-muted)",
    "variable": "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.disabled": {
    "value": "var(--colors-color-palette-disabled)",
    "variable": "var(--colors-color-palette-disabled)"
  },
  "colors.colorPalette.outline": {
    "value": "var(--colors-color-palette-outline)",
    "variable": "var(--colors-color-palette-outline)"
  },
  "colors.colorPalette.accent": {
    "value": "var(--colors-color-palette-accent)",
    "variable": "var(--colors-color-palette-accent)"
  },
  "colors.colorPalette.body": {
    "value": "var(--colors-color-palette-body)",
    "variable": "var(--colors-color-palette-body)"
  },
  "colors.colorPalette.heading": {
    "value": "var(--colors-color-palette-heading)",
    "variable": "var(--colors-color-palette-heading)"
  },
  "colors.colorPalette.lead": {
    "value": "var(--colors-color-palette-lead)",
    "variable": "var(--colors-color-palette-lead)"
  },
  "colors.colorPalette.link": {
    "value": "var(--colors-color-palette-link)",
    "variable": "var(--colors-color-palette-link)"
  },
  "colors.colorPalette.bold": {
    "value": "var(--colors-color-palette-bold)",
    "variable": "var(--colors-color-palette-bold)"
  },
  "colors.colorPalette.counter": {
    "value": "var(--colors-color-palette-counter)",
    "variable": "var(--colors-color-palette-counter)"
  },
  "colors.colorPalette.bullet": {
    "value": "var(--colors-color-palette-bullet)",
    "variable": "var(--colors-color-palette-bullet)"
  },
  "colors.colorPalette.hrBorder": {
    "value": "var(--colors-color-palette-hr-border)",
    "variable": "var(--colors-color-palette-hr-border)"
  },
  "colors.colorPalette.quote": {
    "value": "var(--colors-color-palette-quote)",
    "variable": "var(--colors-color-palette-quote)"
  },
  "colors.colorPalette.quoteBorder": {
    "value": "var(--colors-color-palette-quote-border)",
    "variable": "var(--colors-color-palette-quote-border)"
  },
  "colors.colorPalette.caption": {
    "value": "var(--colors-color-palette-caption)",
    "variable": "var(--colors-color-palette-caption)"
  },
  "colors.colorPalette.kbd": {
    "value": "var(--colors-color-palette-kbd)",
    "variable": "var(--colors-color-palette-kbd)"
  },
  "colors.colorPalette.kbdShadow": {
    "value": "var(--colors-color-palette-kbd-shadow)",
    "variable": "var(--colors-color-palette-kbd-shadow)"
  },
  "colors.colorPalette.code": {
    "value": "var(--colors-color-palette-code)",
    "variable": "var(--colors-color-palette-code)"
  },
  "colors.colorPalette.preCode": {
    "value": "var(--colors-color-palette-pre-code)",
    "variable": "var(--colors-color-palette-pre-code)"
  },
  "colors.colorPalette.preBg": {
    "value": "var(--colors-color-palette-pre-bg)",
    "variable": "var(--colors-color-palette-pre-bg)"
  },
  "colors.colorPalette.thBorder": {
    "value": "var(--colors-color-palette-th-border)",
    "variable": "var(--colors-color-palette-th-border)"
  },
  "colors.colorPalette.tdBorder": {
    "value": "var(--colors-color-palette-td-border)",
    "variable": "var(--colors-color-palette-td-border)"
  },
  "colors.colorPalette.canvas": {
    "value": "var(--colors-color-palette-canvas)",
    "variable": "var(--colors-color-palette-canvas)"
  },
  "colors.colorPalette.surface": {
    "value": "var(--colors-color-palette-surface)",
    "variable": "var(--colors-color-palette-surface)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar