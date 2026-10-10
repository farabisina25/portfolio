export const elementCrash = {
  name: "Element Crash",
  videoId: "YnG2MRLdEYI",
  githubUrl: "https://github.com/farabisina25/DreamGames_CaseStudy",
  summary:
    "A Royal Match–style match puzzle built in Unity 6 (6000.3) and C#, with ten JSON-driven levels, a move limit, and obstacle goals.",
  overview: [
    "The player taps connected groups of same-colored cubes and clears them within a move limit. Clearing every obstacle on the level wins. Running out of moves opens a fail popup with retry.",
    "Progress is saved between sessions, and the main menu resumes the current level.",
  ],
  specialsIntro:
    "Group size decides what the match becomes. Adjacent specials combine into larger explosions that can chain.",
  specials: [
    {
      name: "Group of 4–5",
      detail: "Becomes a rocket that sweeps a row or a column.",
    },
    {
      name: "Group of 6+",
      detail: "Becomes TNT that clears a square.",
    },
    {
      name: "Adjacent specials",
      detail: "Combine into a larger explosion that can chain.",
    },
  ],
  obstacles: [
    {
      name: "Stone",
      detail: "Breaks only when hit by a special.",
    },
    {
      name: "Vase",
      detail: "Falls with the board and has two hit points.",
    },
    {
      name: "Chalice box",
      detail: "A 2×2 box that opens, then the chalices inside are collected.",
    },
  ],
  architecture: [
    "Simulation stays separate from presentation. GridModel, Cell, and a polymorphic GridItem hierarchy (CubeItem, RocketItem, TntItem, and the obstacle types) hold the board as plain C# objects.",
    "GroupFinder flood-fills matches with a queue and a hash set. FallController resolves gravity and spawns. LevelGoalTracker checks the win conditions.",
    "GameplayController runs each turn as a coroutine so blasts, combos, falls, and the end state play in order. GridView and ItemVisual only render sprites and motion.",
    "Levels are TextAsset JSON files parsed with JsonUtility into a typed grid. Art and level references live on a ScriptableObject loaded from Resources. The level scene, canvas, and HUD are built at runtime by a bootstrap instead of hand-placed prefabs.",
  ],
  unity:
    "Orthographic 2D rendering uses SpriteRenderer. The HUD, fail popup, and celebration are uGUI (Canvas, CanvasScaler, Image, Text). Board taps and UI use the new Input System. SceneManager handles the menu and level flow. PlayerPrefs stores the last unlocked level. Editor scripting (MenuItem, AssetDatabase, and a small EditorWindow) assembles scenes and assets.",
  csharp:
    "The rules stay in the model and the view stays thin: abstract classes and virtual methods, switch expressions and pattern matching, generic obstacle counts, IEquatable structs for grid positions, value types for damage, and expression-bodied members.",
  stack: [
    "Unity 6 (6000.3)",
    "C#",
    "SpriteRenderer",
    "uGUI",
    "Input System",
    "JsonUtility",
    "ScriptableObjects",
    "PlayerPrefs",
    "Editor scripting",
  ],
  features: [
    "Ten JSON-driven levels with a move limit",
    "Tap groups of matching cubes to clear them",
    "Rockets from groups of four or five, TNT from six or more",
    "Combined specials that chain into larger blasts",
    "Stones, two-hit vases, and 2×2 chalice boxes",
    "Win by clearing every obstacle; fail popup and retry when moves run out",
    "Saved progress and a main menu that resumes the current level",
    "Plain C# board model, with views that only render",
    "Runtime bootstrap for the level scene, canvas, and HUD",
  ],
} as const;
