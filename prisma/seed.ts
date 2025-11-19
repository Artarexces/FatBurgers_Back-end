import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Limpiar base de datos existente
  await prisma.orderItem.deleteMany().catch(() => {});
  await prisma.order.deleteMany().catch(() => {});
  await prisma.menuItem.deleteMany().catch(() => {});

  // Crear items de menú de ejemplo
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Hamburguesa Clásica',
        description: 'Carne 100% vacuna, lechuga, tomate, cebolla y salsa especial',
        price: 12.99,
        category: 'hamburguesas',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
      },
      {
        name: 'Hamburguesa Doble con Queso',
        description: 'Doble carne, doble queso cheddar, bacon crujiente',
        price: 16.99,
        category: 'hamburguesas',
        image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop',
      },
      {
        name: 'Hamburguesa Veggie',
        description: 'Medallón de garbanzos y vegetales, aguacate, rúcula',
        price: 14.99,
        category: 'hamburguesas',
        image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?w=400&h=300&fit=crop',
      },
      {
        name: 'Hamburguesa Picante',
        description: 'Carne picada especial, jalapeños, queso pepper jack, salsa picante',
        price: 15.99,
        category: 'hamburguesas',
        image: 'https://images.unsplash.com/photo-1525059696034-4967a7290042?w=400&h=300&fit=crop',
      },
      {
        name: 'Papas Fritas Clásicas',
        description: 'Porción de papas fritas crujientes con sal marina',
        price: 4.99,
        category: 'acompanamientos',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
      },
      {
        name: 'Papas Cheddar & Bacon',
        description: 'Papas fritas con queso cheddar derretido y bacon',
        price: 7.99,
        category: 'acompanamientos',
        image: 'https://images.unsplash.com/photo-1642540673653-c8c60e5be9c9?w=400&h=300&fit=crop',
      },
      {
        name: 'Onion Rings',
        description: 'Aros de cebolla empanizados crocantes',
        price: 5.99,
        category: 'acompanamientos',
        image: 'https://images.unsplash.com/photo-1633796684518-5cef4f5c8ccb?w=400&h=300&fit=crop',
      },
      {
        name: 'Ensalada César',
        description: 'Lechuga romana, croutons, parmesano y aderezo césar',
        price: 8.99,
        category: 'acompanamientos',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
      },
      {
        name: 'Coca Cola 500ml',
        description: 'Gaseosa Coca Cola botella 500ml',
        price: 3.99,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop',
      },
      {
        name: 'Agua Mineral 500ml',
        description: 'Agua mineral sin gas',
        price: 2.99,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1548839149-851a64d0da60?w=400&h=300&fit=crop',
      },
      {
        name: 'Cerveza Artesanal',
        description: 'Cerveza rubia artesanal pint 500ml',
        price: 6.99,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&h=300&fit=crop',
      },
      {
        name: 'Limonada Natural',
        description: 'Limonada fresca con menta y jengibre',
        price: 4.99,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1523371683702-309cffa2f6c1?w=400&h=300&fit=crop',
      }
    ],
  });

  console.log(`✅ ${(await prisma.menuItem.count())} items de menú creados`);
  console.log('🎉 Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
