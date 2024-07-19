const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bannerData = [
  {
    name: "Illuminating Lightning",
    img: "/banner-images/Illuminating_Lightning_2024-06-05.webp",
    type: "CHARACTER",
    releaseDate: "2024-06-05T00:00:00Z",
    version: "4.7",
  },
  {
    name: "Caution in Confidence",
    img: "/banner-images/Caution_in_Confidence_2024-06-05.webp",
    type: "CHARACTER",
    releaseDate: "2024-06-05T00:00:00Z",
    version: "4.7",
  },
  {
    name: "Epitome Invocation",
    img: "/banner-images/Epitome_Invocation_2024-06-05.webp",
    type: "WEAPON",
    releaseDate: "2024-06-05T00:00:00Z",
    version: "4.7",
  },
  {
    name: "Wanderlust Invocation",
    img: "/banner-images/Wanderlust_Invocation_2020-11-11.webp",
    type: "STANDARD",
    releaseDate: "2020-09-28T00:00:00Z",
    version: "1.0",
  },
];

const characterData = [
  {
    name: "Dehya",
    fullImg: "/char-images/Dehya_Wish.webp",
    iconImg: "/char-logos/Dehya_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Diluc",
    fullImg: "/char-images/Diluc_Wish.webp",
    iconImg: "/char-logos/Diluc_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Jean",
    fullImg: "/char-images/Jean_Wish.webp",
    iconImg: "/char-logos/Jean_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Keqing",
    fullImg: "/char-images/Keqing_Wish.webp",
    iconImg: "/char-logos/Keqing_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Mona",
    fullImg: "/char-images/Mona_Wish.webp",
    iconImg: "/char-logos/Mona_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Qiqi",
    fullImg: "/char-images/Qiqi_Wish.webp",
    iconImg: "/char-logos/Qiqi_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Tighnari",
    fullImg: "/char-images/Tighnari_Wish.webp",
    iconImg: "/char-logos/Tighnari_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Amber",
    fullImg: "/char-images/Amber_Wish.webp",
    iconImg: "/char-logos/Amber_Icon.webp",
    limited: false,
    standardLocked: true,
    rarity: "SR",
  },
  {
    name: "Barbara",
    fullImg: "/char-images/Barbara_Wish.webp",
    iconImg: "/char-logos/Barbara_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Beidou",
    fullImg: "/char-images/Beidou_Wish.webp",
    iconImg: "/char-logos/Beidou_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Bennett",
    fullImg: "/char-images/Bennett_Wish.webp",
    iconImg: "/char-logos/Bennett_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Candace",
    fullImg: "/char-images/Candace_Wish.webp",
    iconImg: "/char-logos/Candace_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Charlotte",
    fullImg: "/char-images/Charlotte_Wish.webp",
    iconImg: "/char-logos/Charlotte_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Chevreuse",
    fullImg: "/char-images/Chevreuse_Wish.webp",
    iconImg: "/char-logos/Chevreuse_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Chongyun",
    fullImg: "/char-images/Chongyun_Wish.webp",
    iconImg: "/char-logos/Chongyun_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Collei",
    fullImg: "/char-images/Collei_Wish.webp",
    iconImg: "/char-logos/Collei_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Diona",
    fullImg: "/char-images/Diona_Wish.webp",
    iconImg: "/char-logos/Diona_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Dori",
    fullImg: "/char-images/Dori_Wish.webp",
    iconImg: "/char-logos/Dori_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Faruzan",
    fullImg: "/char-images/Faruzan_Wish.webp",
    iconImg: "/char-logos/Faruzan_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Fischl",
    fullImg: "/char-images/Fischl_Wish.webp",
    iconImg: "/char-logos/Fischl_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Freminet",
    fullImg: "/char-images/Freminet_Wish.webp",
    iconImg: "/char-logos/Freminet_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Gaming",
    fullImg: "/char-images/Gaming_Wish.webp",
    iconImg: "/char-logos/Gaming_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Gorou",
    fullImg: "/char-images/Gorou_Wish.webp",
    iconImg: "/char-logos/Gorou_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Kaeya",
    fullImg: "/char-images/Kaeya_Wish.webp",
    iconImg: "/char-logos/Kaeya_Icon.webp",
    limited: false,
    standardLocked: true,
    rarity: "SR",
  },
  {
    name: "Kaveh",
    fullImg: "/char-images/Kaveh_Wish.webp",
    iconImg: "/char-logos/Kaveh_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Kirara",
    fullImg: "/char-images/Kirara_Wish.webp",
    iconImg: "/char-logos/Kirara_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Kujou Sara",
    fullImg: "/char-images/Kujou_Sara_Wish.webp",
    iconImg: "/char-logos/Kujou_Sara_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Kuki Shinobu",
    fullImg: "/char-images/Kuki_Shinobu_Wish.webp",
    iconImg: "/char-logos/Kuki_Shinobu_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Layla",
    fullImg: "/char-images/Layla_Wish.webp",
    iconImg: "/char-logos/Layla_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Lisa",
    fullImg: "/char-images/Lisa_Wish.webp",
    iconImg: "/char-logos/Lisa_Icon.webp",
    limited: false,
    standardLocked: true,
    rarity: "SR",
  },
  {
    name: "Lynette",
    fullImg: "/char-images/Lynette_Wish.webp",
    iconImg: "/char-logos/Lynette_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Mika",
    fullImg: "/char-images/Mika_Wish.webp",
    iconImg: "/char-logos/Mika_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Ningguang",
    fullImg: "/char-images/Ningguang_Wish.webp",
    iconImg: "/char-logos/Ningguang_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Noelle",
    fullImg: "/char-images/Noelle_Wish.webp",
    iconImg: "/char-logos/Noelle_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Razor",
    fullImg: "/char-images/Razor_Wish.webp",
    iconImg: "/char-logos/Razor_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Rosaria",
    fullImg: "/char-images/Rosaria_Wish.webp",
    iconImg: "/char-logos/Rosaria_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Sayu",
    fullImg: "/char-images/Sayu_Wish.webp",
    iconImg: "/char-logos/Sayu_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Sethos",
    fullImg: "/char-images/Sethos_Wish.webp",
    iconImg: "/char-logos/Sethos_Icon.webp",
    limited: true,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Shikanoin Heizou",
    fullImg: "/char-images/Shikanoin_Heizou_Wish.webp",
    iconImg: "/char-logos/Shikanoin_Heizou_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Clorinde",
    fullImg: "/char-images/Clorinde_Wish.webp",
    iconImg: "/char-logos/Clorinde_Icon.webp",
    limited: true,
    standardLocked: false,
    rarity: "SSR",
  },
  {
    name: "Sucrose",
    fullImg: "/char-images/Sucrose_Wish.webp",
    iconImg: "/char-logos/Sucrose_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Thoma",
    fullImg: "/char-images/Thoma_Wish.webp",
    iconImg: "/char-logos/Thoma_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Xiangling",
    fullImg: "/char-images/Xiangling_Wish.webp",
    iconImg: "/char-logos/Xiangling_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Xingqiu",
    fullImg: "/char-images/Xingqiu_Wish.webp",
    iconImg: "/char-logos/Xingqiu_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Xinyan",
    fullImg: "/char-images/Xinyan_Wish.webp",
    iconImg: "/char-logos/Xinyan_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Yanfei",
    fullImg: "/char-images/Yanfei_Wish.webp",
    iconImg: "/char-logos/Yanfei_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Yaoyao",
    fullImg: "/char-images/Yaoyao_Wish.webp",
    iconImg: "/char-logos/Yaoyao_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Yun Jin",
    fullImg: "/char-images/Yun_Jin_Wish.webp",
    iconImg: "/char-logos/Yun_Jin_Icon.webp",
    limited: false,
    standardLocked: false,
    rarity: "SR",
  },
  {
    name: "Alhaitham",
    fullImg: "/char-images/Alhaitham_Wish.webp",
    iconImg: "/char-logos/Alhaitham_Icon.webp",
    limited: true,
    standardLocked: false,
    rarity: "SSR",
  },
];

