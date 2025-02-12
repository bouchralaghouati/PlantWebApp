package fr.laghouati.bouchra.plants.controller;

import fr.laghouati.bouchra.plants.plant.Plant;
import fr.laghouati.bouchra.plants.service.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/plant/v1")
@RequiredArgsConstructor
@Validated
public class PlantController {
    private final PlantService plantService;
    /**
     * This method is called when a GET request is made
     * URL: localhost:8080/plant/v1/
     * Purpose: Fetches all the plants in the plant table
     * @return List of Plants
     */
    @GetMapping("/")
    public ResponseEntity<List<Plant>> getAllPlants(){
        return ResponseEntity.ok().body(plantService.getAllPlants());
    }
    /**
     * This method is called when a POST request is made
     * URL: localhost:8080/plant/v1/
     * Purpose: Save a Plant entity
     * @param plant - Request body is an Plant entity
     * @return Saved Plant entity
     */
    @PostMapping("/")
    public ResponseEntity<Plant> savePlant(@RequestBody Plant plant)
    {
        return ResponseEntity.ok().body(plantService.savePlant(plant));
    }

    /**
     * This method is called when a PUT request is made
     * URL: localhost:8080/plant/v1/
     * Purpose: Update a Plant entity
     * @param plant - Plant entity to be updated
     * @return Updated Plant
     */
    @PutMapping("/")
    public ResponseEntity<Plant> updatePlant(@RequestBody Plant plant)
    {
        return ResponseEntity.ok().body(plantService.updatePlant(plant));
    }

    /**
     * This method is called when a PUT request is made
     * URL: localhost:8080/plant/v1/1 (or any other id)
     * Purpose: Delete a Plant entity
     * @param id - plant's id to be deleted
     * @return a String message indicating plant record has been deleted successfully
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePlantById(@PathVariable UUID id)
    {
        plantService.deletePlantById(id);
        return ResponseEntity.ok().body("Deleted plant successfully");
    }
}
