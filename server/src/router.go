package src

import (
	"encoding/json"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"os/exec"
	"strings"
)

type RAM struct {
	RAMTotal        int `json:"ram_total"`
	RAMUsage        int `json:"ram_usage"`
	RAMUsagePercent int `json:"ram_usage_percent"`
}
type Process struct {
	PID        int    `json:"pid"`
	Name       string `json:"name"`
	User       int    `json:"user"`
	State      int    `json:"state"`
	RAM        int    `json:"ram"`
	PIDParent  int    `json:"pid_parent"`
	ParentName string `json:"parent_name"`
}

func GetRAM(c *fiber.Ctx) error {
	path := "/proc/mem_grupo1"
	if GetEnv("NODE_ENV", "") == "dev" {
		path = "test/ram.json"
	}
	str, err := RunCMD("cat", path)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Ha fallado la ejecución de la terminal",
		})
	}
	ram := new(RAM)
	// To-Do Parse
	//fmt.Println(str)
	err = json.Unmarshal([]byte(str), &ram)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "no se ha podido parsear el String a JSON",
		})
	}

	return c.JSON(fiber.Map{
		"ram":         ram.RAMTotal,
		"ram_usage":   ram.RAMUsage,
		"ram_percent": ram.RAMUsagePercent,
	})
}

func GetCPU(c *fiber.Ctx) error {
	path := "/proc/proces_grupo1"
	if GetEnv("NODE_ENV", "") == "dev" {
		path = "test/process.json"
	}
	str, err := RunCMD("cat", path)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Ha fallado la ejecución de la terminal",
		})
	}

	// To-Do Parse
	//fmt.Println(str)
	process := new([]Process)
	err = json.Unmarshal([]byte(strings.Replace(str, ",]", "]", -1)), &process)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "no se ha podido parsear el String a JSON",
		})
	}

	// DEMO DATA
	return c.JSON(fiber.Map{
		"process_total":    len(*process),
		"process_running":  0,
		"process_sleeping": 0,
		"process_stopped":  0,
		"process_zombie":   0,
		"process":          process,
	})
}

func KillProcess(c *fiber.Ctx) error {
	_, err := RunCMD("kill", "-9", c.Params("pid", "0"))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Ha fallado la ejecución de la terminal",
		})
	}

	// DEMO DATA
	return c.JSON(fiber.Map{
		"kill": c.Params("pid", "0"),
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