const weaponData = [
  {
    name: "Amos' Bow",
    fullImg: "/weapon-images/Weapon_Amos'_Bow_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Amos'_Bow.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Aquila Favionia",
    fullImg: "/weapon-images/Weapon_Aquila_Favonia_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Aquila_Favonia.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Lost Prayer to The Sacred Winds",
    fullImg: "/weapon-images/Weapon_Lost_Prayer_to_the_Sacred_Winds_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Lost_Prayer_to_the_Sacred_Winds.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Primordial Jade Winged-Spear",
    fullImg: "/weapon-images/Weapon_Primordial_Jade_Winged-Spear_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Primordial_Jade_Winged-Spear.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Skyward Atlas",
    fullImg: "/weapon-images/Weapon_Skyward_Atlas_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Skyward_Atlas.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Skyward Blade",
    fullImg: "/weapon-images/Weapon_Skyward_Blade_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Skyward_Blade.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Skyward Harp",
    fullImg: "/weapon-images/Weapon_Skyward_Harp_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Skyward_Harp.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Skyward Pride",
    fullImg: "/weapon-images/Weapon_Skyward_Pride_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Skyward_Pride.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Skyward Spine",
    fullImg: "/weapon-images/Weapon_Skyward_Spine_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Skyward_Spine.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Wolf's Gravestone",
    fullImg: "/weapon-images/Weapon_Wolf's_Gravestone_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Wolf's_Gravestone.webp",
    limited: false,
    rarity: "SSR",
  },
  {
    name: "Dragon's Bane",
    fullImg: "/weapon-images/Weapon_Dragon's_Bane_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Dragon's_Bane.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Eye of Perception",
    fullImg: "/weapon-images/Weapon_Eye_of_Perception_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Eye_of_Perception.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Favonius Codex",
    fullImg: "/weapon-images/Weapon_Favonius_Codex_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Favonius_Codex.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Favonius Greatsword",
    fullImg: "/weapon-images/Weapon_Favonius_Greatsword_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Favonius_Greatsword.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Favonius Lance",
    fullImg: "/weapon-images/Weapon_Favonius_Lance_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Favonius_Lance.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Favonius Sword",
    fullImg: "/weapon-images/Weapon_Favonius_Sword_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Favonius_Sword.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Favonius Warbow",
    fullImg: "/weapon-images/Weapon_Favonius_Warbow_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Favonius_Warbow.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Lion's Roar",
    fullImg: "/weapon-images/Weapon_Lion's_Roar_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Lion's_Roar.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Rainslasher",
    fullImg: "/weapon-images/Weapon_Rainslasher_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Rainslasher.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Rust",
    fullImg: "/weapon-images/Weapon_Rust_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Rust.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Sacrificial Bow",
    fullImg: "/weapon-images/Weapon_Sacrificial_Bow_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Sacrificial_Bow.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Sacrificial Fragments",
    fullImg: "/weapon-images/Weapon_Sacrificial_Fragments_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Sacrificial_Fragments.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Sacrificial Greatsword",
    fullImg: "/weapon-images/Weapon_Sacrificial_Greatsword_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Sacrificial_Greatsword.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Sacrificial Sword",
    fullImg: "/weapon-images/Weapon_Sacrificial_Sword_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Sacrificial_Sword.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "The Bell",
    fullImg: "/weapon-images/Weapon_The_Bell_Wish.webp",
    iconImg: "/weapon-logos/Weapon_The_Bell.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "The Flute",
    fullImg: "/weapon-images/Weapon_The_Flute_Wish.webp",
    iconImg: "/weapon-logos/Weapon_The_Flute.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "The Stringless",
    fullImg: "/weapon-images/Weapon_The_Stringless_Wish.webp",
    iconImg: "/weapon-logos/Weapon_The_Stringless.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "The Widsith",
    fullImg: "/weapon-images/Weapon_The_Widsith_Wish.webp",
    iconImg: "/weapon-logos/Weapon_The_Widsith.webp",
    limited: false,
    rarity: "SR",
  },
  {
    name: "Black Tassel",
    fullImg: "/weapon-images/Weapon_Black_Tassel_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Black_Tassel.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Bloodtainted Greatsword",
    fullImg: "/weapon-images/Weapon_Bloodtainted_Greatsword_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Bloodtainted_Greatsword.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Cool Steel",
    fullImg: "/weapon-images/Weapon_Cool_Steel_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Cool_Steel.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Debate Club",
    fullImg: "/weapon-images/Weapon_Debate_Club_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Debate_Club.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Emerald Orb",
    fullImg: "/weapon-images/Weapon_Emerald_Orb_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Emerald_Orb.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Ferrous Shadow",
    fullImg: "/weapon-images/Weapon_Ferrous_Shadow_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Ferrous_Shadow.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Harbinger of Dawn",
    fullImg: "/weapon-images/Weapon_Harbinger_of_Dawn_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Harbinger_of_Dawn.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Magic Guide",
    fullImg: "/weapon-images/Weapon_Magic_Guide_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Magic_Guide.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Raven Bow",
    fullImg: "/weapon-images/Weapon_Raven_Bow_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Raven_Bow.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Sharpshooter's Oath",
    fullImg: "/weapon-images/Weapon_Sharpshooter's_Oath_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Sharpshooter's_Oath.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Skyrider Sword",
    fullImg: "/weapon-images/Weapon_Skyrider_Sword_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Skyrider_Sword.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Slingshot",
    fullImg: "/weapon-images/Weapon_Slingshot_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Slingshot.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Thrilling Tales of Dragon Slayer",
    fullImg:
      "/weapon-images/Weapon_Thrilling_Tales_of_Dragon_Slayers_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Thrilling_Tales_of_Dragon_Slayers.webp",
    limited: false,
    rarity: "R",
  },
  {
    name: "Absolution",
    fullImg: "/weapon-images/Weapon_Absolution_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Absolution.webp",
    limited: true,
    rarity: "SSR",
  },
  {
    name: "Light of Foliar Incision",
    fullImg: "/weapon-images/Weapon_Light_of_Foliar_Incision_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Light_of_Foliar_Incision.webp",
    limited: true,
    rarity: "SSR",
  },
  {
    name: "Lithic Spear",
    fullImg: "/weapon-images/Weapon_Lithic_Spear_Wish.webp",
    iconImg: "/weapon-logos/Weapon_Lithic_Spear.webp",
    limited: true,
    rarity: "SR",
  },
];

