onEvent('tags.items', event => {
    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
    global.tfcFoodSeeds.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.tfcSaplings.forEach(i => event.add('quark:seed_pouch_holdable', i));
    global.waxingAgents.forEach(i => event.add('tfc:waxing_agents', i));
    global.tfcWoodTypes.forEach(i => event.add('quark:seed_pouch_holdable', `dttfc:${i}_seed`));
    global.tfcWoodTypes.forEach(i => event.add('tfc:flammable_lumber', `tfc:wood/lumber/${i}`));
    global.anvilRockTypes.forEach(i => event.add('tfc:rock_magma_blocks', `tfc:rock/magma/${i}`));
    event.add('tfc:rock_magma_blocks', 'minecraft:magma_block')

    global.tfcRockTypes.forEach(i => event.add('tfc:brick', `tfc:brick/${i}`));

    event.add('tfc:placed_item_whitelist', 'kubejs:unfired_flower_box')
    event.add('tfc:unfired_pottery', 'kubejs:unfired_flower_box')

    event.add('tfc:ash', 'supplementaries:ash')
    event.add('tfc:ash', 'tfc:powder/wood_ash')

    event.add('forge:dusts/wood', 'immersiveengineering:sawdust')

    event.remove('create:windmill_sails', 'create:sail_frame')
    event.remove('forge:storage_blocks/gold', 'minecraft:gold_block')

    event.remove('forge:ingots/brick', 'supplementaries:ash_brick')

    global.stoneToolsTypes.forEach(i => {
        let result = i.split("/")
        let stone = result[0]
        event.add('tfc:pickaxes', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:usable_on_tool_rack', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:placed_item_whitelist', `kubejs:stone/pickaxe/${stone}`)

        event.add('tfc:stone_pickaxes', `kubejs:stone/pickaxe/${stone}`)
        event.add('tfc:stone_axes', `tfc:stone/axe/${stone}`)
        event.add('tfc:stone_shovels', `tfc:stone/shovel/${stone}`)
        event.add('tfc:stone_knives', `tfc:stone/knife/${stone}`)
        event.add('tfc:stone_javelins', `tfc:stone/javelin/${stone}`)
        event.add('tfc:stone_hoes', `tfc:stone/hoe/${stone}`)
        event.add('tfc:stone_hammers', `tfc:stone/hammer/${stone}`)
    });

    global.tfcWoodTypes.forEach(i => event.remove('forge:chests/wooden', `everycomp:q/tfc/${i}_chest`));
    global.vanillaWoodTypes.forEach(i => {
        let log = 'log'
        if(i == 'crimson' || i == 'warped') {
            log = 'stem'
        }
        let wood = 'wood'
        if(i == 'crimson' || i == 'warped') {
            wood = 'hyphae'
        }

        global.woodTagList.forEach(tag => {
            event.remove(tag, `minecraft:${i}_${log}`)
            event.remove(tag, `minecraft:stripped_${i}_${log}`)
            event.remove(tag, `minecraft:${i}_${wood}`)
            event.remove(tag, `minecraft:stripped_${i}_${wood}`)
        })

        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${wood}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${wood}`)

        event.remove('create:vanilla_stripped_logs', `minecraft:stripped_${i}_${log}`)

        event.remove('forge:chests/wooden', `quark:${i}_chest`)
        event.remove('forge:chests/wooden', `quark:${i}_trapped_chest`)

        event.remove(`minecraft:planks`, `minecraft:${i}_planks`)
    });
    global.quarkWoodTypes.forEach(i => {
        event.remove('forge:chests/wooden', `quark:${i}_chest`)
        event.remove('forge:chests/wooden', `quark:${i}_trapped_chest`)
    });

})

onEvent('tags.blocks', event => {
    event.remove('create:windmill_sails', 'create:sail_frame')

    global.vanillaWoodTypes.forEach(i => {
        let log = 'log'
        if(i == 'crimson' || i == 'warped') {
            log = 'stem'
        }
        let wood = 'wood'
        if(i == 'crimson' || i == 'warped') {
            wood = 'hyphae'
        }
        global.woodTagList.forEach(tag => {
            event.remove(tag, `minecraft:${i}_${log}`)
            event.remove(tag, `minecraft:stripped_${i}_${log}`)
            event.remove(tag, `minecraft:${i}_${wood}`)
            event.remove(tag, `minecraft:stripped_${i}_${wood}`)
        })

        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${log}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:${i}_${wood}`)
        event.remove(`minecraft:${i}_${log}s`, `minecraft:stripped_${i}_${wood}`)

        event.remove('create:vanilla_stripped_logs', `minecraft:stripped_${i}_${log}`)

        event.remove(`minecraft:planks`, `minecraft:${i}_planks`)

    });

    global.tfcGrass.forEach(i => event.add('minecraft:dirt', i));
})

onEvent('tags.fluids', event => {
    
    global.fluidsToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        event.add(`forge:${name}`, `kubejs:${name}`)
    });

    global.gasesToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        event.add(`forge:${name}`, `kubejs:flowing_${name}`)
    });

});
