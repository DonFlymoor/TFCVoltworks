// priority: 0

onEvent('recipes', event => {

  global.addMixingFluidItemEFluid('tfc:powder/flux', 'minecraft:water', 500, 'tfc:limewater', 500)
  global.addMixingFluidItemEItem('tfc:papyrus_strip', 'minecraft:water', 200, 'tfc:soaked_papyrus_strip')

  event.remove({ output: 'tfc:fire_bricks', type: 'minecraft:crafting_shaped' })
  event.shaped('2x tfc:fire_bricks', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'tfc:ceramic/fire_brick',
    A: 'tfc:mortar'
  }).id('tfc:fire_bricks')

  event.remove({ output: 'tfc:alabaster/bricks', type: 'minecraft:crafting_shaped' })
  event.shaped('4x tfc:alabaster/bricks', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'tfc:alabaster_brick',
    A: 'tfc:mortar'
  }).id('tfc:alabaster/bricks')

  event.remove({ output: 'tfc:wooden_bucket', type: 'minecraft:crafting_shaped' })
  event.shaped('tfc:wooden_bucket', [
    'S S',
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('tfc:wooden_bucket')

  event.remove({ output: 'minecraft:bowl', type: 'minecraft:crafting_shaped' })
  event.shaped('minecraft:bowl', [
    'S S',
    ' S '
  ], {
    S: '#tfc:lumber'
  }).id('minecraft:bowl')



})