// ADD CHAR AND WEAPON ID HERE
const commonSSRCharId = [1, 2, 3, 4, 5, 6, 7];

const commonNonSSRCharId = [
  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 29, 31,
  32, 33, 34, 35, 36, 37, 39, 41, 42, 43, 44, 45, 46, 47, 48,
];

const commonSSRWeaponId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const commonNonSSRWeaponId = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
];

const commonCharBannerItem = [
  ...commonNonSSRCharId.map((item) => ({ charId: item })),
  ...commonSSRCharId.map((item) => ({ charId: item })),
  ...commonNonSSRWeaponId.map((item) => ({ weaponId: item })),
];

const commonWeaponBannerItem = [
  ...commonNonSSRCharId.map((item) => ({ charId: item })),
  ...commonNonSSRWeaponId.map((item) => ({ weaponId: item })),
  ...commonSSRWeaponId.map((item) => ({ weaponId: item })),
];

// ADD CHAR BANNER ID HERE
const charBannerList = [1, 2, 4];

// ADD WEAPON BANNER ID HERE
const weaponBannerList = [3];

// Custom FN
function addMapItem(bannerIdArray, itemIdArray) {
  const arr = [];
  for (let b_id of bannerIdArray) {
    for (let itemObj of itemIdArray) {
      const newItemObj = { ...itemObj, bannerId: b_id };
      arr.push(newItemObj);
    }
  }
  return arr;
}

