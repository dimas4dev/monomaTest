const cardFormater = (type: string): string => {
    const pokemonTypesToColor: Record<string, string> = {
        bug: "color_bug",
        dark: "color_dark",
        dragon: "color_dragon",
        electric: "color_electric",
        fairy: "color_fairy",
        fighting: "color_fighting",
        fire: "color_fire",
        flying: "color_flying",
        ghost: "color_ghost",
        grass: "color_grass",
        ground: "color_ground",
        ice: "color_ice",
        normal: "color_normal",
        poison: "color_poison",
        psychic: "color_psychic",
        rock: "color_rock",
        steel: "color_steel",
        water: "color_water",
    };

    return pokemonTypesToColor[type] || "color_default";
};

export default cardFormater;
