onEvent('item.registry', event => {

    //event.create('firewood').maxStackSize(64)

    global.tfcWoodTypes.forEach(i => {
        event.create(`${i}_firewood`).maxStackSize(64)
        event.create(`stripped_${i}_firewood`).maxStackSize(64)
    });

    global.tfcGlobalMetalTypes.forEach(i => {
        event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1)
        event.create('transition_' + i + '_block', 'create:sequenced_assembly').maxStackSize(1)
    });    
    
    event.create('transition_bloom', 'create:sequenced_assembly').maxStackSize(1);

    event.create('transition_high_carbon_steel', 'create:sequenced_assembly').maxStackSize(1);

    event.create('unfired_flower_box').maxStackSize(64);

    event.create('treated_stick').maxStackSize(32);

    event.create('pitch_treated_lumber').maxStackSize(64);

    event.create('pitch_treated_stick').maxStackSize(32);

    event.create('pitch_treated_waterwheel_segment').maxStackSize(16);

    event.create('ash_treated_lumber').maxStackSize(64);

    event.create('ash_treated_stick').maxStackSize(32);

    event.create('creosote_treated_lumber').maxStackSize(64);

    event.create('brick/bloomery_brick').maxStackSize(64);

    global.scrapingItems.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));    
    
    global.tfcGemTypes.forEach(i => event.create('transition_' + i, 'create:sequenced_assembly').maxStackSize(1));    

    global.colors.forEach(i => event.create('transition_' + i + '_block', 'create:sequenced_assembly').maxStackSize(1));    

    global.framesTypes.forEach(i => event.create('frame/' + i).maxStackSize(64));    

    global.stoneToolsTypes.forEach(i => {
        let result = i.split('/')
        let stone = result[0]
        let damage = result[1]
        event.create('stone/pickaxe/' + stone, 'pickaxe').tier('wood').maxDamage(damage)
        event.create('stone/pickaxe_head/' + stone).maxStackSize(64)
    });

})