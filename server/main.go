package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"log"
	"os"
	"sopes2-practica1/src"
)

func getenv(key, fallback string) string {
	value := os.Getenv(key)
	if len(value) == 0 {
		return fallback
	}
	return value
}

func main() {
	app := fiber.New()
	app.Use(compress.New())

	// GET /
	app.Get("/ram", src.GetRAM)
	app.Get("/cpu", src.GetCPU)


	p := ":" + getenv("PORT", "3000")
	fmt.Println(p)

	log.Fatal(app.Listen(":" + getenv("PORT", "3000")))

}