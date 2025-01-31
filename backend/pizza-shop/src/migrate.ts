import {PizzaShopApplication} from './application';

export async function migrate(args: string[]) {
  const existingSchema = args.includes('--rebuild') ? 'drop' : 'alter';
  console.log('Migrating schemas (%s existing schema)', existingSchema);

  const app = new PizzaShopApplication();

  // Boot the app (initializing data sources and other components)
  await app.boot();

  // Migrate the schema, including the pizza_shop model
  await app.migrateSchema({
    existingSchema,
    models: ['Pizza'], // Make sure to use the correct model name 'pizza_shop'
  });

  // Connectors usually keep a pool of opened connections,
  // this keeps the process running even after all work is done.
  // We need to exit explicitly.
  process.exit(0);
}

// Start migration process
migrate(process.argv).catch(err => {
  console.error('Cannot migrate database schema', err);
  process.exit(1);
});
