export const actionRpg = {
  name: "Legend of the Forest",
  videoId: "Qnb2fV45Fnw",
  githubUrl: "https://github.com/farabisina25/LegendOfTheForest",
  summary:
    "A 2D top-down action RPG built in Unity 6. Three weapons, a stamina-based dash, enemies with distinct attack patterns, destructible props, and fade transitions between scenes.",
  overview: [
    "You move between a town and combat areas, swap weapons, spend stamina to dash, and fight enemies that behave differently.",
    "The player moves with WASD and aims the weapon with the mouse. Left click attacks; Space dashes. A dash spends one stamina cell, and cells refill over time or from stamina globes. Health comes from heart pickups. Gold drops from enemies and breakable objects.",
  ],
  weaponsIntro:
    "All three weapons are defined as ScriptableObjects and swapped from the hotbar (1–3).",
  weapons: [
    {
      name: "Sword",
      detail: "Melee. Up and down swings with slash VFX.",
    },
    {
      name: "Bow",
      detail: "Ranged arrows.",
    },
    {
      name: "Staff",
      detail: "Ranged magic laser.",
    },
  ],
  enemiesIntro:
    "Enemies share one AI state machine (roam / attack). The attack itself is swapped through an interface, so each enemy keeps its own behavior without duplicating the AI.",
  enemies: [
    {
      name: "Blue Slime",
      detail: "Closes the distance and deals contact damage.",
    },
    {
      name: "Ghost",
      detail: "Fires burst, spread, and oscillating projectiles.",
    },
    {
      name: "Grape",
      detail: "Arcing projectiles with a shadow and a splatter on impact.",
    },
  ],
  world: [
    "Crates, barrels, and bushes can drop gold, health, or stamina when broken.",
    "Hits apply knockback, a hit flash, and screen shake. When health reaches zero, a death animation plays and the player returns to town (Scene 1).",
    "Three scenes are linked with fades. The player and UI persist across scene loads.",
  ],
  technical:
    "Written in C#. The project uses the URP 2D renderer, a Cinemachine follow camera, the New Input System, Tilemap with Rule Tiles, Animator, and uGUI / TextMeshPro. Weapon and enemy behavior sit behind IWeapon and IEnemy. Shared systems are singletons.",
  controls: [
    { input: "WASD", action: "Move" },
    { input: "Mouse", action: "Aim weapon" },
    { input: "Left click", action: "Attack" },
    { input: "Space", action: "Dash (spends stamina)" },
    { input: "1 / 2 / 3", action: "Sword / Bow / Staff" },
  ],
  stack: [
    "Unity 6 (6000.3)",
    "C#",
    "URP 2D",
    "Cinemachine 3",
    "Input System",
    "2D Tilemap & Rule Tiles",
    "Animator",
    "ScriptableObjects",
    "uGUI / TextMeshPro",
    "Physics2D",
  ],
  features: [
    "Top-down movement, mouse-aimed weapons, and a stamina-based dash",
    "Three weapons with cooldown, damage, and range stored on ScriptableObjects",
    "Hotbar inventory",
    "Health bar, stamina cells, and a gold counter",
    "Slime (melee), Ghost (projectile patterns), and Grape (arcing shots)",
    "Destructible props with randomized loot",
    "Knockback, hit flash, screen shake, and death that returns you to town",
    "Three scenes with fades and a persistent player",
    "Parallax, plus background objects that fade as you walk in front of them",
  ],
} as const;