const allCharbannerItemData = addMapItem(charBannerList, commonCharBannerItem);
const allWeaponbannerItemData = addMapItem(
  weaponBannerList,
  commonWeaponBannerItem
);

const standardLockedBannerItemData = [
  {
    bannerId: 4,
    charId: 8,
  },
  {
    bannerId: 4,
    charId: 24,
  },
  {
    bannerId: 4,
    charId: 30,
  },
];

const limitedBannerItemData = [
  // Char
  {
    bannerId: 1,
    charId: 40,
  },
  {
    bannerId: 1,
    charId: 38,
  },
  {
    bannerId: 2,
    charId: 38,
  },
  {
    bannerId: 2,
    charId: 49,
  },
  // Weapon
  {
    bannerId: 3,
    weaponId: 42,
  },
  {
    bannerId: 3,
    weaponId: 43,
  },
  {
    bannerId: 3,
    weaponId: 44,
  },
];

const bannerItemData = [
  ...allCharbannerItemData,
  ...allWeaponbannerItemData,
  ...standardLockedBannerItemData,
  ...limitedBannerItemData,
];

const run = async () => {
  await prisma.banner.createMany({ data: bannerData });
  await prisma.character.createMany({ data: characterData });
  await prisma.weapon.createMany({ data: weaponData });
  await prisma.bannerItem.createMany({ data: bannerItemData });
  await prisma.bannerItem.updateMany({
    data: { rateUp: true },
    where: {
      OR: [
        { character: { name: "Clorinde" } },
        { character: { name: "Alhaitham" } },
        { character: { name: "Sethos" } },
      ],
    },
  });
  await prisma.bannerItem.updateMany({
    data: { rateUp: true },
    where: {
      OR: [
        {
          AND: [
            { character: { name: "Bennett" } },
            { banner: { type: "CHARACTER" } },
          ],
        },
        {
          AND: [
            { character: { name: "Thoma" } },
            { banner: { type: "CHARACTER" } },
          ],
        },
      ],
    },
  });
  await prisma.bannerItem.updateMany({
    data: { rateUp: true },
    where: {
      OR: [
        { weapon: { name: "Light of Foliar Incision" } },
        { weapon: { name: "Absolution" } },
      ],
    },
  });
  await prisma.bannerItem.updateMany({
    data: { rateUp: true },
    where: {
      OR: [
        {
          AND: [
            { weapon: { name: "Sacrificial Greatsword" } },
            { banner: { type: "WEAPON" } },
          ],
        },
        {
          AND: [
            { weapon: { name: "Sacrificial Sword" } },
            { banner: { type: "WEAPON" } },
          ],
        },
        {
          AND: [
            { weapon: { name: "The Stringless" } },
            { banner: { type: "WEAPON" } },
          ],
        },
        {
          AND: [
            { weapon: { name: "The Widsith" } },
            { banner: { type: "WEAPON" } },
          ],
        },
        {
          AND: [
            { weapon: { name: "Lithic Spear" } },
            { banner: { type: "WEAPON" } },
          ],
        },
      ],
    },
  });
};

run();
