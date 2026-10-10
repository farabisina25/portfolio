export const wheelGamble = {
  name: "Gamble Wheel",
  videoId: "0culSJfXpaw",
  githubUrl: "https://github.com/farabisina25/Vertigo_Case",
  summary:
    "A push-your-luck wheel-of-fortune game for Android, built with Unity 2021.3 LTS and C#. Spin for growing rewards, risk a bomb that wipes the run, and cash out only on bomb-free zones.",
  overview: [
    "In every zone the player spins a wheel full of rewards and one bomb. Rewards grow as the player advances, and hitting the bomb loses everything collected so far.",
    "Every 5th zone is a bomb-free silver safe zone, and every 30th is a bomb-free golden super zone with special rewards. The player can cash out only in these zones, and only while the wheel is not spinning.",
    "After hitting a bomb, the player can pay in-game currency to revive and continue. The APK is available from GitHub Releases.",
  ],
  zonesIntro:
    "Zone type decides whether the wheel can contain a bomb and whether the player is allowed to leave with their rewards.",
  zones: [
    {
      name: "Bronze",
      detail: "Rewards plus one bomb. Hitting the bomb wipes everything collected so far.",
    },
    {
      name: "Silver safe zone",
      detail: "Every 5th zone. No bomb, so the player can cash out.",
    },
    {
      name: "Golden super zone",
      detail: "Every 30th zone. Special rewards, no bomb, and cash-out is allowed.",
    },
  ],
  architecture: [
    "Game rules live in a core layer of plain C# with no dependency on Unity. The UI is built on the MVP (Model–View–Presenter) pattern.",
    "Views are passive components that only report user actions through C# events. The presenter talks to them through interfaces, and all dependencies are wired in a single composition root.",
    "Assembly Definitions separate the layers, so the compiler enforces the direction of dependencies. Wheel slices, zone progression, and rewards are ScriptableObjects that can be edited without writing code.",
  ],
  animationIntro: "All animation is done with DOTween.",
  animations: [
    "Wheel spin, with the indicator ticking past each slice",
    "Rewards flying from the wheel into the rewards panel",
    "Popup transitions and card shake effects",
  ],
  ui: "Text uses TextMeshPro. Sprite Atlases reduce draw calls, and 9-sliced sprites keep images from stretching. With the Canvas Scaler in Expand mode and proper anchoring, the UI displays correctly on 20:9, 16:9, and 4:3 screens.",
  tools: [
    {
      name: "Scene builder",
      detail: "Sets up the scene from code through SerializedObject.",
    },
    {
      name: "Hierarchy validator",
      detail:
        "Checks UI rules such as naming, unneeded raycasts and masks, and button events assigned in the editor.",
    },
    {
      name: "Capture tool",
      detail: "Takes screenshots at 20:9, 16:9, and 4:3.",
    },
    {
      name: "Build tool",
      detail: "One-click IL2CPP / ARM64 APK build.",
    },
  ],
  quality:
    "NUnit unit and EditMode tests cover the game rules and the presenter flow. The code uses interfaces, Action-based events, IReadOnlyList for read-only data, IDisposable helpers, fields encapsulated with [SerializeField], and buttons wired from code in OnValidate. The repository is public and versioned with Git LFS.",
  stack: [
    "Unity 2021.3 LTS",
    "C#",
    "DOTween",
    "TextMeshPro",
    "Sprite Atlas",
    "ScriptableObjects",
    "MVP",
    "NUnit",
    "IL2CPP",
    "Git LFS",
  ],
  features: [
    "Push-your-luck spins with rewards that grow each zone",
    "A bomb that wipes collected rewards",
    "Bomb-free silver safe zones every 5th zone",
    "Golden super zones every 30th zone",
    "Cash-out only on safe zones, and never while the wheel is spinning",
    "Paid revive after a bomb",
    "Unity-free C# core with an MVP presentation layer",
    "Editor tools for scene setup, UI validation, screenshots, and APK builds",
  ],
} as const;
