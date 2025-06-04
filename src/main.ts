import "reflect-metadata"; // Enables TypeScript decorators (required by TypeORM)
import { AppDataSource } from "./config/index"; // Import database configuration
import app from "./app"; // Import Express app

async function bootstrap() {
    try {
        // Initialize database connection
        await AppDataSource.instance.init();

        // Synchronize database schema
        await AppDataSource.instance.sync();

        // Start the Express server
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

        console.log("Application started successfully!");
    } catch (error) {
        // Handle startup errors
        console.error("Error starting the application:", error);
        process.exit(1);
    }
}

// Start the application
bootstrap();
