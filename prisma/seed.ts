import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Muscle Groups
  const muscleGroups = await Promise.all([
    prisma.muscleGroup.upsert({
      where: { name: 'Chest' },
      update: {},
      create: { name: 'Chest' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Back' },
      update: {},
      create: { name: 'Back' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Shoulders' },
      update: {},
      create: { name: 'Shoulders' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Biceps' },
      update: {},
      create: { name: 'Biceps' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Triceps' },
      update: {},
      create: { name: 'Triceps' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Legs' },
      update: {},
      create: { name: 'Legs' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Glutes' },
      update: {},
      create: { name: 'Glutes' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Core' },
      update: {},
      create: { name: 'Core' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Calves' },
      update: {},
      create: { name: 'Calves' },
    }),
    prisma.muscleGroup.upsert({
      where: { name: 'Forearms' },
      update: {},
      create: { name: 'Forearms' },
    }),
  ]);

  // Equipment
  const equipment = await Promise.all([
    prisma.equipment.upsert({
      where: { name: 'Barbell' },
      update: {},
      create: { name: 'Barbell' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Dumbbell' },
      update: {},
      create: { name: 'Dumbbell' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Cable Machine' },
      update: {},
      create: { name: 'Cable Machine' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Pull-up Bar' },
      update: {},
      create: { name: 'Pull-up Bar' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Bench' },
      update: {},
      create: { name: 'Bench' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Resistance Band' },
      update: {},
      create: { name: 'Resistance Band' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Kettlebell' },
      update: {},
      create: { name: 'Kettlebell' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Smith Machine' },
      update: {},
      create: { name: 'Smith Machine' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Leg Press Machine' },
      update: {},
      create: { name: 'Leg Press Machine' },
    }),
    prisma.equipment.upsert({
      where: { name: 'Bodyweight' },
      update: {},
      create: { name: 'Bodyweight' },
    }),
  ]);

  const [
    chest,
    back,
    shoulders,
    biceps,
    triceps,
    legs,
    glutes,
    core,
    calves,
    forearms,
  ] = muscleGroups;
  const [
    barbell,
    dumbbell,
    cable,
    pullupBar,
    bench,
    band,
    kettlebell,
    smith,
    legPress,
    bodyweight,
  ] = equipment;

  // Exercises (10 real exercises)
  const exercises = [
    {
      slug: 'barbell-bench-press',
      name: 'Barbell Bench Press',
      description:
        'Lie flat on a bench and press a barbell from chest to full arm extension. The foundational compound movement for building chest mass and strength.',
      difficulty: 'intermediate',
      muscleGroupId: chest.id,
      equipmentId: barbell.id,
    },
    {
      slug: 'pull-up',
      name: 'Pull-Up',
      description:
        'Hang from a pull-up bar with an overhand grip and pull your body up until your chin clears the bar. An excellent bodyweight exercise for back width and arm strength.',
      difficulty: 'intermediate',
      muscleGroupId: back.id,
      equipmentId: pullupBar.id,
    },
    {
      slug: 'barbell-squat',
      name: 'Barbell Back Squat',
      description:
        'Place a barbell across your upper traps, brace your core, and squat until thighs are parallel to the floor. The king of lower-body compound movements.',
      difficulty: 'intermediate',
      muscleGroupId: legs.id,
      equipmentId: barbell.id,
    },
    {
      slug: 'overhead-press',
      name: 'Overhead Press',
      description:
        'Press a barbell from shoulder height to full lockout overhead while standing. A primary exercise for building shoulder mass and pressing strength.',
      difficulty: 'intermediate',
      muscleGroupId: shoulders.id,
      equipmentId: barbell.id,
    },
    {
      slug: 'dumbbell-curl',
      name: 'Dumbbell Bicep Curl',
      description:
        'Stand holding dumbbells at your sides and curl them to shoulder height with a supinated grip. The classic isolation exercise for bicep development.',
      difficulty: 'beginner',
      muscleGroupId: biceps.id,
      equipmentId: dumbbell.id,
    },
    {
      slug: 'tricep-pushdown',
      name: 'Cable Tricep Pushdown',
      description:
        'Attach a straight bar to a high cable pulley and push it down to full extension while keeping elbows at your sides. Isolates all three heads of the tricep.',
      difficulty: 'beginner',
      muscleGroupId: triceps.id,
      equipmentId: cable.id,
    },
    {
      slug: 'romanian-deadlift',
      name: 'Romanian Deadlift',
      description:
        'Hold a barbell at hip height and hinge forward by pushing hips back, lowering the bar along your legs until you feel a deep hamstring stretch.',
      difficulty: 'intermediate',
      muscleGroupId: glutes.id,
      equipmentId: barbell.id,
    },
    {
      slug: 'plank',
      name: 'Plank',
      description:
        'Hold a rigid horizontal body position supported by forearms and toes. Builds isometric core strength and spinal stability with no equipment needed.',
      difficulty: 'beginner',
      muscleGroupId: core.id,
      equipmentId: bodyweight.id,
    },
    {
      slug: 'standing-calf-raise',
      name: 'Standing Calf Raise',
      description:
        'Stand on the edge of a step or platform and raise your heels as high as possible by pushing through the balls of your feet. Targets the gastrocnemius for calf size.',
      difficulty: 'beginner',
      muscleGroupId: calves.id,
      equipmentId: bodyweight.id,
    },
    {
      slug: 'farmers-carry',
      name: "Farmer's Carry",
      description:
        'Pick up heavy dumbbells or kettlebells and walk a set distance while maintaining an upright posture. Builds grip strength, forearm endurance, and full-body stability.',
      difficulty: 'beginner',
      muscleGroupId: forearms.id,
      equipmentId: kettlebell.id,
    },
  ];

  for (const exercise of exercises) {
    await prisma.exercise.upsert({
      where: { slug: exercise.slug },
      update: {},
      create: exercise,
    });
  }

  console.log(
    'Seeded 10 muscle groups, 10 equipment records, and 10 exercises.',
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
