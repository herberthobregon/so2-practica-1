package src

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"os/exec"
)

func GetRAM(c *fiber.Ctx) error {
	str, err := RunCMD("echo", "Hola!")
	if err != nil{
		return c.Status(500).JSON(fiber.Map{
			"error": "Ha fallado la ejecución de la terminal",
		})
	}
	// To-Do Parse
	fmt.Println(str)


	// DEMO DATA
	return c.JSON(fiber.Map{
		"ram": 0,
		"ram_usage": 0,
		"ram_percent": 0,
	})
}

func GetCPU(c *fiber.Ctx) error {
	str, err := RunCMD("echo", "Hola!")
	if err != nil{
		return c.Status(500).JSON(fiber.Map{
			"error": "Ha fallado la ejecución de la terminal",
		})
	}

	// To-Do Parse
	fmt.Println(str)

	// DEMO DATA
	return c.JSON(fiber.Map{
		"process_total": 0,
		"process_running": 0,
		"process_sleeping": 0,
		"process_stopped": 0,
		"process_zombie": 0,
		"process": []fiber.Map{
			{
				"pid": 1,
				"name": "Google Chrome",
				"user": "root",
				"state": "running",
				"ram": 0.12,
			},
		},
	})
}

func RunCMD(name string, args ...string) (string, error) {
	cmd := exec.Command(name, args...)
	stdout, err := cmd.Output()
	if err != nil {
		fmt.Println(err.Error())
		return "", err
	}
	return string(stdout), nil
}
