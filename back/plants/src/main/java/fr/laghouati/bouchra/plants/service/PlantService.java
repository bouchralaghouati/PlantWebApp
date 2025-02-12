package fr.laghouati.bouchra.plants.service;

import fr.laghouati.bouchra.plants.plant.Plant;
import fr.laghouati.bouchra.plants.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j

public class PlantService {
    @Autowired
    private final PlantRepository plantRepository;
    public List<Plant> getAllPlants(){
        return plantRepository.findAll();
    }

    public Plant getPlantById(UUID id){
        Optional<Plant> optionalPlant = plantRepository.findById(id);
        if(optionalPlant.isPresent()){
            return optionalPlant.get();
        }
        log.info("Plant with id: {} doesn't exist", id);
        return null;
    }

    public Plant savePlant (Plant plant){
        plant.setCreatedAt(LocalDateTime.now());
        plant.setUpdatedAt(LocalDateTime.now());
        Plant savedPlant = plantRepository.save(plant);

        log.info("Plant with id: {} saved successfully", plant.getId());
        return savedPlant;
    }

    public Plant updatePlant (Plant plant) {
        Optional<Plant> existingPlant = plantRepository.findById(plant.getId());
        if (existingPlant.isPresent()) {
            plant.setCreatedAt(existingPlant.get().getCreatedAt());
            plant.setUpdatedAt(LocalDateTime.now());

            Plant updatedPlant = plantRepository.save(plant);
            log.info("Plant with id: {} updated successfully", plant.getId());
            return updatedPlant;
        } else  {
                log.info("Plant with id: {} not found, update failed", plant.getId());
                return null;
        }
    }

    public void deletePlantById (UUID id) {
        plantRepository.deleteById(id);
    }

}

