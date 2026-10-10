export const swordman = {
  name: "Swordman",
  videoId: "OHZ-3Nr9CoI",
  githubUrl: "https://github.com/farabisina25/LoopGames_Case",
  summary:
    "A top-down 2D arena brawler for four fighters. Pick swords off the ground; they orbit you and hit on contact. There is no attack button.",
  overview: [
    "Sword against sword breaks both blades. Sword against body deals one of three hit points, and a kill pays a flat three-sword bounty.",
    "Walking scrapes the sand overlay so the tilemap underneath shows through. The game is a mobile-first arena, shown here as a vertical gameplay clip.",
  ],
  combatIntro:
    "Combat does not use an attack button. Blades are kinematic trigger colliders, including full kinematic contacts so swords can clash with each other.",
  combat: [
    {
      name: "Pickup",
      detail: "Swords on the ground are collected and then orbit the fighter.",
    },
    {
      name: "Blade clash",
      detail: "Sword versus sword destroys both blades.",
    },
    {
      name: "Body hit",
      detail: "A hit on a body costs one of three hit points.",
    },
    {
      name: "Bounty",
      detail: "A kill pays a flat reward of three swords.",
    },
  ],
  movement:
    "Player and AI share the same movement path: both write MoveInput, and a shared Rigidbody2D velocity moves the body. Input comes from the Input System, with WASD and the arrow keys.",
  arena:
    "The arena is a weighted-random Tilemap, tiled fence sprites, and BoxCollider2D walls. Pickup and VFX objects go through a small object pool.",
  enemies:
    "Enemies run a five-state FSM: wander, seek, chase, attack, and flee. The state is re-decided a few times per second, with separation and wall avoidance.",
  sand:
    "The sand trail is a ScratchCard mask driven from gameplay. World position is converted to screen space, then to a texture coordinate. Body and blades use different brush widths.",
  feedback:
    "Hits use pooled sprite bursts, runtime-generated PCM one-shots, and camera shake. UI is uGUI: HUD, nametags, and a result screen. Rendering is URP 2D, with Light2D and sorting layers.",
  tools:
    "An editor tool rebuilds the scene, prefabs, and generated textures: the sand overlay, recolored bodies, and brushes.",
  stack: [
    "Unity 6",
    "C#",
    "URP 2D",
    "Physics2D",
    "Tilemap",
    "Input System",
    "uGUI",
  ],
  features: [
    "Four-fighter top-down arena",
    "Orbiting swords that hit on contact, with no attack button",
    "Blade clashes that break both swords",
    "Three hit points, and a three-sword kill bounty",
    "Shared Rigidbody2D movement for the player and the AI",
    "Five-state enemy FSM with separation and wall avoidance",
    "Sand overlay scratched away to reveal the tilemap",
    "Object pool for pickups and VFX",
    "Pooled bursts, generated one-shot audio, and camera shake",
    "Editor tool that rebuilds the scene, prefabs, and textures",
  ],
} as const;
